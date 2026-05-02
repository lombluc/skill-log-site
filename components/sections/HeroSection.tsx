"use client";

import HeroXpBar from "@/components/ui/HeroXpBar";
import HeroLandscape from "@/components/ui/HeroLandscape";

export default function HeroSection() {
  return (
    <section className="hero relative min-h-screen flex flex-col items-center justify-center text-center pt-32 px-8 overflow-hidden">
      {/* ── Cloud background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* top zone: small & sparse */}
        <img
          src="/svg/clouds/cloud1.svg"
          className="cloud-drift absolute opacity-45"
          style={{
            width: "80px",
            top: "7%",
            animationDuration: "38s",
            animationDelay: "-7s",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud5.svg"
          className="cloud-drift absolute opacity-50"
          style={{
            width: "120px",
            top: "12%",
            animationDuration: "35s",
            animationDelay: "-14s",
          }}
          alt=""
        />
        {/* <img
          src="/svg/clouds/cloud2.svg"
          className="cloud-drift absolute opacity-55"
          style={{
            width: "120px",
            top: "16%",
            animationDuration: "32s",
            animationDelay: "0s",
          }}
          alt=""
        /> */}
        {/* mid zone: medium */}
        <img
          src="/svg/clouds/cloud1.svg"
          className="cloud-drift absolute opacity-80"
          style={{
            width: "155px",
            top: "45%",
            animationDuration: "48s",
            animationDelay: "-42s",
            transform: "scaleX(-1)",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud3.svg"
          className="cloud-drift absolute opacity-70"
          style={{
            width: "185px",
            top: "50%",
            animationDuration: "58s",
            animationDelay: "-20s",
          }}
          alt=""
        />
        {/* lower zone: large & slow */}
        <img
          src="/svg/clouds/cloud4.svg"
          className="cloud-drift absolute opacity-90"
          style={{
            width: "210px",
            top: "63%",
            animationDuration: "59s",
            animationDelay: "-30s",
            transform: "scaleX(-1)",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud1.svg"
          className="cloud-drift absolute opacity-80"
          style={{
            width: "230px",
            top: "64%",
            animationDuration: "59s",
            animationDelay: "0s",
            transform: "scaleX(-1)",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud5.svg"
          className="cloud-drift absolute opacity-80"
          style={{
            width: "290px",
            top: "65%",
            animationDuration: "75s",
            animationDelay: "-10s",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud2.svg"
          className="cloud-drift absolute opacity-80"
          style={{
            width: "275px",
            top: "65%",
            animationDuration: "75s",
            animationDelay: "-45s",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud6.svg"
          className="cloud-drift absolute opacity-80"
          style={{
            width: "165px",
            top: "70%",
            animationDuration: "64s",
            animationDelay: "-5s",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud6.svg"
          className="cloud-drift absolute opacity-60"
          style={{
            width: "260px",
            top: "82%",
            animationDuration: "68s",
            animationDelay: "-50s",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud1.svg"
          className="cloud-drift absolute opacity-65"
          style={{
            width: "295px",
            top: "85%",
            animationDuration: "79s",
            animationDelay: "-40s",
            transform: "scaleX(-1)",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud2.svg"
          className="cloud-drift absolute opacity-70"
          style={{
            width: "340px",
            top: "80%",
            animationDuration: "90s",
            animationDelay: "-35s",
            transform: "scaleX(-1)",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud3.svg"
          className="cloud-drift absolute opacity-65"
          style={{
            width: "310px",
            top: "85%",
            animationDuration: "82s",
            animationDelay: "-22s",
            transform: "scaleX(-1)",
          }}
          alt=""
        />
        <img
          src="/svg/clouds/cloud3.svg"
          className="cloud-drift absolute"
          style={{
            width: "30%",
            top: "90%",
            animationDuration: "95s",
            animationDelay: "-60s",
          }}
          alt=""
        />
      </div>

      {/* ── Eyebrow ── */}
      <p className="hero-eyebrow font-display text-[0.8rem] italic tracking-[0.18em] uppercase text-wood-brown mb-6">
        The Real-Life RPG
      </p>

      {/* ── Headline ── */}
      <h1
        className="hero-headline font-display font-extrabold leading-[1.18] text-dark-ink max-w-200 mx-auto mb-6"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        Turn Every Hour You Practice Into{" "}
        <em className="text-brand-primary italic">Undeniable Progress</em>
      </h1>

      {/* ── Sub-copy ── */}
      <p
        className="hero-sub font-body leading-[1.85] text-text-parchment max-w-145 mx-auto mb-10"
        style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
      >
        Skill Log is a free RPG-style tracker that converts your real habits,
        quests, and sessions into XP. Level up your actual skills — one session
        at a time.
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
        Free forever ·{" "}
        <span className="text-wood-brown font-semibold not-italic">
          All core features included
        </span>{" "}
        · No account required
      </p>

      {/* ── Landscape illustration ── */}
      <HeroLandscape />
    </section>
  );
}
