"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { trackConsultationBooking, trackWhatsAppClick } from "@/lib/gtag";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function StickyConsultation() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      onClick={() => {
        trackWhatsAppClick("sticky_mobile_bar");
        trackConsultationBooking("sticky_mobile_bar");
      }}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-3 px-4 flex items-center justify-center gap-2 font-semibold font-poppins shadow-lg shadow-emerald-500/30"
      aria-label="Book free consultation"
    >
      <Calendar className="w-5 h-5" />
      {SITE_CONFIG.consultation.title} — {SITE_CONFIG.consultation.modes}
    </motion.a>
  );
}
