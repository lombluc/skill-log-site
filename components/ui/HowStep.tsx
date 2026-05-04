interface HowStepProps {
  num: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  delayClass?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function HowStep({
  num,
  icon,
  title,
  body,
  delayClass = "",
  isFirst = false,
  isLast = false,
}: HowStepProps) {
  return (
    <div className={`how-step reveal ${delayClass} flex flex-col items-center`}>
      {/* Timeline connector */}
      <div className="w-full flex items-center">
        <div
          className={`flex-1 h-px ${
            isFirst ? "opacity-0" : "bg-brand-primary/40"
          } hidden lg:block`}
        />
        <div className="w-11 h-11 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
          <span className="font-display text-[1rem] font-extrabold text-white leading-none">
            {num}
          </span>
        </div>
        <div
          className={`flex-1 h-px ${
            isLast ? "opacity-0" : "bg-brand-primary/40"
          } hidden lg:block`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center px-4 pt-7">
        <div className="mb-5">{icon}</div>
        <h3 className="font-display text-[0.98rem] font-bold tracking-[0.04em] text-dark-ink mb-2 uppercase">
          {title}
        </h3>
        <p className="text-[0.9rem] text-text-parchment leading-[1.72]">
          {body}
        </p>
      </div>
    </div>
  );
}
