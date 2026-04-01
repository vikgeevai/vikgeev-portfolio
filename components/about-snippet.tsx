"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

export function AboutSnippet() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Avatar / visual side */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5", maxHeight: "480px" }}
            >
              {/* Avatar placeholder with initials */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--card) 0%, var(--border) 100%)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="text-center">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-4xl"
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      background: "linear-gradient(135deg, var(--accent), #7C3AED)",
                      color: "#fff",
                    }}
                  >
                    VG
                  </div>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    Profile photo coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl shadow-lg"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                  Open to senior roles
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
          >
            <p
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              About
            </p>
            <h2
              className="font-heading font-bold mb-6"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Designing for clarity,{" "}
              <span style={{ color: "var(--accent)" }}>shipping for impact</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--muted)" }}
            >
              I&apos;m a Lead Product Designer with over a decade of experience helping
              teams across Southeast Asia build products that people trust and return to.
              My work spans Fintech, Insurtech, and Maritime — complex domains that
              demand both design rigour and deep empathy.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--muted)" }}
            >
              Previously at FWD Insurance and SOL-X/SafeVUE.ai, I&apos;ve led design
              from zero-to-one through scale — always anchored in research, systems
              thinking, and a bias toward shipping.
            </p>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span
                className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "var(--border)", color: "var(--fg)" }}
              >
                <MapPin size={13} />
                Singapore
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "var(--border)", color: "var(--fg)" }}
              >
                <Briefcase size={13} />
                10+ Years Experience
              </span>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: "var(--accent)" }}
            >
              Full story
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
