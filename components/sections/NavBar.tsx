"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 py-4 backdrop-blur-[10px] border-b"
      style={{
        background: "rgba(255, 248, 231, 0.88)",
        borderColor: "rgba(200, 148, 90, 0.25)",
      }}
    >
      {/* Logo */}
      <a
        href={path === "/" ? "#" : "/"}
        className="font-display text-[1.25rem] font-bold text-brand-primary tracking-[0.02em] no-underline transition-[color,transform] duration-150 hover:text-wood-brown hover:-translate-y-px"
      >
        <span>Skillorum</span>
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        <a
          href="/blog"
          className={`font-display text-[0.92rem] font-semibold tracking-[0.04em] no-underline transition-[color,transform] duration-150 hover:-translate-y-px ${
            path === "/blog" || path.startsWith("/blog/")
              ? "text-brand-primary border-b-2 border-brand-primary pb-0.5"
              : "text-wood-brown hover:text-brand-primary"
          }`}
        >
          Blog
        </a>

        {/* CTA */}
        <a
          href={path === "/" ? "#" : "/"}
          className="font-display text-[0.82rem] font-bold tracking-[0.06em] text-white bg-brand-primary px-[1.4rem] py-[0.55rem] rounded no-underline transition-[background,transform] duration-[200ms,150ms] hover:bg-wood-brown hover:-translate-y-px"
        >
          Download Free
        </a>
      </div>
    </nav>
  );
}
