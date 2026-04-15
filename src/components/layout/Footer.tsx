"use client";

import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import { TEAM_CONOCENOS_URL } from "@/data/team";
import { BLOG_HOME_URL } from "@/data/site";
import Link from "next/link";

const FOOTER_REVEAL_TEXT =
  "Cada relato es una invitación a mirar el mapa con otros ojos: comunidad, calle y ganas de seguir desempacando historias";

function isUnpackRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  const parts = pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] === "unpack";
}

export default function Footer() {
  const pathname = usePathname();
  const isUnpack = isUnpackRoute(pathname);

  if (!isUnpack) {
    return (
      <footer className="border-t border-[#eee] bg-[#fafafa]">
        <Container className="py-16 md:py-20">
          <p className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#111]">
            Andreína Pérez
          </p>
          <p className="mb-6 max-w-lg text-sm text-[#666] md:text-base">
            Proyectos y comunidad. Never Unpack es una de las piezas que más me entusiasma — pasá por ahí cuando quieras.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/unpack" variant="primary">
              Never Unpack
            </Button>
            <Button href={BLOG_HOME_URL} variant="outline" showArrow>
              Blog
            </Button>
          </div>
        </Container>
        <Container className="border-t border-[#e5e5e5] py-6">
          <p className="text-sm text-[#888]">
            &copy; {new Date().getFullYear()} Andreína Pérez ·{" "}
            <Link href="/unpack" className="underline underline-offset-2 hover:text-[#111]">
              Never Unpack
            </Link>
          </p>
        </Container>
      </footer>
    );
  }

  return (
    <footer id="contact" className="bg-[#111] text-white">
      <Container className="py-20 md:py-28">
        <div className="max-w-4xl">
          <TextReveal text={FOOTER_REVEAL_TEXT} className="mb-10" />
          <p className="mb-8 text-base text-white/60 md:text-lg">
            Las caras y las voces detrás del blog te esperan en Conócenos: fundadora, colaboradoras y quienes hacen
            posible Never Unpack.
          </p>
          <Button
            href={TEAM_CONOCENOS_URL}
            className="border-white text-white hover:bg-white hover:text-[#111]"
            variant="outline"
            showArrow
          >
            Know our team
          </Button>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-6">
        <p className="text-sm text-[#666]">
          &copy; {new Date().getFullYear()} Never Unpack. Since we were born to the infinite, keeping trips alive.
        </p>
      </Container>
    </footer>
  );
}
