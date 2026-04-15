"use client";

import ScrollRevealWords from "@/components/ui/ScrollRevealWords";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import {
  portfolioHeroPitchCta,
  portfolioHeroPitchLines,
} from "@/data/portfolio-hero-pitch";

export default function PortfolioIntroScrollPitch() {
  return (
    <div className="mb-8 space-y-6">
      <ScrollRevealWords
        label="TL;DR recruiters"
        lines={portfolioHeroPitchLines}
        offset={["start 0.92", "start 0.08"]}
      />
      <AnimatedText
        text={portfolioHeroPitchCta}
        textClassName="font-[family-name:var(--font-heading)] text-xl font-bold tracking-[-0.03em] text-[#111] md:text-2xl lg:text-[1.65rem]"
        underlineClassName="text-[#111]"
        underlineDuration={1.15}
      />
    </div>
  );
}
