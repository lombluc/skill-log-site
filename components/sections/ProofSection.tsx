"use client";

import QuoteCard from "@/components/ui/QuoteCard";
import { useReveal } from "@/hooks/useReveal";

const QUOTES: { quote: string; avatar: string; delay?: string }[] = [
  {
    quote:
      "If I can level up a game character for 40 hours, I should be able to do it for myself. I just needed an app that agreed.",
    avatar: "✦ Developer, Lv. 14 in Coding",
  },
  {
    quote:
      "I want to look back a year from now and see a graph of how much I've grown. Skill Log is the only app that actually builds that graph for me.",
    avatar: "✦ Student, Lv. 9 in Spanish",
    delay: "reveal-delay-1",
  },
  {
    quote:
      "Consistency isn't about willpower. It's about the right feedback loop. Once I started seeing my XP go up every session, I never wanted to miss one.",
    avatar: "✦ Freelancer, Lv. 11 in Design",
    delay: "reveal-delay-2",
  },
  {
    quote:
      "Life is the hardest RPG I've ever played. I just needed a better UI. Skill Log is that UI.",
    avatar: "✦ Digital Nomad, Lv. 7 in Guitar",
  },
  {
    quote:
      "I'm tired of feeling like a side character in my own story. Watching my skills actually level up changed how I see every single work session.",
    avatar: "✦ Career Pivoter, Lv. 5 in Running",
    delay: "reveal-delay-1",
  },
  {
    quote:
      "The fear of losing my XP streak is a stronger motivator than any alarm or to-do reminder I've ever set. I didn't expect that — and I love it.",
    avatar: "✦ Gamer & Self-Optimizer",
    delay: "reveal-delay-2",
  },
];

export default function ProofSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-proof relative">
      <div className="section-inner">
        {/* Eyebrow */}
        <span className="reveal block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-wood-brown mb-3">
          From the Guild
        </span>

        {/* Title */}
        <h2
          className="reveal font-display font-bold leading-[1.22] text-dark-ink"
          style={{ fontSize: "clamp(1.65rem, 3.5vw, 2.65rem)" }}
        >
          These Are the Players Who Found{" "}
          <em className="text-brand-primary italic">Their Feedback Loop</em>
        </h2>

        {/* Quotes grid */}
        <div
          className="mt-14"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {QUOTES.map(({ quote, avatar, delay = "" }, i) => (
            <QuoteCard
              key={i}
              quote={quote}
              avatar={avatar}
              delayClass={delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
