'use client';

import SparkleIcon   from '@/components/ui/SparkleIcon';
import HeroXpBar     from '@/components/ui/HeroXpBar';
import HeroLandscape from '@/components/ui/HeroLandscape';

/**
 * HeroSection
 * Full-viewport hero: sky-to-cork gradient (via .hero CSS class),
 * animated entry sequence, sparkle accents, XP bar teaser, CTAs,
 * and the HeroLandscape illustration.
 *
 * No useReveal needed here — elements animate via CSS keyframes
 * on mount (fadeUp, xpGrow) rather than IntersectionObserver.
 */
export default function HeroSection() {
  return (
    <section className="hero relative min-h-screen flex flex-col items-center justify-center text-center pt-32 px-8 overflow-hidden">

      {/* ── Floating sparkles ── */}
      <SparkleIcon size={24} fill="#FFA028" fillOpacity={0.55} animClass="sparkle-1" style={{ top: 120, left: '8%' }} />
      <SparkleIcon size={18} fill="#EA4D58" fillOpacity={0.45} animClass="sparkle-2" style={{ top: 200, right: '10%' }} />
      <SparkleIcon size={14} fill="#7EC8D8" fillOpacity={0.50} animClass="sparkle-3" style={{ top: 350, left: '15%' }} />

      {/* ── Eyebrow ── */}
      <p className="hero-eyebrow font-display text-[0.8rem] italic tracking-[0.18em] uppercase text-wood-brown mb-6">
        The Real-Life RPG
      </p>

      {/* ── Headline ── */}
      <h1
        className="hero-headline font-display font-extrabold leading-[1.18] text-dark-ink max-w-[800px] mx-auto mb-6"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
      >
        Turn Every Hour You Practice Into{' '}
        <em className="text-brand-primary italic">Undeniable Progress</em>
      </h1>

      {/* ── Sub-copy ── */}
      <p
        className="hero-sub font-body leading-[1.85] text-text-parchment max-w-[580px] mx-auto mb-10"
        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}
      >
        Skill Log is a free RPG-style tracker that converts your real habits, quests, and
        sessions into XP. Level up your actual skills — one session at a time.
      </p>

      {/* ── Animated XP bar ── */}
      <HeroXpBar />

      {/* ── CTA buttons ── */}
      <div className="hero-btns flex gap-4 justify-center flex-wrap">
        <a
          href="https://apps.apple.com"
          className="font-display text-[0.88rem] font-bold tracking-[0.06em] uppercase text-white bg-brand-primary px-[2.2rem] py-4 rounded no-underline shadow-[0_4px_20px_rgba(234,77,88,0.35)] transition-[background,transform,box-shadow] duration-200 hover:bg-wood-brown hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(92,61,30,0.3)]"
        >
          ↓ Download on App Store
        </a>
        <a
          href="https://play.google.com/store"
          className="font-display text-[0.88rem] font-semibold tracking-[0.06em] uppercase text-wood-brown bg-transparent px-[2.2rem] py-4 rounded no-underline border-[1.5px] border-wood-brown/35 transition-[border-color,transform,background,color] duration-200 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5 hover:bg-brand-primary/5"
        >
          ↓ Get it on Google Play
        </a>
      </div>

      {/* ── Reassurance note ── */}
      <p className="hero-note font-body italic text-[0.78rem] tracking-[0.06em] text-text-parchment mt-5">
        Free forever ·{' '}
        <span className="text-wood-brown font-semibold not-italic">All core features included</span>
        {' '}· No account required
      </p>

      {/* ── Landscape illustration ── */}
      <HeroLandscape />
    </section>
  );
}
