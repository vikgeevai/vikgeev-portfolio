"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { makeFadeUp } from "@/lib/motion";

interface Props {
  study: CaseStudy;
  next?: CaseStudy;
}

export function CaseStudyContent({ study, next }: Props) {
  const shouldReduce = useReducedMotion();

  const fadeUp = makeFadeUp(shouldReduce);

  return (
    <article>
      {/* Hero */}
      <div
        className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pt-24 pb-16 overflow-hidden"
        style={{
          background: `linear-gradient(150deg, ${study.heroColor} 0%, ${study.heroColorEnd} 100%)`,
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <ArrowLeft size={15} />
              All Work
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="font-heading font-bold text-white mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              {study.title}
            </h1>
            <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              {study.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Metadata row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Role", value: study.role },
              { label: "Timeline", value: study.timeline },
              { label: "Platform", value: study.platform },
              { label: "Industry", value: study.industry },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>
                  {item.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Overview */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="font-heading font-bold mb-5"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "1.5rem",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Overview
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {study.overview}
          </p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
        >
          <h2
            className="font-heading font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "1.125rem",
              color: "var(--accent)",
              letterSpacing: "-0.01em",
            }}
          >
            The Challenge
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--fg)" }}>
            {study.challenge}
          </p>
        </motion.section>

        {/* Process */}
        <div className="mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading font-bold mb-10"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "1.5rem",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Process
          </motion.h2>
          <div className="space-y-12">
            {study.process.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.05 * i }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="font-heading font-semibold pt-0.5"
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: "1.125rem",
                      color: "var(--fg)",
                    }}
                  >
                    {section.heading}
                  </h3>
                </div>
                <div className="ml-11">
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                    {section.body}
                  </p>
                  {/* Image placeholder */}
                  <div
                    className="w-full rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--card-border)",
                      height: "200px",
                    }}
                  >
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {section.imageAlt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="font-heading font-bold mb-8"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "1.5rem",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Results
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {study.results.map((result) => (
              <div
                key={result.label}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <p
                  className="font-heading font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "var(--accent)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {result.metric}
                </p>
                <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Next case study */}
      {next && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
              Next Case Study
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>{next.industry}</p>
                <h3
                  className="font-heading font-bold"
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    color: "var(--fg)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {next.title}
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
      )}
    </article>
  );
}
