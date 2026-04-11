"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Users, Clock, Wrench, Target } from "lucide-react";
import { easeOutExpo, makeFadeUp } from "@/lib/motion";

/* ─── Journey steps ───────────────────────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    label: "First Step",
    title: "CVP Screen",
    desc: "Communicate the value proposition of Money Lock clearly — a safe that protects cash from scams, unlockable only at a UOB ATM.",
    image: "/case-studies/uob-money-lock/flow-step-1.png",
    w: 375, h: 812,
  },
  {
    num: "02–03",
    label: "Second & Third Step",
    title: "Select Account + Set Lock Amount",
    desc: "Customer selects which account to lock and sets a lock limit. Real-time display of Withdrawable Amount reinforces the concept.",
    image: "/case-studies/uob-money-lock/flow-steps-2-3.png",
    w: 750, h: 1700,
    wide: true,
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
    title: "Confirmation",
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
const strengths = [
  "Participants are concerned about scams and appreciate products which alleviate anxiety by increasing security.",
  "Want to ensure emergency funds and savings are secured.",
];

const areasToImprove = [
  "Cannot see the value of setting a limit higher than balance (even after explaining), which risks weakening the construct's security benefit.",
  "Being able to deduct funds from locked account weakens the 'lock' proposition.",
  "Users would not want to lock funds used for transactions, limiting relevance of continued scheduled deductions.",
  "Usability issues identified — opportunity to increase clarity through better explanation and clearer labels.",
];

const testingObjectives = [
  "Explore preconceived expectations about 'money lock' products",
  "Assess relevance of Money Lock 2.0 against competition and identifying improvement areas",
  "Deep-dive on perceptions towards new features (i.e. limit vs. locked away amount)",
  "Test usability and understanding of new journeys",
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

          {/* Full overview image */}
          <motion.div {...animate(0.1)} className="mt-10 mb-16 w-full rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--card-border)" }}>
            <Image
              src="/case-studies/uob-money-lock/flow-overview.png"
              alt="UOB Money Lock 2.0 — complete 6-step user journey overview"
              width={1500}
              height={3316}
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </motion.div>

          {/* Step-by-step breakdown */}
          <div className="space-y-20">
            {journeySteps.map((step, i) => (
              <motion.div key={step.num} {...animate(0.05 * i)}
                className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading font-bold text-4xl leading-none"
                      style={{
                        fontFamily: "var(--font-heading, sans-serif)",
                        color: "rgba(37,99,235,0.15)",
                        letterSpacing: "-0.04em",
                      }}>
                      {step.num}
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--muted)" }}>{step.label}</p>
                      <h3 className="font-heading font-semibold"
                        style={{
                          fontFamily: "var(--font-heading, sans-serif)",
                          fontSize: "1.2rem",
                          color: "var(--fg)",
                          letterSpacing: "-0.01em",
                        }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)", maxWidth: "420px" }}>
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
                <div
                  className="rounded-2xl overflow-hidden flex-shrink-0"
                  style={{
                    width: step.wide ? "min(360px, 100%)" : "min(220px, 100%)",
                    border: "1px solid var(--card-border)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src={step.image}
                    alt={`Step ${step.num}: ${step.title}`}
                    width={step.w}
                    height={step.h}
                    className="w-full h-auto"
                    style={{ display: "block" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* User Research & Insights ────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Research & Insights</SectionLabel>
            <h2 className="font-heading font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Insights from customer observations
            </h2>
          </motion.div>

          {/* Testing objectives */}
          <motion.div {...animate(0.05)} className="mb-10 p-8 rounded-2xl"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
            <p className="text-sm font-semibold mb-5" style={{ color: "var(--fg)" }}>
              User Testing Objectives
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {testingObjectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: "rgba(37,99,235,0.12)", color: "#2563EB" }}>
                    {i + 1}
                  </span>
                  <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{obj}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key insight callout */}
          <motion.div {...animate(0.1)} className="mb-10 p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(37,99,235,0.06) 100%)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}>
            <div className="text-5xl leading-none mb-3" style={{ color: "rgba(124,58,237,0.25)", fontFamily: "Georgia, serif" }}>&ldquo;</div>
            <p className="text-lg leading-relaxed font-medium italic mb-2" style={{ color: "var(--fg)" }}>
              Customers anticipate putting money aside cannot be touched, following OCBC and government
              constructs. Thus, allowing deductions and setting a limit above the available balance requires
              customer learning.
            </p>
            <p className="text-xs font-medium uppercase tracking-wider mt-4" style={{ color: "var(--muted)" }}>
              Key Insight — User Testing
            </p>
          </motion.div>

          {/* Strengths vs Areas */}
          <motion.div {...animate(0.15)} className="grid md:grid-cols-2 gap-4 mb-12">
            {/* Strengths */}
            <div className="p-7 rounded-2xl"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 size={16} style={{ color: "#16A34A" }} />
                <p className="text-sm font-semibold" style={{ color: "#16A34A" }}>Strengths</p>
              </div>
              <ul className="space-y-3">
                {strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#16A34A" }} />
                    <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{s}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to improve */}
            <div className="p-7 rounded-2xl"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
              <div className="flex items-center gap-2 mb-5">
                <AlertCircle size={16} style={{ color: "#EA580C" }} />
                <p className="text-sm font-semibold" style={{ color: "#EA580C" }}>Areas to Improve</p>
              </div>
              <ul className="space-y-3">
                {areasToImprove.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#EA580C" }} />
                    <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Testing screenshots */}
          <motion.div {...animate(0.2)} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { src: "/case-studies/uob-money-lock/user-testing-1.png", alt: "User testing — navigation with Money Lock entry point", w: 375, h: 1669 },
              { src: "/case-studies/uob-money-lock/user-testing-2.png", alt: "User testing — account view showing locked/withdrawable amounts", w: 375, h: 1560 },
              { src: "/case-studies/uob-money-lock/user-testing-3.png", alt: "User testing — terminology tooltip: Withdrawable Amount explanation", w: 375, h: 811 },
            ].map((img) => (
              <div key={img.src} className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--card-border)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <Image src={img.src} alt={img.alt} width={img.w} height={img.h}
                  className="w-full h-auto" style={{ display: "block" }} />
              </div>
            ))}
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
