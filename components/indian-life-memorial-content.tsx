"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Target, Wrench, Users } from "lucide-react";
import { easeOutExpo, makeFadeUp } from "@/lib/motion";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const challenges = [
  {
    num: "01",
    title: "Designing for grief",
    desc: "Users arrive in acute emotional distress. Every word, interaction, and visual choice carries more weight than in any other product context. There is no room for ambiguity.",
  },
  {
    num: "02",
    title: "Multi-faith complexity",
    desc: "Hindu, Roman Catholic, Christian, Freethinker, Direct Cremation, Baby, Pet, and Repatriation — each with distinct rituals, timelines, and logistics. The IA had to accommodate all without overwhelming anyone.",
  },
  {
    num: "03",
    title: "Transparency in a trust-broken industry",
    desc: "Funeral pricing in Singapore has historically been opaque. The product needed to surface clear nett pricing at every step — without triggering anxiety in already-distressed users.",
  },
];

const stages = [
  {
    num: "01",
    name: "Plan",
    human: "Product brief, user needs, cultural constraints",
    claude: "Full IA, page hierarchy, user journey maps across 3 user states",
  },
  {
    num: "02",
    name: "Design",
    human: "Tone of voice, visual direction, emotional register",
    claude: "All UX copy, microcopy, component specs, accessibility requirements",
  },
  {
    num: "03",
    name: "Build",
    human: "Architecture decisions, code review, bug judgment",
    claude: "React components, configurator state machine, real-time pricing logic",
  },
  {
    num: "04",
    name: "Ship",
    human: "Vercel config, domain setup, final QA pass",
    claude: "Commit messages, build error diagnosis, robots.txt & sitemap",
  },
  {
    num: "05",
    name: "Evaluate",
    human: "Heuristic review, prioritisation, next sprint",
    claude: "Evaluation framework, findings synthesis, scored action backlog",
  },
];

const deepDives = [
  {
    num: "01",
    stage: "Plan",
    humanHeading: "What I brought",
    humanBody:
      "Defined the product brief, cultural sensitivity requirements, the 8-service constraint, and who the primary user was — a grieving family member searching Google at 2am. Claude cannot decide what the product is. It can only respond to a brief. Writing that brief precisely is the first design act.",
    claudeHeading: "What Claude built",
    claudeBody:
      "Generated the full 10-page IA with per-page purpose, primary CTA, and key content blocks. Mapped user journeys across three distinct user states: acute crisis, informed researcher, and pre-planner. Output used directly, with one round of structural refinement.",
  },
  {
    num: "02",
    stage: "Design",
    humanHeading: "What I brought",
    humanBody:
      "Defined tone of voice (compassionate, direct, never clinical), the information hierarchy for emotionally distressed users, and which content had to be visible without scrolling. These decisions require empathy and cultural understanding that cannot be prompted into existence.",
    claudeHeading: "What Claude built",
    claudeBody:
      "All homepage copy, service page descriptions, configurator microcopy, FAQ content, and error states — approximately 4,000 words of production UX copy across 10 pages. First drafts were 80–90% usable; the remainder required re-prompting with more precise constraints.",
  },
  {
    num: "03",
    stage: "Build",
    humanHeading: "What I brought",
    humanBody:
      "Made all architectural decisions: single useState object for configurator state, shadcn/ui for the component layer, sticky sidebar for the live estimate. Reviewed every output for logic errors and caught two pricing edge cases Claude missed in the first pass.",
    claudeHeading: "What Claude built",
    claudeBody:
      "The full React + TypeScript codebase: all page components, the 5-step configurator state machine, real-time pricing logic with additive selection handling, and Tailwind styling across the site. Approximately 3,200 lines of production code across 18 components.",
  },
  {
    num: "04",
    stage: "Ship",
    humanHeading: "What I brought",
    humanBody:
      "Reviewed all commits, configured Vercel project settings, pointed the custom domain (indianlifememorial.com), and ran the final QA pass across all 10 pages on mobile and desktop. Deployment and quality gates require human accountability.",
    claudeHeading: "What Claude built",
    claudeBody:
      "Drafted Git commit messages for every significant change. Diagnosed a Vercel build error caused by a Next.js image configuration conflict. Generated robots.txt, sitemap structure, and meta tag templates for SEO.",
  },
  {
    num: "05",
    stage: "Evaluate",
    humanHeading: "What I brought",
    humanBody:
      "Ran a structured heuristic evaluation against Nielsen's 10 usability heuristics post-launch. Made prioritisation calls on which gaps to address first — balancing user impact against implementation cost.",
    claudeHeading: "What Claude built",
    claudeBody:
      "Generated the evaluation template with scoring criteria for each heuristic. Synthesised raw findings into a structured action list with severity ratings. Drafted the next sprint brief based on highest-priority gaps.",
  },
];

