"use client";

import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function BMIConsultationCTA() {
  const message = `Hi ${SITE_CONFIG.dietician}, I used your BMI calculator and would like personalized diet guidance.`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 md:p-12 text-center text-white shadow-glow"
    >
      <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-3">
        Need Personalized Diet Guidance?
      </h2>
      <p className="text-emerald-100 font-inter max-w-2xl mx-auto mb-8">
        BMI is a starting point — not a diagnosis. Book a free consultation with{" "}
        {SITE_CONFIG.dietician} for a customized clinical nutrition plan in
        Ghaziabad or online.
      </p>
      <Button
        href={getWhatsAppLink(message)}
        variant="secondary"
        size="lg"
        external
        trackLabel="bmi_page_whatsapp"
        className="!bg-white !text-emerald-700 hover:!bg-emerald-50"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp Free Consultation
      </Button>
    </motion.section>
  );
}
