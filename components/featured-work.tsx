"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-study-card";

export function FeaturedWork() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <p
              className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Selected Work
            </p>
            <h2
              className="font-heading font-bold"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Case studies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
              style={{ color: "var(--muted)" }}
            >
              View all work
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
