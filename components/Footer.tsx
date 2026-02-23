export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © 2026 Lucere Acuity Ltd. All rights reserved.
        </p>
        <div className="space-x-4 text-sm text-slate-400">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
