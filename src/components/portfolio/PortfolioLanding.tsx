"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import {
  andreinaMember,
  portfolioLead,
} from "@/data/portfolio";
import { BLOG_HOME_URL, BLOG_POST_COUNT } from "@/data/site";
import { TEAM_CONOCENOS_URL } from "@/data/team";

export default function PortfolioLanding() {
  return (
    <>
      <section
        id="intro"
        className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14"
        aria-label="Presentación"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="mb-3 text-sm font-medium tracking-wide text-[#666]">
                Hola — soy{" "}
                <span className="text-[#111]">{andreinaMember.name.split(" ")[0]}</span>
              </p>
              <h1 className="mb-5 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.04em] text-[#111] md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {andreinaMember.name}
              </h1>
              <p className="mb-2 text-lg font-medium text-[#111] md:text-xl">
                {andreinaMember.roleLabel}
              </p>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-[#555] md:text-lg">
                {portfolioLead}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/unpack" variant="primary" showArrow>
                  Never Unpack
                </Button>
                <Button href={BLOG_HOME_URL} variant="outline">
                  Blog
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-card)] shadow-[16px_16px_60px_-12px_rgba(0,0,0,0.18)] lg:max-w-none"
            >
              <Image
                src={andreinaMember.image}
                alt={andreinaMember.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6 pt-24">
                <p className="flex items-center gap-2 text-sm font-medium text-white/95">
                  <MapPin className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                  Comunidad, narrativa y viajes sin postureo
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section
        id="sobre"
        className="border-t border-[#eee] py-16 md:py-24"
        aria-labelledby="sobre-heading"
      >
        <Container>
          <FadeIn>
            <span className="mb-3 block text-sm font-medium text-[#999]">Sobre mí</span>
            <h2
              id="sobre-heading"
              className="mb-6 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl"
            >
              {andreinaMember.aboutTitle}
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#555] md:text-lg">
              {andreinaMember.bio}
            </p>
            <Link
              href={TEAM_CONOCENOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#111] underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Leer también al equipo en el blog
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </FadeIn>
        </Container>
      </section>

      <section
        id="proyectos"
        className="bg-[#fafafa] py-16 md:py-24"
        aria-labelledby="proyectos-heading"
      >
        <Container>
          <FadeIn>
            <span className="mb-3 block text-sm font-medium text-[#999]">Proyectos</span>
            <h2
              id="proyectos-heading"
              className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl"
            >
              Lo que construyo
            </h2>
            <p className="mb-10 max-w-xl text-base text-[#666] md:text-lg">
              Uno de los proyectos que más me define: una comunidad de viajerxs que escribe, edita y comparte el mundo con honestidad.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Link
              href="/unpack"
              className="group block overflow-hidden rounded-[var(--radius-card)] border border-[#e8e8e8] bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_32px_72px_-20px_rgba(0,0,0,0.16)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] md:items-stretch">
                <div className="p-8 md:p-10 md:pr-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Comunidad · Blog · Equipo
                  </p>
                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111] md:text-3xl">
                    Never Unpack
                  </h3>
                  <p className="mb-6 max-w-lg text-sm leading-relaxed text-[#555] md:text-base">
                    Historias por los cinco continentes, más de {BLOG_POST_COUNT} relatos en el blog y un equipo que
                    hace posible que la comunidad siga creciendo.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#111]">
                    Ver el sitio del proyecto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
                <div className="relative min-h-[200px] bg-gradient-to-br from-[#111] via-[#2a2a2a] to-[#444] md:min-h-[240px]">
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <span className="text-3xl" aria-hidden>
                      ✈️
                    </span>
                    <p className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold tracking-[-0.02em]">
                      Comunidad viajerx
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </Container>
      </section>

      <section
        id="contacto"
        className="py-16 md:py-24"
        aria-labelledby="contacto-heading"
      >
        <Container>
          <FadeIn>
            <span className="mb-3 block text-sm font-medium text-[#999]">Contacto</span>
            <h2
              id="contacto-heading"
              className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl"
            >
              ¿Hablamos?
            </h2>
            <p className="mb-8 max-w-xl text-base text-[#666] md:text-lg">
              Si te gusta lo que hacemos en Never Unpack o quieres colaborar, el mejor punto de partida es el blog y la comunidad.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={BLOG_HOME_URL} variant="primary" showArrow>
                Ir al blog
              </Button>
              <Button href="/unpack" variant="outline">
                Ver Never Unpack
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
