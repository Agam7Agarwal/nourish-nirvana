"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

export type ToastVariant = "success" | "error";

interface ToastProps {
  message: string;
  variant: ToastVariant;
  visible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  variant,
  visible,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-28 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[60]"
        >
          <div
            className={cn(
              "flex items-start gap-3 p-4 rounded-2xl shadow-lg border backdrop-blur-md",
              variant === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : "bg-red-50 border-red-200 text-red-900"
            )}
          >
            {variant === "success" ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
            )}
            <p className="text-sm font-inter flex-1 leading-relaxed">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
