import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Skill Log
        </div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="/privacy" className="hover:text-blue-600 transition">
            Privacy
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center md:text-left md:flex items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Level Up Your{" "}
            <span className="text-blue-600">Real-World Skills</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            Gamify your routine. Earn XP for focused work, track progress, and
            build your own skills. Start your first quest now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:bg-slate-800 transition shadow-lg">
              Download for iOS
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-semibold hover:border-blue-400 transition shadow-sm">
              Get it on Android
            </button>
          </div>
        </div>

        {/* Mockup Container */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
          <div className="relative w-72 h-145 bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-900">
            {/* The actual image */}
            <div className="relative w-full h-full overflow-hidden rounded-4xl bg-transparent">
              <Image
                src="/images/screenshot.jpg"
                alt="App Screenshot"
                fill
                className="object-cover"
                priority // This ensures the hero image loads instantly
              />
            </div>

            {/* Visual "Speaker" and "Camera" holes for realism */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl"></div>
          </div>
        </div>
      </main>

      {/* Footer / Legal */}
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
    </div>
  );
}
