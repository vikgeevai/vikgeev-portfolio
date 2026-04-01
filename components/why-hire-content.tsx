"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { makeFadeUp, easeOutExpo } from "@/lib/motion";

const categories = [
  {
    icon: "🏦",
    title: "Banks & Fintech",
    headline: "Deep domain knowledge from leading high-stakes insurance and financial product redesigns in the Singapore and SEA market.",
    points: [
      "Regulated product design — compliance-aware from day one",
      "Proven drop-off reduction on purchase and onboarding flows",
      "Design systems that scale across multiple product lines",
      "Mobile-first financial platforms for SEA digital audiences",
      "Experienced working with actuaries, legal, and PMs simultaneously",
    ],
    accentColor: "#2563EB",
  },
  {
    icon: "⚙️",
    title: "Tech & SaaS",
    headline: "10+ years bridging product, engineering, and business — from zero-to-one discovery through to shipped products and post-launch iteration.",
    points: [
      "Built 0→1 digital products from concept to launch",
      "Design systems delivered to teams of 10+ engineers",
      "Data-informed design — A/B testing, funnel analysis, usability metrics",
      "Cross-functional leadership — C-suite, PMs, and engineering",
      "Multi-device, multi-surface UX (mobile, tablet, dashboard, wearable)",
    ],
    accentColor: "#0369A1",
  },
  {
    icon: "🌐",
    title: "Web3 & Emerging Tech",
    headline: "Specialist in making complex, unfamiliar products feel accessible and trustworthy — exactly what Web3 onboarding demands.",
    points: [
      "Trust signal design in high-stakes digital transactions",
      "Simplifying multi-step flows under emotional and financial pressure",
      "Mobile-first for next billion user onboarding",
      "Southeast Asian market depth — a key Web3 growth frontier",
      "Rapid prototyping for fast-moving, iterative product environments",
    ],
    accentColor: "#7C3AED",
  },
];

const proofPoints = [
  { metric: "10+", label: "Years leading product design" },
  { metric: "100+", label: "Vessels deployed with SafeVUE.ai" },
  { metric: "5",   label: "Markets across Asia Pacific" },
  { metric: "20+", label: "User interviews on FWD alone" },
];

export function WhyHireContent() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(shouldReduce);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl mb-20">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Why Hire Me
          </p>
          <h1
            className="font-heading font-extrabold mb-6"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            Fit for the role
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            Domain knowledge isn&apos;t a nice-to-have in regulated industries. It&apos;s the difference between
            a designer who asks the right questions and one who learns on your timeline.
          </p>
        </motion.div>

        {/* ── Proof point stats ───────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-2xl"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
        >
          {proofPoints.map((p) => (
            <div key={p.label} className="text-center md:text-left">
              <p
                className="font-heading font-extrabold mb-1"
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                }}
              >
                {p.metric}
              </p>
              <p className="text-xs leading-tight" style={{ color: "var(--muted)" }}>{p.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Category cards ──────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-48px" }}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: shouldReduce ? 0 : 0.1 * i }}
              className="p-8 rounded-2xl flex flex-col"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ backgroundColor: `${cat.accentColor}18` }}
                  aria-hidden="true"
                >
                  {cat.icon}
                </span>
                <h2
                  className="font-heading font-bold"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "1.125rem",
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.title}
                </h2>
              </div>

              {/* Headline */}
              <p
                className="text-sm leading-relaxed mb-6 pb-6"
                style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
              >
                {cat.headline}
              </p>

              {/* Points */}
              <ul className="space-y-3 flex-1">
                {cat.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${cat.accentColor}20` }}
                    >
                      <Check size={10} style={{ color: cat.accentColor }} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-snug" style={{ color: "var(--muted)" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center p-12 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.06) 100%)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            className="font-heading font-bold mb-3"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s build something great
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Whether you&apos;re a fintech scaling a payments platform, a bank modernising digital services,
            a tech company building something new, or a Web3 team — I&apos;m open to the right conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/6596875688"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold cursor-pointer"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:viknesh.geevan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border cursor-pointer"
              style={{ borderColor: "var(--border)", color: "var(--fg)" }}
            >
              viknesh.geevan@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
