"use client";

import { Button } from "@/components/ui/Button";
import { EXPERIENCE, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold font-poppins mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 leading-tight">
              {SITE_CONFIG.dietician}
            </h1>
            <p className="text-xl text-emerald-700 font-semibold font-poppins mb-6">
              {SITE_CONFIG.qualification}
            </p>
            <p className="text-gray-600 font-inter leading-relaxed text-lg mb-6">
              A passionate clinical dietitian with over 5 years of experience
              transforming lives through evidence-based nutrition. Dt. Ritika
              Gupta combines her Master&apos;s degree in Food Science &
              Nutrition with hands-on hospital experience to deliver
              personalized, sustainable health solutions.
            </p>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              At {SITE_CONFIG.name}, every client receives individualized
              attention — because no two bodies, lifestyles, or health goals
              are the same. From weight management to chronic disease nutrition,
              her approach is rooted in science, empathy, and long-term wellness.
            </p>
            <Button href={getWhatsAppLink()} variant="primary" external>
              Book Free Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-card ring-4 ring-emerald-100">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                alt={SITE_CONFIG.dietician}
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-4 md:left-4 bg-white rounded-2xl p-4 shadow-card max-w-[200px]"
            >
              <GraduationCap className="w-8 h-8 text-emerald-600 mb-2" />
              <p className="font-bold font-poppins text-sm text-gray-900">
                M.Sc. Food Science
              </p>
              <p className="text-xs text-gray-600 font-inter">& Nutrition</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-card"
            >
              <Award className="w-8 h-8 text-orange-500 mb-2" />
              <p className="font-bold font-poppins text-sm text-gray-900">
                1000+ Clients
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-card"
            >
              <h3 className="font-bold font-poppins text-gray-900 text-lg">
                {exp}
              </h3>
              <p className="text-gray-600 font-inter mt-2 text-sm">
                Clinical nutrition practice with evidence-based therapeutic
                diet management for diverse patient populations.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
