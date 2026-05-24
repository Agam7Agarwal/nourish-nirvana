"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/services-data";
import { motion } from "framer-motion";

export function ServicesPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-beige-50 to-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Specialized Diet & Nutrition Plans"
          subtitle="Evidence-based therapeutic diets tailored for your unique health goals and medical conditions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
