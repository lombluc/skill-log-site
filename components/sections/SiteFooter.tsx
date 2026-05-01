/**
 * SiteFooter
 * Three-column footer: copyright, nav links, tagline.
 * Server Component — hover colour is handled by the .footer-link CSS class
 * in globals.css so no client JS is required.
 */
export default function SiteFooter() {
  return (
    <footer
      className="py-10 px-8 text-center font-display italic text-[0.72rem] tracking-[0.1em] uppercase"
      style={{
        background: 'var(--wood-dark)',
        color: 'rgba(242, 221, 176, 0.28)',
      }}
    >
      <div className="flex justify-between items-center flex-wrap gap-4 max-w-[900px] mx-auto md:flex-row flex-col text-center">
        <span>✦ Skill Log &copy; 2025</span>

        <span>
          <a href="mailto:contact@skill-log.com" className="footer-link">Contact</a>
          &nbsp;·&nbsp;
          <a href="#" className="footer-link">Privacy Policy</a>
          &nbsp;·&nbsp;
          <a href="#" className="footer-link">Terms</a>
        </span>

        <span>Built for the Life-Gamer</span>
      </div>
    </footer>
  );
}
