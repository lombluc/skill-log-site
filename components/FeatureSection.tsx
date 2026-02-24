"use client"; // Required for Framer Motion

import { motion } from "framer-motion";
import Image from "next/image";

type FetureDetails = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  index: number;
  maxIndex: number;
  feature: FetureDetails;
};

export default function FeatureSection({ index, maxIndex, feature }: Props) {
  return (
    <div key={index}>
      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 md:flex-row ${
          index % 2 !== 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold transition-transform duration-500 ease-[--ease-spring] hover:scale-102 active:scale-95 text-slate-900">
            {feature.title}
          </h2>
          <p className="text-base text-text-color leading-relaxed font-description">
            {feature.description}
          </p>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          // 'whileInView' triggers when the user scrolls to it
          whileInView={{ opacity: 1, x: 0 }}
          // 'viewport' ensures it only happens once and triggers when 20% visible
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 w-full transition-transform duration-500 hover:scale-105 active:scale-95"
        >
          <div className="aspect-video relative">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-scale-down"
            />
          </div>
        </motion.div>
      </div>
      {index < maxIndex - 1 && (
        <div className="max-w-4xl mx-auto px-6 mt-24">
          <hr className="border-slate-50" />
        </div>
      )}
    </div>
  );
}
