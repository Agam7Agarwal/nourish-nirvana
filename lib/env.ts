/** Typed access to public environment variables (safe for client bundles). */

export const ENV = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://nourishnirvana.in",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
} as const;

export const isGaEnabled = Boolean(ENV.gaId);
export const isFormEnabled = Boolean(ENV.formEndpoint);
