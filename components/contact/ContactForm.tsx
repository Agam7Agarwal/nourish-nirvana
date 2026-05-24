"use client";

import { Toast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { isFormEnabled } from "@/lib/env";
import { submitContactForm } from "@/lib/form-submit";
import {
  trackContactFormSubmit,
  trackWhatsAppClick,
} from "@/lib/gtag";
import { getWhatsAppLink, isValidEmail, isValidIndianPhone } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { useCallback, useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    variant: "success" | "error";
  }>({ visible: false, message: "", variant: "success" });

  const showToast = useCallback(
    (message: string, variant: "success" | "error") => {
      setToast({ visible: true, message, variant });
    },
    []
  );

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!isValidIndianPhone(formData.phone)) {
      next.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!isValidEmail(formData.email)) {
      next.email = "Enter a valid email address";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitViaWhatsApp = () => {
    const message = `Hi, I'm ${formData.name}. Phone: ${formData.phone}. Email: ${formData.email || "N/A"}. Service: ${formData.service || "General"}. Message: ${formData.message}`;
    trackWhatsAppClick("contact_form_fallback");
    trackContactFormSubmit(formData.service);
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    showToast("Opening WhatsApp to complete your enquiry.", "success");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    setLoading(true);

    if (isFormEnabled) {
      const result = await submitContactForm(formData);
      setLoading(false);

      if (result.ok) {
        trackContactFormSubmit(formData.service);
        setSubmitted(true);
        setFormData(initialForm);
        showToast(
          "Thank you! Your message was sent. We'll respond within 24 hours.",
          "success"
        );
        return;
      }
      showToast(
        result.error || "Submission failed. Try WhatsApp instead.",
        "error"
      );
      return;
    }

    setLoading(false);
    submitViaWhatsApp();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border outline-none transition-all font-inter ${
      errors[field]
        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
    }`;

  return (
    <>
      <Toast
        message={toast.message}
        variant={toast.variant}
        visible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-emerald-50"
      >
        <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
          Send Us a Message
        </h2>
        <p className="text-gray-600 font-inter mb-6 text-sm">
          Book your free diet consultation — we respond within hours via call or
          WhatsApp.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              We&apos;ve received your enquiry and will contact you shortly.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium font-poppins text-gray-700 mb-1.5"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
                placeholder="Your full name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium font-poppins text-gray-700 mb-1.5"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                  placeholder="10-digit mobile"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-poppins text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  placeholder="your@email.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium font-poppins text-gray-700 mb-1.5"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputClass("service")} bg-white`}
              >
                <option value="">Select a service</option>
                <option value="Weight Loss">Weight Loss Program</option>
                <option value="Weight Gain">Weight Gain Program</option>
                <option value="PCOD">PCOD & Obesity Diet</option>
                <option value="Diabetes">Diabetes & Hypertension Diet</option>
                <option value="Thyroid">Thyroid Disease Diet</option>
                <option value="Pregnancy">Pregnancy & Lactation Diet</option>
                <option value="Other">Other / General Consultation</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium font-poppins text-gray-700 mb-1.5"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass("message")} resize-none`}
                placeholder="Tell us about your health goals..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
                size="lg"
                trackLabel="contact_form_submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {isFormEnabled ? "Submit Enquiry" : "Send via WhatsApp"}
                  </>
                )}
              </Button>
              <Button
                href={getWhatsAppLink()}
                variant="whatsapp"
                size="lg"
                external
                className="flex-1"
                trackLabel="contact_form_whatsapp"
                onClick={() => trackWhatsAppClick("contact_form_sidebar")}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            <p className="text-xs text-gray-500 font-inter text-center">
              By submitting, you agree to be contacted for your{" "}
              {SITE_CONFIG.consultation.title.toLowerCase()}.
              {!isFormEnabled &&
                " Form delivery uses WhatsApp when email endpoint is not configured."}
            </p>
          </form>
        )}
      </motion.div>
    </>
  );
}