const promptCards = [
  {
    context: "Stage 01 — Plan · IA Generation",
    label: "Starting with a blank brief",
    prompt: `"I'm building a funeral services platform for Singapore's Indian and Hindu community. Users arrive in three states: acute crisis (death just happened), informed researcher (death expected), and pre-planner (future-focused).

The platform supports 8 service types: Hindu/Indian, Roman Catholic, Christian, Freethinker, Direct Cremation, Baby Funeral, Pet Cremation, Repatriation.

Generate a full site IA as a structured hierarchy. For each page include: purpose, primary user state it serves, primary CTA, and 3 key content blocks. Flag pages where emotional state requires specific UX considerations."`,
    output: "Full 10-page IA with per-page content strategy — used directly as the project foundation.",
  },
  {
    context: "Stage 02 — Design · Hero Copy",
    label: "First impression for a grieving family",
    prompt: `"Write the homepage hero for Indian Life Memorial. Constraints:
– Primary user: family member in crisis, arrived via Google at 2am
– Tone: compassionate, direct, specific — never clinical or corporate
– Must communicate above the fold: 24/7 availability, transparent pricing, multi-faith
– Headline: confident and specific, not a question or tagline, max 8 words
– Subtitle: one sentence, under 20 words, no jargon
– Do not use euphemisms. 'Loved one' is fine. 'Dearly departed' is not."`,
    output: `Headline: "Singapore's first agentic funeral planner is here." — shipped verbatim to production.`,
  },
  {
    context: "Stage 03 — Build · Configurator",
    label: "The centrepiece feature",
    prompt: `"Build a 5-step funeral configurator in React + TypeScript + TailwindCSS + shadcn/ui.

Steps: (1) Service Type, (2) Arrangement Details [budget / cremation or burial / duration], (3) Location & Casket [venue + casket tier], (4) Add-ons [tentage, floral, 3rd-party fees shown transparently], (5) Your Details.

Requirements:
– Sticky sidebar: Live Estimate panel that recalculates on every selection
– Pricing: base price per service type, additive per selection
– Continue: disabled until all required selections in current step made
– State: single useState object, no external library
– Submit: format selections into WhatsApp message, open wa.me deeplink"`,
    output: "Full working component on first output. Required 3 revision rounds for pricing edge cases.",
  },
];

const humanMoments = [
  {
    title: "Emotional register",
    body: "Deciding 'Direct Cremation from $1,888' belonged on the homepage, not a subpage. That pricing number, that early, signals honesty — but only if the designer understands why anxious users need that anchor.",
  },
  {
    title: "Cultural sequence",
    body: "Understanding why Hindu/Indian Funeral had to be listed first — above Direct Cremation, regardless of alphabetical logic or conversion rate data. Cultural respect is not an SEO variable.",
  },
  {
    title: "Design taste",
    body: "When the first generated hero copy was technically correct but emotionally flat. Knowing it was wrong, articulating exactly why, and re-prompting with precise new constraints until the output matched.",
  },
  {
    title: "Strategic bets",
    body: "Choosing to build a live estimate panel over a 'request a quote' form — knowing it required 3× more dev effort. The right call because reducing pricing anxiety is the product's core value proposition.",
  },
];

const configuratorSteps = [
  { num: "01", title: "Service Type", desc: "Selects from 8 types: Hindu/Indian, Roman Catholic, Christian, Freethinker, Direct Cremation, Baby Funeral, Pet Cremation, Repatriation." },
  { num: "02", title: "Arrangement Details", desc: "Budget range, cremation or burial, and wake duration — each choice updates the live estimate in real time." },
  { num: "03", title: "Location & Casket", desc: "Wake venue (HDB Void Deck, Parlour, Landed, Home) and casket selection from Signature or Premium tiers." },
  { num: "04", title: "Optional Add-ons", desc: "Tentage, floral photo frame, and mandatory 3rd-party fees displayed transparently — no surprises." },
  { num: "05", title: "Your Details", desc: "Contact and deceased information. Submits a personalised quote request via WhatsApp and email." },
];

