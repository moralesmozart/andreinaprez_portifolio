import { NavLink, SocialLink, Testimonial, StatCard } from "@/types";

/** Total de publicaciones en el blog (WordPress REST API, actualizar si hace falta). */
export const BLOG_POST_COUNT = 244;

/** Anchor links for the Never Unpack landing (`/unpack`). */
export const unpackNavLinks: NavLink[] = [
  { label: "El equipo", href: "#about" },
  { label: "Continentes", href: "#continents" },
  { label: "Contacto", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Never Unpack", href: "https://neverunpackspain.com/", icon: "linkedin" },
];

export const testimonial: Testimonial = {
  quote:
    "Never Unpack es comunidad por y para viajerxs: historias reales, sin postureo, que inspiran a coger la mochila.",
  name: "Andreína Pérez",
  role: "Fundadora",
};

/** Tarjetas claras (índice 0 y 2) — compatibilidad con SocialProof */
export const stats: StatCard[] = [
  {
    value: String(BLOG_POST_COUNT),
    label:
      "relatos en el blog — cada publicación, un destino, una ciudad o un rincón que alguien quiso compartir.",
  },
  {
    value: "6",
    label: "personas en el equipo: fundadora, colaboradoras, narrativa y quien hace posible que el proyecto siga creciendo.",
  },
];

export const statContinentsHighlight = {
  title: "Los cinco continentes",
  description:
    "África, América, Asia, Europa y Oceanía: el mapa de Never Unpack se llena con vuestras voces y vuestras rutas.",
};

export const heroContent = {
  tagline: "Comunidad viajerx",
  heading: "Never Unpack",
  backgroundTitle: "Sobre el proyecto",
  backgroundText:
    "Un espacio para compartir viajes, consejos y alternativas para quien quiere explorar el mundo sin depender de postureo ni clichés.",
  email: "",
};

export const BLOG_HOME_URL = "https://neverunpackspain.com/";

/** Contacto directo (CTA flotante y “Hablamos”). */
export const WHATSAPP_CONTACT_URL = "http://wa.me/+34619531620";
