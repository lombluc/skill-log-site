"use client";

import Image from "next/image";
import FeatureSection from "../../components/FeatureSection";
import { motion } from "framer-motion";
import BasePage from "../../components/BasePage";
import Link from "next/link";

const features = [
  {
    title: "Track Your Quests",
    description:
      "Break down your big goals into quests. Analyze how you spend your time.",
    image: "/images/stackedPapers.png",
  },
  {
    title: "Turn Work Into XP",
    description:
      "Log time directly on tasks or skills and earn XP instantly. Complete tasks and level up. Every focused session contributes to real-time progression.",
    image: "/images/magicRune.png",
  },
  {
    title: "Analyze Where Your Time Goes",
    description:
      "See exactly how you spend your time. Break down your effort by skills, quests, or view everything at a glance.",
    image: "/images/map.png",
  },
  {
    title: "Customize Your Growth System",
    description:
      "Build a system tailored to your life. Watch levels increase, skills improve, and quests complete. Stay motivated with visible, gamified progress tied to real effort.",
    image: "/images/paperPlane.png",
  },
];

export default function Home() {
  return (
    <BasePage>
      {/* Hero Section */}
      <section className="min-h-screen max-w-6xl mx-auto px-6 pt-16 pb-24 text-center md:text-left md:flex items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight transition-transform duration-500 ease-[--ease-spring] hover:scale-102 active:scale-95 text-slate-900">
            Level Up Your{" "}
            <span className="text-blue-600">Real-World Skills</span>
          </h1>
          <p className="text-base text-slate-600 max-w-lg font-description">
            Gamify your routine. Earn XP for focused work, track progress, and
            build your own skills. Start your first quest now.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 pt-4 justify-center md:justify-center">
            {/* App Store Button */}
            <Link
              href=""
              target="_blank"
              className="hover:scale-105 active:scale-95 transition-transform duration-400"
            >
              <Image
                src="/svg/app-store-button.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                priority
              />
            </Link>

            {/* Google Play Button */}
            <Link
              href=""
              target="_blank"
              className="hover:scale-105 active:scale-95 transition-transform duration-400"
            >
              <Image
                src="/svg/google-play-button.svg"
                alt="Get it on Google Play"
                width={203}
                height={60}
              />
            </Link>
          </div>
        </div>

        {/* Screenshot Container */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center"
        >
          <div className="relative w-72 h-145 bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-900 transition-transform duration-500 ease-[--ease-spring] hover:scale-105 active:scale-95">
            {/* The actual image */}
            <div className="relative w-full h-full overflow-hidden rounded-4xl bg-transparent">
              <Image
                src="/images/screenshot.jpg"
                alt="App Screenshot"
                fill
                className="object-cover"
                priority // This ensures the hero image loads instantly
              />
            </div>

            {/* Visual "Speaker" and "Camera" holes for realism */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl"></div>
          </div>
        </motion.div>
      </section>
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <hr className="border-slate-50" />
      </div>

      <section id="features" className="py-24 space-y-24">
        {features.map((feature, index) =>
          FeatureSection({ index, maxIndex: features.length, feature }),
        )}
      </section>
    </BasePage>
  );
}
