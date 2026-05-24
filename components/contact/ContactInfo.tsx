"use client";

import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Clinic Address",
    lines: [SITE_CONFIG.address.street, `${SITE_CONFIG.address.city} - ${SITE_CONFIG.address.pincode}`],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: SITE_CONFIG.phoneDisplay,
    links: SITE_CONFIG.phones.map((p) => `tel:+91${p}`),
  },
  {
    icon: Mail,
    title: "Email",
    lines: [SITE_CONFIG.email],
    links: [`mailto:${SITE_CONFIG.email}`],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [SITE_CONFIG.workingHours.weekdays, SITE_CONFIG.workingHours.sunday],
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {contactCards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ x: 4 }}
          className="flex gap-4 p-6 rounded-2xl bg-white shadow-card border border-emerald-50 hover:border-emerald-200 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-orange-50 flex items-center justify-center shrink-0">
            <card.icon className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-bold font-poppins text-gray-900 mb-2">
              {card.title}
            </h3>
            {card.lines.map((line, j) =>
              card.links?.[j] ? (
                <a
                  key={line}
                  href={card.links[j]}
                  className="block text-gray-600 font-inter hover:text-emerald-600 transition-colors"
                >
                  {line}
                </a>
              ) : (
                <p key={line} className="text-gray-600 font-inter">
                  {line}
                </p>
              )
            )}
          </div>
        </motion.div>
      ))}

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden shadow-card border border-emerald-100 h-64 relative"
      >
        <iframe
          title="Nourish Nirvana Clinic - Govindpuram Ghaziabad"
          src={SITE_CONFIG.mapsEmbed}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          href={getWhatsAppLink()}
          variant="whatsapp"
          external
          className="flex-1"
        >
          WhatsApp Now
        </Button>
        <Button
          href={`tel:+91${SITE_CONFIG.phones[0]}`}
          variant="primary"
          external
          className="flex-1"
        >
          <Phone className="w-4 h-4" />
          Call Clinic
        </Button>
      </div>
    </motion.div>
  );
}
