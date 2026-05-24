"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="pt-28 pb-8 md:pt-32 bg-hero-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold font-poppins mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            {SITE_CONFIG.consultation.title} — {SITE_CONFIG.consultation.modes}.
            We&apos;d love to hear from you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
