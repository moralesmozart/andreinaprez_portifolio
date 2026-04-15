import type { Metadata } from "next";
import PortfolioLanding from "@/components/portfolio/PortfolioLanding";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Andreína Pérez — comunicación, viajes y comunidades. Never Unpack es uno de sus proyectos: relatos reales y comunidad viajerx sin postureo.",
  openGraph: {
    title: "Andreína Pérez",
    description:
      "Portfolio y proyectos: Never Unpack, comunidad de viajerxs y blog de relatos por el mundo.",
  },
};

export default function HomePage() {
  return <PortfolioLanding />;
}
