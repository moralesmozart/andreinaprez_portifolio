"use client";

import Container from "@/components/layout/Container";
import ScrollRevealWords from "@/components/ui/ScrollRevealWords";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const TEXT_LINE1 =
  "Historias de quienes escriben, editan y comparten el mundo sin postureo.";
const TEXT_LINE2 =
  "De Andreína a André: una comunidad hecha de mochilas, risas y calle.";

export default function Expertises() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-16">
          <div className="pt-1">
            <span className="text-base text-[#999]">El equipo</span>
          </div>
          <div className="flex flex-col gap-2">
            <ScrollRevealWords
              lines={[TEXT_LINE1, TEXT_LINE2]}
              offset={["start 0.85", "start 0.2"]}
              fullWidth
              textClassName="text-2xl md:text-4xl lg:text-5xl lg:leading-tight"
            />
            <AnimatedText
              text="Eso es Never Unpack ✈️"
              textClassName="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl lg:text-5xl"
              underlineClassName="text-[#111]"
              underlineDuration={1.2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
