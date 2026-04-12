"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Target, Wrench, Users } from "lucide-react";
import { easeOutExpo, makeFadeUp } from "@/lib/motion";

/* ─── Pipeline stages ─────────────────────────────────────────────────────── */
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

/* ─── Stage deep-dives ────────────────────────────────────────────────────── */
const deepDives = [
  {
    num: "01",
    stage: "Plan",
    humanHeading: "What I brought",
    humanBody:
      "Defined the product brief, the cultural sensitivity requirements, the 8-service constraint, and who the primary user was — a grieving family member searching Google at 2am. Claude cannot decide what the product is. It can only respond to a brief. Writing that brief precisely is the first design act.",
    claudeHeading: "What Claude built",
    claudeBody:
      "Generated the full 10-page IA with per-page purpose, primary CTA, and key content blocks. Mapped user journeys across three distinct user states: acute crisis, informed researcher, and pre-planner. The output was used directly, with one round of structural refinement.",
  },
  {
    num: "02",
    stage: "Design",
    humanHeading: "What I brought",
    humanBody:
      "Defined the tone of voice (compassionate, direct, never clinical), the information hierarchy for emotionally distressed users, and which content had to be visible without scrolling. These are irreducibly human decisions — they require empathy and cultural understanding that cannot be prompted into existence.",
    claudeHeading: "What Claude built",
    claudeBody:
      "All homepage copy, service page descriptions, configurator microcopy, FAQ content, and error states. Approximately 4,000 words of production UX copy across 10 pages, written to a defined tone spec. First drafts were 80–90% usable; the remainder required re-prompting with more precise constraint definitions.",
  },
  {
    num: "03",
    stage: "Build",
    humanHeading: "What I brought",
    humanBody:
      "Made all architectural decisions: single useState object for configurator state, shadcn/ui for the component layer, sticky sidebar pattern for the live estimate. Reviewed every component output for logic errors — particularly in the additive pricing calculation — and caught two edge cases Claude missed in the first pass.",
    claudeHeading: "What Claude built",
    claudeBody:
      "The full React + TypeScript codebase: all page components, the 5-step configurator state machine, real-time pricing logic with additive selection handling, and Tailwind styling across the entire site. Approximately 3,200 lines of production code across 18 components.",
  },
  {
    num: "04",
    stage: "Ship",
    humanHeading: "What I brought",
    humanBody:
      "Reviewed all commits, configured the Vercel project settings, pointed the custom domain (indianlifememorial.com), and ran the final QA pass across all 10 pages on mobile and desktop. Deployment decisions and quality gates cannot be delegated — they require human accountability.",
    claudeHeading: "What Claude built",
    claudeBody:
      "Drafted Git commit messages for every significant change. Diagnosed a Vercel build error caused by a Next.js image configuration conflict. Generated the robots.txt, sitemap structure, and meta tag templates for SEO.",
  },
  {
    num: "05",
    stage: "Evaluate",
    humanHeading: "What I brought",
    humanBody:
      "Ran a structured heuristic evaluation against Nielsen's 10 usability heuristics after launch. Made prioritisation calls on which gaps to address first — balancing user impact against implementation cost. Defined the next iteration backlog.",
    claudeHeading: "What Claude built",
    claudeBody:
      "Generated the evaluation template with scoring criteria for each heuristic. Synthesised the raw findings into a structured action list with severity ratings. Drafted the next sprint brief based on the highest-priority gaps identified.",
  },
];

/* ─── Prompt cards ────────────────────────────────────────────────────────── */
const promptCards = [
  {
    context: "Stage 01 — Plan · IA Generation",
    label: "Starting with a blank brief",
    prompt: `"I'm building a funeral services platform for Singapore's Indian and Hindu community. Users arrive in three states: acute crisis (death just happened), informed researcher (death expected), and pre-planner (future-focused).

The platform supports 8 service types: Hindu/Indian, Roman Catholic, Christian, Freethinker, Direct Cremation, Baby Funeral, Pet Cremation, Repatriation.

Generate a full site IA as a structured hierarchy. For each page include: purpose, primary user state it serves, primary CTA, and 3 key content blocks. Flag any pages where user emotional state requires specific UX considerations."`,
    output: "Full 10-page IA with per-page content strategy — used directly as the project foundation.",
  },
  {
    context: "Stage 02 — Design · Hero Copy",
    label: "First impression for a grieving family",
    prompt: `"Write the homepage hero for Indian Life Memorial. Constraints:
– Primary user: family member in crisis, arrived via Google search at 2am
– Tone: compassionate, direct, specific — never clinical or corporate
– Must communicate three things above the fold: 24/7 availability, transparent pricing, multi-faith coverage
– Headline: confident and specific, not a question or a tagline, max 8 words
– Subtitle: one sentence, under 20 words, no jargon
– Do not use euphemisms. 'Loved one' is acceptable. 'Dearly departed', 'passed away', 'passed on' are not."`,
    output: `Headline: "Singapore's first agentic funeral planner is here." — shipped verbatim to production.`,
  },
  {
    context: "Stage 03 — Build · Configurator",
    label: "The centrepiece feature",
    prompt: `"Build a 5-step funeral configurator in React + TypeScript + TailwindCSS + shadcn/ui.

Steps: (1) Service Type, (2) Arrangement Details [budget range / cremation or burial / wake duration], (3) Location & Casket [venue type + casket tier], (4) Add-ons [tentage, floral, 3rd-party fees shown transparently], (5) Your Details [contact + deceased info].

Requirements:
– Sticky sidebar: Live Estimate panel that recalculates on every selection change
– Pricing: base price per service type, additive per selection (casket upgrade, extra days, location premium)
– Continue button: disabled until all required selections in current step are made
– State: single useState object, no external state library
– On submit: format all selections into a readable WhatsApp message and open wa.me deeplink"`,
    output: "Full working component in first output. Required 3 revision iterations to resolve pricing edge cases and step validation logic.",
  },
];

