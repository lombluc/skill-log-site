"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const fromEmail = process.env.CONTACT_FROM_EMAIL!;
const toEmail = process.env.CONTACT_TO_EMAIL!;

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: `Contact Form <${fromEmail}>`, // Resend provides this for testing
      to: toEmail, // Your actual email address
      subject: "New Contact Form Submission",
      text: `From: ${email}\n\nMessage: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
