export default function HeroLandscape() {
  return (
    <svg
      className="hero-landscape w-full mt-16 block"
      viewBox="0 0 1200 260"
      preserveAspectRatio="xMidYMax meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Gradient defs for phone skill bars ── */}
      <defs>
        <linearGradient id="barGrad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFA028" />
          <stop offset="100%" stopColor="#EA4D58" />
        </linearGradient>
        <linearGradient id="barGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7EC8D8" />
          <stop offset="100%" stopColor="#5CA8B8" />
        </linearGradient>
        <linearGradient id="barGrad3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#DEB67E" />
          <stop offset="100%" stopColor="#C8945A" />
        </linearGradient>
      </defs>

      {/* ── Distant hills ── */}
      <ellipse
        cx="200"
        cy="260"
        rx="380"
        ry="110"
        fill="#B48766"
        opacity="0.45"
      />
      <ellipse
        cx="900"
        cy="260"
        rx="450"
        ry="100"
        fill="#C8945A"
        opacity="0.40"
      />

      {/* ── Mid terrain ── */}
      <path
        d="M0 200 Q150 140 300 180 Q450 220 600 170 Q750 120 900 175 Q1050 230 1200 185 L1200 260 L0 260Z"
        fill="#DEB67E"
        opacity="0.7"
      />

      {/* ── Foreground ground ── */}
      <path
        d="M0 230 Q200 210 400 225 Q600 240 800 218 Q1000 200 1200 222 L1200 260 L0 260Z"
        fill="#C8945A"
        opacity="0.55"
      />

      {/* ── Small hill silhouettes ── */}
      <ellipse
        cx="550"
        cy="240"
        rx="160"
        ry="42"
        fill="#5C3D1E"
        opacity="0.18"
      />
      <ellipse
        cx="820"
        cy="250"
        rx="120"
        ry="32"
        fill="#5C3D1E"
        opacity="0.14"
      />

      {/* ── Phone mockup — floats via .float-anim ── */}
      <g transform="translate(520, 30)" className="float-anim">
        {/* Phone body */}
        <rect x="0" y="0" width="160" height="200" rx="18" fill="#3A2210" />
        <rect x="4" y="4" width="152" height="192" rx="15" fill="#F2DDB0" />

        {/* Screen header */}
        <rect
          x="14"
          y="18"
          width="132"
          height="22"
          rx="5"
          fill="#DEB67E"
          opacity="0.8"
        />
        <text
          x="80"
          y="33"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="10"
          fill="#3D2B1F"
          fontWeight="bold"
        >
          Skill Log
        </text>

        {/* Programming bar */}
        <rect x="14" y="52" width="132" height="12" rx="4" fill="#FFF8E7" />
        <rect
          x="14"
          y="52"
          width="108"
          height="12"
          rx="4"
          fill="url(#barGrad1)"
        />
        <text
          x="18"
          y="62"
          fontFamily="Georgia"
          fontSize="7"
          fill="#5C3D1E"
          fontWeight="bold"
        >
          Programming Lv.7
        </text>

        {/* Fitness bar */}
        <rect x="14" y="72" width="132" height="12" rx="4" fill="#FFF8E7" />
        <rect
          x="14"
          y="72"
          width="72"
          height="12"
          rx="4"
          fill="url(#barGrad2)"
        />
        <text
          x="18"
          y="82"
          fontFamily="Georgia"
          fontSize="7"
          fill="#5C3D1E"
          fontWeight="bold"
        >
          Fitness Lv.5
        </text>

        {/* Guitar bar */}
        <rect x="14" y="92" width="132" height="12" rx="4" fill="#FFF8E7" />
        <rect
          x="14"
          y="92"
          width="50"
          height="12"
          rx="4"
          fill="url(#barGrad3)"
        />
        <text
          x="18"
          y="102"
          fontFamily="Georgia"
          fontSize="7"
          fill="#5C3D1E"
          fontWeight="bold"
        >
          Guitar Lv.3
        </text>

        {/* Active quest card */}
        <rect
          x="14"
          y="116"
          width="132"
          height="50"
          rx="5"
          fill="#FFF8E7"
          stroke="#C8945A"
          strokeWidth="1"
        />
        <text
          x="80"
          y="130"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="7"
          fill="#EA4D58"
          fontStyle="italic"
          letterSpacing="1"
        >
          ACTIVE QUEST
        </text>
        <text
          x="80"
          y="145"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="9"
          fill="#3D2B1F"
          fontWeight="bold"
        >
          Write Book
        </text>
        <text
          x="80"
          y="158"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="7"
          fill="#B48766"
        >
          8 / 9 Tasks
        </text>

        {/* Bottom nav bar */}
        <rect x="4" y="172" width="152" height="24" rx="0" fill="#3A2210" />
        <text
          x="30"
          y="187"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="7"
          fill="#7EC8D8"
        >
          Tasks
        </text>
        <text
          x="80"
          y="187"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="7"
          fill="#FFA028"
        >
          Skills
        </text>
        <text
          x="130"
          y="187"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="7"
          fill="#DEB67E"
        >
          Stats
        </text>
      </g>
    </svg>
  );
}
