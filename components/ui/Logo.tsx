import { ASSETS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const VARIANTS = {
  /** Compact mark for tight spaces */
  icon: {
    box: "h-10 w-10",
    width: 40,
    height: 40,
    rounded: "rounded-lg",
    padding: "p-1",
  },
  /** Navbar — full brand lockup */
  navbar: {
    box: "h-11 w-[128px] sm:h-12 sm:w-[148px] md:h-14 md:w-[172px]",
    width: 172,
    height: 56,
    rounded: "rounded-lg",
    padding: "p-1.5",
  },
  /** Hero center showcase */
  hero: {
    box: "w-[220px] h-[198px] sm:w-[240px] sm:h-[216px]",
    width: 240,
    height: 216,
    rounded: "rounded-2xl",
    padding: "p-3",
  },
  /** Footer brand block */
  footer: {
    box: "w-[160px] h-[144px]",
    width: 160,
    height: 144,
    rounded: "rounded-xl",
    padding: "p-2",
  },
} as const;

export type LogoVariant = keyof typeof VARIANTS;

interface LogoProps {
  variant?: LogoVariant;
  /** @deprecated Use variant instead */
  size?: never;
  className?: string;
  ring?: boolean;
  priority?: boolean;
  alt?: string;
}

export function Logo({
  variant = "icon",
  className,
  ring = false,
  priority = false,
  alt = `${SITE_CONFIG.fullName} — clinical dietitian and nutritionist logo`,
}: LogoProps) {
  const config = VARIANTS[variant];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden bg-white",
        config.box,
        config.rounded,
        config.padding,
        ring && "ring-2 ring-emerald-200",
        className
      )}
    >
      <Image
        src={ASSETS.logo}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes={`(max-width: 768px) ${Math.round(config.width * 0.75)}px, ${config.width}px`}
        priority={priority}
      />
    </div>
  );
}
