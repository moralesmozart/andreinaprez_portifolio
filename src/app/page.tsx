import type { Metadata } from "next";
import PortfolioLanding from "@/components/portfolio/PortfolioLanding";
import { homeShareDescription, shareOgImage } from "@/data/share-metadata";

export const metadata: Metadata = {
  description: homeShareDescription,
  openGraph: {
    title: "📇 Andreína Pérez — Periodista y portfolio",
    description: homeShareDescription,
    type: "website",
    url: "/",
    images: [shareOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "📇 Andreína Pérez — Periodista y portfolio",
    description: homeShareDescription,
    images: [shareOgImage.url],
  },
};

export default function HomePage() {
  return <PortfolioLanding />;
}
