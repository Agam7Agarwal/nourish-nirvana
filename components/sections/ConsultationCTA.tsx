"use client";

import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, Phone, Video } from "lucide-react";

export function ConsultationCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600" />
      <FloatingPattern />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold font-poppins mb-6 backdrop-blur-sm">
            Limited Slots Available
          </span>

          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4 leading-tight">
            {SITE_CONFIG.consultation.title}
          </h2>
          <p className="text-xl text-emerald-100 font-inter mb-2">
            {SITE_CONFIG.consultation.modes}
          </p>
          <p className="text-emerald-100/80 font-inter mb-10 max-w-2xl mx-auto">
            Take the first step towards a healthier you. Book your complimentary
            session with Dt. Ritika Gupta today — no obligations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              href={getWhatsAppLink()}
              variant="secondary"
              size="lg"
              external
              className="min-w-[220px]"
              trackLabel="cta_book_whatsapp"
            >
              <Calendar className="w-5 h-5" />
              Book on WhatsApp
            </Button>
            <Button
              href={`tel:+91${SITE_CONFIG.phones[0]}`}
              variant="outline"
              size="lg"
              external
              className="min-w-[220px] !border-white !text-white hover:!bg-white/20"
            >
              <Phone className="w-5 h-5" />
              Call {SITE_CONFIG.phoneDisplay[0]}
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Calendar, label: "Free First Visit" },
              { icon: Video, label: "Online Available" },
              { icon: Phone, label: "Same Day Response" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 text-white/90"
              >
                <item.icon className="w-6 h-6 text-orange-300" />
                <span className="text-sm font-inter">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <motion.div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
    </div>
  );
}
