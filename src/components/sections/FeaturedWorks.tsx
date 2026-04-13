"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { BLOG_HOME_URL } from "@/data/site";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedWorks() {
  return (
    <section id="continents" className="py-12 md:py-20">
      <Container>
        <FadeIn>
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl">
              Viajerxs por continente
            </h2>
            <a
              href={BLOG_HOME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 text-sm text-[#666] transition-colors hover:text-[#111]"
            >
              <span className="hidden sm:inline">Ir al blog</span>
              <span className="sm:hidden">Blog</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
