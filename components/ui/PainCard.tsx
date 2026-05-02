interface PainCardProps {
  /** SVG icon — passed as a ReactNode so colours are set at the call site */
  icon: React.ReactNode;
  title: string;
  body: string;
  quote: string;
  /** Additional reveal delay class, e.g. "reveal-delay-1" */
  delayClass?: string;
}

export default function PainCard({
  icon,
  title,
  body,
  quote,
  delayClass = "",
}: PainCardProps) {
  return (
    <div
      className={`pain-card pain-card-hover reveal ${delayClass} rounded border p-8 transition-[background,border-color] duration-250`}
    >
      {/* Icon + Heading row */}
      <div className="flex items-center justify-between gap-3.5 mb-3">
        <h3 className="font-display text-[1.08rem] font-bold text-parchment-light tracking-[0.01em] leading-tight">
          {title}
        </h3>
        <div className="w-9 h-9 shrink-0">{icon}</div>
      </div>

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
