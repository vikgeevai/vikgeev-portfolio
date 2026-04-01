"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

const stats = [
  { value: "10+", label: "Years of craft" },
  { value: "3",   label: "Industries" },
  { value: "100+",label: "Vessels deployed" },
  { value: "5",   label: "Markets across Asia" },
];

const industries = ["Fintech", "Insurtech", "Maritime"];

export function Hero() {
  const shouldReduce = useReducedMotion();
  const dur = (n: number) => shouldReduce ? 0 : n;

  return (
    <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden">

      {/* ── Soft ambient blobs ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          width: "56vw", height: "56vw",
          top: "-12%", right: "-14%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 68%)",
          filter: "blur(72px)",
        }}
        animate={shouldReduce ? {} : { scale: [1, 1.06, 1], x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          width: "40vw", height: "40vw",
          bottom: "-8%", left: "-8%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={shouldReduce ? {} : { scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, 16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ── Dot-grid texture ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,116,139,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-5xl px-6 w-full pt-28 pb-20 flex flex-col items-center text-center">

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.6), ease: easeOutExpo, delay: dur(0.1) }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-full"
            style={{
              border: "1px solid var(--border)",
              color: "var(--muted)",
              backgroundColor: "var(--card)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for senior roles · Singapore
          </span>
        </motion.div>

        {/* Line 1 — extends outward first */}
        <div className="w-full flex justify-center mb-8 overflow-hidden">
          <motion.div
            style={{ height: "1px", backgroundColor: "var(--border)", originX: 0.5 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: dur(0.9), ease: easeOutExpo, delay: dur(0.2) }}
            className="w-24"
          />
        </div>

        {/* Name — clip-path wipe reveal */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "var(--fg)",
              clipPath: "inset(0 100% 0 0)",
            }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: dur(1.0), ease: easeOutExpo, delay: dur(0.35) }}
          >
            Vik Geev
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.7), ease: easeOutExpo, delay: dur(0.65) }}
          className="text-sm font-medium tracking-widest uppercase mb-8"
          style={{ color: "var(--accent)" }}
        >
          Lead Product Designer
        </motion.p>

        {/* Industry tags — staggered */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: dur(0.08), delayChildren: dur(0.75) } },
          }}
        >
          {industries.map((ind) => (
            <motion.span
              key={ind}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { duration: dur(0.4), ease: easeOutExpo } },
              }}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
            >
              {ind}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.8), ease: easeOutExpo, delay: dur(1.0) }}
          className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          style={{ color: "var(--muted)" }}
        >
          I help product teams ship experiences that{" "}
          <span style={{ color: "var(--fg)", fontWeight: 500 }}>convert</span>,{" "}
          <span style={{ color: "var(--fg)", fontWeight: 500 }}>retain</span>, and{" "}
          <span style={{ color: "var(--fg)", fontWeight: 500 }}>build trust</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.7), ease: easeOutExpo, delay: dur(1.15) }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer hover:opacity-85 active:scale-95"
            style={{ backgroundColor: "var(--fg)", color: "var(--bg)" }}
          >
            View Work <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/6596875688"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer hover:opacity-80 active:scale-95"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            <MessageCircle size={14} style={{ color: "#25D366" }} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Line 2 — bottom divider */}
        <div className="w-full flex justify-center mb-12 overflow-hidden">
          <motion.div
            style={{ height: "1px", backgroundColor: "var(--border)", originX: 0.5 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: dur(0.9), ease: easeOutExpo, delay: dur(1.25) }}
            className="w-full max-w-lg"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.7), ease: easeOutExpo, delay: dur(1.4) }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-lg"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--fg)",
                }}
              >
                {s.value}
              </span>
              <span className="text-xs text-center" style={{ color: "var(--muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
