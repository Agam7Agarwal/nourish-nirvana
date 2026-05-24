"use client";

import { Logo } from "@/components/ui/Logo";
import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-beige-50"
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="mb-4"
      >
        <Logo variant="footer" priority alt="Loading Nourish Nirvana" />
      </motion.div>
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="font-poppins font-semibold text-emerald-700"
      >
        Nourish Nirvana
      </motion.p>
    </motion.div>
  );
}
