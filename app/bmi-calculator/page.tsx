import { BMICalculator } from "@/components/bmi/BMICalculator";
import { BMIFaq } from "@/components/bmi/BMIFaq";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { BMI_FAQ_ITEMS } from "@/lib/bmi-faq";
import {
  createMetadata,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Free BMI Calculator",
  description:
    "Free BMI calculator by Nourish Nirvana — check underweight, normal, overweight, or obese categories, ideal weight range & health tips. Clinical dietitian in Ghaziabad.",
  path: "/bmi-calculator",
  keywords: [
    "BMI Calculator",
    "Body Mass Index Calculator",
    "Ideal Weight Calculator",
    "BMI Chart India",
    "Weight Calculator",
  ],
});

export default function BMICalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          getFAQSchema(BMI_FAQ_ITEMS),
          getBreadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            {
              name: "BMI Calculator",
              url: `${SITE_CONFIG.url}/bmi-calculator`,
            },
          ]),
        ]}
      />

      <section className="pt-28 pb-8 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="text-sm font-inter text-gray-500 mb-6"
          >
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">BMI Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 max-w-3xl">
            Free BMI Calculator — Check Your Body Mass Index
          </h1>
          <p className="mt-3 text-gray-600 font-inter max-w-2xl">
            Accurate BMI tool with cm/kg or feet-inches support. Get your
            category, ideal weight range, and expert nutrition tips from{" "}
            {SITE_CONFIG.dietician}.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BMICalculator />
        </div>
      </section>

      <BMIFaq />
    </>
  );
}
