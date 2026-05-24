/** BMI thresholds — customize ranges here for your clinic standards */

export const BMI_THRESHOLDS = {
  underweight: { max: 18.5, label: "Underweight" },
  normal: { min: 18.5, max: 24.9, label: "Normal" },
  overweight: { min: 25, max: 29.9, label: "Overweight" },
  obese: { min: 30, label: "Obese" },
} as const;

export type BMICategoryKey = "underweight" | "normal" | "overweight" | "obese";

export type UnitSystem = "metric" | "imperial";

export interface BMIResult {
  bmi: number;
  category: BMICategoryKey;
  label: string;
  idealWeightMin: number;
  idealWeightMax: number;
  tips: string[];
  color: string;
  gradient: string;
}

export function feetInchesToCm(feet: number, inches: number): number {
  const totalInches = feet * 12 + inches;
  return totalInches * 2.54;
}

export function getHeightInMeters(
  unit: UnitSystem,
  heightCm: number,
  feet: number,
  inches: number
): number | null {
  if (unit === "metric") {
    if (heightCm <= 0 || heightCm > 300) return null;
    return heightCm / 100;
  }
  if (feet < 0 || inches < 0 || inches >= 12) return null;
  const cm = feetInchesToCm(feet, inches);
  if (cm <= 0 || cm > 300) return null;
  return cm / 100;
}

export function calculateBMI(weightKg: number, heightM: number): number {
  return weightKg / (heightM * heightM);
}

export function getBMICategory(bmi: number): BMICategoryKey {
  if (bmi < BMI_THRESHOLDS.underweight.max) return "underweight";
  if (bmi < BMI_THRESHOLDS.normal.max) return "normal";
  if (bmi < BMI_THRESHOLDS.overweight.max) return "overweight";
  return "obese";
}

const CATEGORY_META: Record<
  BMICategoryKey,
  { label: string; color: string; gradient: string; tips: string[] }
> = {
  underweight: {
    label: BMI_THRESHOLDS.underweight.label,
    color: "#3b82f6",
    gradient: "from-blue-400 to-blue-600",
    tips: [
      "Focus on nutrient-dense meals with adequate protein and healthy fats.",
      "Eat smaller, frequent meals to support healthy weight gain.",
      "Consult a clinical dietitian for a personalized weight gain plan.",
      "Include strength training to build lean muscle mass safely.",
    ],
  },
  normal: {
    label: BMI_THRESHOLDS.normal.label,
    color: "#10b981",
    gradient: "from-emerald-400 to-emerald-600",
    tips: [
      "Maintain balanced meals with whole grains, lean protein, and vegetables.",
      "Stay physically active — aim for 30 minutes of movement most days.",
      "Hydrate well and limit ultra-processed foods.",
      "Schedule periodic check-ins to sustain your healthy weight.",
    ],
  },
  overweight: {
    label: BMI_THRESHOLDS.overweight.label,
    color: "#f59e0b",
    gradient: "from-amber-400 to-orange-500",
    tips: [
      "Create a moderate calorie deficit with portion-controlled meals.",
      "Increase fiber intake to improve satiety and digestion.",
      "Combine walking or cardio with resistance training.",
      "A dietitian can tailor a sustainable fat-loss plan for your lifestyle.",
    ],
  },
  obese: {
    label: BMI_THRESHOLDS.obese.label,
    color: "#ef4444",
    gradient: "from-red-400 to-red-600",
    tips: [
      "Seek professional guidance for safe, structured weight management.",
      "Prioritize whole foods and consistent meal timing.",
      "Start with low-impact activity and progress gradually.",
      "Address underlying conditions (thyroid, PCOD, diabetes) with clinical nutrition.",
    ],
  },
};

export function getIdealWeightRangeKg(heightM: number): {
  min: number;
  max: number;
} {
  const min = BMI_THRESHOLDS.normal.min * heightM * heightM;
  const max = BMI_THRESHOLDS.normal.max * heightM * heightM;
  return {
    min: Math.round(min * 10) / 10,
    max: Math.round(max * 10) / 10,
  };
}

export function computeBMIResult(
  weightKg: number,
  heightM: number | null
): BMIResult | null {
  if (!heightM || weightKg <= 0 || weightKg > 500) return null;

  const bmi = calculateBMI(weightKg, heightM);
  if (!Number.isFinite(bmi) || bmi < 10 || bmi > 80) return null;

  const category = getBMICategory(bmi);
  const meta = CATEGORY_META[category];
  const ideal = getIdealWeightRangeKg(heightM);

  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    label: meta.label,
    idealWeightMin: ideal.min,
    idealWeightMax: ideal.max,
    tips: meta.tips,
    color: meta.color,
    gradient: meta.gradient,
  };
}

/** Scale segments for visual indicator (min BMI shown on scale) */
export const BMI_SCALE_SEGMENTS = [
  { key: "underweight" as const, min: 0, max: 18.5, color: "#60a5fa" },
  { key: "normal" as const, min: 18.5, max: 25, color: "#34d399" },
  { key: "overweight" as const, min: 25, max: 30, color: "#fbbf24" },
  { key: "obese" as const, min: 30, max: 40, color: "#f87171" },
];

export function getBMIPositionOnScale(bmi: number): number {
  const min = 15;
  const max = 40;
  const clamped = Math.min(max, Math.max(min, bmi));
  return ((clamped - min) / (max - min)) * 100;
}
