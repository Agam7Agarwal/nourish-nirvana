import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { WeightPrograms } from "@/components/sections/WeightPrograms";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Diet & Nutrition Services",
  description:
    "Specialized diet plans: PCOD, diabetes, thyroid, pregnancy, keto, renal, weight loss & gain. Online & clinic consultation in Ghaziabad by Dt. Ritika Gupta.",
  path: "/services",
  keywords: [
    "PCOD Diet Expert",
    "Diabetes Diet Consultant",
    "Thyroid Dietician",
    "Weight Loss Dietician Ghaziabad",
    "Keto Diet Plan",
  ],
});

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "DietNutrition",
          name: SITE_CONFIG.name,
        },
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema,
          getBreadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Services", url: `${SITE_CONFIG.url}/services` },
          ]),
        ]}
      />
      <ServicesHero />
      <ServicesGrid />
      <WeightPrograms />
      <ConsultationCTA />
    </>
  );
}
