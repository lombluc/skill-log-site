"use client";
import BasePage from "../../../components/BasePage";
import { sendEmail } from "../actions";

export default function ContactPage() {
  return (
    <BasePage>
      <div className="min-h-screen">
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

          <form
            action={async (formData) => {
              const res = await sendEmail(formData);
              if (res.success) alert("Message sent!");
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                required
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
                className="w-full font-description mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 hover:tracking-wider active:tracking-tighter transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </BasePage>
  );
}
