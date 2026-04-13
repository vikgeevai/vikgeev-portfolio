"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { easeOutExpo, makeFadeUp } from "@/lib/motion";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Business Requirements & Specifications",
    body: "Collaborated with stakeholders to understand the cross-sell initiative — inspired by Amazon's post-purchase recommendations. The brief: after completing a purchase, guide customers through a short questionnaire to surface tailored insurance products with exclusive discounts. Every possible permutation and exit point had to be accounted for.",
  },
  {
    num: "02",
    title: "Research — Usability Test, User Interview, Affinity Map",
    body: "Ran usability tests with two prototypes to determine optimal questionnaire placement. Prototype A triggered the questionnaire during the purchase journey (as a pop-up). Prototype B placed it after — as a dedicated screen. Followed up each session with user interviews, then synthesised findings using affinity mapping.",
  },
  {
    num: "03",
    title: "Ideate, Design, Test, Iterate",
    body: "Used research insights to reframe the entire UX of the questionnaire. Rather than a standard form, I designed a mobile-first, visually engaging experience — colourful, conversational, and playful. Nothing that looked or felt like purchasing insurance.",
  },
];

const insights = [
  {
    stat: "100%",
    label: "of testers attempted the questionnaire after purchase — not during",
    note: "When shown the questionnaire mid-purchase (Prototype A), all users bypassed it and completed their primary goal first.",
  },
  {
    stat: "75%",
    label: "closed the questionnaire when it appeared during the purchase journey",
    note: "Many closed without reading a single word. The timing was wrong — not the content.",
  },
  {
    stat: "100%",
    label: "felt the questionnaire had too many questions",
    note: "The business couldn't reduce question count. The answer was to redesign the experience so it didn't feel long.",
  },
  {
    stat: "100%",
    label: "felt a second sales journey right after the first was too much",
    note: "We couldn't remove the journey — but we could pre-populate forms and reduce friction for those who chose to proceed.",
  },
];

const designPrinciples = [
  {
    num: "01",
    heading: "Clear Journey Distinctions",
    body: "Users must clearly feel they have completed their primary purchase before embarking on another. The second journey should never feel like a continuation of the first.",
  },
  {
    num: "02",
    heading: "Enticement Through Reward",
    body: "Users were most motivated to attempt the questionnaire after selecting their vouchers — a post-purchase reward moment. We leaned into this: the questionnaire came after the celebration, not before it.",
  },
  {
    num: "03",
    heading: "Maintaining Engagement",
    body: "To reduce the burden of a second sales journey, we pre-populated all known information — personal details, attachments, and coverage data — so users only had to confirm, not re-enter.",
  },
  {
    num: "04",
    heading: "Reimagined Question Format",
    body: "Since we couldn't reduce the number of questions for business reasons, we redesigned them completely. Bite-size screens, large iconographic choices, and a conversational tone replaced the form-filling aesthetic entirely.",
  },
];