/* ─── Human judgment moments ─────────────────────────────────────────────── */
const humanMoments = [
  {
    title: "Emotional register",
    body: "Deciding that 'Direct Cremation from $1,888' belonged on the homepage, not buried in a pricing subpage. A pricing number that direct, that early, signals honesty — but only if the designer understands why anxious users need that anchor.",
  },
  {
    title: "Cultural sequence",
    body: "Understanding why Hindu/Indian Funeral had to be listed first in the service order — above Direct Cremation, regardless of alphabetical logic or conversion rate optimisation. Cultural respect is not an SEO variable.",
  },
  {
    title: "Design taste",
    body: "When the first generated hero copy was technically correct but emotionally flat. Knowing it was wrong, being able to articulate exactly why, and re-prompting with precise constraints until the output matched the intended register.",
  },
  {
    title: "Strategic bets",
    body: "Choosing to build a live estimate panel that updates on every selection, rather than a standard 'request a quote' form. That decision required 3× more development effort and was the right call — because reducing pricing anxiety is the product's core value proposition.",
  },
];

/* ─── Results ─────────────────────────────────────────────────────────────── */
const results = [
  { metric: "10+", label: "Pages designed", sub: "Fully deployed to production" },
  { metric: "5", label: "Configurator steps", sub: "With real-time live pricing" },
  { metric: "Weeks", label: "Brief to launch", sub: "Not months" },
  { metric: "Live", label: "indianlifememorial.com", sub: "Production domain" },
];

