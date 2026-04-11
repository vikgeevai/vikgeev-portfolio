"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, Clock, Wrench, Target } from "lucide-react";
import { easeOutExpo, makeFadeUp } from "@/lib/motion";

/* ─── Journey steps ───────────────────────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    label: "First Step",
    title: "CVP Screen",
    desc: "Communicate the value proposition of Money Lock clearly — a safe that protects cash from scams, unlockable only at a UOB ATM.",
    image: "/case-studies/uob-money-lock/flow-step-cvp.png",
    w: 375, h: 829,
  },
  {
    num: "02",
    label: "Second Step",
    title: "Select Account",
    desc: "Customer selects which eligible account to apply the money lock to, with withdrawable and available balances shown upfront.",
    image: "/case-studies/uob-money-lock/flow-step-1.png",
    w: 375, h: 812,
  },
  {
    num: "03",
    label: "Third Step",
    title: "Set Lock Amount",
    desc: "Customer sets a lock limit. Real-time display of withdrawable amount reinforces the concept before committing.",
    image: "/case-studies/uob-money-lock/flow-step-3.png",
    w: 375, h: 850,
  },
  {
    num: "04",
    label: "Fourth Step",
    title: "Cognitive Break",
    desc: "A deliberate pause that reinforces what locking means — building confidence before the customer commits.",
    image: "/case-studies/uob-money-lock/flow-step-4.png",
    w: 375, h: 859,
  },
  {
    num: "05",
    label: "Fifth Step",
    title: "Review & Confirm",
    desc: "Summary of the lock details before final commitment. Designed to reduce anxiety and post-transaction regret.",
    image: "/case-studies/uob-money-lock/flow-step-5.png",
    w: 375, h: 818,
  },
  {
    num: "06",
    label: "Sixth Step",
    title: "Successful",
    desc: "Clear success state with the locked amount displayed. Reinforces trust and gives customers immediate confidence.",
    image: "/case-studies/uob-money-lock/flow-step-6.png",
    w: 375, h: 859,
  },
];

/* ─── Insights ────────────────────────────────────────────────────────────── */
const testingObjectives = [
  { bold: "Explore preconceived expectations", rest: " about 'money lock' products" },
  { bold: "Assess relevance of Money Lock 2.0", rest: " against competition and identifying improvement areas" },
  { bold: "Deep-dive on perceptions towards new features", rest: " (i.e., limit vs locked away amount)" },
  { bold: "Test usability and understanding", rest: " of new journeys" },
];

const customerQuotes = [
  "I don't like the idea of money being taken away from the account. It feels more encrypted and protected when there is completely no access to it",
  "It's ridiculous to set above the available balance! What for?! There is no point to that",
  "I didn't think of a situation where someone would set above balance. It's scary that you might not have any available cash",
  "I think it's useful, but I wouldn't lock accounts that I use day-to-day; will lock away emergency funds, accounts that I can leave aside",
];

/* ─── Usability Issues ────────────────────────────────────────────────────── */
const usabilityIssues = [
  {
    severity: "Major",
    title: "Money lock limit",
    image: "/case-studies/uob-money-lock/usability-screen-1.png",
    w: 166, h: 213,
    points: [
      "Assumed they were setting aside money instead of a limit",
      "Felt the term is very technical, did not understand why it was called a limit",
    ],
  },
  {
    severity: "Major",
    title: "Money lock CVP",
    image: "/case-studies/uob-money-lock/usability-screen-2.png",
    w: 166, h: 213,
    points: [
      "Concerned about restrictions and T&Cs",
      "Did not know that they could only lower the limit and access locked amount through ATM",
    ],
  },
  {
    severity: "Moderate",
    title: "Accessible / available balance",
    image: "/case-studies/uob-money-lock/usability-screen-3.png",
    w: 166, h: 213,
    points: [
      "Confusion between accessible and available balance",
      "Observed participants using the terms interchangeably or wrongly",
    ],
  },
  {
    severity: "Moderate",
    title: "Account details",
    image: "/case-studies/uob-money-lock/usability-screen-4.png",
    w: 166, h: 213,
    points: [
      "Thought 'Money lock on' meant they could no longer access the amount when making a transfer",
      "Preference for version with all three amounts displayed",
    ],
  },
];

