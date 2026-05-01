export default function HeroXpBar() {
  return (
    <div className="hero-xp flex flex-col gap-2 max-w-115 w-full mx-auto mb-10">
      {/* Label row */}
      <div className="flex justify-between font-display text-[0.72rem] tracking-[0.14em] uppercase text-text-parchment">
        <span>Programming · Level 7</span>
        <span>72 / 100 XP</span>
      </div>

      {/* Track */}
      <div
        className="h-2.75 rounded-full overflow-hidden border"
        style={{
          background: "rgba(92, 61, 30, 0.12)",
          borderColor: "rgba(200, 148, 90, 0.35)",
        }}
      >
        {/* Fill — width animated by xpGrow keyframe in globals.css */}
        <div className="xp-fill" />
      </div>
    </div>
  );
}
