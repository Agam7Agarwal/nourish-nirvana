"use client";

import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";

const foodImages = [
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    alt: "Healthy balanced meal for weight management",
    className: "top-8 right-8 w-28 h-28 md:w-36 md:h-36",
    delay: 0.3,
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    alt: "Fresh vegetables and salad bowl",
    className: "top-32 right-32 w-24 h-24 md:w-32 md:h-32",
    delay: 0.5,
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    alt: "Nutritious wellness meal bowl",
    className: "bottom-24 right-16 w-32 h-32 md:w-40 md:h-40",
    delay: 0.7,
  },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern pt-20"
      aria-label="Hero section"
    >
      <FloatingBlob color="emerald" size="lg" className="-top-20 -left-20" />
      <FloatingBlob color="orange" size="md" className="top-1/3 right-0" />
      <FloatingBlob color="beige" size="sm" className="bottom-20 left-1/4" />

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(249,115,22,0.1) 0%, transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold font-poppins mb-6"
            >
              <Sparkles className="w-4 h-4" />
              {SITE_CONFIG.consultation.title} — {SITE_CONFIG.consultation.modes}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              Best Dietician in Ghaziabad —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                Clinical Nutrition Expert
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed mb-4 max-w-xl">
              Personalized weight loss diet plans, PCOD dietician care, diabetes &
              thyroid nutrition — by{" "}
              <strong className="text-emerald-700">{SITE_CONFIG.dietician}</strong>.
              Online diet consultation & clinic visits in Delhi NCR.
            </p>

            <p className="text-base text-gray-500 font-inter mb-8">
              {SITE_CONFIG.shortQualification} · Clinical Dietitian & Nutritionist
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackLabel="hero_book_consultation"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={getWhatsAppLink()}
                variant="whatsapp"
                size="lg"
                external
                trackLabel="hero_whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600 font-inter"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                PCOD & Diabetes Expert
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                Online & Clinic Visits
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Govindpuram, Ghaziabad
              </span>
            </motion.div>
          </motion.div>

          {/* Visual side — original layout: center logo + floating food images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 rounded-full bg-gradient-to-br from-emerald-100 to-orange-50 flex items-center justify-center shadow-glow"
              >
                <div className="relative flex items-center justify-center bg-white rounded-2xl ring-4 ring-white shadow-xl">
                  <Logo variant="hero" priority ring />
                </div>
              </motion.div>
            </div>

            {foodImages.map((img) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: img.delay, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`absolute ${img.className} rounded-2xl overflow-hidden shadow-card ring-4 ring-white`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: logo + compact visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden flex justify-center py-6"
          >
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100 to-orange-50 flex items-center justify-center shadow-glow">
              <Logo variant="hero" priority />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 font-inter">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-emerald-300 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
