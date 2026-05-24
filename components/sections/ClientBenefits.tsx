"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_BENEFITS } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ClientBenefits() {
  return (
    <section
      className="py-20 md:py-28 bg-beige-50"
      aria-labelledby="client-benefits-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Your Benefits"
          title="Why Clients Choose Our Nutrition Care"
          subtitle="Premium clinical dietitian support designed for real, lasting health outcomes."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {CLIENT_BENEFITS.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4 p-6 md:p-8 rounded-2xl bg-white shadow-card border border-emerald-50 hover:border-emerald-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-poppins text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
