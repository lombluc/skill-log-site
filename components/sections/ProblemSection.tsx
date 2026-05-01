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
    <rect
      x="8"
      y="8"
      width="26"
      height="26"
      rx="3"
      fill="none"
      stroke="#DEB67E"
      strokeWidth="1.5"
    />
    <line
      x1="14"
      y1="16"
      x2="28"
      y2="16"
      stroke="#DEB67E"
      strokeWidth="1.2"
      strokeDasharray="3 2"
    />
    <line
      x1="14"
      y1="21"
      x2="24"
      y2="21"
      stroke="#DEB67E"
      strokeWidth="1.2"
      strokeDasharray="3 2"
    />
    <line
      x1="14"
      y1="26"
      x2="20"
      y2="26"
      stroke="#DEB67E"
      strokeWidth="1.2"
      strokeDasharray="3 2"
    />
    <circle
      cx="30"
      cy="30"
      r="6"
      fill="#EA4D58"
      opacity="0.25"
      stroke="#EA4D58"
      strokeWidth="1"
    />
    <text
      x="30"
      y="34"
      textAnchor="middle"
      fontSize="7"
      fill="#EA4D58"
      fontWeight="bold"
    >
      ?
    </text>
  </svg>
);

const TooManyGoalsIcon = (
  <svg viewBox="0 0 42 42" aria-hidden="true" className="w-full h-full">
    <path
      d="M21 6 L21 21"
      stroke="#EA4D58"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <circle cx="21" cy="21" r="3" fill="#EA4D58" opacity="0.7" />
    <path
      d="M9 33 Q15 24 21 24 Q27 24 33 33"
      fill="none"
      stroke="#DEB67E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ── Section ────────────────────────────────────────────────────────── */

export default function ProblemSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-problem relative">
      <div className="section-inner">
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
          className="reveal text-[1.05rem] max-w-[580px] mt-6 mb-14"
          style={{ color: "rgba(242, 221, 176, 0.72)" }}
        >
          The hours go in. The skills slowly improve. But there&apos;s no
          record, no graph, no level — nothing to make the growth feel real.
          That&apos;s not a motivation problem. That&apos;s a missing feedback
          loop.
        </p>

        {/* Pain grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <PainCard
            num="01"
            icon={NoProgressIcon}
            title="No Visible Progress"
            body="You practice. You improve. But without a record, every session disappears into the void. Six months later, you genuinely can't tell how far you've come — and that's demoralising."
            quote={`"I know I've been putting in the hours. I just can't see it."`}
          />
          <PainCard
            num="02"
            icon={RobotAppsIcon}
            title="Apps Built for Robots"
            body="Every productivity tool feels like an accountant's spreadsheet. There's no joy, no narrative, no reward for doing the work. You open it, feel nothing, and close it."
            quote={`"I've tried every app. None of them made me want to keep going."`}
            delayClass="reveal-delay-1"
          />
          <PainCard
            num="03"
            icon={TooManyGoalsIcon}
            title="Too Many Goals, No Quest"
            body="You have ambitions — coding, fitness, a side project, a language. But they sit in your head, formless. Without structure, big goals stay wishes. And wishes don't get completed."
            quote={`"I know what I want. I just can't seem to make real progress on it."`}
            delayClass="reveal-delay-2"
          />
        </div>
      </div>
    </section>
  );
}
