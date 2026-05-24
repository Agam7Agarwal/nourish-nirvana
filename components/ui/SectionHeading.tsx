"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold font-poppins tracking-wide",
            light
              ? "bg-white/20 text-white backdrop-blur-sm"
              : "bg-emerald-100 text-emerald-700"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl font-inter leading-relaxed",
            light ? "text-white/85" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "mt-6 h-1 rounded-full origin-left",
          align === "center" && "mx-auto origin-center",
          light
            ? "bg-gradient-to-r from-orange-300 to-emerald-300 w-24"
            : "bg-gradient-to-r from-emerald-500 to-orange-400 w-20"
        )}
      />
    </motion.div>
  );
}
