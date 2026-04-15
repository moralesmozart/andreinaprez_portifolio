/**
 * Canonical site origin + optional basePath (GitHub Pages).
 * Set NEXT_PUBLIC_SITE_URL at build time if the public URL is not neverunpackspain.com.
 */
export function getSiteBaseUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://neverunpackspain.com").trim().replace(/\/$/, "");
  const bp = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim().replace(/\/$/, "");
  if (!bp) return raw;
  const seg = bp.startsWith("/") ? bp : `/${bp}`;
  return `${raw}${seg}`;
}
