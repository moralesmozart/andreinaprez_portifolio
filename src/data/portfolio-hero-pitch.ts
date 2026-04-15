import { PORTFOLIO_SLIDE_COUNT } from "@/lib/portfolio-slides";
import { BLOG_POST_COUNT } from "@/data/site";
import { teamMembers } from "@/data/team";

const teamSize = teamMembers.length;

/**
 * Líneas del pitch inicial (home portfolio): tono cercano + datos concretos para recruiters.
 * Se muestran con revelado palabra a palabra al hacer scroll (misma idea que /unpack#about).
 */
export const portfolioHeroPitchLines: string[] = [
  `Más de 8 años en medios: redacción, micrófono, cámara, streaming y community management de guerrilla cuando hace falta — con humor de redacción a las 23:58 y sin postureo de influencer perdido.`,
  `He pasado por Cadena SER y Onda Cero en La Palma, series y documentales con RTVE, Univision, Rakuten TV y Cruz Roja, piezas con El Cañonazo Transmedia, y colaboré en un proyecto de datos con Google en Latinoamérica — sí, Google; tengo testigos.`,
  `Llevo 1 libro de poesía publicado, Never Unpack con más de ${BLOG_POST_COUNT} historias en el blog, un equipo de ${teamSize} personas que lo hacen posible, y demasiadas horas de edición de vídeo como para admitirlas sin rubor.`,
  `Abajo tienes ${PORTFOLIO_SLIDE_COUNT} láminas de portfolio si te gustan los PDF disfrazados de vida; si lo que buscas es alguien que hable claro en plató, sala de prensa o Slack, escríbeme: prometo evitar la reunión eterna que no decide nada.`,
];

export const portfolioHeroPitchCta = "¿Hablamos? Sin powerpoints eternos ✈️";
