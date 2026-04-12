"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, Clock, Wrench, Target } from "lucide-react";
import { easeOutExpo, makeFadeUp } from "@/lib/motion";

/* ─── Results ─────────────────────────────────────────────────────────────── */
const results = [
  { metric: "4,000", label: "Man-hours saved", sub: "Per vessel per year" },
  { metric: "98%", label: "Crew satisfaction", sub: "Post-deployment survey" },
  { metric: "100+", label: "Vessels deployed", sub: "Globally across 3 regions" },
  { metric: "↓ 62%", label: "Alert response time", sub: "vs legacy paper system" },
];

/* ─── Industry stats ──────────────────────────────────────────────────────── */
const industryStats = [
  { value: "20,000", label: "Maritime casualties per year" },
  { value: "$29B", label: "Global maritime insurance market" },
  { value: "66%", label: "Of incidents attributed to human factors" },
];

/* ─── Challenge items ─────────────────────────────────────────────────────── */
const challenges = [
  {
    num: "01",
    title: "SMS Compliance",
    desc: "Ship Safety Management System compliance was paper-based, error-prone, and difficult to audit remotely.",
  },
  {
    num: "02",
    title: "Operational Visibility",
    desc: "Shore-side managers had no real-time view of what was happening on vessels.",
  },
  {
    num: "03",
    title: "Siloed Systems",
    desc: "Safety data lived in disconnected spreadsheets, email chains, and physical logbooks.",
  },
  {
    num: "04",
    title: "Disconnected Info Flow",
    desc: "Crew on deck had no efficient way to flag hazards or escalate safety concerns to the bridge.",
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */
export function SafeVUEContent() {
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
          background: "linear-gradient(150deg, #0A1628 0%, #0C2A52 50%, #0369A1 100%)",
        }}
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise-sv"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#noise-sv)" />
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
              {["Maritime", "IIoT", "Safety 4.0", "Dashboard", "Mobile"].map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}>
                  {t}
                </span>
              ))}
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              Maritime Safety · IIoT · Industry 4.0
            </p>

            <h1 className="font-heading font-bold text-white mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
              }}>
              A new era of maritime safety
            </h1>
            <p className="text-xl mb-10" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "600px" }}>
              A Safer, More Productive and Sustainable World with SOL-X
            </p>

            {/* Hero metrics */}
            <div className="flex flex-wrap gap-4">
              {results.map((r) => (
                <div key={r.metric} className="px-5 py-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                  <p className="font-heading font-bold text-white text-xl"
                    style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>
                    {r.metric}
                  </p>
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
              { icon: <Target size={14} />, label: "Role", value: "Lead UX Designer" },
              { icon: <Clock size={14} />, label: "Timeline", value: "3 Months" },
              { icon: <Wrench size={14} />, label: "Tools", value: "Figma" },
              { icon: <Users size={14} />, label: "Team", value: "2 UX · 10 Devs · 1 PM · 4 POs" },
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

        {/* Overview ───────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              SafeVUE is an Industry 4.0 Permit To Work digital solution for ship managers to improve
              operational safety at sea. It replaces legacy paper-based SMS compliance systems with a
              real-time digital platform that connects the bridge, deck, and shore.
            </p>
          </motion.div>

          <motion.div
            {...animate(0.1)}
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(3,105,161,0.08) 0%, rgba(3,105,161,0.03) 100%)",
              border: "1px solid rgba(3,105,161,0.2)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0369A1" }}>
              Mission
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              Design an intuitive, safety-critical platform that empowers crew and shore-side officers to
              manage permits, hazards, and safety audits in real time — in environments with limited
              connectivity, extreme conditions, and zero tolerance for UI errors.
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* Product Ecosystem ───────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Platform</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              One platform. Three pillars.
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              SOL-X by MagellanX brings together three interconnected layers of maritime safety into a
              unified platform — spanning the wrist, the deck, and the shore.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Crew Protect", sub: "IIoT", desc: "Wearable biometric monitoring for crew health and wellbeing at sea." },
              { label: "Control Of Work", sub: "Process", desc: "Digital Permit To Work workflows replacing paper-based SMS compliance." },
              { label: "AI Analytics", sub: "Intelligence", desc: "Leading indicators that surface risk patterns before incidents occur." },
            ].map((p) => (
              <div key={p.label} className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#0369A1" }}>{p.sub}</p>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--fg)" }}>{p.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...animate(0.15)}
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ border: "1px solid var(--card-border)", backgroundColor: "#f8f9fa" }}
          >
            <Image
              src="/case-studies/safevue-ai/product-ecosystem.png"
              alt="SOL-X by MagellanX — Crew Protect, Control Of Work, AI Analytics platform diagram"
              width={2048}
              height={850}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        <Divider />

        {/* IIoT Hardware ───────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Hardware</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Designed for ATEX Zone 1 hazardous environments
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: "var(--muted)" }}>
              Every device in the SafeVUE ecosystem is ATEX Zone 1 certified — the most demanding
              hazardous area classification in maritime and industrial environments. The UX had to work
              across all four surfaces, in harsh conditions, with gloves on.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              { label: "SOL-X SmartWatch", desc: "ATEX Zone 1 wearable for crew biometric monitoring and distress alerts." },
              { label: "Control Of Work Tablet", desc: "Ruggedised ATEX tablet for permit issuance and sign-off on deck." },
              { label: "Operations Dashboard", desc: "Large-format bridge display for fleet-wide situational awareness." },
              { label: "Server / Networking Hardware", desc: "Onboard edge computing with Lloyd's Register certification." },
            ].map((h) => (
              <div key={h.label} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#0369A1" }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--fg)" }}>{h.label}</p>
                  <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...animate(0.15)}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid var(--card-border)" }}
          >
            <Image
              src="/case-studies/safevue-ai/hardware-ecosystem.png"
              alt="IIoT hardware for ATEX Zone 1 hazardous environments — SOL-X SmartWatch, Control Of Work Tablet, Operations Dashboard, Server hardware"
              width={2854}
              height={1416}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        <Divider />

        {/* The Challenge ───────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Four core operational problems
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Designing for safety-critical environments is unforgiving — a confusing alert hierarchy or
              slow interface could have real-world consequences. We identified four systemic failures in
              the legacy approach.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-4">
            {challenges.map((c) => (
              <div
                key={c.num}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold mb-4"
                  style={{ backgroundColor: "rgba(3,105,161,0.12)", color: "#0369A1" }}
                >
                  {c.num}
                </span>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>{c.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* Industry Context + Stats ─────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Industry Context</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              The scale of the problem
            </h2>
          </motion.div>

          {/* Stats row */}
          <motion.div {...animate(0.1)} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {industryStats.map((s) => (
              <div
                key={s.value}
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <p className="font-heading font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "var(--fg)",
                    letterSpacing: "-0.03em",
                  }}>
                  {s.value}
                </p>
                <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...animate(0.15)}>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              With 1.7 million seafarers affected globally, improving safety through better tooling is not
              just a UX problem — it&apos;s a humanitarian one.
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* Research: Empathise / Discover ─────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Research</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Empathise / Discover
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              We went onboard. Understanding real usage required getting off the computer and onto vessels
              and industrial sites — observing crew under actual working conditions, not simulated ones.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Crew Perspectives */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
              <p className="text-sm font-bold mb-4" style={{ color: "var(--fg)" }}>Crew Perspectives</p>
              <ul className="space-y-3">
                {[
                  { bold: "Interviewed crew", rest: " who had been using the wearable solution on active vessels." },
                  { bold: "Quantitative analysis", rest: " of watch log data to identify usage and drop-off patterns." },
                  { bold: "Observed", rest: " users at an industrial site that had recently adopted the solution." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: "#0369A1" }} />
                    <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>
                      <strong style={{ color: "var(--fg)" }}>{item.bold}</strong>{item.rest}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expert Insights */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
              <p className="text-sm font-bold mb-4" style={{ color: "var(--fg)" }}>Expert Insights</p>
              <ul className="space-y-3">
                {[
                  { bold: "Interviewed subject matter experts", rest: " from maritime and Oil, Gas & Chemical (OAG) sectors who had transitioned to shore-based safety roles." },
                  { bold: "Senior safety officers", rest: " responsible for safety policy across multiple fleets and sites." },
                  { bold: "Mapped the gap", rest: " between what regulations require and what tools actually support." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: "#0369A1" }} />
                    <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>
                      <strong style={{ color: "var(--fg)" }}>{item.bold}</strong>{item.rest}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </section>

        <Divider />

        {/* IA & User Flows ─────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Design Process</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Information architecture &amp; user flows
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: "var(--muted)" }}>
              Before designing a single screen, we mapped the full information architecture. The dashboard
              serves three distinct user roles — crew, deck officers, and shore-based safety managers —
              each with different permissions and priorities.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              { label: "Three Live Map variants", desc: "List View, Aft Deck Only, and Full Ship Map — letting users choose the right spatial model for their context." },
              { label: "Activity Tracker split", desc: "Active Permits To Work separated from the closed archive, reducing cognitive load in high-pressure situations." },
              { label: "Crew Profile drill-down", desc: "Captains get a single view of certifications, history, and incident log per crew member." },
              { label: "Non-blocking notifications", desc: "Alert flows are dismissable and designed not to interrupt active work unnecessarily." },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#0369A1" }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--fg)" }}>{d.label}</p>
                  <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* IA diagram — wide image, scrollable on mobile */}
          <motion.div
            {...animate(0.15)}
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ border: "1px solid var(--card-border)", backgroundColor: "#ffffff" }}
          >
            <div className="overflow-x-auto">
              <Image
                src="/case-studies/safevue-ai/ia-flow.png"
                alt="Dashboard information architecture — Log In, Live Map, Activity Tracker, Crew Profile flows"
                width={4355}
                height={2322}
                className="w-full h-auto min-w-[640px]"
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* Product Demo ───────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Product Demo</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              See SafeVUE.ai in action
            </h2>
          </motion.div>

          <motion.div
            {...animate(0.1)}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid var(--card-border)" }}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/mQza03ElPFo"
                title="SafeVUE.ai product demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* Dashboard ────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Real-time vessel monitoring
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              We designed a command-center dashboard for fleet safety officers, giving them a
              single-pane-of-glass view of all vessel safety activities.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="mb-8">
            <ul className="space-y-3">
              {[
                "Real-time permit status across all active work orders",
                "Drill-down from fleet overview to individual vessel to individual crew member",
                "Offline-first data architecture — dashboard degrades gracefully when satellite connectivity drops",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#0369A1" }}
                  />
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dashboard image — full width */}
          <motion.div
            {...animate(0.15)}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid var(--card-border)" }}
          >
            <Image
              src="/case-studies/safevue-ai/dashboard.png"
              alt="SafeVUE.ai fleet monitoring dashboard"
              width={1936}
              height={1084}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </section>

        <Divider />

        {/* Mobile / Benefits ───────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Mobile App</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Designed for the deck
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              The mobile app gives crew an efficient, glove-friendly interface for permit requests,
              hazard reporting, and safety briefings.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="mb-10">
            <ul className="space-y-3">
              {[
                "48dp minimum touch targets for gloved operation",
                "High-contrast alert system visible in direct sunlight",
                "Offline mode with sync-on-connect for low-bandwidth satellite environments",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#0369A1" }}
                  />
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3 mobile screenshots */}
          <motion.div {...animate(0.15)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/case-studies/safevue-ai/mobile-1.png", alt: "SafeVUE.ai mobile permit request screen", w: 768, h: 1166 },
              { src: "/case-studies/safevue-ai/mobile-2.png", alt: "SafeVUE.ai mobile hazard reporting screen", w: 768, h: 1385 },
              { src: "/case-studies/safevue-ai/mobile-3.png", alt: "SafeVUE.ai mobile safety briefing screen", w: 768, h: 1312 },
            ].map((img) => (
              <div
                key={img.src}
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "1px solid var(--card-border)" }}
              >
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
        </section>

        <Divider />

        {/* Results ─────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Outcomes</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Measurable impact at sea
            </h2>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid grid-cols-2 gap-4">
            {results.map((r) => (
              <div
                key={r.metric}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <p className="font-heading font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "var(--fg)",
                    letterSpacing: "-0.03em",
                  }}>
                  {r.metric}
                </p>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--fg)" }}>{r.label}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{r.sub}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* Learnings ───────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Reflections</SectionLabel>
            <h2 className="font-heading font-bold mb-6"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              What I learned
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Designing for safety-critical environments demands a different level of rigour. Every
              interaction decision — the colour of an alert, the wording of a confirmation — has potential
              real-world consequences. Contextual research onboard vessels (not just in a lab) was
              non-negotiable. Understanding the physical environment — glare, noise, gloves, time
              pressure — fundamentally shaped the design system.
            </p>
          </motion.div>

          <motion.div
            {...animate(0.1)}
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(3,105,161,0.07) 0%, rgba(3,105,161,0.02) 100%)",
              border: "1px solid rgba(3,105,161,0.18)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0369A1" }}>
              Next Steps
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              Following launch, the roadmap included: predictive safety alerts using vessel sensor data
              and AI pattern recognition; integration with port authority reporting systems to reduce
              administrative overhead; and expansion to the company&apos;s sister platform for environmental
              compliance (MARPOL reporting).
            </p>
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
            href="/work/fwd-insurance"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-2xl transition-all duration-300"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
          >
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>Insurtech · Insurance</p>
              <h3 className="font-heading font-bold"
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                }}>
                FWD Insurance
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
