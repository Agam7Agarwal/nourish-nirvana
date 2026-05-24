"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-hero-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold font-poppins mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Specialized Diet & Nutrition Plans
          </h1>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Evidence-based therapeutic diets by {SITE_CONFIG.dietician} —
            available at our Govindpuram clinic or online across India.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
