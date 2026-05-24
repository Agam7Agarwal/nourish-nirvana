"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      className="w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
      aria-hidden="true"
    />
  );
}