const pages = [
  { name: "Home", desc: "Entry point surfacing trust signals, agentic planner preview, and 24/7 availability" },
  { name: "Services", desc: "Faith-based navigation hub linking to 8 dedicated service pages" },
  { name: "Hindu / Indian Funeral", desc: "Primary service — Vedic rites, process walkthrough, inclusions, FAQs" },
  { name: "Direct Cremation", desc: "Simplified, affordable option from $1,188 nett" },
  { name: "Repatriation", desc: "International remains transport — inbound and outbound from Singapore" },
  { name: "Packages", desc: "Transparent, filterable pricing across all faiths with full inclusion breakdowns" },
  { name: "Getting Started", desc: "The 5-step agentic configurator with live estimate sidebar" },
  { name: "My Legacy Vault", desc: "Government-backed Singpass pre-planning portal integration" },
  { name: "Resources", desc: "Guides, checklists, and downloadable PDFs for grieving families" },
  { name: "Contact", desc: "24/7 availability — callback request and pre-planning enquiry tabs" },
];

const results = [
  { metric: "10+", label: "Pages built", sub: "Fully designed & deployed" },
  { metric: "5", label: "Configurator steps", sub: "With real-time pricing" },
  { metric: "Weeks", label: "Brief to launch", sub: "Not months" },
  { metric: "Live", label: "indianlifememorial.com", sub: "Production domain" },
];

