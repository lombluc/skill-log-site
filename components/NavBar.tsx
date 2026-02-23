export default function NavBar() {
  return (
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
  );
}
