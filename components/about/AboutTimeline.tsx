"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/constants";
import { motion } from "framer-motion";

export function AboutTimeline() {
  return (
    <section className="py-20 md:py-28 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Journey"
          title="Professional Timeline"
          subtitle="A career dedicated to clinical excellence and transforming lives through nutrition."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 md:-translate-x-1/2"
            aria-hidden="true"
          />

          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100 md:-translate-x-1/2 z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold font-poppins mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
