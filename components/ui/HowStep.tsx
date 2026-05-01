interface HowStepProps {
  /** Roman numeral string, e.g. "I", "II", "III", "IV" */
  num: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  /** Optional reveal delay class */
  delayClass?: string;
}

export default function HowStep({
  num,
  icon,
  title,
  body,
  delayClass = "",
}: HowStepProps) {
  return (
    <div className={`how-step reveal ${delayClass} text-center px-4`}>
      {/* Roman numeral */}
      <span className="how-step-num block font-display text-[2.4rem] font-extrabold text-brand-primary leading-none mb-4">
        {num}
      </span>

      {/* Icon */}
      <div className="mx-auto mb-5 block w-fit">{icon}</div>

      {/* Heading */}
      <h3 className="font-display text-[0.98rem] font-bold tracking-[0.04em] text-dark-ink mb-2 uppercase">
        {title}
      </h3>

      {/* Body */}
      <p className="text-[0.9rem] text-text-parchment leading-[1.72]">{body}</p>
    </div>
  );
}
