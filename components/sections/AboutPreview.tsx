"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE, SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-beige-50" id="about-preview">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title={`Meet ${SITE_CONFIG.dietician}`}
          subtitle="Clinical dietitian dedicated to transforming lives through science-backed, personalized nutrition."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                alt={`${SITE_CONFIG.dietician} - Clinical Dietitian`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-4 -right-4 md:right-8 bg-white rounded-2xl p-4 shadow-card flex items-center gap-3"
            >
              <Award className="w-10 h-10 text-orange-500" />
              <div>
                <p className="font-bold font-poppins text-gray-900">5+ Years</p>
                <p className="text-sm text-gray-600 font-inter">Clinical Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 font-inter leading-relaxed mb-6 text-lg">
              With a Master&apos;s in Food Science & Nutrition and extensive
              experience at leading hospitals, Dt. Ritika Gupta founded{" "}
              <strong className="text-emerald-700">{SITE_CONFIG.name}</strong> to
              make expert clinical nutrition accessible to everyone in Ghaziabad
              and beyond.
            </p>

            <p className="text-gray-600 font-inter leading-relaxed mb-6">
              Her philosophy centers on healing through balanced nutrition —
              creating sustainable, enjoyable meal plans that fit your lifestyle
              while addressing root causes of health issues.
            </p>

            <h3 className="font-bold font-poppins text-gray-900 mb-4">
              Work Experience
            </h3>
            <ul className="space-y-3 mb-8">
              {EXPERIENCE.map((exp) => (
                <li
                  key={exp}
                  className="flex items-center gap-3 text-gray-700 font-inter"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {exp}
                </li>
              ))}
            </ul>

            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