/* ─── Terminology ─────────────────────────────────────────────────────────── */
const terms = [
  {
    term: "Available Balance",
    badge: "BAU — No change",
    definition:
      "Business as usual. No change to how this is computed. Customers already understand this number from everyday banking.",
    color: "#2563EB",
  },
  {
    term: "Locked Amount",
    badge: "New — replaces 'Limit'",
    definition:
      "Instead of asking customers to understand the concept of a limit, we simply ask how much they want to lock. More concrete, less abstract.",
    color: "#7C3AED",
  },
  {
    term: "Withdrawable Amount",
    badge: "New — replaces 'Accessible Balance'",
    definition:
      "Available Balance minus Locked Amount. More tangible, easily distinguishable, and consistent with trading app conventions across channels.",
    color: "#059669",
  },
];

/* ─── Results ─────────────────────────────────────────────────────────────── */
const results = [
  { metric: "$1B+", label: "CASA funds locked", sub: "Within first 2 days of launch" },
  { metric: "50K+", label: "Customers registered", sub: "And locked their funds in month 1" },
  { metric: "$3.9B", label: "CASA funds locked", sub: "Total within 3 weeks of launch" },
  { metric: "$6.3M", label: "Project value", sub: "MAS mandate compliance" },
];

/* ─── Component ───────────────────────────────────────────────────────────── */
export function UOBMoneyLockContent() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(shouldReduce);

  const animate = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: shouldReduce ? 0 : 0.65, ease: easeOutExpo, delay },
  });

  return (
    <article>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        className="relative min-h-[56vh] flex items-end pt-24 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(150deg, #0F2D6B 0%, #1D4ED8 60%, #2563EB 100%)",
        }}
      >
        {/* Texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(255,255,255,0.07) 0%, transparent 60%)",
        }} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="g2"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#g2)" />
        </svg>

        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <ArrowLeft size={15} />
              All Work
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: shouldReduce ? 0 : 0.1 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Fintech", "Banking", "Mobile", "MAS Regulation", "Security UX"].map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}>
                  {t}
                </span>
              ))}
            </div>

            <h1 className="font-heading font-bold text-white mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
              }}>
              UOB Money Lock 2.0
            </h1>
            <p className="text-xl mb-10" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "600px" }}>
              MAS initiative: To keep bank customers safe from scams
            </p>

            {/* Hero metrics */}
            <div className="flex flex-wrap gap-4">
              {results.map((r) => (
                <div key={r.metric} className="px-5 py-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                  <p className="font-heading font-bold text-white text-xl" style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>{r.metric}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{r.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Project metadata ──────────────────────────────────────────────── */}
      <div className="py-8" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Target size={14} />, label: "Role", value: "Product Design Lead" },
              { icon: <Clock size={14} />, label: "Timeline", value: "Jan – June 2024" },
              { icon: <Wrench size={14} />, label: "Tools", value: "Figma" },
              { icon: <Users size={14} />, label: "Team", value: "1 Content Designer · 1 PO · 10 Devs" },
            ].map((item) => (
              <div key={item.label}>
                <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider mb-1.5"
                  style={{ color: "var(--muted)" }}>
                  {item.icon}{item.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6">

        {/* Overview + Goal ─────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              As part of anti-scam measures, MAS mandated banks to enable a feature allowing customers to lock up
              their funds in CASA with the restriction of digital funds outflow. This provides customers a greater
              sense of security by limiting the amount of funds that could be lost digitally in the event of a
              fraud or scam attack.
            </p>
          </motion.div>

          <motion.div
            {...animate(0.1)}
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(37,99,235,0.03) 100%)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#2563EB" }}>
              Goal
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              Money Lock helps protect customers' account balance from being scammed. By setting up a higher Lock
              Limit, the chances of losing funds digitally are minimised. Any large transfer or withdrawal will be
              blocked with this feature in place.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <Divider />

        {/* The Solution — 6-step Journey ──────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-4">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="font-heading font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              A 6-step user journey
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Designed to guide customers through setting their first lock amount — balancing MAS compliance
              requirements with an experience that feels empowering, not restrictive.
            </p>
          </motion.div>

          {/* Step descriptions list */}
          <motion.div {...animate(0.1)} className="mt-10 mb-12 grid sm:grid-cols-2 gap-4">
            {journeySteps.map((step, i) => (
              <div key={step.num} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: "rgba(37,99,235,0.12)", color: "#2563EB" }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold leading-snug" style={{ color: "var(--fg)" }}>
                    {step.title}
                  </p>
                  <p className="text-xs leading-snug mt-0.5" style={{ color: "var(--muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 3-per-row screen grid */}
          <motion.div {...animate(0.15)} className="grid grid-cols-3 gap-6">
            {journeySteps.map((step, i) => (
              <motion.div key={step.num} {...animate(0.06 * i)} className="flex flex-col items-center gap-3">
                <div className="w-full rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--card-border)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                  <Image
                    src={step.image}
                    alt={`Step ${step.num}: ${step.title}`}
                    width={step.w}
                    height={step.h}
                    className="w-full h-auto"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#2563EB" }}>
                    Step {i + 1}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                    {step.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* User Research & Insights ────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Research & Insights</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Insights from customer observations
            </h2>
          </motion.div>

          {/* Testing objectives — bold key phrase + regular rest */}
          <motion.div {...animate(0.05)} className="mb-12">
            <p className="text-base font-semibold mb-5" style={{ color: "var(--fg)" }}>
              User Testing Objectives
            </p>
            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
              {testingObjectives.map((obj, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="font-semibold" style={{ color: "#D97706" }}>{obj.bold}</span>
                  {obj.rest}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Customer quote bubbles — 2×2 */}
          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-5 mb-10">
            {customerQuotes.map((quote, i) => (
              <div key={i} className="relative pb-3">
                <div
                  className="rounded-2xl rounded-bl-sm p-5"
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1.5px solid rgba(37,99,235,0.35)",
                  }}
                >
                  <p className="text-sm leading-relaxed italic" style={{ color: "#2563EB" }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
                {/* Bubble tail */}
                <div
                  className="absolute bottom-0 left-5 w-4 h-4"
                  style={{
                    backgroundColor: "var(--card)",
                    borderRight: "1.5px solid rgba(37,99,235,0.35)",
                    borderBottom: "1.5px solid rgba(37,99,235,0.35)",
                    transform: "rotate(45deg)",
                    transformOrigin: "center",
                  }}
                />
              </div>
            ))}
          </motion.div>

          {/* Key insight summary */}
          <motion.div {...animate(0.15)}>
            <p
              className="text-base leading-relaxed text-center py-5"
              style={{
                color: "#D97706",
              }}
            >
              Customers anticipate putting money aside cannot be touched, following OCBC and government
              constructs. Thus, allowing deductions and setting a limit above the available balance requires
              customer learning.
            </p>
          </motion.div>

        </section>

        <Divider />

        {/* Usability Issues ─────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Usability Testing</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Usability issues identified during testing
            </h2>
          </motion.div>

          {/* 4-column horizontal layout — matches original */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {usabilityIssues.map((issue, i) => (
              <motion.div
                key={issue.title}
                {...animate(0.07 * i)}
                className="flex flex-col gap-4"
              >
                {/* Screen image in grey rounded container */}
                <div
                  className="w-full rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: "rgba(156,163,175,0.15)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  {issue.image ? (
                    <Image
                      src={issue.image}
                      alt={issue.title}
                      width={issue.w}
                      height={issue.h}
                      className="w-full h-auto rounded-2xl"
                      style={{ display: "block" }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                        style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                      >
                        <span style={{ fontSize: "16px" }}>📱</span>
                      </div>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>Prototype screen</p>
                    </div>
                  )}
                </div>

                {/* Severity badge */}
                <div className="flex justify-center">
                  <span
                    className="inline-flex items-center justify-center px-5 py-1.5 rounded-full text-sm font-bold text-white"
                    style={
                      issue.severity === "Major"
                        ? { background: "linear-gradient(135deg, #EF4444 0%, #F97316 100%)" }
                        : { background: "linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)" }
                    }
                  >
                    {issue.severity}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-heading font-semibold text-center"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "0.95rem",
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {issue.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2">
                  {issue.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span
                        className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--muted)" }}
                      />
                      <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>{pt}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Supporting screens — 3-column grid */}
          <motion.div {...animate(0.25)} className="grid grid-cols-3 gap-4 mt-8 mb-6">
            {[
              { src: "/case-studies/uob-money-lock/user-testing-1.png", w: 375, h: 1669, alt: "Services screen showing Money Lock entry point" },
              { src: "/case-studies/uob-money-lock/user-testing-2.png", w: 375, h: 1560, alt: "One Account details with locked amount" },
              { src: "/case-studies/uob-money-lock/user-testing-3.png", w: 375, h: 811,  alt: "What do these mean — terminology help screen" },
            ].map((img) => (
              <div key={img.src} className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid var(--card-border)" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </motion.div>

          {/* Opportunity summary */}
          <motion.div {...animate(0.3)}>
            <p
              className="text-sm leading-relaxed text-center py-4"
              style={{ color: "#D97706" }}
            >
              Opportunity to increase clarity of product construct through explanation of benefits and clearer labels
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* Terminology Workshop ─────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-4">
            <SectionLabel>Terminology Workshop</SectionLabel>
            <h2 className="font-heading font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Propose Terminology
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
              During the project we facilitated discovery and empathy workshops at kickoff, and 2 design workshops
              throughout — to align the team, generate ideas, and establish shared ownership over content.
              The principle: use terminology that customers already understand, rather than inventing new terms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {terms.map((t, i) => (
              <motion.div key={t.term} {...animate(0.08 * i)}
                className="p-7 rounded-2xl flex flex-col"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <div className="mb-5">
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${t.color}18`, color: t.color }}>
                    {t.badge}
                  </span>
                  <h3 className="font-heading font-bold"
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: "1.1rem",
                      color: t.color,
                      letterSpacing: "-0.01em",
                    }}>
                    {t.term}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {t.definition}
                </p>
                <div className="mt-5 h-0.5 w-8 rounded-full" style={{ backgroundColor: t.color, opacity: 0.4 }} />
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Results ──────────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Results</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Metrics since launch
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {results.map((r, i) => (
              <motion.div key={r.metric} {...animate(0.07 * i)}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <p className="font-heading font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(2rem, 5vw, 2.75rem)",
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}>
                  {r.metric}
                </p>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--fg)" }}>{r.label}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{r.sub}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Learnings + Next steps ───────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionLabel>Learnings</SectionLabel>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Since launch I have gained valuable learning outcomes that will inform future efforts. By analysing
                user engagement, I gained insights into user preferences and behaviours, while performance
                evaluations helped me understand the feature's impact on retention and transactions. Continuous
                customer feedback enabled ongoing improvement to ensure the feature meets user needs effectively.
              </p>
            </div>
            <div>
              <SectionLabel>Next Steps</SectionLabel>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                We plan to expand Money Lock to incorporate UOB wealth products within the TMRW mobile app,
                streamlining payment processes. We will also adapt this feature for desktop personal internet
                banking, ensuring a seamless experience across all platforms.
              </p>
            </div>
          </motion.div>
        </section>

      </div>

      {/* ── Next case study ───────────────────────────────────────────────── */}
      <motion.div
        {...animate()}
        className="py-16"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
            Next Case Study
          </p>
          <Link
            href="/work/safevue-ai"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-2xl transition-all duration-300"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
          >
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>Maritime · IIoT · Safety 4.0</p>
              <h3 className="font-heading font-bold"
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                }}>
                SafeVUE.ai
              </h3>
            </div>
            <span
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </motion.div>

    </article>
  );
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div className="h-px w-full" style={{ backgroundColor: "var(--border)" }} />;
}
