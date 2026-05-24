import { ENV, isGaEnabled } from "./env";

export const GA_MEASUREMENT_ID = ENV.gaId;

export type GtagEventName =
  | "page_view"
  | "click"
  | "whatsapp_click"
  | "contact_form_submit"
  | "consultation_booking"
  | "button_click";

export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  page_title?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export function pageview(url: string, title?: string) {
  if (!isGaEnabled || typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
}

export function event(
  action: GtagEventName,
  params: GtagEventParams = {}
) {
  if (!isGaEnabled || typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, params);
}

export function trackButtonClick(label: string, category = "engagement") {
  event("button_click", {
    event_category: category,
    event_label: label,
  });
}

export function trackWhatsAppClick(source: string) {
  event("whatsapp_click", {
    event_category: "conversion",
    event_label: source,
  });
}

export function trackContactFormSubmit(service?: string) {
  event("contact_form_submit", {
    event_category: "conversion",
    event_label: service || "general",
  });
}

export function trackConsultationBooking(source: string) {
  event("consultation_booking", {
    event_category: "conversion",
    event_label: source,
  });
}
