"use client";

import FeatureCard from "@/components/ui/FeatureCard";
import SkillBar from "@/components/ui/SkillBar";
import { useReveal } from "@/hooks/useReveal";

/* ── Standard card icons ─────────────────────────────────────────────
   Each icon is defined here so stroke colours stay next to the card
   that owns them, rather than in a generic icon registry.
──────────────────────────────────────────────────────────────────── */

const GraphIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
    <path
      d="M8 40 L14 26 L22 32 L30 20 L38 12"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="38" cy="12" r="4" fill="#FFA028" opacity="0.85" />
    <rect
      x="6"
      y="8"
      width="36"
      height="32"
      rx="3"
      fill="none"
      stroke="rgba(234,77,88,0.22)"
      strokeWidth="1.2"
    />
  </svg>
);

const TimerIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
    <circle
      cx="24"
      cy="24"
      r="16"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="1.8"
    />
    <path
      d="M24 12 L24 24 L32 30"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="24" cy="24" r="2.5" fill="#EA4D58" />
  </svg>
);

const QuestIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
    <path
      d="M10 12 L16 4 L32 4 L38 12 L38 40 L10 40 Z"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <line
      x1="10"
      y1="12"
      x2="38"
      y2="12"
      stroke="#EA4D58"
      strokeWidth="1.2"
      opacity="0.5"
    />
    <path
      d="M20 22 L24 26 L30 18"
      fill="none"
      stroke="#7EC8D8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="16"
      y1="32"
      x2="32"
      y2="32"
      stroke="rgba(234,77,88,0.28)"
      strokeWidth="1.2"
    />
  </svg>
);

const DashboardIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
    <rect
      x="6"
      y="10"
      width="36"
      height="30"
      rx="3"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="1.8"
    />
    <rect
      x="10"
      y="16"
      width="12"
      height="8"
      rx="1.5"
      fill="rgba(234,77,88,0.18)"
      stroke="#EA4D58"
      strokeWidth="1"
    />
    <rect
      x="26"
      y="16"
      width="12"
      height="8"
      rx="1.5"
      fill="rgba(126,200,216,0.22)"
      stroke="#7EC8D8"
      strokeWidth="1"
    />
    <rect
      x="10"
      y="28"
      width="28"
      height="6"
      rx="1.5"
      fill="rgba(255,160,40,0.15)"
      stroke="#FFA028"
      strokeWidth="1"
    />
    <line
      x1="15"
      y1="4"
      x2="15"
      y2="14"
      stroke="#EA4D58"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="33"
      y1="4"
      x2="33"
      y2="14"
      stroke="#EA4D58"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LedgerIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
    <path
      d="M14 6 L34 6 L42 14 L42 42 L6 42 L6 6 Z"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M34 6 L34 14 L42 14"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="1.2"
      opacity="0.5"
    />
    <line
      x1="14"
      y1="20"
      x2="34"
      y2="20"
      stroke="rgba(234,77,88,0.38)"
      strokeWidth="1.2"
    />
    <line
      x1="14"
      y1="26"
      x2="30"
      y2="26"
      stroke="rgba(234,77,88,0.28)"
      strokeWidth="1.2"
    />
    <line
      x1="14"
      y1="32"
      x2="26"
      y2="32"
      stroke="rgba(234,77,88,0.2)"
      strokeWidth="1.2"
    />
  </svg>
);

const UIIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
    <path
      d="M8 20 Q8 14 14 12 L34 12 Q40 12 40 20 L40 30 Q40 38 34 38 L14 38 Q8 38 8 30 Z"
      fill="none"
      stroke="#EA4D58"
      strokeWidth="1.8"
    />
    <rect
      x="14"
      y="22"
      width="3.5"
      height="10"
      rx="1"
      fill="rgba(234,77,88,0.5)"
    />
    <rect
      x="11"
      y="25"
      width="10"
      height="3.5"
      rx="1"
      fill="rgba(234,77,88,0.5)"
    />
    <circle cx="32" cy="23" r="2.5" fill="rgba(126,200,216,0.6)" />
    <circle cx="37" cy="27" r="2.5" fill="rgba(255,160,40,0.55)" />
    <circle cx="32" cy="31" r="2.5" fill="rgba(222,182,126,0.6)" />
    <circle cx="27" cy="27" r="2.5" fill="rgba(234,77,88,0.5)" />
  </svg>
);

