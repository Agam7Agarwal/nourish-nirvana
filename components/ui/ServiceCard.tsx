"use client";

import { Button } from "@/components/ui/Button";
import type { ServiceItem } from "@/lib/services-data";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <motion.div
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-orange-50 text-emerald-600 group-hover:from-emerald-500 group-hover:to-emerald-400 group-hover:text-white transition-all duration-300"
      >
        <Icon className="w-7 h-7" aria-hidden="true" />
      </motion.div>

      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-600 font-inter leading-relaxed flex-grow mb-6">
        {service.description}
      </p>

      <Button
        href={getWhatsAppLink(
          `Hi, I'm interested in ${service.title}. Please share details.`
        )}
        variant="outline"
        size="sm"
        external
        className="w-full group-hover:border-emerald-500 group-hover:bg-emerald-50"
        ariaLabel={`Book consultation for ${service.title}`}
      >
        Book Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.article>
  );
}
