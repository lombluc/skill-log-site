"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      // Current scroll position
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN: hide if we've scrolled past 100px
        setIsVisible(false);
      } else {
        // Scrolling UP: show
        setIsVisible(true);
      }

      // Remember the current position for the next scroll event
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="sticky top-0 z-50 bg-background-highlight/70 backdrop-blur-md border-b border-slate-200/50">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-blue-600" : "text-slate-600"
                } hover:text-blue-500 transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
