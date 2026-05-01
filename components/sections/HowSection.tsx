"use client";

import HowStep from "@/components/ui/HowStep";
import { useReveal } from "@/hooks/useReveal";

/* ── Step SVG icons ─────────────────────────────────────────────────── */

const CreateSkillIcon = (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    <rect
      x="8"
      y="12"
      width="44"
      height="38"
      rx="4"
      fill="#F2DDB0"
      stroke="#C8945A"
      strokeWidth="1.5"
    />
    <rect
      x="16"
      y="20"
      width="28"
      height="4"
      rx="2"
      fill="#EA4D58"
      opacity="0.55"
    />
    <rect
      x="16"
      y="28"
      width="20"
      height="3"
      rx="1.5"
      fill="#EA4D58"
      opacity="0.32"
    />
    <circle cx="44" cy="38" r="9" fill="#EA4D58" />
    <line
      x1="44"
      y1="33"
      x2="44"
      y2="43"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="39"
      y1="38"
      x2="49"
      y2="38"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const StartTimerIcon = (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    <circle
      cx="30"
      cy="30"
      r="20"
      fill="#F2DDB0"
      stroke="#C8945A"
      strokeWidth="1.5"
    />
    <path
      d="M30 14 L30 30 L40 30"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="30" cy="30" r="2.5" fill="#EA4D58" />
    <path
      d="M22 8 L22 14"
      stroke="#C8945A"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M38 8 L38 14"
      stroke="#C8945A"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const LevelUpIcon = (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    <rect
      x="8"
      y="28"
      width="10"
      height="20"
      rx="2"
      fill="#7EC8D8"
      opacity="0.65"
    />
    <rect
      x="22"
      y="20"
      width="10"
      height="28"
      rx="2"
      fill="#EA4D58"
      opacity="0.70"
    />
    <rect
      x="36"
      y="12"
      width="10"
      height="36"
      rx="2"
      fill="#FFA028"
      opacity="0.75"
    />
    <path
      d="M8 30 L22 22 L36 15"
      fill="none"
      stroke="#3D2B1F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="3 2"
      opacity="0.35"
    />
  </svg>
);

const QuestsIcon = (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    <path
      d="M12 44 L22 28 L32 36 L42 18 L50 22"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="10" r="5" fill="#FFA028" opacity="0.85" />
    <path
      d="M28 10 L30 5 L32 10 L37 10 L33 13 L35 18 L30 15 L25 18 L27 13 L23 10 Z"
      fill="#FFE7B5"
      transform="scale(0.65) translate(16 8)"
    />
  </svg>
);

/* ── Section ────────────────────────────────────────────────────────── */

export default function HowSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-how relative">
      <div className="section-inner">
        {/* Eyebrow */}
        <span className="reveal block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-brand-primary mb-3">
          The System
        </span>

        {/* Title */}
        <h2
          className="reveal font-display font-bold leading-[1.22] text-dark-ink"
          style={{ fontSize: "clamp(1.65rem, 3.5vw, 2.65rem)" }}
        >
          Four Steps to{" "}
          <em className="text-brand-primary italic">Start Levelling Up</em>{" "}
          Today
        </h2>

        {/* Steps grid */}
        <div
          className="mt-16 relative"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          <HowStep
            num="I"
            icon={CreateSkillIcon}
            title="Create a Skill"
            body={`Name anything you want to level up — "Guitar," "Coding," "Spanish," "Running." If it's worth your time, it's worth tracking.`}
          />
          <HowStep
            num="II"
            icon={StartTimerIcon}
            title="Start the Timer"
            body="Tap once. The XP clock begins. Every minute you put in is real-life experience accumulating on your skill. Time becomes tangible."
            delayClass="reveal-delay-1"
          />
          <HowStep
            num="III"
            icon={LevelUpIcon}
            title="Watch Yourself Level Up"
            body="XP graphs, skill breakdowns, weekly dashboards. Watch your progress become undeniable. Stay motivated — session after session."
            delayClass="reveal-delay-2"
          />
          <HowStep
            num="IV"
            icon={QuestsIcon}
            title="Complete Quests"
            body="Turn goals into structured quests. Break big ambitions into tasks with clear progress. No more vague ambition — just a quest log you're actually completing."
            delayClass="reveal-delay-3"
          />
        </div>
      </div>
    </section>
  );
}
