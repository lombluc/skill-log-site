"use server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const contactFormResult = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "1 d"),
  prefix: "contact_limit",
});

const ContactSchema = z.object({
  email: z.email({ error: "Invalid email address" }).max(100),
  message: z.string().min(5, "Message too short").max(500),
  token: z.string().min(1, "Captcha required"),
  honeypot: z.string().max(0, "Bot detected"),
});

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendEmail(formData: FormData) {
  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for")?.split(",")[0] ?? "127.0.0.1";

  const { success, reset } = await contactFormResult.limit(ip);

  if (!success) {
    return {
      success: false,
      error: `Too many messages. You can try again in ${Math.ceil((reset - Date.now()) / 3600000)} hours.`,
    };
  }

  const validatedFields = ContactSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
    token: formData.get("token"),
    honeypot: formData.get("confirm_email"), // This is the honeypot name
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, message, token } = validatedFields.data;

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    },
  );

  const verification = await verifyRes.json();
  if (!verification.success) {
    return { success: false, error: "Security check failed. Please refresh." };
  }

  const params = {
    Source: process.env.CONTACT_FROM_EMAIL!,
    Destination: { ToAddresses: [process.env.CONTACT_TO_EMAIL!] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `New submission from: ${email}\n\n${message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `[Contact Form] Submission from ${email.split("@")[0]}`,
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return { success: true };
  } catch (error) {
    console.error("SES Error:", error);
    return { success: false, error: "Failed to send email. Try again later." };
  }
}
