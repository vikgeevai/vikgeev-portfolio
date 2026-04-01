"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

const bentoCards = [
  {
    metric: "$3.9bn",
    label: "CASA locked — UOB Money Lock",
    sub: "MAS-regulated · 50K+ customers",
    accent: "#2563EB",
    span: false,
  },
  {
    metric: "8.4M+",
    label: "Users across 4 markets",
    sub: "SG · MY · TH · ID",
    accent: "#0369A1",
    span: false,
  },
  {
    metric: "15+",
    label: "Years of design leadership",
    sub: "FinTech · InsurTech · Maritime · AdTech",
    accent: "#059669",
    span: false,
  },
  {
    metric: "Open",
    label: "Singapore 🇸🇬",
    sub: "1 month notice · Available now",
    accent: "#16A34A",
    pulse: true,
    span: false,
  },
];

function MeshBackground({ shouldReduce }: { shouldReduce: boolean | null }) {
  return (
    <>
      {/* Mesh gradient — primary */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 40%, rgba(37,99,235,0.11) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 70% at 85% 20%, rgba(99,102,241,0.08) 0%, transparent 55%), " +
            "radial-gradient(ellipse 50% 50% at 50% 90%, rgba(5,150,105,0.06) 0%, transparent 60%)",
        }}
        animate={
          shouldReduce
            ? {}
            : {
                opacity: [0.8, 1, 0.85, 1, 0.8],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* SVG grain texture */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </>
  );
}

function BentoCard({
  card,
  index,
  shouldReduce,
}: {
  card: (typeof bentoCards)[0];
  index: number;
  shouldReduce: boolean | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.88, y: shouldReduce ? 0 : 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: shouldReduce ? 0 : 0.55,
        ease: easeOutExpo,
        delay: shouldReduce ? 0 : 0.55 + index * 0.08,
      }}
      whileHover={shouldReduce ? {} : { y: -4, transition: { duration: 0.2 } }}
      className="rounded-2xl p-5 flex flex-col justify-between min-h-[110px] cursor-default"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--card-border, var(--border))",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <p
          className="font-heading font-extrabold leading-none"
          style={{
            fontFamily: "var(--font-heading, sans-serif)",
            fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
            letterSpacing: "-0.03em",
            color: card.accent,
          }}
        >
          {card.metric}
        </p>
        {card.pulse && (
          <span
            className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 animate-pulse"
            style={{ backgroundColor: "#22C55E" }}
          />
        )}
      </div>
      {/* Labels */}
      <div className="mt-3">
        <p
          className="text-sm font-semibold leading-snug mb-0.5"
          style={{ color: "var(--fg)" }}
        >
          {card.label}
        </p>
        <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>
          {card.sub}
        </p>
      </div>
      {/* Accent line */}
      <div
        className="mt-4 h-0.5 w-8 rounded-full"
        style={{ backgroundColor: card.accent, opacity: 0.5 }}
      />
    </motion.div>
  );
}

export function Hero() {
  const shouldReduce = useReducedMotion();
  const dur = (n: number) => (shouldReduce ? 0 : n);

  return (
    <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden">
      <MeshBackground shouldReduce={shouldReduce} />

      {/* ── Main grid ─────────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-6xl px-6 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Identity + CTAs ───────────────────────────────────────── */}
          <div className="flex flex-col">

            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.5), ease: easeOutExpo, delay: dur(0.1) }}
              className="mb-6"
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
                VP II Experience Design Lead · Singapore
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                  color: "var(--fg)",
                  clipPath: "inset(0 100% 0 0)",
                }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: dur(1.0), ease: easeOutExpo, delay: dur(0.25) }}
              >
                Vik Geev
              </motion.h1>
            </div>

            {/* Domain tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: dur(0.06),
                    delayChildren: dur(0.55),
                  },
                },
              }}
            >
              {["FinTech", "InsurTech", "Maritime", "AdTech"].map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: dur(0.35), ease: easeOutExpo },
                    },
                  }}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.7), ease: easeOutExpo, delay: dur(0.75) }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              Strategic design leader with{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>15+ years</span> shipping
              digital products trusted by millions across Southeast Asia. Now targeting{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>
                Head of Design
              </span>{" "}
              and{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>Principal Designer</span>{" "}
              roles.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.6), ease: easeOutExpo, delay: dur(0.9) }}
              className="flex flex-wrap gap-3"
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
          </div>

          {/* ── RIGHT: Bento grid ───────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3">
            {bentoCards.map((card, i) => (
              <BentoCard
                key={card.label}
                card={card}
                index={i}
                shouldReduce={shouldReduce}
              />
            ))}
          </div>

        </div>

        {/* ── Bottom divider + stats ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur(0.6), ease: easeOutExpo, delay: dur(1.1) }}
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "8.4M+", label: "Users served (UOB TMRW)" },
              { value: "100+",  label: "Vessels deployed (SafeVUE)" },
              { value: "4",     label: "Markets: SG · MY · TH · ID" },
              { value: "10",    label: "Designers led at UOB" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "var(--fg)",
                  }}
                >
                  {s.value}
                </span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
