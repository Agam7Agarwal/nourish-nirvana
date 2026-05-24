import { ENV } from "./env";

export const SITE_CONFIG = {
  name: "Nourish Nirvana",
  tagline: "by Dt. Ritika Gupta",
  fullName: "Nourish Nirvana by Dt. Ritika Gupta",
  dietician: "Dt. Ritika Gupta",
  qualification:
    "M.Sc. Food Science & Nutrition — Clinical Dietitian & Nutritionist",
  shortQualification: "M.Sc. Food Science & Nutrition",
  url: ENV.siteUrl,
  email: "nourishnirvana.in@gmail.com",
  phones: ["9871747535", "6395677338"],
  phoneDisplay: ["98717 47535", "63956 77338"],
  address: {
    street: "D-443, Gaur Homes, Govindpuram",
    city: "Ghaziabad",
    pincode: "201013",
    full: "D-443, Gaur Homes, Govindpuram, Ghaziabad - 201013",
  },
  consultation: {
    title: "Free Consultation",
    modes: "Visit / Online",
  },
  social: {
    instagram: "https://instagram.com/nourish.nirvana",
    whatsapp: "https://wa.me/919871747535",
    youtube: "https://youtube.com/@nourishnirvana",
    googleBusiness:
      "https://www.google.com/maps/search/?api=1&query=Nourish+Nirvana+Govindpuram+Ghaziabad",
    gmail: "mailto:nourishnirvana.in@gmail.com",
  },
  serviceAreas: [
    "Ghaziabad",
    "Govindpuram",
    "Noida",
    "Delhi NCR",
    "Gurugram",
    "Faridabad",
  ] as const,
  workingHours: {
    weekdays: "Mon – Sat: 10:00 AM – 7:00 PM",
    sunday: "Sunday: By Appointment",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.4538!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzA5LjEiTiA3N8KwMjcnMTMuOSJF!5e0!3m2!1sen!2sin!4v1",
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Dt. Ritika Gupta, I would like to know more about your diet consultation services.";

/** Brand & media assets — replace /public/logo.png to update logo site-wide */
export const ASSETS = {
  logo: "/logo.png",
} as const;

export const CLIENT_BENEFITS = [
  {
    title: "Evidence-Based Diet Plans",
    description:
      "Clinical nutrition backed by food science — not fad diets. Plans tailored for weight loss, PCOD, diabetes, thyroid, and pregnancy.",
  },
  {
    title: "Free First Consultation",
    description:
      "Start with a no-cost session at our Govindpuram clinic or online. Understand your goals before committing to a program.",
  },
  {
    title: "Delhi NCR & Pan-India Online",
    description:
      "Serving Ghaziabad, Noida, Gurugram, Faridabad, and clients across India via WhatsApp and video follow-ups.",
  },
  {
    title: "Sustainable Results",
    description:
      "Target 3–5 kg safe weight loss or 3–4 kg healthy gain per month with habits you can maintain long term.",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const EXPERIENCE = [
  "Max Super Speciality Hospital",
  "Nutrikalp Weight & Health Management Clinic",
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Customized Diet Plans",
    description:
      "Every plan is tailored to your body type, medical history, lifestyle, and food preferences.",
    icon: "ClipboardList",
  },
  {
    title: "Scientific Nutrition Guidance",
    description:
      "Evidence-based dietary strategies backed by clinical expertise and food science.",
    icon: "Microscope",
  },
  {
    title: "Lifestyle Transformation",
    description:
      "Beyond diets — we guide sustainable habits for long-term health and wellness.",
    icon: "HeartPulse",
  },
  {
    title: "Online & Offline Consultation",
    description:
      "Flexible consultations at our Ghaziabad clinic or from the comfort of your home.",
    icon: "Video",
  },
  {
    title: "Affordable Plans",
    description:
      "Premium-quality nutrition care with plans designed to fit every budget.",
    icon: "IndianRupee",
  },
  {
    title: "Long-term Sustainable Health",
    description:
      "No crash diets — focus on gradual, lasting results you can maintain for life.",
    icon: "TrendingUp",
  },
] as const;

export const WEIGHT_PROGRAMS = {
  loss: {
    title: "Weight Loss Program",
    subtitle: "Lose 3 to 5 Kg per Month",
    description:
      "Scientifically designed calorie-deficit plans with balanced macros, portion control, and regular monitoring for safe, sustainable fat loss.",
    features: [
      "Personalized calorie targets",
      "Weekly progress tracking",
      "Metabolism-boosting meal plans",
      "Exercise & lifestyle guidance",
    ],
  },
  gain: {
    title: "Weight Gain Program",
    subtitle: "Gain 3 to 4 Kg per Month",
    description:
      "Nutrient-dense, high-protein meal plans to help you build healthy mass with the right calories and micronutrients.",
    features: [
      "High-protein meal structuring",
      "Muscle-building nutrition",
      "Digestive-friendly foods",
      "Supplement guidance when needed",
    ],
  },
} as const;

export const STATS = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 1000, suffix: "+" },
  { label: "Customized Diet Plans", value: 2300, suffix: "+" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who is the best dietician for weight loss in Ghaziabad?",
    answer:
      "Dt. Ritika Gupta at Nourish Nirvana in Govindpuram is a clinical dietitian specializing in safe weight loss (3–5 kg/month), PCOD, diabetes, and thyroid nutrition. Book a free consultation to get a personalized plan.",
  },
  {
    question: "Is online diet consultation available?",
    answer:
      "Yes. Online diet consultation is available across Delhi NCR and India via WhatsApp and video calls. You receive digital meal plans, portion guidance, and regular follow-ups from Dt. Ritika Gupta.",
  },
  {
    question: "Do you offer PCOD diet management?",
    answer:
      "Yes. PCOD diet plans focus on insulin sensitivity, balanced macros, anti-inflammatory foods, and sustainable weight management — customized to your symptoms and lab reports.",
  },
  {
    question: "Can you create thyroid diet plans?",
    answer:
      "Absolutely. Thyroid diet expert guidance includes nutrient timing, iodine-aware meal planning, and metabolism support for hypo- and hyperthyroid clients in Ghaziabad and online.",
  },
  {
    question: "Do you provide pregnancy nutrition guidance?",
    answer:
      "Yes. Pregnancy and lactation nutrition plans support healthy fetal growth, energy levels, gestational diabetes management, and postpartum recovery with trimester-specific meal structures.",
  },
  {
    question: "Is the first consultation really free?",
    answer:
      "Yes! We offer a completely free initial consultation — either at our Govindpuram clinic or online. During this session, Dt. Ritika Gupta will understand your health goals and medical background.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring any recent blood reports, medical prescriptions, a list of current medications, and notes about your daily eating habits. This helps us create the most accurate plan for you.",
  },
  {
    question: "Are your diet plans vegetarian-friendly?",
    answer:
      "Yes! We create plans for vegetarian, non-vegetarian, vegan, and eggetarian preferences. Every meal plan respects your cultural and dietary choices.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Ghaziabad",
    rating: 5,
    text: "I lost 12 kg in 4 months with Dt. Ritika's guidance. Her PCOD diet plan was practical and easy to follow. Highly recommend Nourish Nirvana!",
    transformation: "Lost 12 kg in 4 months",
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    location: "Delhi NCR",
    rating: 5,
    text: "As someone with diabetes, I was skeptical about dieting. Dt. Ritika created a plan that stabilized my sugar levels while I lost weight. Life-changing!",
    transformation: "HbA1c improved significantly",
    initials: "RV",
  },
  {
    name: "Anjali Mehta",
    location: "Govindpuram",
    rating: 5,
    text: "During my pregnancy, her lactation diet plan was a blessing. My energy levels improved and my baby is healthy. Thank you so much!",
    transformation: "Healthy pregnancy journey",
    initials: "AM",
  },
  {
    name: "Vikram Singh",
    location: "Ghaziabad",
    rating: 5,
    text: "I gained 8 kg of healthy weight in 3 months. The weight gain program was perfectly customized for my busy schedule. Professional and caring.",
    transformation: "Gained 8 kg healthy weight",
    initials: "VS",
  },
  {
    name: "Sneha Kapoor",
    location: "Noida",
    rating: 5,
    text: "My thyroid levels are now in normal range after following her diet for 6 months. The online consultation was very convenient for my work schedule.",
    transformation: "Thyroid levels normalized",
    initials: "SK",
  },
] as const;

export const TIMELINE = [
  {
    year: "2016",
    title: "M.Sc. Food Science & Nutrition",
    description:
      "Completed Master's degree with specialization in clinical nutrition and therapeutic dietetics.",
  },
  {
    year: "2017",
    title: "Max Super Speciality Hospital",
    description:
      "Began clinical practice managing therapeutic diets for in-patients across multiple departments.",
  },
  {
    year: "2019",
    title: "Nutrikalp Weight & Health Management",
    description:
      "Specialized in weight management, obesity counseling, and lifestyle disease nutrition.",
  },
  {
    year: "2021",
    title: "Founded Nourish Nirvana",
    description:
      "Launched independent practice offering personalized nutrition consultations in Ghaziabad.",
  },
  {
    year: "2024",
    title: "1000+ Happy Clients Served",
    description:
      "Expanded online consultations across India with proven results in weight and disease management.",
  },
] as const;
