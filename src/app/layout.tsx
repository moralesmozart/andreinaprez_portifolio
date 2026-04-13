import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BLOG_POST_COUNT } from "@/data/site";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://neverunpackspain.com";

const defaultDescription = `Comunidad de viajerxs: relatos por los cinco continentes, más de ${BLOG_POST_COUNT} historias en el blog y un equipo que las hace posibles.`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Never Unpack — Comunidad viajerx",
    template: "%s — Never Unpack",
  },
  description: defaultDescription,
  keywords: [
    "Never Unpack",
    "viajes",
    "blog de viajes",
    "viajerxs",
    "Europa",
    "América",
    "Asia",
    "África",
    "Oceanía",
  ],
  authors: [{ name: "Never Unpack", url: BASE_URL }],
  creator: "Never Unpack",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Never Unpack",
    title: "Never Unpack — Comunidad viajerx",
    description: defaultDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Never Unpack",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Unpack — Comunidad viajerx",
    description: defaultDescription,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={instrumentSans.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
