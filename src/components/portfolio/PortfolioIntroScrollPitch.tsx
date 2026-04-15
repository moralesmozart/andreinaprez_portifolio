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
        labelPosition="top"
        lines={portfolioHeroPitchLines}
        offset={["start 0.92", "start 0.08"]}
        textClassName="font-[family-name:var(--font-heading)] text-[0.9375rem] font-semibold leading-relaxed tracking-[-0.02em] text-[#111] md:text-base lg:text-[1.0625rem]"
      />
      <AnimatedText
        text={portfolioHeroPitchCta}
        textClassName="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-[-0.02em] text-[#111] md:text-xl lg:text-[1.25rem]"
        underlineClassName="text-[#111]"
        underlineDuration={1.15}
      />
    </div>
  );
}
