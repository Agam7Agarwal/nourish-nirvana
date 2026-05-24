"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FloatingBlobProps {
  className?: string;
  color?: "emerald" | "orange" | "beige";
  size?: "sm" | "md" | "lg";
}

const colors = {
  emerald: "bg-emerald-400/20",
  orange: "bg-orange-400/20",
  beige: "bg-beige-200/40",
};

const sizes = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
};

export function FloatingBlob({
  className,
  color = "emerald",
  size = "md",
}: FloatingBlobProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none animate-float",
        colors[color],
        sizes[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
