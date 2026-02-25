export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-cloud-highlight">
      <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          <a
            href="/"
            className="hover:text-blue-800 transition-colors duration-400"
          >
            Skill Log
          </a>
        </div>
        <div className="space-x-6 text-sm font-medium">
          <a href="/#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="/privacy" className="hover:text-blue-600 transition">
            Privacy
          </a>
        </div>
      </nav>
      <div className="bg-slate-50 h-0.5 w-full"></div>
    </div>
  );
}
