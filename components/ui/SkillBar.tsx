interface SkillBarProps {
  name: string;
  level: string;
  /** Fill width expressed as a CSS value, e.g. "82%" */
  fillWidth: string;
  /** Full CSS `background` value for the fill bar. Defaults to brand gradient. */
  gradient?: string;
}

const DEFAULT_GRADIENT = "linear-gradient(90deg, #FFA028, #EA4D58)";

export default function SkillBar({
  name,
  level,
  fillWidth,
  gradient = DEFAULT_GRADIENT,
}: SkillBarProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Skill name */}
      <span className="font-display text-[0.72rem] tracking-widest uppercase text-parchment-light w-20 shrink-0">
        {name}
      </span>

      {/* Track */}
      <div
        className="flex-1 h-2 rounded-full"
        style={{ background: "rgba(255, 255, 255, 0.12)" }}
      >
        {/* Fill */}
        <div
          className="h-full rounded-full transition-[width] duration-1500 ease-[ease]"
          style={{ width: fillWidth, background: gradient }}
        />
      </div>

      {/* Level badge */}
      <span className="font-display text-[0.72rem] text-parchment-mid tracking-[0.05em] w-9 text-right shrink-0">
        {level}
      </span>
    </div>
  );
}
