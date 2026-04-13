"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Mail, ExternalLink, Download } from "lucide-react";
import { makeFadeUp, easeOutExpo } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Stakeholder interviews, field research, heuristic audits, analytics review, and competitive mapping to build a shared picture of the problem space.",
    methods: ["Stakeholder Interviews", "Field Research", "Heuristic Audits", "Analytics Review", "Competitive Mapping"],
  },
  {
    number: "02",
    title: "Define",
    description:
      "Persona creation, JTBD mapping, success metrics, and design principles. Aligning the team on what we're solving and how we'll know we've succeeded.",
    methods: ["Persona Creation", "JTBD Mapping", "Success Metrics", "Design Principles", "Team Alignment"],
  },
  {
    number: "03",
    title: "Ideate",
    description:
      "User flows, information architecture, rapid concept exploration, and lo-fi wireframing. Diverging before converging — never jumping to the polished version too soon.",
    methods: ["User Flows", "Information Architecture", "Concept Exploration", "Lo-fi Wireframing", "IA Mapping"],
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "Hi-fi interactive prototypes, micro-interactions, component design systems, and developer-ready handoff specs that eliminate guesswork at build time.",
    methods: ["Hi-fi Prototypes", "Micro-interactions", "Design Systems", "Dev Handoff Specs", "Component Design"],
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Moderated usability testing, A/B experiments, accessibility audits, post-launch measurement, and iterative refinement informed by real usage data.",
    methods: ["Usability Testing", "A/B Experiments", "Accessibility Audits", "Post-launch Metrics", "Iterative Refinement"],
  },
];

const principles = [
  {
    title: "Clarity over cleverness",
    body: "The best design is the one users understand immediately. I resist the temptation to be clever when clear would be better.",
  },
  {
    title: "Design to ship",
    body: "A beautiful prototype that never ships has zero impact. I prioritise work that crosses the finish line and reaches real users.",
  },
  {
    title: "Measure what matters",
    body: "Design decisions should be connected to outcomes. I define success metrics before designing, and revisit them after launch.",
  },
  {
    title: "Research is ongoing",
    body: "User understanding isn't a phase — it's a continuous practice. The best design insights often arrive mid-project.",
  },
];

export function ProcessPageContent() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(shouldReduce);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl mb-20">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Process
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
            How I work
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            A structured-enough process to be reliable. Flexible enough to fit any team, timeline, or problem type.
          </p>
        </motion.div>

        {/* ── Steps — vertical timeline ───────────────────────────────────── */}
        <div className="mb-24 relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: shouldReduce ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-48px" }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.06 * i }}
                className="flex gap-6 md:gap-10"
              >
                {/* Step number bubble */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-sm"
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      backgroundColor: i === 0 ? "var(--accent)" : "var(--card)",
                      border: `1px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                      color: i === 0 ? "#fff" : "var(--fg)",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-7 rounded-2xl mb-0"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
                >
                  <h3
                    className="font-heading font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: "1.25rem",
                      color: "var(--fg)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.methods.map((method) => (
                      <span
                        key={method}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--muted)" }}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Principles ─────────────────────────────────────────────────── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
          <h2
            className="font-heading font-bold mb-10"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Design Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.08 * i }}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <h3
                  className="font-heading font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "1rem", color: "var(--fg)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  );
}
