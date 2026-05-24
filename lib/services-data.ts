import {
  Activity,
  Apple,
  Baby,
  Bone,
  Clock,
  Droplets,
  Flame,
  Heart,
  Leaf,
  Pill,
  Scale,
  Shield,
  Sparkles,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "disease" | "lifestyle" | "program";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "hypertension-diabetic",
    title: "Hypertension & Diabetic Diet",
    description:
      "Blood sugar and blood pressure management through balanced, low-GI meal plans with precise carb counting.",
    icon: Heart,
    category: "disease",
  },
  {
    id: "thyroid",
    title: "Thyroid Disease Diet",
    description:
      "Iodine-aware nutrition plans to support thyroid function, metabolism, and hormone balance naturally.",
    icon: Activity,
    category: "disease",
  },
  {
    id: "pregnancy",
    title: "Pregnancy & Lactation Diet",
    description:
      "Trimester-wise nutrition for mother and baby health, plus lactation support for optimal milk production.",
    icon: Baby,
    category: "disease",
  },
  {
    id: "intermittent-fasting",
    title: "Intermittent Fasting Diet",
    description:
      "Structured fasting windows with nutrient-dense eating periods for fat loss and metabolic health.",
    icon: Clock,
    category: "lifestyle",
  },
  {
    id: "pcod-obesity",
    title: "PCOD & Obesity Diet",
    description:
      "Insulin-sensitizing, anti-inflammatory diets to manage PCOD symptoms and achieve healthy weight.",
    icon: Scale,
    category: "disease",
  },
  {
    id: "low-immunity",
    title: "Diet for Low Immunity",
    description:
      "Immune-boosting nutrition rich in vitamins C, D, zinc, and antioxidants to strengthen your defenses.",
    icon: Shield,
    category: "disease",
  },
  {
    id: "anemia",
    title: "Anemia Diet",
    description:
      "Iron-rich meal plans with vitamin C pairing for enhanced absorption and energy restoration.",
    icon: Droplets,
    category: "disease",
  },
  {
    id: "arthritis-calcium",
    title: "Arthritis & Calcium Rich Diet",
    description:
      "Anti-inflammatory foods and calcium-optimized plans for bone health and joint pain relief.",
    icon: Bone,
    category: "disease",
  },
  {
    id: "keto",
    title: "Keto Diet",
    description:
      "Medically supervised ketogenic plans with proper macro ratios for safe, effective ketosis.",
    icon: Flame,
    category: "lifestyle",
  },
  {
    id: "renal",
    title: "Renal Diet",
    description:
      "Kidney-friendly nutrition with controlled protein, sodium, potassium, and phosphorus levels.",
    icon: Stethoscope,
    category: "disease",
  },
  {
    id: "detox",
    title: "Detox Therapy",
    description:
      "Gentle, science-backed detox protocols to cleanse your system and reset healthy eating habits.",
    icon: Leaf,
    category: "lifestyle",
  },
  {
    id: "vitamin-deficiency",
    title: "Vitamin Deficiency Diet",
    description:
      "Targeted nutrition to correct vitamin D, B12, and other deficiencies through whole foods.",
    icon: Pill,
    category: "disease",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Programs",
    description:
      "Lose 3-5 kg per month with personalized calorie-deficit plans and continuous expert monitoring.",
    icon: TrendingDown,
    category: "program",
  },
  {
    id: "weight-gain",
    title: "Weight Gain Programs",
    description:
      "Gain 3-4 kg per month through nutrient-dense, high-protein plans for healthy mass building.",
    icon: TrendingUp,
    category: "program",
  },
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "disease", label: "Disease-Specific" },
  { id: "lifestyle", label: "Lifestyle Diets" },
  { id: "program", label: "Weight Programs" },
] as const;