const results = [
  { metric: "↑ 28%", label: "Acquisition funnel completion rate" },
  { metric: "↓ 67%", label: "Avg. claims submission time" },
  { metric: "↑ 41%", label: "NPS improvement post-redesign" },
  { metric: "5 markets", label: "Singapore, HK, Thailand, PH, Vietnam" },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export function FWDInsuranceContent() {
  const shouldReduce = useReducedMotion();

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #7C2D12 0%, #C2410C 55%, #EA580C 100%)",
          minHeight: "420px",
        }}
      >
        {/* Back nav */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <ArrowLeft size={15} />
            All work
          </Link>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Insurtech · Cross-sell · Research-Driven Design
            </p>
            <h1
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              FWD Insurance
            </h1>
            <p
              className="text-lg mb-8 max-w-2xl"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}
            >
              Designing the X-SELL initiative — a research-led cross-sell experience
              that reframed insurance questionnaires as something people actually
              wanted to complete.
            </p>

            {/* Metric chips */}
            <div className="flex flex-wrap gap-3">
              {[
                "↑ 28% Funnel Completion",
                "↓ 67% Claims Time",
                "↑ 41% NPS",
                "5 Markets",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Metadata strip ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="py-8"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Role", value: "Lead UX/UI Designer" },
              { label: "Timeline", value: "2019 – 2021" },
              { label: "Platform", value: "Web · Mobile iOS & Android" },
              { label: "Markets", value: "SG · HK · TH · PH · VN" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>{label}</p>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div
              variants={makeFadeUp(shouldReduce)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                Context
              </p>
              <h2
                className="font-bold mb-6"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                The disruptor in insurance — and the X-SELL initiative
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                FWD Insurance is one of Asia&apos;s fastest-growing digital insurers. Known as a disruptor in the space,
                its direct-to-consumer model lets individuals purchase life and general insurance online —
                bypassing the complexity and cost of traditional middlemen.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Among the many customer-centric initiatives I led at FWD, I&apos;m sharing the design process
                behind one called the <strong style={{ color: "var(--fg)" }}>X-SELL</strong> — a cross-sell feature that would appear after a customer&apos;s
                first purchase, surfacing personalised insurance recommendations with exclusive vouchers.
                Inspired by Amazon. Constrained by insurance regulation. Challenged by research.
              </p>
            </motion.div>

            <motion.div
              variants={makeFadeUp(shouldReduce, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#EA580C" }}>
                The challenge
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                Insurance purchases are already cognitively demanding. Asking customers to immediately
                begin another sales journey felt inherently wrong — but the business brief demanded it.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Three design tensions defined the project: when to surface the questionnaire without disrupting
                the primary journey, how to make a mandated number of questions feel brief, and how to
                design a second sales journey that felt nothing like the first.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product preview image ── */}
      <section style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <Image
                src="/case-studies/fwd-insurance/devices-xsell-2.png"
                alt="FWD X-SELL questionnaire — mobile and desktop device mockups"
                width={2234}
                height={1316}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-xs mt-3" style={{ color: "var(--muted)" }}>
              The X-SELL questionnaire on desktop and mobile — colourful, conversational, and nothing like purchasing insurance
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── My Steps ── */}
      <section className="py-20 md:py-28" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              My Steps
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              How I approached the X-SELL
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={makeFadeUp(shouldReduce, i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl p-6"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                  style={{ backgroundColor: "#EA580C", color: "#fff" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-3 text-base" style={{ color: "var(--fg)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research section ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Step 2 — Research
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              Usability testing with two competing prototypes
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              To determine where in the purchase journey the questionnaire should appear, I tested two
              distinct placements — mid-journey and post-journey. Results were decisive.
            </p>
          </motion.div>

          {/* Prototype comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              {
                label: "Prototype A",
                desc: "Questionnaire as a pop-up during the purchase journey — right after first quotation.",
                flow: "Landing Page → Get Quote → Questionnaire → Sales Journey → Pay → Voucher → X-Sell",
                result: "75% of users immediately closed it",
                bad: true,
              },
              {
                label: "Prototype B",
                desc: "Questionnaire at the end of the purchase journey — as a dedicated screen after payment.",
                flow: "Landing Page → Get Quote → Sales Journey → Pay → Voucher → Questionnaire → X-Sell",
                result: "100% attempted it after completing their purchase",
                bad: false,
              },
            ].map((proto, i) => (
              <motion.div
                key={proto.label}
                variants={makeFadeUp(shouldReduce, i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "var(--card)",
                  border: `1px solid ${proto.bad ? "rgba(239,68,68,0.3)" : "rgba(34,197,94,0.3)"}`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: proto.bad ? "rgba(239,68,68,0.1)" : "rgba(34,197,94,0.1)",
                      color: proto.bad ? "#EF4444" : "#16A34A",
                    }}
                  >
                    {proto.label}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                  {proto.desc}
                </p>
                <p className="text-xs font-mono mb-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {proto.flow}
                </p>
                <div
                  className="rounded-lg px-4 py-3 text-sm font-medium"
                  style={{
                    backgroundColor: proto.bad ? "rgba(239,68,68,0.08)" : "rgba(34,197,94,0.08)",
                    color: proto.bad ? "#EF4444" : "#16A34A",
                  }}
                >
                  {proto.result}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research artifact images */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={makeFadeUp(shouldReduce)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <Image
                  src="/case-studies/fwd-insurance/mind-map.png"
                  alt="Research mind map — user interview goals and question mapping"
                  width={1822}
                  height={1712}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>Research question mapping — structuring user interview goals</p>
            </motion.div>
            <motion.div
              variants={makeFadeUp(shouldReduce, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <Image
                  src="/case-studies/fwd-insurance/research-affinity.png"
                  alt="Affinity mapping — synthesising usability test findings"
                  width={2500}
                  height={771}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>Affinity mapping — synthesising findings from usability test sessions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Research Insights ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Research Insights
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              What the data told us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((item, i) => (
              <motion.div
                key={item.stat}
                variants={makeFadeUp(shouldReduce, i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl p-6"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <p
                  className="font-bold mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#EA580C", lineHeight: 1 }}
                >
                  {item.stat}
                </p>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--fg)" }}>
                  {item.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Principles ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Design Approach
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              Four principles from research
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {designPrinciples.map((p, i) => (
              <motion.div
                key={p.num}
                variants={makeFadeUp(shouldReduce, i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-5 rounded-xl p-6"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: "#EA580C", color: "#fff" }}
                >
                  {p.num}
                </span>
                <div>
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--fg)" }}>
                    {p.heading}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design screens ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Step 3 — Design
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              Nothing like purchasing insurance
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              I wanted this experience to be completely distinct from FWD&apos;s standard insurance journey —
              no benefit tables, no health declarations, no form-filling. Mobile-first, colourful, playful,
              conversational, and interactive with bite-size information on every screen.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              variants={makeFadeUp(shouldReduce)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <Image
                  src="/case-studies/fwd-insurance/design-screens-1.png"
                  alt="X-SELL questionnaire screens — colourful circular icon selections"
                  width={2500}
                  height={1473}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={makeFadeUp(shouldReduce)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                  <Image
                    src="/case-studies/fwd-insurance/design-screens-2.png"
                    alt="X-SELL screens — gender, family size, and asset selections"
                    width={2500}
                    height={1473}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={makeFadeUp(shouldReduce, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                  <Image
                    src="/case-studies/fwd-insurance/design-screens-3.png"
                    alt="X-SELL screens — tailored insurance recommendations with voucher offers"
                    width={2500}
                    height={1472}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Device mockups ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              In Context
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              The questionnaire on device
            </h2>
          </motion.div>
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <Image
                src="/case-studies/fwd-insurance/devices-xsell-1.png"
                alt="FWD X-SELL on desktop and mobile — the full cross-sell experience"
                width={2234}
                height={1316}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Exit Strategy / Permutations ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Exit Strategy
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              Permutations &amp; User Flows
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              Together with a Business Analyst, I mapped every possible permutation and user state across
              the X-SELL journey — from &quot;no vouchers available&quot; to &quot;2+ voucher types&quot; — with trigger
              points for SMS and email notifications at each stage.
            </p>
          </motion.div>
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <Image
                src="/case-studies/fwd-insurance/user-flow.png"
                alt="X-SELL exit strategy — full permutations and user flow diagram with notification triggers"
                width={2306}
                height={1974}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
              Complete permutations map: screens, conditions, and business logic at every stage
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Results
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              Impact across 5 markets
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((r, i) => (
              <motion.div
                key={r.metric}
                variants={makeFadeUp(shouldReduce, i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl p-6 text-center"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <p
                  className="font-bold mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#EA580C", lineHeight: 1 }}
                >
                  {r.metric}
                </p>
                <p className="text-xs leading-tight" style={{ color: "var(--muted)" }}>
                  {r.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reflections ── */}
      <section
        className="py-20 md:py-28"
        style={{
          backgroundColor: "rgba(234,88,12,0.06)",
          borderTop: "1px solid rgba(234,88,12,0.15)",
          borderBottom: "1px solid rgba(234,88,12,0.15)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={makeFadeUp(shouldReduce)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "#EA580C" }}>
              Key Insight
            </p>
            <p
              className="font-bold leading-snug mb-6"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                color: "var(--fg)",
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              &ldquo;The timing of a request matters more than its content. A well-designed feature shown at the wrong
              moment will be ignored — every time.&rdquo;
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              The research didn&apos;t kill the X-SELL. It saved it. By moving the questionnaire to
              after the voucher selection — at the highest-enticement moment in the journey —
              we turned a feature that 75% of users were actively avoiding into one they chose to engage with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Next case study ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
                Next Case Study
              </p>
              <h3
                className="font-bold"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  color: "var(--fg)",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                Indian Life Memorial
              </h3>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                Designing for grief and building with AI
              </p>
            </div>
            <Link
              href="/work/indian-life-memorial"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:gap-3 shrink-0"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              View case study
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
