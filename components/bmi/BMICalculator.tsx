"use client";

import { BMIConsultationCTA } from "@/components/bmi/BMIConsultationCTA";
import { BMIScale } from "@/components/bmi/BMIScale";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  computeBMIResult,
  getHeightInMeters,
  type BMIResult,
  type UnitSystem,
} from "@/lib/bmi";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Scale, Ruler } from "lucide-react";
import { useMemo, useState } from "react";

export function BMICalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [heightCm, setHeightCm] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [touched, setTouched] = useState(false);

  const weight = parseFloat(weightKg);
  const heightM = getHeightInMeters(
    unit,
    parseFloat(heightCm) || 0,
    parseInt(feet, 10) || 0,
    parseFloat(inches) || 0
  );

  const result: BMIResult | null = useMemo(() => {
    if (!weightKg || !heightM) return null;
    return computeBMIResult(weight, heightM);
  }, [weight, heightM, weightKg]);

  const showError =
    touched &&
    weightKg &&
    (unit === "metric" ? heightCm : feet) &&
    !result;

  return (
    <div className="space-y-10 md:space-y-14">
      <SectionHeading
        badge="BMI Calculator"
        title="Calculate Your Body Mass Index"
        subtitle="Enter your height and weight for instant results, ideal weight range, and expert health tips."
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Inputs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-emerald-50"
        >
          <div className="flex p-1 rounded-xl bg-gray-100 mb-8">
            {(
              [
                { id: "metric" as const, label: "cm / kg" },
                { id: "imperial" as const, label: "ft & in / kg" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setUnit(opt.id);
                  setTouched(false);
                }}
                className={cn(
                  "flex-1 py-2.5 rounded-lg text-sm font-semibold font-poppins transition-all",
                  unit === opt.id
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {unit === "metric" ? (
              <div>
                <label
                  htmlFor="height-cm"
                  className="flex items-center gap-2 text-sm font-medium font-poppins text-gray-700 mb-2"
                >
                  <Ruler className="w-4 h-4 text-emerald-600" />
                  Height (cm)
                </label>
                <input
                  id="height-cm"
                  type="number"
                  min={50}
                  max={300}
                  step={0.1}
                  placeholder="e.g. 165"
                  value={heightCm}
                  onChange={(e) => {
                    setHeightCm(e.target.value);
                    setTouched(true);
                  }}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none font-inter"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="height-ft"
                    className="flex items-center gap-2 text-sm font-medium font-poppins text-gray-700 mb-2"
                  >
                    <Ruler className="w-4 h-4 text-emerald-600" />
                    Feet
                  </label>
                  <input
                    id="height-ft"
                    type="number"
                    min={1}
                    max={8}
                    placeholder="5"
                    value={feet}
                    onChange={(e) => {
                      setFeet(e.target.value);
                      setTouched(true);
                    }}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none font-inter"
                  />
                </div>
                <div>
                  <label
                    htmlFor="height-in"
                    className="text-sm font-medium font-poppins text-gray-700 mb-2 block"
                  >
                    Inches
                  </label>
                  <input
                    id="height-in"
                    type="number"
                    min={0}
                    max={11.9}
                    step={0.1}
                    placeholder="6"
                    value={inches}
                    onChange={(e) => {
                      setInches(e.target.value);
                      setTouched(true);
                    }}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none font-inter"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="weight-kg"
                className="flex items-center gap-2 text-sm font-medium font-poppins text-gray-700 mb-2"
              >
                <Scale className="w-4 h-4 text-emerald-600" />
                Weight (kg)
              </label>
              <input
                id="weight-kg"
                type="number"
                min={20}
                max={500}
                step={0.1}
                placeholder="e.g. 68"
                value={weightKg}
                onChange={(e) => {
                  setWeightKg(e.target.value);
                  setTouched(true);
                }}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none font-inter"
              />
            </div>
          </div>

          {showError && (
            <p className="mt-4 flex items-center gap-2 text-sm text-red-600 font-inter">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Please enter valid height and weight values.
            </p>
          )}
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-emerald-50 min-h-[320px] flex flex-col"
        >
          <h3 className="text-lg font-bold font-poppins text-gray-900 mb-6">
            Your Results
          </h3>

          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key={result.bmi}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <div
                  className={cn(
                    "rounded-2xl p-6 md:p-8 text-center text-white mb-6 bg-gradient-to-br",
                    result.gradient
                  )}
                >
                  <p className="text-white/90 font-inter text-sm mb-1">
                    Your BMI
                  </p>
                  <p className="text-5xl md:text-6xl font-bold font-poppins">
                    {result.bmi}
                  </p>
                  <p className="mt-2 text-lg font-semibold font-poppins">
                    {result.label}
                  </p>
                </div>

                <BMIScale result={result} />

                <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="text-sm font-semibold font-poppins text-emerald-800 mb-1">
                    Ideal weight range (healthy BMI)
                  </p>
                  <p className="text-2xl font-bold font-poppins text-emerald-700">
                    {result.idealWeightMin} – {result.idealWeightMax} kg
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold font-poppins text-gray-900 mb-3">
                    Health tips
                  </p>
                  <ul className="space-y-2">
                    {result.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex gap-2 text-sm text-gray-600 font-inter leading-relaxed"
                      >
                        <span className="text-emerald-500 shrink-0">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <Scale className="w-10 h-10 text-emerald-400" />
                </div>
                <p className="text-gray-500 font-inter max-w-xs">
                  Enter your measurements to see your BMI, category, and
                  personalized tips in real time.
                </p>
                <div className="mt-8 w-full opacity-40">
                  <BMIScale result={null} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <BMIConsultationCTA />
    </div>
  );
}
