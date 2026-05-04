export default function SiteFooter() {
  return (
    <footer
      className="py-10 px-8 text-center font-display italic text-[0.72rem] tracking-widest"
      style={{
        background: "var(--wood-footer)",
        color: "rgba(242, 221, 176, 0.28)",
      }}
    >
      <div className="flex justify-between items-center gap-6 max-w-6xl mx-auto px-6 md:flex-row flex-col">
        <span>© 2026 Lucere Acuity Ltd. All rights reserved.</span>

        <span>
          <a href="/privacy" className="footer-link">
            Privacy
          </a>
          &nbsp;·&nbsp;
          <a href="/contact" className="footer-link">
            Contact
          </a>
          &nbsp;·&nbsp;
          <a href="/terms" className="footer-link">
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}
