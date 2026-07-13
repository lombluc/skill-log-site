import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import GrainOverlay from "@/components/ui/GrainOverlay";
import "./globals.css";

/* ── Fonts ───────────────────────────────────────────────────────────
   next/font/google injects <link rel="preload"> and zero-FOUT swap.
   The `variable` option exposes each font as a CSS custom property so
   Tailwind's `font-display` / `font-body` utilities resolve correctly.
──────────────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair", // ← renamed; @theme inline maps this to --font-display
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora", // ← renamed; @theme inline maps this to --font-body
  display: "swap",
});

export const metadata: Metadata = {
  title: "RPG Time Tracker for Real-Life Skills | Skillorum",
  description:
    "Track practice time, earn XP and level up your real-life skills with Skillorum, a free handcrafted RPG-style productivity app for iOS and Android.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable}
          ${lora.variable}
          font-body
          bg-paper-light
          text-dark-ink
        `}
      >
        {/* Fixed grain texture — sits above all content, pointer-events-none */}
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
