"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  MapPinned,
  MessageCircle,
} from "lucide-react";

const socialItems: {
  name: string;
  href: string;
  icon: typeof Instagram;
  color: string;
  label: string;
  external?: boolean;
}[] = [
  {
    name: "Instagram",
    href: SITE_CONFIG.social.instagram,
    icon: Instagram,
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
    label: "Follow @nourish.nirvana",
    external: true,
  },
  {
    name: "WhatsApp",
    href: getWhatsAppLink(),
    icon: MessageCircle,
    color: "hover:bg-[#25D366]",
    label: "Chat for free consultation",
    external: true,
  },
  {
    name: "Gmail",
    href: SITE_CONFIG.social.gmail,
    icon: Mail,
    color: "hover:bg-red-500",
    label: SITE_CONFIG.email,
  },
  {
    name: "Google Business",
    href: SITE_CONFIG.social.googleBusiness,
    icon: MapPinned,
    color: "hover:bg-blue-600",
    label: "View clinic on Google Maps",
    external: true,
  },
];

export function SocialLinks() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Connect"
          title="Follow & Reach Us"
          subtitle="Stay updated with nutrition tips and connect for your free diet consultation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {socialItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 ${item.color} hover:text-white hover:border-transparent hover:shadow-card`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <item.icon className="w-7 h-7 text-emerald-600 group-hover:text-inherit" />
              </div>
              <h3 className="font-bold font-poppins text-gray-900 group-hover:text-white mb-1">
                {item.name}
              </h3>
              <p className="text-sm font-inter text-gray-500 group-hover:text-white/90">
                {item.label}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
