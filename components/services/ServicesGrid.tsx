"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  SERVICE_CATEGORIES,
  SERVICES,
  type ServiceItem,
} from "@/lib/services-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered: ServiceItem[] =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold font-poppins transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-beige-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filtered.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Online consultation note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-100 text-center"
        >
          <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
            Online Consultation Available
          </h3>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">
            All services are available via online consultation for clients
            across India. Receive your personalized diet plan digitally with
            regular WhatsApp follow-ups and progress tracking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
