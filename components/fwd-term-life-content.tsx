"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const makeFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const HERO_COLOR = "#7C2D12";
const HERO_COLOR_END = "#F97316";

const userQuotes = [
  {
    quote: "Every few questions I had to refresh the page, it was just too time consuming. I'm sure I didn't even complete one quarter of it.",
    highlight: "too time consuming",
  },
  {
    quote: "When you talk to an agent, it is more tailored to your needs.",
    highlight: "tailored to your needs",
  },
  {
    quote: "There was a gap between the knowledge I learnt from the internet versus the knowledge I learnt from the agent.",
    highlight: "a gap",
  },
];

const userNeeds = [
  "I need to be able to get advice and clarification when necessary",
  "I need Term-Life insurance information and processes to be straightforward, simple and easy to understand",
  "I need to know that I am making the right choice",
];

const processSteps = [
  {
    number: "01",
    heading: "Discovery & Qualitative Research",
    body: "Conducted user interviews with 9 FWD customers and usability testing with 6 individual users. Synthesised findings through competitor analysis and affinity mapping to uncover why users were dropping off mid-purchase.",
  },
  {
    number: "02",
    heading: "Define — Personas & Pain Points",
    body: "Built two personas from research: the independent digital buyer and the cautious first-timer. Ran stakeholder feature prioritisation workshops to align scope with business and product goals.",
  },
  {
    number: "03",
    heading: "Customer Co-creation",
    body: "Facilitated co-creation sessions with both customers and FWD stakeholders to validate solution directions — coverage calculator, progress bar, simplified yes/no underwriting, and a shorter step count.",
  },
  {
    number: "04",
    heading: "Ideation → Prototype → Test",
    body: "Progressed from hand-drawn sketches through mid-fidelity wireframes (Axure RP) to a high-fidelity prototype. Round 1 usability testing with 6 participants: 100% task success, SEQ 7/7.",
  },
];

const beforeAfter = [
  { label: "Pages", before: "14", after: "6", unit: "" },
  { label: "Time", before: "14", after: "9", unit: " mins" },
  { label: "Clicks", before: "58", after: "48", unit: "" },
];

const testingQuotes = [
  "The underwriting process feels very fast, easy with the yes/no options.",
  "I think the calculator is a very good feature, allows me to make a sound decision on my own, relieves the pressure of an agent.",
  "The process is quite straightforward and clear to me, very easy to understand.",
  "The progress bar feature is very nice, I like it very much, it helps me gauge how long the process will take.",
];

