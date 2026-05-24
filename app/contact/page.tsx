import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import {
  createMetadata,
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getNutritionistSchema,
} from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Contact & Book Consultation",
  description:
    "Contact Nourish Nirvana clinic in Govindpuram, Ghaziabad. Call 9871747535, WhatsApp, or book free online diet consultation with Dt. Ritika Gupta.",
  path: "/contact",
  keywords: [
    "Online Diet Consultation",
    "Dietician Ghaziabad Contact",
    "Free Diet Consultation",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          getLocalBusinessSchema(),
          getNutritionistSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
          ]),
        ]}
      />
      <ContactHero />
      <section className="py-12 md:py-20 bg-beige-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
