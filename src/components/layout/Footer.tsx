"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import { TEAM_CONOCENOS_URL } from "@/data/team";

const FOOTER_REVEAL_TEXT =
  "Cada relato es una invitación a mirar el mapa con otros ojos: comunidad, calle y ganas de seguir desempacando historias";

export default function Footer() {
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
