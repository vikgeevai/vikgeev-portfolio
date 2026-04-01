"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { easeOutExpo } from "@/lib/motion";

interface Props {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: Props) {
  const shouldReduce = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
    >
      <Link
        href={`/work/${study.slug}`}
        className="group block rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--card-border)",
        }}
      >
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image / Colour block */}
          <div
            className="relative flex-1 min-h-[280px] md:min-h-[360px] flex items-center justify-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${study.heroColor} 0%, ${study.heroColorEnd} 100%)`,
            }}
          >
            {/* Mock screen placeholder */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={shouldReduce ? {} : { scale: 1.04 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
            >
              <div
                className="w-3/4 max-w-xs rounded-xl overflow-hidden shadow-2xl"
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              >
                <div
                  className="h-6 flex items-center gap-1.5 px-3"
                  style={{ background: "rgba(0,0,0,0.2)" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.35)" }}
                    />
                  ))}
                </div>
                <div className="p-4 space-y-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-2.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        width: i === 0 ? "80%" : i === 1 ? "65%" : i === 2 ? "90%" : "50%",
                      }}
                    />
                  ))}
                  <div className="mt-4 h-16 rounded-lg" style={{ background: "rgba(255,255,255,0.12)" }} />
                </div>
              </div>
            </motion.div>

            {/* Industry tag */}
            <span
              className="absolute top-4 left-4 text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(4px)" }}
            >
              {study.industry}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "var(--border)", color: "var(--muted)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3
              className="font-heading font-bold mb-2"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}
            >
              {study.title}
            </h3>
            <p className="text-base mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
              {study.subtitle}
            </p>

            {/* Outcome metric */}
            <p
              className="text-sm font-medium mb-8 pb-6"
              style={{ color: "var(--fg)", borderBottom: "1px solid var(--border)" }}
            >
              {study.outcome}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm" style={{ color: "var(--muted)" }}>
              <span>{study.role}</span>
              <span>{study.timeline}</span>
              <span>{study.platform}</span>
            </div>

            <span
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
              style={{ color: "var(--accent)" }}
            >
              View Case Study
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
