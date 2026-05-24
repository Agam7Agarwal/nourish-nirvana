"use client";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { motion } from "framer-motion";
import {
  EXPERIENCE,
  NAV_LINKS,
  SITE_CONFIG,
} from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Instagram,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <Logo
                variant="footer"
                className="ring-emerald-400/40 bg-white/95"
                alt={`${SITE_CONFIG.fullName} logo`}
              />
            </Link>
            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
              {SITE_CONFIG.qualification}. Trusted clinical nutrition care in
              Ghaziabad with free consultation.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-emerald-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-blue-600 transition-colors"
                aria-label="Google Business Profile"
              >
                <MapPinned className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.gmail}
                className="p-2.5 rounded-full bg-white/10 hover:bg-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold font-poppins text-lg mb-4 text-emerald-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-300 transition-colors font-inter text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-emerald-300 transition-colors font-inter text-sm"
                >
                  Weight Loss Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/bmi-calculator"
                  className="text-gray-400 hover:text-emerald-300 transition-colors font-inter text-sm"
                >
                  Free BMI Calculator
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold font-poppins text-lg mb-4 text-emerald-300">
              Experience
            </h3>
            <ul className="space-y-2">
              {EXPERIENCE.map((exp) => (
                <li
                  key={exp}
                  className="text-gray-400 font-inter text-sm flex items-start gap-2"
                >
                  <span className="text-emerald-400 mt-1">▸</span>
                  {exp}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold font-poppins text-lg mb-4 text-emerald-300">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm font-inter">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                {SITE_CONFIG.address.full}
              </li>
              {SITE_CONFIG.phoneDisplay.map((phone, i) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${SITE_CONFIG.phones[i]}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button
                href={getWhatsAppLink()}
                variant="whatsapp"
                size="sm"
                external
                className="w-full sm:w-auto"
              >
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-inter">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. | Clinical
            Dietitian in Ghaziabad
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
