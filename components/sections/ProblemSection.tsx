"use client";

import PainCard from "@/components/ui/PainCard";
import { useReveal } from "@/hooks/useReveal";

/* ── Pain card SVG icons ───────────────────────────────────────────── */

const NoProgressIcon = (
  <svg viewBox="0 0 42 42" aria-hidden="true" className="w-full h-full">
    <circle
      cx="21"
      cy="21"
      r="17"
      fill="none"
      stroke="#DEB67E"
      strokeWidth="1.5"
    />
    <path
      d="M14 21 L19 26 L28 17"
      fill="none"
      stroke="#DEB67E"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0"
    />
    <line
      x1="13"
      y1="13"
      x2="29"
      y2="29"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="29"
      y1="13"
      x2="13"
      y2="29"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const RobotAppsIcon = (
  <svg viewBox="0 0 42 42" aria-hidden="true" className="w-full h-full">
    {/* Antenna */}
    <circle cx="21" cy="3.5" r="1.5" fill="#DEB67E" />
    <line
      x1="21"
      y1="5"
      x2="21"
      y2="9"
      stroke="#DEB67E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Screen / body */}
    <rect
      x="6"
      y="9"
      width="30"
      height="25"
      rx="2"
      fill="none"
      stroke="#DEB67E"
      strokeWidth="1.5"
    />
    {/* Square robot eyes */}
    <rect
      x="11"
      y="15"
      width="7"
      height="5"
      rx="0.5"
      fill="#DEB67E"
      opacity="0.35"
      stroke="#DEB67E"
      strokeWidth="1"
    />
    <rect
      x="24"
      y="15"
      width="7"
      height="5"
      rx="0.5"
      fill="#DEB67E"
      opacity="0.35"
      stroke="#DEB67E"
      strokeWidth="1"
    />
    {/* Flat expressionless mouth */}
    <line
      x1="14"
      y1="26"
      x2="28"
      y2="26"
      stroke="#EA4D58"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const TooManyGoalsIcon = (
  <svg viewBox="0 0 42 42" aria-hidden="true" className="w-full h-full">
    {/* Center node */}
    <circle
      cx="21"
      cy="21"
      r="2.5"
      fill="none"
      stroke="#DEB67E"
      strokeWidth="1.5"
    />
    {/* Scattered goal lines */}
    <line
      x1="21"
      y1="21"
      x2="32"
      y2="10"
      stroke="#DEB67E"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="21"
      y1="21"
      x2="35"
      y2="21"
      stroke="#DEB67E"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.75"
    />
    <line
      x1="21"
      y1="21"
      x2="30"
      y2="34"
      stroke="#DEB67E"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="21"
      y1="21"
      x2="11"
      y2="34"
      stroke="#DEB67E"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.75"
    />
    <line
      x1="21"
      y1="21"
      x2="7"
      y2="14"
      stroke="#DEB67E"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Goal dots at tips */}
    <circle cx="32" cy="10" r="2" fill="#EA4D58" />
    <circle cx="35" cy="21" r="2" fill="#EA4D58" opacity="0.75" />
    <circle cx="30" cy="34" r="2" fill="#EA4D58" />
    <circle cx="11" cy="34" r="2" fill="#EA4D58" opacity="0.75" />
    <circle cx="7" cy="14" r="2" fill="#EA4D58" opacity="0.5" />
  </svg>
);

/* ── Section ────────────────────────────────────────────────────────── */

export default function ProblemSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-problem relative">
      <div className="section-inner">
        <div className="section-padding-mid">
          {/* Eyebrow */}
          <span className="reveal block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-parchment-mid mb-3">
            The Problem
          </span>

          {/* Title */}
          <h2
            className="reveal font-display font-bold leading-[1.22] text-parchment-light"
            style={{ fontSize: "clamp(1.65rem, 3.5vw, 2.65rem)" }}
          >
            You&apos;re Grinding Every Day.
            <br />
            But You Have Nothing to{" "}
            <em className="text-brand-primary italic">Show For It.</em>
          </h2>

          {/* Lead */}
          <p
            className="reveal text-[1.05rem] max-w-145 mt-6 mb-14"
            style={{ color: "rgba(242, 221, 176, 0.72)" }}
          >
            The hours go in. The skills slowly improve. But there&apos;s no
            record, no graph, no level — nothing to make the growth feel real.
            That&apos;s not a motivation problem. That&apos;s a missing feedback
            loop.
          </p>
        </div>

        <div className="section-padding-wide">
          {/* Pain grid */}
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <PainCard
              icon={NoProgressIcon}
              title="No Visible Progress"
              body="You practice. You improve. But without a record, every session disappears into the void. Six months later, you genuinely can't tell how far you've come — and that's demoralising."
              quote={`"I know I've been putting in the hours. I just can't see it."`}
            />
            <PainCard
              icon={RobotAppsIcon}
              title="Apps Built for Robots"
              body="Every productivity tool feels like an accountant's spreadsheet. There's no joy, no narrative, no reward for doing the work. You open it, feel nothing, and close it."
              quote={`"I've tried every app. None of them made me want to keep going."`}
              delayClass="reveal-delay-1"
            />
            <PainCard
              icon={TooManyGoalsIcon}
              title="Too Many Goals, No Quest"
              body="You have ambitions — coding, fitness, a side project, a language. But they sit in your head, formless. Without structure, big goals stay wishes. And wishes don't get completed."
              quote={`"I know what I want. I just can't seem to make real progress on it."`}
              delayClass="reveal-delay-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
