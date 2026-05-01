/**
 * NavBar
 * Fixed navigation bar: logo on the left, download CTA on the right.
 * Uses backdrop-blur so it feels glassy over the hero gradient.
 */
export default function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-4 backdrop-blur-[10px] border-b"
      style={{
        background: 'rgba(255, 248, 231, 0.88)',
        borderColor: 'rgba(200, 148, 90, 0.25)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-display text-[1.25rem] font-bold text-wood-brown tracking-[0.02em] no-underline"
      >
        ✦ Skill <span className="text-brand-primary">Log</span>
      </a>

      {/* CTA */}
      <a
        href="https://play.google.com/store"
        className="font-display text-[0.82rem] font-bold tracking-[0.06em] text-white bg-brand-primary px-[1.4rem] py-[0.55rem] rounded no-underline transition-[background,transform] duration-[200ms,150ms] hover:bg-wood-brown hover:-translate-y-px"
      >
        Download Free
      </a>
    </nav>
  );
}
