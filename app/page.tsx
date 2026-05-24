import { AboutPreview } from "@/components/sections/AboutPreview";
import { BMICta } from "@/components/sections/BMICta";
import { ClientBenefits } from "@/components/sections/ClientBenefits";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";
import { getFAQSchema } from "@/lib/seo";
import dynamic from "next/dynamic";

const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
  { loading: () => <section className="py-20 min-h-[200px]" aria-hidden /> }
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { loading: () => <section className="py-20 min-h-[200px]" aria-hidden /> }
);

const WeightPrograms = dynamic(
  () =>
    import("@/components/sections/WeightPrograms").then((m) => ({
      default: m.WeightPrograms,
    })),
  { loading: () => <section className="py-20 min-h-[200px]" aria-hidden /> }
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQSchema(FAQ_ITEMS)} />
      <Hero />
      <BMICta />
      <StatsSection />
      <AboutPreview />
      <ClientBenefits />
      <WhyChooseUs />
      <ServicesPreview />
      <WeightPrograms />
      <Testimonials />
      <ConsultationCTA />
      <FAQ />
      <ContactPreview />
      <SocialLinks />
    </>
  );
}
