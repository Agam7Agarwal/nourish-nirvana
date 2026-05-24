import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";
import { ENV } from "./env";

export const SEO_KEYWORDS = [
  "Best Dietician in Ghaziabad",
  "Online Diet Consultation",
  "PCOD Dietician",
  "Weight Loss Diet Plan",
  "Nutritionist in Delhi NCR",
  "Thyroid Diet Expert",
  "Clinical Dietitian",
  "Dietician for Diabetes",
  "Weight Gain Diet",
  "Pregnancy Nutrition",
  "Nutritionist in Govindpuram",
  "Dietician Ghaziabad",
  "Dt Ritika Gupta",
  "Nourish Nirvana",
] as const;

const DEFAULT_DESCRIPTION =
  "Best clinical dietitian in Ghaziabad & Delhi NCR. Personalized weight loss, PCOD, diabetes, thyroid & pregnancy nutrition by Dt. Ritika Gupta. Free consultation — clinic & online.";

interface PageSEO {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords = [],
  ogImage = "/og-image.jpg",
  noIndex = false,
}: PageSEO): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const isHome = path === "" || path === "/";
  const pageTitle = isHome
    ? `${SITE_CONFIG.fullName} | Best Dietician in Ghaziabad`
    : title;

  const allKeywords = [...SEO_KEYWORDS, ...keywords].join(", ");

  const metadata: Metadata = {
    title: pageTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_CONFIG.dietician, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.dietician,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_CONFIG.name,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — Clinical Dietitian in Ghaziabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
      creator: "@nourishnirvana",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    category: "health",
    applicationName: SITE_CONFIG.name,
    formatDetection: {
      telephone: true,
      email: true,
    },
  };

  if (ENV.gscVerification) {
    metadata.verification = {
      google: ENV.gscVerification,
    };
  }

  return metadata;
}

/** Root layout metadata with title template for child pages */
export function getRootMetadata(): Metadata {
  const base = createMetadata({
    title: SITE_CONFIG.fullName,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  });

  return {
    ...base,
    title: {
      default: `${SITE_CONFIG.fullName} | Best Dietician in Ghaziabad`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
  };
}

const SERVICES_OFFERED = [
  "Weight Loss Diet Plan",
  "Weight Gain Diet",
  "PCOD & Obesity Diet",
  "Diabetes & Hypertension Diet",
  "Thyroid Disease Diet",
  "Pregnancy & Lactation Nutrition",
  "Online Diet Consultation",
  "Clinical Therapeutic Diets",
];

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.fullName,
    description:
      "Clinical dietitian and nutritionist offering personalized diet plans for weight loss, PCOD, diabetes, thyroid, pregnancy, and therapeutic nutrition in Ghaziabad and Delhi NCR.",
    url: SITE_CONFIG.url,
    telephone: `+91${SITE_CONFIG.phones[0]}`,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/logo.png`,
    logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/logo.png` },
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: "Uttar Pradesh",
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6692,
      longitude: 77.4538,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nutrition & Diet Services",
      itemListElement: SERVICES_OFFERED.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${SITE_CONFIG.url}/#localbusiness` },
        },
      })),
    },
    founder: {
      "@id": `${SITE_CONFIG.url}/#nutritionist`,
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.whatsapp,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.googleBusiness,
    ],
  };
}

export function getNutritionistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "Nutritionist"],
    "@id": `${SITE_CONFIG.url}/#nutritionist`,
    name: SITE_CONFIG.dietician,
    jobTitle: "Clinical Dietitian & Nutritionist",
    description:
      "M.Sc. Food Science & Nutrition. Expert in weight management, PCOD, diabetes, thyroid, and pregnancy nutrition in Ghaziabad.",
    url: SITE_CONFIG.url,
    telephone: `+91${SITE_CONFIG.phones[0]}`,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/logo.png`,
    worksFor: {
      "@id": `${SITE_CONFIG.url}/#localbusiness`,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "M.Sc. Food Science & Nutrition",
    },
    knowsAbout: [
      "Clinical Nutrition",
      "Weight Loss Diet Plan",
      "PCOD Diet Management",
      "Diabetes Diet",
      "Thyroid Diet Expert",
      "Pregnancy Nutrition",
      "Online Diet Consultation",
    ],
    areaServed: SITE_CONFIG.serviceAreas,
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.whatsapp,
    ],
  };
}

export function getMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: `+91${SITE_CONFIG.phones[0]}`,
    medicalSpecialty: "Nutrition and Dietetics",
    availableService: SERVICES_OFFERED.map((name) => ({
      "@type": "MedicalTherapy",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  };
}

/** @deprecated Use getNutritionistSchema — kept for backward compatibility */
export function getPersonSchema() {
  return getNutritionistSchema();
}

export function getAllBusinessSchemas() {
  return [
    getLocalBusinessSchema(),
    getNutritionistSchema(),
    getMedicalBusinessSchema(),
  ];
}

export function getFAQSchema(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
