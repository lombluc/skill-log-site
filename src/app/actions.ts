"use server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const fromEmail = process.env.CONTACT_FROM_EMAIL!;
const toEmail = process.env.CONTACT_TO_EMAIL!;

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const token = formData.get("token") as string;

  if (!token) return { success: false, error: "Captcha required" };
  if (message.length > 500 || email.length > 100) {
    return { success: false, error: "Message over 500 characters" };
  }

  const verifyFormData = new FormData();
  verifyFormData.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  verifyFormData.append("response", token);

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: verifyFormData,
    },
  );

  const verification = await verifyRes.json();
  console.log("verification", verification);
  if (!verification.success) {
    return { success: false, error: "Invalid captcha. Please try again." };
  }

  const params = {
    Source: fromEmail,
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `From: ${email}\n\nMessage: ${message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New Contact Form Submission",
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return { success: true };
  } catch (error) {
    console.error("SES Error:", error);
    return { success: false };
  }
}
