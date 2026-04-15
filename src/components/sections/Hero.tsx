"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { teamMembers, TEAM_CONOCENOS_URL } from "@/data/team";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const n = teamMembers.length;
  const member = teamMembers[index];

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      className="relative flex h-dvh flex-col overflow-hidden lg:block lg:min-h-screen"
      aria-roledescription="carousel"
      aria-label="Equipo Never Unpack"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 shrink-0 pb-8 pt-8 lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-end lg:pb-28 lg:pt-0"
      >
        <Container className="lg:pointer-events-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="absolute h-[200%] w-[200%] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s] rounded-full bg-green-400 opacity-30" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={member.slug}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm text-[#666]"
                  >
                    {member.roleLabel}
                  </motion.span>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={member.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="max-w-xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] lg:text-4xl xl:text-[2.75rem] xl:leading-[1.15]"
                >
                  {member.name}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="flex flex-col lg:justify-end">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <h2 className="mb-2 font-[family-name:var(--font-heading)] text-base font-bold tracking-[-0.03em] text-[#111]">
                    {member.aboutTitle}{" "}
                    <span aria-hidden="true">✈️</span>
                  </h2>
                  <p className="mb-5 max-h-[42vh] overflow-y-auto text-sm leading-relaxed text-[#555] lg:max-h-[38vh] lg:pr-1">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button href={TEAM_CONOCENOS_URL} variant="primary" showArrow={false}>
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      Conócenos en el blog
                    </Button>
                    <div
                      className="flex items-center gap-1 rounded-full border border-[#111]/15 bg-white/60 px-1 py-1 backdrop-blur-sm"
                      role="tablist"
                      aria-label="Elegir persona del equipo"
                    >
                      {teamMembers.map((m, i) => (
                        <button
                          key={m.slug}
                          type="button"
                          role="tab"
                          aria-selected={i === index}
                          aria-label={m.name}
                          onClick={() => setIndex(i)}
                          className={`h-2.5 w-2.5 rounded-full transition-colors ${
                            i === index ? "bg-[#111]" : "bg-[#111]/20 hover:bg-[#111]/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 hidden -translate-y-1/2 justify-between px-3 sm:px-6 lg:flex">
        <button
          type="button"
          onClick={() => go(-1)}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-[#111] shadow-lg backdrop-blur-md transition hover:bg-white"
          aria-label="Persona anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-[#111] shadow-lg backdrop-blur-md transition hover:bg-white"
          aria-label="Persona siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[max(5rem,env(safe-area-inset-bottom))] z-20 flex justify-between px-4 lg:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/85 text-[#111] shadow-md backdrop-blur-sm"
          aria-label="Persona anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/85 text-[#111] shadow-md backdrop-blur-sm"
          aria-label="Persona siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative min-h-0 w-full flex-1 lg:absolute lg:inset-0 lg:z-0 lg:h-full"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      >
        <div className="relative h-full w-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={member.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0"
            >
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                className="object-cover object-top"
                priority={index === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent lg:hidden" />

        <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white/20 to-transparent lg:block" />
        <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white/20 to-transparent lg:block" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-[55vh] lg:block">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black_0%,black_50%,transparent_100%)] backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/18 to-transparent" />
      </div>
    </section>
  );
}
