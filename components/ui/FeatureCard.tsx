interface FeatureCardProps {
  variant?: "standard" | "wide";
  /** Small italic label above the heading */
  tag: string;
  title: string;
  body: string;
  /** SVG icon — only rendered for standard cards */
  icon?: React.ReactNode;
  /** Right-column content for the wide variant (e.g. SkillBar list) */
  children?: React.ReactNode;
  /** Optional reveal delay class */
  delayClass?: string;
}

export default function FeatureCard({
  variant = "standard",
  tag,
  title,
  body,
  icon,
  children,
  delayClass = "",
}: FeatureCardProps) {
  const isWide = variant === "wide";

  if (isWide) {
    return (
      <div
        className={`feature-card feature-wide reveal ${delayClass} col-span-full grid gap-8 items-center rounded border p-8 transition-[transform,box-shadow,border-color] duration-200`}
        style={{
          gridTemplateColumns: "1fr 1fr",
          borderColor: "rgba(242,221,176,0.12)",
        }}
      >
        {/* Left: text */}
        <div>
          <span className="feature-tag block font-display text-[0.65rem] italic tracking-[0.22em] uppercase text-parchment-mid mb-2">
            {tag}
          </span>
          <h3 className="font-display text-[1.08rem] font-bold text-parchment-light mb-2 tracking-[0.01em]">
            {title}
          </h3>
          <p
            className="text-[0.92rem] leading-[1.78]"
            style={{ color: "rgba(242,221,176,0.68)" }}
          >
            {body}
          </p>
        </div>

        {/* Right: illustration slot */}
        <div className="text-center">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`feature-card reveal ${delayClass} bg-paper-mid border border-paper-dark rounded p-8 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(92,61,30,0.12)] hover:border-parchment-dark transition-[transform,box-shadow,border-color] duration-200`}
    >
      <div className="flex justify-between">
        {/* Tag */}
        <div>
          <span className="feature-tag block font-display text-[0.65rem] italic tracking-[0.22em] uppercase text-brand-primary mb-2">
            {tag}
          </span>

          {/* Heading */}
          <h3 className="font-display text-[1.08rem] font-bold text-dark-ink mb-2 tracking-[0.01em]">
            {title}
          </h3>
        </div>
        {/* Icon */}
        {icon && <div className="w-12 h-12 mb-5">{icon}</div>}
      </div>

      {/* Body */}
      <p className="text-[0.92rem] text-text-paper leading-[1.78]">{body}</p>
    </div>
  );
}
