"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-emerald-50/50 to-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Stories of Transformation"
          subtitle="Real results from real clients who trusted Nourish Nirvana with their health journey."
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-emerald-100/50"
            >
              <Quote className="w-10 h-10 text-emerald-200 mb-6" aria-hidden="true" />

              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center",
                      "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-bold font-poppins text-lg"
                    )}
                  >
                    {testimonial.initials}
                  </motion.div>
                  <div>
                    <p className="font-bold font-poppins text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 font-inter">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold font-poppins">
                  {testimonial.transformation}
                </span>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-card hover:bg-emerald-50 text-emerald-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    i === current
                      ? "bg-emerald-500 w-8"
                      : "bg-gray-300 hover:bg-emerald-300"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </motion.div>

            <button
              type="button"
              onClick={next}
              className="p-3 rounded-full bg-white shadow-card hover:bg-emerald-50 text-emerald-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
