"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WEIGHT_PROGRAMS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

export function WeightPrograms() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Weight Management"
          title="Achieve Your Ideal Weight Safely"
          subtitle="Scientifically designed programs with proven monthly results and continuous expert support."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Weight Loss */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c25dee48ef?w=600&q=80"
                alt="Weight loss program"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <TrendingDown className="w-6 h-6" />
                <span className="font-bold font-poppins text-lg">
                  {WEIGHT_PROGRAMS.loss.subtitle}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
                {WEIGHT_PROGRAMS.loss.title}
              </h3>
              <p className="text-gray-600 font-inter mb-6 leading-relaxed">
                {WEIGHT_PROGRAMS.loss.description}
              </p>
              <ul className="space-y-2 mb-8">
                {WEIGHT_PROGRAMS.loss.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-gray-700 font-inter text-sm"
                  >
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={getWhatsAppLink("Hi, I'm interested in the Weight Loss Program.")}
                variant="primary"
                external
                className="w-full"
              >
                Start Weight Loss Journey
              </Button>
            </div>
          </motion.article>

          {/* Weight Gain */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2a10?w=600&q=80"
                alt="Weight gain program"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent" />
              <motion.div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <TrendingUp className="w-6 h-6" />
                <span className="font-bold font-poppins text-lg">
                  {WEIGHT_PROGRAMS.gain.subtitle}
                </span>
              </motion.div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
                {WEIGHT_PROGRAMS.gain.title}
              </h3>
              <p className="text-gray-600 font-inter mb-6 leading-relaxed">
                {WEIGHT_PROGRAMS.gain.description}
              </p>
              <ul className="space-y-2 mb-8">
                {WEIGHT_PROGRAMS.gain.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-gray-700 font-inter text-sm"
                  >
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={getWhatsAppLink("Hi, I'm interested in the Weight Gain Program.")}
                variant="secondary"
                external
                className="w-full"
              >
                Start Weight Gain Journey
              </Button>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
