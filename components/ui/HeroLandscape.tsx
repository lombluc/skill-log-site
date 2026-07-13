import Image from "next/image";

const W = 1206;
const H = 2580;

function PhoneFrame({
  src,
  alt,
  width,
  className,
}: {
  src: string;
  alt: string;
  /** Design (desktop) width in px — scales down fluidly on narrow viewports so the row never overflows. */
  width: number;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[26px] border-4 border-dark-ink bg-dark-ink shadow-xl shrink-0 transition-all duration-300 ease-out ${className ?? ""}`}
      style={{
        width: `clamp(${Math.round(width * 0.5)}px, ${((width / 480) * 100).toFixed(2)}vw, ${width}px)`,
        aspectRatio: `${W} / ${H}`,
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-[22px] bg-transparent">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`${width}px`}
        />
      </div>
    </div>
  );
}

function JournalNote() {
  return (
    <div className="relative w-full max-w-100 shrink-0 text-left -rotate-2 transition-transform duration-300 ease-out hover:rotate-0 hover:-translate-y-2">
      {/* Washi-tape pin, holding the note in place */}
      <div
        aria-hidden="true"
        className="absolute -top-3 left-10 h-6 w-20 -rotate-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(200,148,90,0.92), rgba(200,148,90,0.6))",
          boxShadow: "0 2px 5px rgba(61,43,31,0.3)",
        }}
      />
      <div
        className="p-7 rounded-tl-[2.5rem] rounded-tr-[0.75rem] rounded-br-[2rem] rounded-bl-[1rem] shadow-[0_18px_38px_rgba(92,61,30,0.2)]"
        style={{
          background:
            "linear-gradient(160deg, var(--paper-light) 0%, var(--parchment-light) 100%)",
        }}
      >
        <span className="block font-display italic text-[0.72rem] tracking-[0.22em] uppercase text-brand-primary mb-2">
          Immersion
        </span>
        <h3 className="font-display text-[1.2rem] font-bold text-dark-ink mb-2 leading-snug">
          A productivity app that does not look like one
        </h3>
        <p
          className="font-body text-[0.92rem] text-text-parchment leading-[1.75]"
          style={{ opacity: 0.78 }}
        >
          Skillorum is built around hand-drawn backgrounds, parchment
          textures and custom icons. It feels closer to a character journal
          than another corporate dashboard.
        </p>
      </div>
    </div>
  );
}

export default function HeroLandscape() {
  return (
    <div className="hero-landscape pb-8 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
      <div className="flex justify-center items-end">
        <PhoneFrame
          src="/images/tasksPage.png"
          alt="Tasks screen"
          width={120}
          className="-rotate-6 -mr-3 lg:-mr-6 mb-4 opacity-85 hover:rotate-0 hover:-translate-y-4 hover:opacity-100"
        />
        <PhoneFrame
          src="/images/skillsPage.png"
          alt="Skills screen"
          width={150}
          className="z-10 shadow-2xl hover:-translate-y-4 hover:scale-[1.03]"
        />
        <PhoneFrame
          src="/images/workPage.png"
          alt="Work screen"
          width={120}
          className="rotate-6 -ml-3 lg:-ml-6 mb-4 opacity-85 hover:rotate-0 hover:-translate-y-4 hover:opacity-100"
        />
      </div>
      <JournalNote />
    </div>
  );
}
