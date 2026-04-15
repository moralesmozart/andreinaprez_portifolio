import type { NavLink } from "@/types";
import { teamMembers } from "@/data/team";

export const andreinaMember = teamMembers.find((m) => m.slug === "andreina-perez")!;

export const portfolioNavLinks: NavLink[] = [
  { label: "Resumen", href: "#resumen" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Medios", href: "#medios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

/** Short intro for the portfolio hero (editable without touching the long bio on Conócenos). */
export const portfolioLead =
  "Creo espacios donde las historias de viaje importan más que el postureo: palabra, comunidad y ganas de compartir el mundo tal como se vive.";
