"use client";

import { trackButtonClick, trackConsultationBooking } from "@/lib/gtag";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
  /** GA4 event label for click tracking */
  trackLabel?: string;
}

const variants = {
  primary:
    "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-500 hover:to-emerald-400",
  secondary:
    "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40",
  outline:
    "border-2 border-emerald-600 text-emerald-700 bg-white/80 backdrop-blur-sm hover:bg-emerald-50",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-green-500/25 hover:bg-[#20BD5A]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function handleTrackedClick(
  trackLabel: string | undefined,
  href: string | undefined,
  onClick?: () => void
) {
  if (trackLabel) {
    trackButtonClick(trackLabel);
    if (
      trackLabel.includes("consultation") ||
      trackLabel.includes("book") ||
      href === "/contact"
    ) {
      trackConsultationBooking(trackLabel);
    }
  }
  onClick?.();
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  ariaLabel,
  trackLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-poppins transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
          onClick={() => handleTrackedClick(trackLabel, href, onClick)}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={classes}
          aria-label={ariaLabel}
          onClick={() => handleTrackedClick(trackLabel, href, onClick)}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={() => handleTrackedClick(trackLabel, href, onClick)}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
