import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { BLOG_POST_COUNT } from "@/data/site";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const portfolioSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-portfolio-serif",
  weight: ["400", "600", "700"],
});

const portfolioScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-portfolio-script",
  weight: ["400", "700"],
});

const BASE_URL = "https://neverunpackspain.com";

const defaultDescription = `Andreína Pérez — comunicación, viajes y proyectos. Never Unpack: comunidad viajerx con más de ${BLOG_POST_COUNT} relatos en el blog.`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Andreína Pérez",
    template: "%s · Andreína Pérez",
  },
  description: defaultDescription,
  keywords: [
    "Andreína Pérez",
    "Never Unpack",
    "viajes",
    "blog de viajes",
    "viajerxs",
    "comunidad",
    "Europa",
    "América",
    "Asia",
    "África",
    "Oceanía",
  ],
  authors: [{ name: "Andreína Pérez", url: BASE_URL }],
  creator: "Andreína Pérez",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Andreína Pérez",
    title: "Andreína Pérez",
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
    title: "Andreína Pérez",
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
    <html
      lang="es"
      className={`${instrumentSans.variable} ${portfolioSerif.variable} ${portfolioScript.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