/* ─── Component ───────────────────────────────────────────────────────────── */
export function AIPromptEngineeringContent() {
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
        style={{ background: "linear-gradient(150deg, #1A0B2E 0%, #3B0E8C 55%, #6D28D9 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise-ape"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#noise-ape)" />
        </svg>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <ArrowLeft size={15} />
              All Work
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible"
            transition={{ delay: shouldReduce ? 0 : 0.1 }}>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Claude Code", "AI-Native", "End-to-End", "React", "Shipped"].map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}>
                  {t}
                </span>
              ))}
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              AI · End-to-End Build · Shipped
            </p>

            <h1 className="font-heading font-bold text-white mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
              }}>
              Shipping with<br />Claude Code
            </h1>
            <p className="text-xl mb-10" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "640px" }}>
              How I built a production product in weeks — directing Claude as design partner, content writer, and engineer
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { metric: "10+", label: "Pages built" },
                { metric: "5-Step", label: "AI configurator" },
                { metric: "Weeks", label: "Brief to launch" },
                { metric: "Live", label: "Production" },
              ].map((r) => (
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

      {/* ── Metadata strip ────────────────────────────────────────────────── */}
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
          <motion.div {...animate()} className="mb-8">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Most designers use AI as a shortcut — to generate copy faster, produce variations, or skip the blank page.
              This case study is about something different: using Claude as a production system, directing it at every
              layer of a real product build. The product is{" "}
              <a href="https://indianlifememorial.com" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2" style={{ color: "var(--accent)" }}>
                Indian Life Memorial
              </a>
              {" "}— Singapore&apos;s first agentic funeral planner, fully deployed and live.
            </p>
          </motion.div>

          <motion.div
            {...animate(0.1)}
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(109,40,217,0.1) 0%, rgba(109,40,217,0.04) 100%)",
              border: "1px solid rgba(109,40,217,0.25)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7C3AED" }}>
              The premise
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
              &ldquo;The question isn&apos;t whether AI can help designers. It&apos;s whether you can
              direct it precisely enough to ship something real.&rdquo;
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* The Pipeline ────────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>The Workflow</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Plan → Design → Build → Ship → Evaluate
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              At every stage: human strategic direction, Claude execution. The pipeline below shows exactly how that
              division played out across the Indian Life Memorial build.
            </p>
          </motion.div>

          {/* Pipeline diagram — horizontal scroll on all sizes */}
          <motion.div {...animate(0.1)}>
            <div className="overflow-x-auto pb-4 -mx-2">
              <div className="flex gap-0 min-w-max px-2" style={{ alignItems: "stretch" }}>
                {stages.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-0">
                    <div
                      className="flex flex-col rounded-2xl p-5"
                      style={{
                        width: "200px",
                        border: "1px solid var(--card-border)",
                        backgroundColor: "var(--card)",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-4">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: "rgba(109,40,217,0.15)", color: "#7C3AED" }}
                        >
                          {s.num}
                        </span>
                        <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{s.name}</p>
                      </div>

                      <div className="mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#D97706" }}>
                          Human
                        </p>
                        <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>{s.human}</p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#7C3AED" }}>
                          Claude
                        </p>
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
            <p className="text-xs mt-2 text-center" style={{ color: "var(--muted)" }}>
              Scroll to see all 5 stages →
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* Stage deep-dives ────────────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Stage by Stage</SectionLabel>
            <h2 className="font-heading font-bold"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              What actually happened at each stage
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {deepDives.map((d, idx) => (
              <motion.div
                key={d.num}
                {...animate(0.05 * idx)}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--card-border)" }}
              >
                {/* Stage label bar */}
                <div className="flex items-center gap-3 px-6 py-4"
                  style={{ backgroundColor: "rgba(109,40,217,0.07)", borderBottom: "1px solid var(--card-border)" }}>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(109,40,217,0.18)", color: "#7C3AED" }}
                  >
                    {d.num}
                  </span>
                  <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{d.stage}</p>
                </div>

                {/* Two columns */}
                <div className="grid sm:grid-cols-2">
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#D97706" }}>
                      {d.humanHeading}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d.humanBody}</p>
                  </div>
                  <div className="p-6" style={{ borderTop: "1px solid var(--card-border)", borderLeft: "0" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#7C3AED" }}>
                      {d.claudeHeading}
                    </p>
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
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              What good direction looks like
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Reconstructed prompts from the Indian Life Memorial build — representative of the actual direction
              given at each stage. The craft is in the constraints.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {promptCards.map((p, idx) => (
              <motion.div key={idx} {...animate(0.05 * idx)} className="rounded-2xl overflow-hidden">
                {/* Context bar */}
                <div className="px-5 py-3"
                  style={{ backgroundColor: "#0F0A1E", borderBottom: "1px solid rgba(109,40,217,0.3)" }}>
                  <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{p.context}</span>
                </div>

                {/* Prompt body */}
                <div className="p-6" style={{ backgroundColor: "#0F0A1E", borderLeft: "3px solid #7C3AED" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {p.label}
                  </p>
                  <pre className="text-sm leading-relaxed whitespace-pre-wrap font-mono"
                    style={{ color: "rgba(255,255,255,0.88)" }}>
                    {p.prompt}
                  </pre>
                </div>

                {/* Output */}
                <div className="px-6 py-4 flex items-start gap-3"
                  style={{ backgroundColor: "#0F0A1E", borderTop: "1px solid rgba(5,150,105,0.25)" }}>
                  <span className="text-xs font-bold uppercase tracking-widest flex-shrink-0 mt-0.5"
                    style={{ color: "#059669" }}>
                    Output
                  </span>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{p.output}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* What AI Can't Replace ───────────────────────────────────────── */}
        <section className="py-16">
          <motion.div {...animate()} className="mb-10">
            <SectionLabel>Human Judgment</SectionLabel>
            <h2 className="font-heading font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              Where AI cannot go
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Four moments in the build where human judgment was irreplaceable — not because the technology failed,
              but because the decision required something beyond pattern recognition.
            </p>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid sm:grid-cols-2 gap-4">
            {humanMoments.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--card-border)",
                  borderTop: "3px solid #D97706",
                }}>
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
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              A production product
            </h2>
          </motion.div>

          <motion.div {...animate(0.1)} className="grid grid-cols-2 gap-4 mb-10">
            {results.map((r) => (
              <div key={r.metric} className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                <p className="font-heading font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
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

          {/* Key Insight callout */}
          <motion.div
            {...animate(0.15)}
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(217,119,6,0.08) 0%, rgba(217,119,6,0.03) 100%)",
              border: "1px solid rgba(217,119,6,0.25)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#D97706" }}>
              Key Insight
            </p>
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
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}>
              What building AI-natively taught me
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  body: "The bottleneck is never the AI. It's the quality of the direction you give it. Vague briefs produce vague outputs. Precise constraints produce usable first drafts.",
                },
                {
                  num: "02",
                  body: "The skills that matter most in an AI-native workflow are the same skills that have always defined great product design: sharp problem definition, taste, and the ability to evaluate output critically.",
                },
                {
                  num: "03",
                  body: "The gap between 'AI-assisted' and 'AI-native' is ownership. In an AI-assisted workflow, you review what was generated. In an AI-native one, you own every decision — Claude executes them.",
                },
              ].map((r) => (
                <div key={r.num} className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(109,40,217,0.12)", color: "#7C3AED" }}
                  >
                    {r.num}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{r.body}</p>
                </div>
              ))}
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
            href="/work/indian-life-memorial"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-2xl transition-all duration-300"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
          >
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>End-of-Life · AI-Built · Singapore</p>
              <h3 className="font-heading font-bold"
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                }}>
                Indian Life Memorial
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
