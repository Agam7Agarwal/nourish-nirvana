"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Apple, Heart, Leaf, Users } from "lucide-react";

const philosophyItems = [
  {
    icon: Leaf,
    title: "Heal Through Balanced Nutrition",
    description:
      "Food is medicine. We believe in using whole, natural foods to address health concerns at their root — not just masking symptoms with restrictive fad diets.",
  },
  {
    icon: Users,
    title: "Personalized Consultation Approach",
    description:
      "Your first consultation includes a detailed health assessment, dietary recall, and goal setting. Every meal plan is crafted exclusively for you.",
  },
  {
    icon: Apple,
    title: "Healthy Lifestyle Guidance",
    description:
      "Beyond meal plans, we guide sleep hygiene, hydration, mindful eating, stress management, and physical activity for holistic wellness.",
  },
  {
    icon: Heart,
    title: "Sustainable Transformation",
    description:
      "We don't believe in quick fixes. Our goal is to equip you with knowledge and habits that keep you healthy for decades, not just weeks.",
  },
];

export function AboutPhilosophy() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Philosophy"
          title="Nutrition That Nurtures"
          subtitle="A compassionate, science-driven approach to health that respects your body and your life."
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-beige-50 to-white border border-beige-200 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
