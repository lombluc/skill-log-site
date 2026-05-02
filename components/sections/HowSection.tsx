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
      width="16"
      height="3"
      rx="1.5"
      fill="#EA4D58"
      opacity="0.32"
    />
    <circle cx="40" cy="38" r="9" fill="#EA4D58" />
    <line
      x1="40"
      y1="33"
      x2="40"
      y2="43"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="35"
      y1="38"
      x2="45"
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
  </svg>
);

const QuestsIcon = (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    <ellipse cx="24" cy="52" rx="11" ry="3.5" fill="#C8945A" opacity="0.35" />
    <line
      x1="24"
      y1="52"
      x2="24"
      y2="9"
      stroke="#C8945A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M24 9 L50 20 L24 31 Z" fill="#EA4D58" opacity="0.9" />
  </svg>
);

/* ── Section ────────────────────────────────────────────────────────── */

export default function HowSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-how relative">
      <div className="section-inner">
        <div className="section-padding-mid">
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
        </div>

        <div className="section-padding-mid">
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
      </div>
    </section>
  );
}