/* ─── Component ───────────────────────────────────────────────────────────── */
export function IndianLifeMemorialContent() {
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
        style={{ background: "linear-gradient(150deg, #1A0D0A 0%, #4A1A08 55%, #92400E 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)",
        }} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise-ilm"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#noise-ilm)" />
        </svg>

        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              <ArrowLeft size={15} />All Work
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible"
            transition={{ delay: shouldReduce ? 0 : 0.1 }}>
            <div className="flex flex-wrap gap-2 mb-5">
              {["End-of-Life", "Claude Code", "AI-Native", "Compassion UX", "Singapore"].map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}>{t}</span>
              ))}
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              End-of-Life · AI-Native · Singapore
            </p>
            <h1 className="font-heading font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(2.75rem, 7vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1.06 }}>
              Indian Life Memorial
            </h1>
            <p className="text-xl mb-10" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "640px" }}>
              Designing for grief and building with AI — Singapore&apos;s first agentic funeral planner, built end-to-end with Claude Code
            </p>
            <div className="flex flex-wrap gap-4">
              {results.map((r) => (
                <div key={r.metric} className="px-5 py-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                  <p className="font-heading font-bold text-white text-xl"
                    style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>{r.metric}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{r.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Metadata ──────────────────────────────────────────────────────── */}
      <div className="py-8" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Target size={14} />, label: "Role", value: "Lead Product Designer & Builder" },
              { icon: <Clock size={14} />, label: "Timeline", value: "2024" },
              { icon: <Wrench size={14} />, label: "Tools", value: "Claude Code · React · GitHub · Vercel" },
              { icon: <Users size={14} />, label: "Product", value: "indianlifememorial.com" },
            ].map((item) => (
              <div key={item.label}>
                <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider mb-1.5"
                  style={{ color: "var(--muted)" }}>{item.icon}{item.label}</p>
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
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Indian Life Memorial is a Singapore-based funeral services platform for the Indian, Hindu, and multi-faith
              community. It was designed and built end-to-end with Claude Code — from information architecture
              and UX copy through to the React codebase, GitHub workflow, and Vercel deployment.
              This case study documents both the product design decisions and the AI-native build process.
            </p>
          </motion.div>
          <motion.div {...animate(0.1)} className="p-8 rounded-2xl"
            style={{ background: "linear-gradient(135deg, rgba(146,64,14,0.08) 0%, rgba(146,64,14,0.03) 100%)", border: "1px solid rgba(146,64,14,0.2)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#92400E" }}>
              The premise
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              Designing for someone who is grieving, may be sleep-deprived, and needs to make irreversible decisions
              quickly — often for the first time. And building the product that serves them, using Claude at every layer.
            </p>
          </motion.div>
        </section>

        {/* Hero screenshot */}
        <motion.div {...animate(0.05)} className="rounded-2xl overflow-hidden shadow-2xl mb-16"
          style={{ border: "1px solid var(--card-border)" }}>
          <Image src="/case-studies/indian-life-memorial/hero-screenshot.png"
            alt="Indian Life Memorial — Singapore's first agentic funeral planner"
            width={3024} height={1520} className="w-full h-auto" priority />
        </motion.div>

        <Divider />

        {/* Design Challenge ────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              Three challenges, no easy answers
            </h2>
          </motion.div>
          <motion.div {...animate(0.1)} className="flex flex-col gap-4">
            {challenges.map((c) => (
              <div key={c.num} className="flex items-start gap-5 p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: "rgba(146,64,14,0.12)", color: "#92400E" }}>{c.num}</span>
                <div>
                  <p className="text-sm font-semibold mb-1.5" style={{ color: "var(--fg)" }}>{c.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* AI Workflow Pipeline ────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>The AI-Native Workflow</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              Plan → Design → Build → Ship → Evaluate
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              At every stage: human strategic direction, Claude execution. This is what AI-native product design
              actually looks like — not shortcuts, but a disciplined division of judgment and output.
            </p>
          </motion.div>

          {/* Pipeline diagram */}
          <motion.div {...animate(0.1)}>
            <div className="overflow-x-auto pb-4 -mx-2">
              <div className="flex gap-0 min-w-max px-2" style={{ alignItems: "stretch" }}>
                {stages.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-0">
                    <div className="flex flex-col rounded-2xl p-5"
                      style={{ width: "200px", border: "1px solid var(--card-border)", backgroundColor: "var(--card)" }}>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: "rgba(146,64,14,0.12)", color: "#92400E" }}>{s.num}</span>
                        <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{s.name}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#D97706" }}>Human</p>
                        <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>{s.human}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#92400E" }}>Claude</p>
                        <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>{s.claude}</p>
                      </div>
                    </div>
                    {i < stages.length - 1 && (
                      <div className="flex items-center justify-center flex-shrink-0 w-8">
                        <span className="text-lg font-light" style={{ color: "var(--border)" }}>→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs mt-2 text-center" style={{ color: "var(--muted)" }}>Scroll to see all 5 stages →</p>
          </motion.div>
        </section>

        <Divider />

        {/* Stage deep-dives ────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Stage by Stage</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              What actually happened at each stage
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {deepDives.map((d, idx) => (
              <motion.div key={d.num} {...animate(0.04 * idx)} className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--card-border)" }}>
                <div className="flex items-center gap-3 px-6 py-4"
                  style={{ backgroundColor: "rgba(146,64,14,0.06)", borderBottom: "1px solid var(--card-border)" }}>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(146,64,14,0.15)", color: "#92400E" }}>{d.num}</span>
                  <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{d.stage}</p>
                </div>
                <div className="grid sm:grid-cols-2">
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>{d.humanHeading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d.humanBody}</p>
                  </div>
                  <div className="p-6" style={{ borderTop: "1px solid var(--card-border)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#92400E" }}>{d.claudeHeading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d.claudeBody}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Prompt Cards ────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>The Prompts</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              What good direction looks like
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Reconstructed prompts from the build — representative of the actual direction given at each stage.
              The craft is in the constraints.
            </p>
          </motion.div>
          <div className="flex flex-col gap-6">
            {promptCards.map((p, idx) => (
              <motion.div key={idx} {...animate(0.05 * idx)} className="rounded-2xl overflow-hidden">
                <div className="px-5 py-3"
                  style={{ backgroundColor: "#0F0A1E", borderBottom: "1px solid rgba(146,64,14,0.35)" }}>
                  <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{p.context}</span>
                </div>
                <div className="p-6" style={{ backgroundColor: "#0F0A1E", borderLeft: "3px solid #92400E" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>{p.label}</p>
                  <pre className="text-sm leading-relaxed whitespace-pre-wrap font-mono"
                    style={{ color: "rgba(255,255,255,0.88)" }}>{p.prompt}</pre>
                </div>
                <div className="px-6 py-4 flex items-start gap-3"
                  style={{ backgroundColor: "#0F0A1E", borderTop: "1px solid rgba(5,150,105,0.25)" }}>
                  <span className="text-xs font-bold uppercase tracking-widest flex-shrink-0 mt-0.5" style={{ color: "#059669" }}>Output</span>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{p.output}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 5-Step Configurator ─────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Key Feature</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              The 5-step agentic funeral planner
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mb-8" style={{ color: "var(--muted)" }}>
              The standout UX challenge: a guided planning flow for grieving families that handles complex
              decisions without overwhelming them. A sticky live estimate panel updates in real time across all 5 steps.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="flex flex-col gap-3 mb-8">
            {configuratorSteps.map((s) => (
              <div key={s.num} className="flex items-start gap-4 p-5 rounded-xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: "rgba(146,64,14,0.12)", color: "#92400E" }}>{s.num}</span>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--fg)" }}>{s.title}</p>
                  <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...animate(0.1)} className="p-6 rounded-2xl mb-8"
            style={{ background: "linear-gradient(135deg, rgba(146,64,14,0.07) 0%, rgba(146,64,14,0.02) 100%)", border: "1px solid rgba(146,64,14,0.18)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#92400E" }}>Key Design Decision</p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              A persistent sticky summary panel updates in real time across all 5 steps — giving families a running
              total and eliminating the anxiety of &ldquo;not knowing what this will cost&rdquo; until the very end.
            </p>
          </motion.div>

          {/* Step 1 screenshot */}
          <motion.div {...animate(0.15)} className="rounded-2xl overflow-hidden shadow-xl mb-3"
            style={{ border: "1px solid var(--card-border)" }}>
            <Image src="/case-studies/indian-life-memorial/configurator-screenshot.png"
              alt="Step 1 — Service type selection" width={1400} height={900} className="w-full h-auto" />
          </motion.div>
          <p className="text-xs text-center mb-8" style={{ color: "var(--muted)" }}>Step 1 — Service type selection</p>

          {/* Step 3 screenshot */}
          <motion.div {...animate(0.2)} className="rounded-2xl overflow-hidden shadow-xl mb-3"
            style={{ border: "1px solid var(--card-border)" }}>
            <Image src="/case-studies/indian-life-memorial/casket-step3.png"
              alt="Step 3 — Location & Casket selection with live estimate panel ($7,348)"
              width={1440} height={900} className="w-full h-auto" />
          </motion.div>
          <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
            Step 3 — Location &amp; Casket with live estimate updating in real time ($7,348)
          </p>
        </section>

        <Divider />

        {/* IA ──────────────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Information Architecture</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              10 pages. One coherent experience.
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mb-8" style={{ color: "var(--muted)" }}>
              The site architecture balances two very different users — those arriving in crisis
              and those planning ahead — without forcing either to navigate through the other&apos;s journey.
            </p>
          </motion.div>
          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-3">
            {pages.map((p) => (
              <div key={p.name} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#92400E" }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--fg)" }}>{p.name}</p>
                  <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* Human Judgment ──────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Human Judgment</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              Where AI cannot go
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Four moments where human judgment was irreplaceable — not because the technology failed,
              but because the decision required something beyond pattern recognition.
            </p>
          </motion.div>
          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-4">
            {humanMoments.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)", borderTop: "3px solid #D97706" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "#D97706" }}>{m.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{m.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* Results ─────────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>What Shipped</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              A fully deployed product
            </h2>
          </motion.div>
          <motion.div {...animate(0.1)} className="grid grid-cols-2 gap-4 mb-10">
            {results.map((r) => (
              <div key={r.metric} className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <p className="font-heading font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--fg)", letterSpacing: "-0.03em" }}>
                  {r.metric}
                </p>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--fg)" }}>{r.label}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{r.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* Key insight */}
          <motion.div {...animate(0.15)} className="p-8 rounded-2xl"
            style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.08) 0%, rgba(217,119,6,0.03) 100%)", border: "1px solid rgba(217,119,6,0.25)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#D97706" }}>Key Insight</p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              &ldquo;Prompt engineering is product thinking. The quality of AI output is almost entirely
              determined by how precisely you can define the problem, the constraints, and the user.
              That&apos;s a design skill.&rdquo;
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* Reflections ─────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Reflections</SectionLabel>
            <h2 className="font-heading font-bold mb-6"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              What this taught me
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { num: "01", body: "Designing for grief made every UX principle non-negotiable. Clear language, predictable interactions, forgiving error states are usually 'nice to have'. In this context, they're essential." },
                { num: "02", body: "The bottleneck is never the AI. It's the quality of the direction you give it. Vague briefs produce vague outputs. Precise constraints produce usable first drafts." },
                { num: "03", body: "The gap between 'AI-assisted' and 'AI-native' is ownership. In an AI-native workflow, you own every decision — Claude executes them. That distinction matters." },
              ].map((r) => (
                <div key={r.num} className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(146,64,14,0.12)", color: "#92400E" }}>{r.num}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{r.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...animate(0.1)} className="p-8 rounded-2xl"
            style={{ background: "linear-gradient(135deg, rgba(146,64,14,0.07) 0%, rgba(146,64,14,0.02) 100%)", border: "1px solid rgba(146,64,14,0.18)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#92400E" }}>What&apos;s Next</p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              SEO optimisation, WhatsApp deeplink integration for immediate enquiries, and A/B testing
              the configurator entry point — comparing a direct jump into Step 1 against a softer
              introduction for users in acute distress.
            </p>
          </motion.div>
        </section>

      </div>

      {/* ── Next case study ───────────────────────────────────────────────── */}
      <motion.div {...animate()} className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Next Case Study</p>
          <Link href="/work/uob-money-lock"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-2xl transition-all duration-300"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>Fintech · Banking · MAS Regulation</p>
              <h3 className="font-heading font-bold"
                style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
                UOB Money Lock 2.0
              </h3>
            </div>
            <span className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
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
