"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

export function BMICta() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="bmi-cta-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Link
            href="/bmi-calculator"
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 p-8 md:p-12 shadow-glow border border-emerald-400/30"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 90% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
                  radial-gradient(circle at 10% 80%, rgba(249,115,22,0.3) 0%, transparent 40%)`,
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0"
                >
                  <Calculator className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold font-poppins mb-3">
                    <Activity className="w-3.5 h-3.5" />
                    Free Tool
                  </span>
                  <h2
                    id="bmi-cta-heading"
                    className="text-2xl md:text-3xl font-bold font-poppins text-white mb-2"
                  >
                    Check Your BMI Instantly
                  </h2>
                  <p className="text-emerald-50 font-inter text-base md:text-lg max-w-xl">
                    Free BMI Calculator — know your category, ideal weight range,
                    and personalized health tips in seconds.
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-700 font-bold font-poppins shadow-lg group-hover:scale-105 transition-transform w-full md:w-auto">
                Free BMI Calculator
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
