"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

export function WhatsAppButton() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.a
      href="https://wa.me/6596875688"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full shadow-lg cursor-pointer"
      style={{ backgroundColor: "#25D366", color: "#fff" }}
      initial={{ opacity: 0, scale: 0.8, y: shouldReduce ? 0 : 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: easeOutExpo }}
      whileHover={shouldReduce ? {} : { scale: 1.06, y: -2 }}
      whileTap={shouldReduce ? {} : { scale: 0.97 }}
    >
      <MessageCircle size={20} />
      <span className="text-sm font-semibold hidden sm:inline">Chat with me</span>
    </motion.a>
  );
}
