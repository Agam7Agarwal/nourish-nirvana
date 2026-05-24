"use client";

import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/gtag";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_HREF = getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export function FloatingWhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick("floating_button");
  };

  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 md:right-6 z-50 group"
      aria-label="Chat on WhatsApp with Dt. Ritika Gupta"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-soft"
        aria-hidden="true"
      />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 group-hover:shadow-green-500/60 transition-shadow">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white" />
      </span>
    </motion.a>
  );
}
