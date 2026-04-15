import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import Expertises from "@/components/sections/Expertises";
import SocialProof from "@/components/sections/SocialProof";
import { shareOgImage, unpackShareDescription } from "@/data/share-metadata";

const description = unpackShareDescription();

export const metadata: Metadata = {
  title: "Never Unpack",
  description,
  openGraph: {
    title: "Never Unpack — Comunidad viajerx · 📇 Andreína Pérez",
    description,
    type: "website",
    url: "/unpack",
    locale: "es_ES",
    siteName: "📇 Andreína Pérez",
    images: [shareOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Unpack — Comunidad viajerx · 📇 Andreína Pérez",
    description,
    images: [shareOgImage.url],
  },
  alternates: {
    canonical: "/unpack",
  },
};

export default function UnpackPage() {
  return (
    <>
      <Hero />
      <FeaturedWorks />
      <Expertises />
      <SocialProof />
    </>
  );
}