export function FWDTermLifeContent() {
  const reduceMotion = useReducedMotion();
  const fade = (d = 0) => reduceMotion ? {} : makeFadeUp(d);

  return (
    <article>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden pt-32 pb-20 px-6"
        style={{ background: `linear-gradient(135deg, ${HERO_COLOR} 0%, ${HERO_COLOR_END} 100%)` }}
      >
        <div className="mx-auto max-w-6xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: "#fff" }}
          >
            <ArrowLeft size={15} /> All Work
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {["Insurtech", "Term Life", "Redesign", "Web", "Qualitative Research"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.h1
            {...fade(0)}
            className="font-heading font-bold text-white mb-4"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            FWD Term Life Insurance<br />Re-Design
          </motion.h1>

          <motion.p {...fade(0.1)} className="text-lg opacity-80 max-w-xl" style={{ color: "#fff" }}>
            Simplifying life insurance to drive sales and reduce drop-off
          </motion.p>

          {/* Outcome stats */}
          <motion.div {...fade(0.2)} className="flex flex-wrap gap-8 mt-10">
            {[
              { value: "↓ 57%", label: "Pages reduced" },
              { value: "↓ 36%", label: "Completion time" },
              { value: "100%", label: "Task success rate" },
              { value: "7/7", label: "SEQ rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>{s.value}</p>
                <p className="text-sm opacity-70 text-white">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Metadata strip ── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "ROLE", value: "UX Manager (In-house)" },
            { label: "TIMELINE", value: "2017 – 2018" },
            { label: "TOOLS", value: "Sketch · Axure RP · InVision" },
            { label: "TEAM", value: "1 Designer · 1 PM · 1 Analytics · 3 Devs" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>{m.label}</p>
              <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Overview ── */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            OVERVIEW
          </motion.p>
          <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-4" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
            A drop in sales revealed a UX problem
          </motion.h2>
          <motion.p {...fade(0.1)} className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            As in-house UX Manager at FWD Insurance Singapore, I led the redesign of the Term Life insurance purchase flow after post-launch data revealed a significant drop in sales and incomplete applications.
          </motion.p>
          <motion.p {...fade(0.15)} className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            The original flow was <strong style={{ color: "var(--fg)" }}>14 pages, 14 minutes, and 58 clicks</strong> — far too complex for a self-serve digital product. The goal: simplify the journey, guide users through every step, and make buying term life insurance feel as straightforward as it should be.
          </motion.p>
        </div>
      </div>

      {/* ── Customer quotes ── */}
      <div style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            WHAT CUSTOMERS WERE SAYING
          </motion.p>
          <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
            The original experience frustrated users before they could finish
          </motion.h2>

          <motion.div {...fade(0.1)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {userQuotes.map((q, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <p className="text-3xl font-bold mb-3" style={{ color: "var(--accent)", opacity: 0.4 }}>"</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>{q.quote}</p>
              </div>
            ))}
          </motion.div>

          {/* User needs */}
          <motion.p {...fade(0.15)} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            SYNTHESISED USER NEEDS
          </motion.p>
          <motion.div {...fade(0.2)} className="flex flex-col gap-3">
            {userNeeds.map((need, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl px-5 py-4"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: HERO_COLOR_END }}>
                  {i + 1}
                </span>
                <p className="text-sm" style={{ color: "var(--fg)" }}>{need}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Process ── */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          MY PROCESS
        </motion.p>
        <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-12" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
          Research-led, co-created, tested to 100%
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.07)}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "var(--accent)", opacity: 0.5 }}>{step.number}</p>
              <p className="font-semibold mb-2" style={{ color: "var(--fg)" }}>{step.heading}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Design process image — sketches → mid-fi → hi-fi */}
        <motion.div {...fade(0.1)} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <Image
            src="/case-studies/fwd-term-life/design-process.png"
            alt="Design process: sketching, mid-fidelity wireframes, and high-fidelity prototype"
            width={2495}
            height={2422}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* ── Before vs After ── */}
      <div style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            METRICS
          </motion.p>
          <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
            Before vs After
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfter.map((m, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>{m.label}</p>
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>Before</p>
                    <p className="text-3xl font-bold line-through" style={{ color: "var(--muted)", fontFamily: "var(--font-heading, sans-serif)" }}>
                      {m.before}{m.unit}
                    </p>
                  </div>
                  <ArrowRight size={20} style={{ color: "var(--muted)", marginBottom: "6px" }} />
                  <div>
                    <p className="text-sm mb-1" style={{ color: "var(--accent)" }}>After</p>
                    <p className="text-3xl font-bold" style={{ color: HERO_COLOR_END, fontFamily: "var(--font-heading, sans-serif)" }}>
                      {m.after}{m.unit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Design screens ── */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          DESIGN SCREENS
        </motion.p>
        <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
          From 14 pages to 6 — a cleaner, guided experience
        </motion.h2>

        <div className="flex flex-col gap-6">
          {[
            { src: "/case-studies/fwd-term-life/design-screens-1.png", alt: "FWD Term Life redesign — high-fidelity screens", w: 1910, h: 1352 },
            { src: "/case-studies/fwd-term-life/design-screens-2.png", alt: "FWD Term Life redesign — purchase flow screens", w: 2296, h: 970 },
            { src: "/case-studies/fwd-term-life/design-screens-3.png", alt: "FWD Term Life redesign — final design screens", w: 2304, h: 968 },
          ].map((img, i) => (
            <motion.div key={i} {...fade(i * 0.08)} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Testing results ── */}
      <div style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            USABILITY TESTING — ROUND 1 RESULTS
          </motion.p>
          <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-4" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
            100% success. SEQ 7/7. Faster, every time.
          </motion.h2>
          <motion.p {...fade(0.1)} className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--muted)" }}>
            Six participants completed all tasks successfully. Every participant finished faster than on the original design. The average Single Ease Question (SEQ) rating was 7 out of 7 — the maximum possible score.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {testingQuotes.map((quote, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <p className="text-2xl font-bold mb-3" style={{ color: HERO_COLOR_END, opacity: 0.5 }}>"</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>{quote}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.1)} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <Image
              src="/case-studies/fwd-term-life/testing-results.png"
              alt="Usability testing round 1 results"
              width={2258}
              height={1004}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.p {...fade()} className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          RESULTS
        </motion.p>
        <motion.h2 {...fade(0.05)} className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
          A redesign that delivered on every metric
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: "↓ 57%", label: "Pages reduced\n14 → 6" },
            { metric: "↓ 36%", label: "Completion time\n14 → 9 mins" },
            { metric: "100%", label: "Task success rate\nin usability testing" },
            { metric: "7 / 7", label: "Average SEQ rating\n(max possible)" },
          ].map((r, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.07)}
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p className="font-bold mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: HERO_COLOR_END, fontFamily: "var(--font-heading, sans-serif)" }}>
                {r.metric}
              </p>
              <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: "var(--muted)" }}>{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Next case study ── */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>NEXT CASE STUDY</p>
            <p className="font-heading font-bold text-xl" style={{ fontFamily: "var(--font-heading, sans-serif)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
              Indian Life Memorial
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Designing for grief — Singapore's first agentic funeral planner</p>
          </div>
          <Link
            href="/work/indian-life-memorial"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--fg)", color: "var(--bg)" }}
          >
            View Case Study <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
