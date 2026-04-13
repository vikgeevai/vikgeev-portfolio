"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Mail, ExternalLink, MapPin, Download } from "lucide-react";
import { makeFadeUp, easeOutExpo } from "@/lib/motion";

const tools = [
  "Figma", "Adobe XD", "Illustrator", "Photoshop", "Sketch", "InVision",
  "JIRA", "Confluence", "Notion", "Monday.com", "Google Workspace",
];

const skills = [
  { label: "Design Leadership & Strategy",    pct: 96 },
  { label: "UX Research & Synthesis",          pct: 92 },
  { label: "Interaction & Visual Design",      pct: 95 },
  { label: "Design Systems & DesignOps",       pct: 90 },
  { label: "Stakeholder Facilitation",         pct: 93 },
];

// Reverse chronological order — newest first
const experience = [
  {
    role: "VP II — Experience Design Lead",
    company: "UOB TMRW Digital Banking Group",
    period: "May 2022 – Present",
    context: "UOB TMRW is Southeast Asia's most ambitious mobile-first digital banking platform, serving millions of users across SG, MY, TH & ID.",
    tags: ["Digital Banking", "Design Leadership", "Design Systems", "OKR Alignment", "Mentorship"],
    outcomes: [
      { metric: "10", label: "UX & Content Designers led across 4 markets" },
      { metric: "20+", label: "Product Owners partnered with to align strategy" },
      { metric: "4", label: "Markets: SG, MY, TH, ID" },
    ],
    points: [
      "Led and mentored a team of 10 UX and Content Designers, owning end-to-end design for UOB TMRW Digital Group & Engagement across 4 markets",
      "Spearheaded the successful launch of UOB Business Banking, Lifestyle & Rewards+ within the TMRW app — driving adoption and measurable engagement uplift across SEA",
      "Partnered with 20+ Product Owners to define product vision, align design strategy to business OKRs, and accelerate delivery velocity across concurrent squads",
      "Established design quality benchmarks, review frameworks, and governance processes that reduced iteration cycles and improved consistency across all product surfaces",
      "Championed design-thinking workshops and continuous research programmes to embed user insight into product roadmaps from discovery through to post-launch optimisation",
    ],
    accentColor: "#2563EB",
  },
  {
    role: "Lead Product Designer",
    company: "SOL-X / Magellan-X · IIoT Maritime Tech",
    period: "Dec 2020 – Apr 2022",
    context: "Integrated maritime safety and risk-management platform deployed across 50+ commercial vessels globally.",
    tags: ["Maritime IIoT", "Safety Tech", "Design Systems", "Multi-Surface"],
    outcomes: [
      { metric: "50+", label: "Commercial vessels deployed globally" },
      { metric: "100+", label: "Product features designed end-to-end" },
      { metric: "1st", label: "Scalable design system built for the company" },
    ],
    points: [
      "Owned the full UX/UI design process — from problem framing and SME user research through to high-fidelity prototyping, usability testing, and production handoff",
      "Designed 100+ product features end-to-end across web and mobile surfaces",
      "Reduced operational risk exposure by redesigning critical safety workflows informed by incident data, directly improving human-factor outcomes on board vessels",
      "Built the company's first scalable design system, enabling faster product iteration and visual consistency shared with engineering",
    ],
    accentColor: "#0369A1",
  },
  {
    role: "Senior UX Designer",
    company: "Uncharted Global · InsurTech SaaS",
    period: "Nov 2019 – Nov 2020",
    context: "Leading SaaS platform enabling insurance firms to transition from legacy core systems to cloud-native underwriting and distribution.",
    tags: ["InsurTech", "SaaS", "Design System", "Enterprise UX"],
    outcomes: [
      { metric: "20+", label: "Insurance firms transitioned to cloud-native SaaS" },
      { metric: "100+", label: "Developers served by Figma component library" },
    ],
    points: [
      "Shaped UX strategy for a SaaS platform that enabled 20+ insurance firms to transition from legacy systems to cloud-native underwriting and distribution",
      "Led end-to-end user research, synthesising insights into validated design solutions that improved task completion rates and reduced onboarding friction",
      "Developed a comprehensive Figma design system and component library, improving design-to-development handoff speed and consistency across 100+ developers",
    ],
    accentColor: "#7C3AED",
  },
  {
    role: "UX/UI Design Manager",
    company: "Hong Leong Bank Digital Banking",
    period: "Mar 2019 – Nov 2019",
    context: "Digital banking UX for one of Malaysia's leading banks, based in Kuala Lumpur.",
    tags: ["Banking", "Journey Mapping", "Personas", "Offshore Team"],
    outcomes: [
      { metric: "25%", label: "Uplift in user engagement across digital channels" },
      { metric: "19", label: "Concurrent design initiatives delivered on time" },
      { metric: "15", label: "Offshore designers coordinated in KL HQ" },
    ],
    points: [
      "Produced high-fidelity wireframes, mockups, and specifications for all digital banking touchpoints, contributing to a 25% uplift in user engagement",
      "Developed detailed user personas and journey maps that informed UX strategy across 19 concurrent content and product design initiatives",
      "Coordinated with an offshore team of 15 designers in KL HQ, ensuring consistent brand execution and on-time delivery across a complex multi-platform programme",
    ],
    accentColor: "#0891B2",
  },
  {
    role: "UX/UI Design Manager",
    company: "FWD Insurance Singapore",
    period: "Jan 2017 – Feb 2019",
    context: "One of Southeast Asia's fastest-growing digital insurers — delivered UX/UI across desktop and mobile for multiple product launches.",
    tags: ["InsurTech", "Mobile", "IA", "Team Leadership"],
    outcomes: [
      { metric: "25%", label: "Reduction in bounce rates across acquisition funnels" },
      { metric: "15%", label: "Improvement in cross-team delivery efficiency" },
      { metric: "20+", label: "Designers and writers managed" },
    ],
    points: [
      "Managed a team of 20+ internal and external designers and writers, delivering UX/UI outcomes across desktop and mobile",
      "Directed information architecture and interface design for multiple new product launches, resulting in a 15% improvement in cross-team delivery efficiency",
      "Leveraged competitive analysis and data-informed design iteration to achieve a 25% reduction in bounce rates across key digital acquisition and onboarding funnels",
    ],
    accentColor: "#EA580C",
  },
  {
    role: "Senior UX/UI Design Manager",
    company: "Amobee (Singtel)",
    period: "Mar 2015 – May 2016",
    context: "Global advertising technology platform under Singtel — founded and scaled an in-house creative studio serving enterprise clients.",
    tags: ["Advertising Tech", "Creative Direction", "Enterprise", "Brand Identity"],
    outcomes: [
      { metric: "15+", label: "Enterprise clients including Singtel & CPF Board" },
    ],
    points: [
      "Founded and scaled 'Amobee Studios', establishing creative direction and design operations for 15+ enterprise clients including Singtel, CPF Board, and HungryGoWhere",
      "Managed creative initiatives spanning mobile ad services, brand identity, UX wireframing, and digital campaigns — expanding team capabilities through cross-divisional collaboration",
    ],
    accentColor: "#D97706",
  },
  {
    role: "Chief Experience Officer & Co-Founder",
    company: "SourceGuru",
    period: "Aug 2012 – Dec 2014",
    context: "Design-led creative agency backed by $2.5M angel investment, operating within Singapore's startup ecosystem.",
    tags: ["Co-Founder", "Creative Agency", "Brand Identity", "Startup"],
    outcomes: [
      { metric: "$2.5M", label: "Angel investment raised" },
      { metric: "15–20", label: "Multidisciplinary team built and led" },
    ],
    points: [
      "Co-founded a design-led creative agency backed by $2.5M angel investment, building and leading a multidisciplinary team of 15–20 across UI/UX, brand identity, and digital marketing",
      "Defined the company's creative vision and positioned SourceGuru as a standout design partner in Singapore's startup ecosystem through new business pitches and client delivery",
    ],
    accentColor: "#059669",
  },
  {
    role: "Creative Project Manager",
    company: "TBWA\\Group Singapore",
    period: "Jul 2008 – Oct 2011",
    context: "One of the world's leading creative agency networks — delivered digital creative for Singapore Airlines, ANZ Bank, and other flagship brands.",
    tags: ["Advertising", "Creative Direction", "Digital Campaigns", "Team Lead"],
    outcomes: [
      { metric: "15", label: "Designers led across multi-brand campaigns" },
      { metric: "2", label: "Flagship brands: Singapore Airlines & ANZ Bank" },
    ],
    points: [
      "Led a team of 15 designers delivering high-quality digital creative for Singapore Airlines and ANZ Bank, spanning web, mobile, and campaign executions",
      "Developed precise project schedules and managed delivery milestones, ensuring punctual, on-brief output across a high-volume multi-brand workload",
    ],
    accentColor: "#6B7280",
  },
];

