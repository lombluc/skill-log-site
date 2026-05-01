interface PainCardProps {
  /** Two-digit string, e.g. "01" — rendered as the ghost background number */
  num: string;
  /** SVG icon — passed as a ReactNode so colours are set at the call site */
  icon: React.ReactNode;
  title: string;
  body: string;
  quote: string;
  /** Additional reveal delay class, e.g. "reveal-delay-1" */
  delayClass?: string;
}

export default function PainCard({
  num,
  icon,
  title,
  body,
  quote,
  delayClass = "",
}: PainCardProps) {
  return (
    <div
      className={`pain-card pain-card-hover reveal ${delayClass} rounded border p-8 transition-[background,border-color] duration-250`}
      data-num={num}
    >
      {/* Icon */}
      <div className="w-10.5 h-10.5 mb-5">{icon}</div>

      {/* Heading */}
      <h3 className="font-display text-[1.08rem] font-bold text-parchment-light mb-3 tracking-[0.01em]">
        {title}
      </h3>

      {/* Body */}
      <p
        className="text-[0.92rem] leading-[1.78]"
        style={{ color: "rgba(242,221,176,0.62)" }}
      >
        {body}
      </p>

      {/* Pull-quote strip */}
      <blockquote
        className="mt-5 pl-4 py-3 border-l-2 border-brand-primary rounded-r text-[0.85rem] italic"
        style={{
          background: "rgba(234,77,88,0.08)",
          color: "rgba(242,221,176,0.52)",
        }}
      >
        {quote}
      </blockquote>
    </div>
  );
}
