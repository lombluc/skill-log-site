"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CtaSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="section-cta relative overflow-hidden text-center"
    >
      <div className="max-w-section mx-auto px-8 py-24">
        {/* Eyebrow */}
        <span className="reveal block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-parchment-mid mb-3">
          Start With One Skill
        </span>

        {/* Title */}
        <h2
          className="reveal font-display font-extrabold text-parchment-light leading-[1.2] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
        >
          A Year From Now,
          <br />
          You&apos;ll Want Proof You Started Today.
        </h2>

        {/* Sub-copy */}
        <p
          className="reveal text-[1.05rem] max-w-135 mx-auto mb-12 leading-[1.85]"
          style={{ color: "rgba(242, 221, 176, 0.68)" }}
        >
          Every level-up begins with a single session. Open Skillorum, name your
          first real-life skill, and start the timer. Your progress graph starts
          the moment you do.
        </p>

        {/* CTA buttons */}
        <div className="reveal flex gap-4 justify-center flex-wrap mb-6">
          <a
            href="#"
            className="font-display text-[0.88rem] font-bold tracking-[0.06em] uppercase bg-parchment-light text-dark-ink px-[2.2rem] py-4 rounded no-underline shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-[background,transform] duration-200 hover:bg-cloud-light hover:-translate-y-0.5"
          >
            ↓ Start Tracking Your First Skill
          </a>
        </div>

        {/* Fine print */}
        <p
          className="reveal font-display italic text-[0.72rem] tracking-widest uppercase mt-6"
          style={{ color: "rgba(242,221,176,0.38)" }}
        >
          Free tier, always · All core features included · Your data is private
          and will never be sold
        </p>
      </div>
    </section>
  );
}
