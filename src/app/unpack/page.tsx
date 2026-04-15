import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import Expertises from "@/components/sections/Expertises";
import SocialProof from "@/components/sections/SocialProof";
import { BLOG_POST_COUNT } from "@/data/site";

const description = `Comunidad de viajerxs: relatos por los cinco continentes, más de ${BLOG_POST_COUNT} historias en el blog y un equipo que las hace posibles.`;

export const metadata: Metadata = {
  title: "Never Unpack",
  description,
  openGraph: {
    title: "Never Unpack — Comunidad viajerx",
    description,
  },
  twitter: {
    title: "Never Unpack — Comunidad viajerx",
    description,
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
