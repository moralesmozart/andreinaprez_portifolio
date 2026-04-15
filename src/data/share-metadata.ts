import { BLOG_POST_COUNT } from "@/data/site";

/** Absolute image for link previews (WhatsApp, iMessage, etc.); avoids missing /public file. */
export const SHARE_OG_IMAGE_URL =
  "https://i0.wp.com/neverunpackspain.com/wp-content/uploads/2020/06/foto-andreina.jpg";

export const shareOgImage = {
  url: SHARE_OG_IMAGE_URL,
  alt: "Andreína Pérez — periodista y comunicadora audiovisual",
} as const;

/** Short summary for chat apps (~2 líneas en preview). */
export const homeShareDescription = `Andreína Pérez — periodista y comunicadora audiovisual. Portfolio, Never Unpack (comunidad viajerx, ${BLOG_POST_COUNT}+ relatos en el blog) y contacto por WhatsApp. Historias reales, sin postureo.`;

export function unpackShareDescription(): string {
  return `Comunidad viajerx: relatos por los cinco continentes, más de ${BLOG_POST_COUNT} historias en el blog y un equipo que las hace posibles. Por Andreína Pérez.`;
}
