"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { andreinaMember } from "@/data/portfolio";
import {
  contactEmail,
  experiencePillarsBlockA,
  experiencePillarsBlockB,
  locationLabel,
  portfolioSocialExtraLine,
  portfolioSocialLinks,
  professionalSummary,
} from "@/data/portfolio-content";
import { BLOG_HOME_URL, BLOG_POST_COUNT } from "@/data/site";
import { TEAM_CONOCENOS_URL } from "@/data/team";
import PortfolioIntroScrollPitch from "@/components/portfolio/PortfolioIntroScrollPitch";
import PortfolioSlideGallery from "@/components/portfolio/PortfolioSlideGallery";
import PortfolioSlideImage from "@/components/portfolio/PortfolioSlideImage";
import { portfolioSlideSrc } from "@/lib/portfolio-slides";

function SectionTitle({
  kicker,
  title,
  id,
}: {
  kicker: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="mb-10">
      <span className="mb-3 block text-sm font-medium text-[#999]">{kicker}</span>
      <h2
        id={id}
        className="max-w-3xl font-[family-name:var(--font-portfolio-serif)] text-3xl font-semibold tracking-[-0.02em] text-[#111] md:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}

export default function PortfolioLanding() {
  return (
    <div className="portfolio-editorial text-[#111]">
      <section
        id="intro"
        className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14"
        aria-label="Presentación"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-14">
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
              <p className="portfolio-script mb-2 text-2xl text-[#111] md:text-3xl">
                Periodista y comunicadora audiovisual
              </p>
              <p className="mb-6 text-lg font-medium text-[#333] md:text-xl">{andreinaMember.roleLabel}</p>
              <PortfolioIntroScrollPitch />
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
              className="flex flex-col gap-6"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] shadow-[16px_16px_60px_-12px_rgba(0,0,0,0.18)] lg:max-w-none">
                <Image
                  src={andreinaMember.image}
                  alt={andreinaMember.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 340px"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 pt-20">
                  <p className="flex items-center gap-2 text-sm font-medium text-white/95">
                    <MapPin className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                    Comunidad, narrativa y viajes sin postureo
                  </p>
                </div>
              </div>
              <PortfolioSlideImage
                slide={1}
                alt="Portada del portfolio: Andreina Pérez, máquina de escribir"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section
        id="resumen"
        className="border-t border-[#eee] bg-[#fafafa] py-16 md:py-24"
        aria-labelledby="resumen-heading"
      >
        <Container>
          <FadeIn>
            <span className="mb-3 block text-sm font-medium text-[#999]">Resumen</span>
            <h2
              id="resumen-heading"
              className="mb-8 max-w-3xl font-[family-name:var(--font-portfolio-serif)] text-3xl font-semibold tracking-[-0.02em] text-[#111] md:text-4xl"
            >
              Más de ocho años contando historias en todos los formatos
            </h2>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
              <blockquote className="border-l-2 border-[#111] pl-6 font-[family-name:var(--font-portfolio-serif)] text-xl font-medium leading-relaxed text-[#222] md:text-2xl">
                «{professionalSummary}»
              </blockquote>
              <PortfolioSlideImage slide={2} alt="Lámina «Sobre mí» del portfolio Canva" />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section id="sobre" className="py-16 md:py-24" aria-labelledby="sobre-heading">
        <Container>
          <FadeIn>
            <span className="mb-3 block text-sm font-medium text-[#999]">Sobre mí</span>
            <h2
              id="sobre-heading"
              className="mb-6 max-w-2xl font-[family-name:var(--font-portfolio-serif)] text-3xl font-semibold tracking-[-0.02em] text-[#111] md:text-4xl"
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
              Equipo completo en Never Unpack
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </FadeIn>
        </Container>
      </section>

      <section
        id="trayectoria"
        className="border-t border-[#eee] bg-[#fafafa] py-16 md:py-24"
        aria-labelledby="trayectoria-heading"
      >
        <Container>
          <SectionTitle kicker="Experiencia" title="Redacción, plató, redes y producción" id="trayectoria-heading" />
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {experiencePillarsBlockA.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-card)] border border-black/[0.08] bg-white p-6 shadow-sm">
                  <p className="portfolio-script mb-2 text-2xl text-[#111]">{p.title}</p>
                  <p className="text-sm leading-relaxed text-[#555]">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {experiencePillarsBlockB.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-card)] border border-black/[0.08] bg-white p-6 shadow-sm">
                  <p className="portfolio-script mb-2 text-2xl text-[#111]">{p.title}</p>
                  <p className="text-sm leading-relaxed text-[#555]">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PortfolioSlideImage slide={3} alt="Experiencia: redacción, edición, reportera" />
            <PortfolioSlideImage slide={4} alt="Experiencia: presentadora, comunicación, producción" />
          </div>
        </Container>
      </section>

      <section id="medios" className="py-16 md:py-24" aria-labelledby="medios-heading">
        <Container>
          <SectionTitle
            kicker="Radio y datos"
            title="Cadena SER, Onda Cero, bases de datos y series documentales"
            id="medios-heading"
          />
          <p className="mb-12 max-w-3xl text-base text-[#666] md:text-lg">
            Presentación y autorealización en radio, entrevistas de verano, piezas para nacional y regional, y trabajo
            editorial sobre grandes catálogos audiovisuales — incluida colaboración en un proyecto con Google en
            Latinoamérica.
          </p>
          <div className="flex flex-col gap-14">
            <FadeIn>
              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-bold text-[#111]">
                Cadena SER La Palma
              </h3>
              <PortfolioSlideImage slide={24} alt="Cadena SER: programa Del Hoy x Hoy en La Palma" />
            </FadeIn>
            <FadeIn delay={0.05}>
              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-bold text-[#111]">
                Onda Cero La Palma
              </h3>
              <PortfolioSlideImage slide={25} alt="Onda Cero en La Palma: entrevistas y contenidos" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-bold text-[#111]">
                MediaData TV
              </h3>
              <PortfolioSlideImage slide={6} alt="MediaData TV y proyecto con Google Latinoamérica" />
            </FadeIn>
            <FadeIn delay={0.12}>
              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-bold text-[#111]">
                Series y comunicación (RTVE, Rakuten TV, Cruz Roja…)
              </h3>
              <PortfolioSlideImage slide={15} alt="Participación en comunicación de series documentales" />
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#eee] bg-[#fafafa] py-16 md:py-24" aria-labelledby="doc-heading">
        <Container>
          <SectionTitle
            kicker="Documental e impacto"
            title="Volcán de La Palma, juventud canaria y educación"
            id="doc-heading"
          />
          <div className="flex flex-col gap-12">
            <PortfolioSlideImage slide={45} alt="Documental Volveremos: volcán de La Palma" />
            <PortfolioSlideImage slide={44} alt="Documental Elegirlos o elegirnos" />
            <PortfolioSlideImage slide={46} alt="Documental sobre educación: guion y producción" />
            <PortfolioSlideImage slide={32} alt="Proyecto fotográfico Crónicas del olvido" />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="cultura-heading">
        <Container>
          <SectionTitle
            kicker="Cultura y colaboraciones"
            title="Prensa, fotografía de concierto, investigación y revista Latitud"
            id="cultura-heading"
          />
          <div className="flex flex-col gap-12">
            <PortfolioSlideImage slide={40} alt="Artículos en El Mirador de Madrid" />
            <PortfolioSlideImage slide={42} alt="Fotografía en conciertos — La Voz Cultural" />
            <PortfolioSlideImage slide={41} alt="Canarias Noticias: investigación y reportaje" />
            <PortfolioSlideImage slide={37} alt="Colaboración con la revista Latitud" />
          </div>
        </Container>
      </section>

      <section
        id="proyectos"
        className="border-t border-[#eee] bg-[#fafafa] py-16 md:py-24"
        aria-labelledby="proyectos-heading"
      >
        <Container>
          <SectionTitle kicker="Proyectos" title="Never Unpack y edición audiovisual" id="proyectos-heading" />
          <p className="mb-10 max-w-2xl text-base text-[#666] md:text-lg">
            El blog y comunidad que fundé, y un vistazo a piezas de edición (entrevistas, viajes, branded).
          </p>
          <div className="mb-12 flex flex-col gap-10">
            <PortfolioSlideImage slide={29} alt="Never Unpack: medio por y para viajerxs" />
            <PortfolioSlideImage slide={30} alt="Qué hacemos en Never Unpack" />
          </div>
          <FadeIn>
            <Link
              href="/unpack"
              className="group mb-14 block overflow-hidden rounded-[var(--radius-card)] border border-[#e8e8e8] bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_32px_72px_-20px_rgba(0,0,0,0.16)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] md:items-stretch">
                <div className="p-8 md:p-10 md:pr-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Comunidad · Blog · Equipo
                  </p>
                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111] md:text-3xl">
                    Never Unpack (sitio interactivo)
                  </h3>
                  <p className="mb-6 max-w-lg text-sm leading-relaxed text-[#555] md:text-base">
                    Más de {BLOG_POST_COUNT} relatos en el blog, equipo en carrusel y continentes enlazados al proyecto
                    vivo.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#111]">
                    Abrir experiencia Unpack
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <PortfolioSlideImage slide={43} alt="Edición de vídeo: reportajes, viajes, entrevistas" />
            <PortfolioSlideImage slide={5} alt="Libro Intentémoslo con Itziar Abaurrea" />
          </div>
        </Container>
      </section>

      <PortfolioSlideGallery />

      <section
        id="contacto"
        className="border-t border-[#eee] bg-[#fafafa] py-16 md:py-24"
        aria-labelledby="contacto-heading"
      >
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <span className="mb-3 block text-sm font-medium text-[#999]">Contacto</span>
              <h2
                id="contacto-heading"
                className="mb-4 font-[family-name:var(--font-portfolio-serif)] text-3xl font-semibold tracking-[-0.02em] text-[#111] md:text-4xl"
              >
                ¿Hablamos?
              </h2>
              <p className="mb-2 text-sm uppercase tracking-[0.12em] text-[#888]">Redes</p>
              <ul className="mb-8 space-y-3">
                {portfolioSocialLinks.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-[#111] underline underline-offset-4 transition-opacity hover:opacity-60"
                    >
                      {s.label}: {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-sm text-[#666]">{portfolioSocialExtraLine}</p>
              <p className="mb-2 text-sm text-[#666]">
                <span className="font-medium text-[#111]">{locationLabel}</span>
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-lg font-semibold text-[#111] underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                {contactEmail}
              </a>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={BLOG_HOME_URL} variant="primary" showArrow>
                  Ir al blog
                </Button>
                <Button href="/unpack" variant="outline">
                  Never Unpack
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <PortfolioSlideImage slide={47} alt="Redes sociales y retrato — lámina del portfolio" />
              <div className="mt-8 overflow-hidden rounded-[14px] border border-black/[0.08] bg-white p-6 text-center shadow-sm">
                <Image
                  src={portfolioSlideSrc(48)}
                  alt="Cierre del portfolio: gracias"
                  width={1200}
                  height={400}
                  className="mx-auto h-auto w-full max-w-md object-contain"
                  unoptimized
                />
                <p className="portfolio-script mt-4 text-2xl text-[#111]">¡Muchas gracias!</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
