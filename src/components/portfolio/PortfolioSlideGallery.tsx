"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import { PORTFOLIO_SLIDE_COUNT, portfolioSlideSrc } from "@/lib/portfolio-slides";
import { cn } from "@/lib/utils";

const INITIAL = 12;

export default function PortfolioSlideGallery() {
  const [showAll, setShowAll] = useState(false);
  const count = showAll ? PORTFOLIO_SLIDE_COUNT : INITIAL;

  return (
    <section
      id="galeria"
      className="border-t border-[#e8e8e8] bg-white py-16 md:py-24"
      aria-labelledby="galeria-heading"
    >
      <Container>
        <FadeIn>
          <span className="mb-3 block text-sm font-medium text-[#999]">Portfolio 2023</span>
          <h2
            id="galeria-heading"
            className="mb-4 max-w-2xl font-[family-name:var(--font-portfolio-serif)] text-3xl font-semibold tracking-[-0.02em] text-[#111] md:text-4xl"
          >
            Láminas del dossier completo
          </h2>
          <p className="mb-10 max-w-2xl text-base text-[#666] md:text-lg">
            Capturas del PDF / Canva original. Ideal para compartir contexto con clientes o medios sin enviar el archivo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
            <FadeIn key={n} delay={(n % 6) * 0.03}>
              <figure className="overflow-hidden rounded-[12px] border border-black/[0.06] bg-[#f6f6f6]">
                <Image
                  src={portfolioSlideSrc(n)}
                  alt={`Lámina ${n} del portfolio Andreína Pérez`}
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={n <= 6 ? "eager" : "lazy"}
                  unoptimized
                />
                <figcaption className="border-t border-black/[0.06] px-3 py-2 text-center text-xs text-[#888]">
                  Lámina {n}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        {PORTFOLIO_SLIDE_COUNT > INITIAL && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className={cn(
                "rounded-full border border-[#111] px-8 py-3 text-sm font-medium text-[#111] transition-colors",
                "hover:bg-[#111] hover:text-white",
              )}
            >
              {showAll ? "Ver menos" : `Ver las ${PORTFOLIO_SLIDE_COUNT} láminas`}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