function SkillBar({ label, pct }: { label: string; pct: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>{label}</span>
        <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{pct}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--border)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduce ? 0 : 1.0, ease: easeOutExpo, delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export function AboutPageContent() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(shouldReduce);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            About
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
            The designer<br />behind the work
          </h1>
        </motion.div>

        {/* ── Bio + Status ───────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 mb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            <p className="text-xl leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              I&apos;m Viknesh Geevanantham — a strategic design leader with{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>15+ years</span>{" "}
              delivering end-to-end product design across FinTech, InsurTech, MaritimeTech, SaaS, and Advertising Tech. Currently VP II Experience Design Lead at UOB TMRW Digital Banking.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              I&apos;m a <span style={{ color: "var(--fg)", fontWeight: 500 }}>proven player-coach</span> —
              moving from ambiguous problem space to shipped experience, balancing design craft with business outcomes. Deeply fluent in Figma, design systems, AI-augmented workflows, and WCAG accessibility.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Ready to bring fintech-grade rigour and APAC cross-cultural design expertise to your team.
            </p>

            {/* Download + LinkedIn */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/Viknesh_Geevanantham_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/vikneshgeev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border cursor-pointer transition-opacity duration-200 hover:opacity-80"
                style={{ borderColor: "var(--border)", color: "var(--fg)" }}
              >
                <ExternalLink size={15} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Status card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl h-fit"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
          >
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>
                  Current Status
                </p>
                <p className="text-sm font-medium flex items-center gap-2" style={{ color: "var(--fg)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  1 month notice
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Location</p>
                <p className="text-sm flex items-center gap-1.5" style={{ color: "var(--fg)" }}>
                  <MapPin size={13} /> Singapore 🇸🇬
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Domain</p>
                <p className="text-sm" style={{ color: "var(--fg)" }}>FinTech · InsurTech · Maritime · SaaS · AdTech</p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Market Focus</p>
                <p className="text-sm" style={{ color: "var(--fg)" }}>Southeast Asia</p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Education</p>
                <p className="text-sm" style={{ color: "var(--fg)" }}>BDes Communication Design</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>RMIT University · Distinction</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Skill Bars ─────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="font-heading font-bold mb-8"
            style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "1.25rem", color: "var(--fg)", letterSpacing: "-0.01em" }}
          >
            Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 max-w-3xl">
            {skills.map((s) => <SkillBar key={s.label} {...s} />)}
          </div>
        </motion.div>

        {/* ── Tools ──────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="font-heading font-bold mb-6"
            style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "1.25rem", color: "var(--fg)", letterSpacing: "-0.01em" }}
          >
            Tools &amp; Technology
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-sm px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)", color: "var(--fg)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Experience ─────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2
              className="font-heading font-bold"
              style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "1.25rem", color: "var(--fg)", letterSpacing: "-0.01em" }}
            >
              Experience
            </h2>
            <a
              href="/Viknesh_Geevanantham_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer transition-opacity duration-200 hover:opacity-80"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <Download size={13} />
              Download full resume
            </a>
          </div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.06 * i }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                {/* Card header — coloured left accent bar */}
                <div
                  className="px-8 pt-7 pb-5"
                  style={{ borderLeft: `3px solid ${exp.accentColor}` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3
                        className="font-heading font-bold"
                        style={{ fontFamily: "var(--font-heading, sans-serif)", fontSize: "1.125rem", color: "var(--fg)" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-base font-medium" style={{ color: exp.accentColor }}>{exp.company}</p>
                    </div>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 h-fit"
                      style={{ backgroundColor: `${exp.accentColor}14`, color: exp.accentColor }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--muted)", fontStyle: "italic" }}>
                    {exp.context}
                  </p>
                </div>

                {/* Key metrics — scannable outcome row */}
                <div
                  className="grid gap-0 px-8 py-4"
                  style={{
                    gridTemplateColumns: `repeat(${exp.outcomes.length}, 1fr)`,
                    backgroundColor: "var(--bg)",
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {exp.outcomes.map((o, j) => (
                    <div
                      key={j}
                      className="py-1 px-3 first:pl-0"
                      style={{ borderRight: j < exp.outcomes.length - 1 ? "1px solid var(--border)" : "none" }}
                    >
                      <p
                        className="font-heading font-extrabold"
                        style={{
                          fontFamily: "var(--font-heading, sans-serif)",
                          fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                          color: exp.accentColor,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.1,
                        }}
                      >
                        {o.metric}
                      </p>
                      <p className="text-xs leading-tight mt-0.5" style={{ color: "var(--muted)" }}>
                        {o.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bullet points */}
                <div className="px-8 py-5">
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "var(--border)", color: "var(--muted)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
