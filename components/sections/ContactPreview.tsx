"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactPreview() {
  return (
    <section className="py-20 md:py-28 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Visit Our Clinic in Ghaziabad"
          subtitle="We're here to help you start your health transformation. Reach out today!"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: MapPin,
                title: "Clinic Address",
                content: SITE_CONFIG.address.full,
              },
              {
                icon: Phone,
                title: "Phone",
                content: SITE_CONFIG.phoneDisplay.join(" | "),
                href: `tel:+91${SITE_CONFIG.phones[0]}`,
              },
              {
                icon: Mail,
                title: "Email",
                content: SITE_CONFIG.email,
                href: `mailto:${SITE_CONFIG.email}`,
              },
              {
                icon: Clock,
                title: "Working Hours",
                content: `${SITE_CONFIG.workingHours.weekdays}\n${SITE_CONFIG.workingHours.sunday}`,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-white shadow-card border border-emerald-50 hover:border-emerald-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 font-inter hover:text-emerald-600 transition-colors whitespace-pre-line"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-inter whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-card border border-emerald-100 h-[400px] lg:h-auto min-h-[300px] relative bg-emerald-50"
          >
            <iframe
              title="Nourish Nirvana Clinic Location"
              src={SITE_CONFIG.mapsEmbed}
              className="absolute inset-0 w-full h-full border-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="primary" className="flex-1">
                Full Contact Page
              </Button>
              <Button
                href={getWhatsAppLink()}
                variant="whatsapp"
                external
                className="flex-1"
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
