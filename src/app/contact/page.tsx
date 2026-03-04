"use client";
import { Turnstile } from "@marsidev/react-turnstile";
import BasePage from "../../../components/BasePage";
import { sendEmail } from "../actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function ContactPage() {
  const [token, setToken] = useState("");

  return (
    <BasePage>
      <div className="min-h-screen">
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

          <form
            action={async (formData) => {
              const res = await sendEmail(formData);
              if (res.success) {
                alert("Message sent!");
              }
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                required
                maxLength={100}
                className="w-full font-description mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                maxLength={500}
                className="w-full font-description mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="How can we help?"
              />
            </div>
            <input type="hidden" name="token" value={token} />
            <div className="my-2  self-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => {
                  console.log("token found?");
                  setToken(token);
                }}
              />
            </div>
            <SubmitButton token={token} />
          </form>
        </div>
      </div>
    </BasePage>
  );
}

function SubmitButton({ token }: { token: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={!token || pending}
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-slate-400 transition-all cursor-pointer"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}
