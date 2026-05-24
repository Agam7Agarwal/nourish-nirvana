"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ClipboardList,
  HeartPulse,
  IndianRupee,
  Microscope,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  Microscope,
  HeartPulse,
  Video,
  IndianRupee,
  TrendingUp,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Choose Nourish Nirvana?"
          subtitle="Premium clinical nutrition care that combines science, compassion, and real results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || HeartPulse;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group p-6 md:p-8 rounded-2xl",
                  "bg-white/80 backdrop-blur-sm border border-gray-100",
                  "shadow-card hover:shadow-card-hover transition-all duration-300",
                  "hover:border-emerald-200"
                )}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-orange-50 flex items-center justify-center mb-5 group-hover:from-emerald-500 group-hover:to-emerald-400 transition-all duration-300">
                  <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
