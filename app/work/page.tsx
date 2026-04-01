import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-study-card";

export const metadata: Metadata = {
  title: "Work — Vik Geev",
  description:
    "Case studies in Fintech, Insurtech, and Maritime product design — UOB Money Lock, SafeVUE.ai, FWD Insurance.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Case Studies
          </p>
          <h1
            className="font-heading font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            Selected Work
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A selection of product design case studies across Fintech, Insurtech,
            and Maritime — covering zero-to-one, redesign, and complex systems.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
