import { ENV } from "./env";

export interface ContactFormPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormPayload
): Promise<{ ok: boolean; error?: string }> {
  const endpoint = ENV.formEndpoint;

  if (!endpoint) {
    return { ok: false, error: "Form endpoint not configured" };
  }

  try {
    if (endpoint.includes("web3forms.com")) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ENV.web3formsKey,
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          message: data.message,
          subject: `New enquiry — ${data.service || "General"} | Nourish Nirvana`,
        }),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) {
        return { ok: false, error: json.message || "Submission failed" };
      }
      return { ok: true };
    }

    // FormSubmit (default): POST to formsubmit.co/ajax/...
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || "not provided",
        service: data.service || "General Consultation",
        message: data.message,
        _subject: `New enquiry — ${data.name} | Nourish Nirvana`,
        _template: "table",
      }),
    });

    if (!res.ok) {
      return { ok: false, error: "Submission failed. Please try WhatsApp." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again or WhatsApp us." };
  }
}
