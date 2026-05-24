import { AboutHero } from "@/components/about/AboutHero";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import {
  createMetadata,
  getBreadcrumbSchema,
  getPersonSchema,
} from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `About ${SITE_CONFIG.dietician}`,
  description:
    "Meet Dt. Ritika Gupta — M.Sc. Food Science & Nutrition, clinical dietitian in Ghaziabad with experience at Max Hospital & Nutrikalp. Personalized nutrition philosophy.",
  path: "/about",
  keywords: [
    "Dt Ritika Gupta Dietician",
    "Clinical Dietitian Ghaziabad",
    "About Nourish Nirvana",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getPersonSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "About", url: `${SITE_CONFIG.url}/about` },
          ]),
        ]}
      />
      <AboutHero />
      <AboutPhilosophy />
      <AboutTimeline />
      <ConsultationCTA />
    </>
  );
}
