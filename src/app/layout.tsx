import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { homeShareDescription, shareOgImage } from "@/data/share-metadata";
import { getSiteBaseUrl } from "@/lib/site-base-url";

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

const siteBaseUrl = getSiteBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(`${siteBaseUrl}/`),
  title: {
    default: "📇 Andreína Pérez",
    template: "%s · Andreína Pérez",
  },
  description: homeShareDescription,
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
  authors: [{ name: "Andreína Pérez", url: siteBaseUrl }],
  creator: "Andreína Pérez",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "📇 Andreína Pérez",
    title: "📇 Andreína Pérez — Periodista y portfolio",
    description: homeShareDescription,
    images: [shareOgImage],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "📇 Andreína Pérez — Periodista y portfolio",
    description: homeShareDescription,
    images: [shareOgImage.url],
  },
  alternates: {
    canonical: "/",
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