/* ── Skill bar illustration for the wide card ── */
const SkillBarsIllustration = (
  <div className="flex flex-col gap-[0.9rem]">
    <SkillBar name="Coding" level="Lv. 8" fillWidth="82%" />
    <SkillBar
      name="Spanish"
      level="Lv. 5"
      fillWidth="55%"
      gradient="linear-gradient(90deg,#7EC8D8,#5CA8B8)"
    />
    <SkillBar
      name="Guitar"
      level="Lv. 3"
      fillWidth="38%"
      gradient="linear-gradient(90deg,#DEB67E,#C8945A)"
    />
    <SkillBar
      name="Running"
      level="Lv. 6"
      fillWidth="67%"
      gradient="linear-gradient(90deg,#FED09C,#FF916F)"
    />
    <SkillBar
      name="Design"
      level="Lv. 2"
      fillWidth="24%"
      gradient="linear-gradient(90deg,#EB5D45,#EA4D58)"
    />
    <p
      className="mt-5 font-display italic text-[0.7rem] tracking-[0.1em] uppercase text-center"
      style={{ color: "rgba(242,221,176,0.32)" }}
    >
      Your custom skill ledger. Grows with you.
    </p>
  </div>
);

/* ── Section ────────────────────────────────────────────────────────── */

export default function FeaturesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-features relative">
      <div className="section-inner">
        {/* Eyebrow */}
        <span className="reveal block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-brand-primary mb-3">
          Your Arsenal
        </span>

        {/* Title */}
        <h2
          className="reveal font-display font-bold leading-[1.22] text-dark-ink"
          style={{ fontSize: "clamp(1.65rem, 3.5vw, 2.65rem)" }}
        >
          Every Tool You Need to{" "}
          <em className="text-brand-primary italic">Level Up</em> For Real
        </h2>

        {/* Lead copy */}
        <p className="reveal text-[1.05rem] text-text-paper max-w-[560px] mt-6 mb-16">
          Built for the productive gamer, the self-optimizer, the recovering
          procrastinator. Whether you&apos;re studying, coding, training, or
          building a creative skill from scratch — every feature is designed to
          reward the effort of showing up.
        </p>

        {/* Features grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {/* Wide XP card — spans full width */}
          <FeatureCard
            variant="wide"
            tag="Core Mechanic"
            title="XP System & Skill Leveling"
            body={`Every session earns you experience points tied to your real-life skill — not abstract "productivity points." Watch your Coding skill hit Level 8. See your Spanish reach Level 5. The same dopamine loop that kept you grinding for 40 hours in a game, now tracking what actually matters.`}
          >
            {SkillBarsIllustration}
          </FeatureCard>

          {/* Standard cards */}
          <FeatureCard
            tag="Visualization"
            title="Progress Graphs & Analytics"
            body="XP charts, skill breakdowns, and quest-specific data. Stop guessing whether you're improving — see the proof in a graph. Your growth is no longer invisible."
            icon={GraphIcon}
          />
          <FeatureCard
            tag="Precision"
            title="Time Tracking"
            body="Discover exactly where your hours go each day. Track time per skill, per quest, per session. Stop wondering why the week vanished — your personal ledger knows the answer."
            icon={TimerIcon}
            delayClass="reveal-delay-1"
          />
          <FeatureCard
            tag="Objectives"
            title="Quests & Task Creation"
            body="Define your goals as Quests. Break them into Tasks. Turn every ambition — learning a framework, finishing a creative project, completing a study plan — into structured, beatable objectives."
            icon={QuestIcon}
            delayClass="reveal-delay-2"
          />
          <FeatureCard
            tag="Overview"
            title="Weekly Dashboards"
            body="A high-level view of every win, every logged hour, every step forward across the full week. See how you distributed your time across skills and quests. Your story, told in data."
            icon={DashboardIcon}
          />
          <FeatureCard
            tag="Record"
            title="Personal Ledger"
            body="A flexible log of every activity, every session, every achievement. Build a digital record of everything you've invested in yourself — a timeline of your growth you can read back years from now."
            icon={LedgerIcon}
            delayClass="reveal-delay-1"
          />
          <FeatureCard
            tag="Immersion"
            title="Fantasy-Crafted UI"
            body='Designed to look and feel like an RPG, not another grey box wrapped in a "motivational" color palette. When the UI speaks your language, showing up stops being a chore and starts being part of the game.'
            icon={UIIcon}
            delayClass="reveal-delay-2"
          />
        </div>
      </div>
    </section>
  );
}
