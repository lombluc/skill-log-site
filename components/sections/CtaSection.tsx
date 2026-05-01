'use client';

import SparkleIcon  from '@/components/ui/SparkleIcon';
import { useReveal }  from '@/hooks/useReveal';

export default function CtaSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-cta relative overflow-hidden text-center">

      {/* Decorative sparkles */}
      <SparkleIcon
        size={20}
        fill="#F2DDB0"
        fillOpacity={1}
        animClass="sparkle-1"
        style={{ top: 40, left: '10%', opacity: 0.18 }}
      />
      <SparkleIcon
        size={28}
        fill="#FFA028"
        fillOpacity={1}
        animClass="sparkle-2"
        style={{ bottom: 60, right: '12%', opacity: 0.12 }}
      />

      <div className="max-w-section mx-auto px-8 py-32">

        {/* Eyebrow */}
        <span className="reveal block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-parchment-mid mb-3">
          Your Quest Awaits
        </span>

        {/* Title */}
        <h2
          className="reveal font-display font-extrabold text-parchment-light leading-[1.2] mb-6"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
        >
          A Year From Now,<br />
          You&apos;ll Want Proof You Started Today.
        </h2>

        {/* Sub-copy */}
        <p
          className="reveal text-[1.05rem] max-w-[540px] mx-auto mb-12 leading-[1.85]"
          style={{ color: 'rgba(242, 221, 176, 0.68)' }}
        >
          Every level-up begins with a single session. Open Skill Log, name your first
          real-life skill, and start the timer. Your progress graph starts the moment you do.
        </p>

        {/* CTA buttons */}
        <div className="reveal flex gap-4 justify-center flex-wrap mb-6">
          <a
            href="https://apps.apple.com"
            className="font-display text-[0.88rem] font-bold tracking-[0.06em] uppercase bg-parchment-light text-dark-ink px-[2.2rem] py-4 rounded no-underline shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-[background,transform] duration-200 hover:bg-cloud-light hover:-translate-y-0.5"
          >
            ↓ Download on App Store
          </a>
          <a
            href="https://play.google.com/store"
            className="font-display text-[0.88rem] font-semibold tracking-[0.06em] uppercase text-parchment-light bg-transparent px-[2.2rem] py-4 rounded no-underline transition-[border-color,transform] duration-200 hover:border-parchment-mid hover:-translate-y-0.5"
            style={{ border: '1.5px solid rgba(242,221,176,0.35)' }}
          >
            ↓ Get it on Google Play
          </a>
        </div>

        {/* Fine print */}
        <p
          className="reveal font-display italic text-[0.72rem] tracking-[0.1em] uppercase mt-6"
          style={{ color: 'rgba(242,221,176,0.38)' }}
        >
          Free forever · All core features included · Your data is private and will never be
          sold · Contact:{' '}
          <a
            href="mailto:contact@skill-log.com"
            style={{ color: 'rgba(242,221,176,0.50)', textDecoration: 'underline' }}
          >
            contact@skill-log.com
          </a>
        </p>
      </div>
    </section>
  );
}
