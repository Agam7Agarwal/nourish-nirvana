"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn, getWhatsAppLink } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-emerald-100/50"
          : "bg-transparent"
      )}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between h-16 md:h-20"
        >
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${SITE_CONFIG.name} - Home`}
          >
            <Logo
              variant="navbar"
              priority
              className="group-hover:ring-emerald-400 transition-all shadow-sm"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium font-inter text-sm transition-colors relative py-1",
                  pathname === link.href
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center gap-3"
          >
            <Button
              href={`tel:+91${SITE_CONFIG.phones[0]}`}
              variant="outline"
              size="sm"
              external
              ariaLabel="Call clinic"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button
              href={getWhatsAppLink()}
              variant="whatsapp"
              size="sm"
              external
              ariaLabel="WhatsApp consultation"
            >
              Free Consultation
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-emerald-100"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container mx-auto px-4 py-6 flex flex-col gap-4"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 text-lg font-medium font-poppins border-b border-gray-100",
                      pathname === link.href
                        ? "text-emerald-600"
                        : "text-gray-800"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  href={getWhatsAppLink()}
                  variant="whatsapp"
                  external
                  className="w-full"
                >
                  Book Free Consultation
                </Button>
                <Button
                  href={`tel:+91${SITE_CONFIG.phones[0]}`}
                  variant="outline"
                  external
                  className="w-full"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phoneDisplay[0]}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
