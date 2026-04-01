export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  role: string;
  timeline: string;
  platform: string;
  outcome: string;
  heroColor: string; // gradient stop hex
  heroColorEnd: string;
  tags: string[];
  overview: string;
  challenge: string;
  process: ProcessSection[];
  results: ResultMetric[];
  nextSlug: string;
}

export interface ProcessSection {
  heading: string;
  body: string;
  imageAlt?: string;
}

export interface ResultMetric {
  metric: string;
  label: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "uob-money-lock",
    title: "UOB Money Lock",
    subtitle: "Protecting savings with frictionless security",
    industry: "Fintech · Banking",
    role: "Lead Product Designer",
    timeline: "2023",
    platform: "Mobile iOS & Android",
    outcome: "Designed a security-first savings lock feature for UOB's mobile banking app",
    heroColor: "#1E3A8A",
    heroColorEnd: "#2563EB",
    tags: ["Fintech", "Mobile", "Banking", "Security UX"],
    overview:
      "UOB Money Lock is a feature within the UOB TMRW mobile banking app that allows customers to lock a portion of their savings, preventing unauthorised transfers — even if their account is compromised. The challenge was designing a security feature that felt empowering rather than restrictive.",
    challenge:
      "How do you design a feature that makes users feel secure without adding so much friction that they abandon the task? The balance between security confidence and ease of use was the central design tension.",
    process: [
      {
        heading: "Discovery & Research",
        body: "Conducted user interviews with 12 UOB banking customers to understand mental models around digital savings security. Mapped the existing app journey to identify trust signals and drop-off points.",
        imageAlt: "User research session notes",
      },
      {
        heading: "Information Architecture",
        body: "Defined a clear IA that surfaced Money Lock as a proactive security action within the savings flow, not buried in settings. Created 3 content variants tested through unmoderated remote testing.",
        imageAlt: "IA diagram and card sorting results",
      },
      {
        heading: "Interaction Design",
        body: "Designed the lock/unlock flow using a progressive disclosure pattern — showing only what's needed at each step. Used motion to communicate the state change (locked → unlocked) as a meaningful, satisfying moment.",
        imageAlt: "Interaction flow screens",
      },
      {
        heading: "Visual Design & Handoff",
        body: "Built on UOB's TMRW design system. Created component variants for lock state, confirmation dialogs, and edge cases (insufficient balance, biometric fallback). Delivered a complete Figma spec with annotations.",
        imageAlt: "Figma component library and handoff spec",
      },
    ],
    results: [
      { metric: "↑ 34%", label: "Feature adoption in first 3 months" },
      { metric: "4.8★", label: "User satisfaction rating" },
      { metric: "0 critical", label: "Security UX issues post-launch" },
      { metric: "2 weeks", label: "Faster dev handoff vs prior projects" },
    ],
    nextSlug: "safevue-ai",
  },
  {
    slug: "safevue-ai",
    title: "SafeVUE.ai",
    subtitle: "Maritime safety at scale with IIoT and AI",
    industry: "Maritime · IIoT · Safety 4.0",
    role: "Lead Product Designer",
    timeline: "2021 – 2023",
    platform: "Web Dashboard · Mobile",
    outcome: "Deployed to 100+ vessels globally; zero safety-critical UI incidents reported",
    heroColor: "#0F172A",
    heroColorEnd: "#0369A1",
    tags: ["Maritime", "IIoT", "AI", "Safety 4.0", "Dashboard"],
    overview:
      "SafeVUE.ai is a real-time maritime safety monitoring platform by SOL-X that combines IIoT sensor data, AI-driven risk alerts, and a command-center dashboard for fleet safety officers. The product needed to work reliably in low-connectivity offshore environments while surfacing actionable safety insights instantly.",
    challenge:
      "Designing for safety-critical environments is unforgiving — a confusing alert hierarchy or slow interface could have real-world consequences. The system also needed to work on vessel bridge displays, tablets, and mobile, often with users wearing gloves in harsh conditions.",
    process: [
      {
        heading: "Contextual Inquiry",
        body: "Conducted onboard research on 3 vessels in Singapore and the Philippines. Observed bridge officers, safety officers, and crew during shifts to understand real usage contexts — lighting conditions, interruption patterns, cognitive load.",
        imageAlt: "Onboard research photos and field notes",
      },
      {
        heading: "Alert Hierarchy & Information Architecture",
        body: "Designed a 4-tier alert hierarchy (Critical → High → Medium → Info) with distinct colour, iconography, sound, and haptic patterns. Ran tabletop exercises with safety officers to validate urgency perception.",
        imageAlt: "Alert hierarchy design system",
      },
      {
        heading: "Dashboard Design",
        body: "Built a real-time vessel overview dashboard optimised for large bridge monitors and tablets. Key decisions: single-glance vessel status, drill-down without losing context, and offline-first data presentation when satellite connectivity drops.",
        imageAlt: "Dashboard main view and vessel detail",
      },
      {
        heading: "Mobile & Low-Bandwidth Mode",
        body: "Designed a progressive enhancement approach — full dashboard for connected environments, a stripped-down critical-alerts-only mode for poor connectivity. Ensured all touch targets meet 48dp minimum for gloved operation.",
        imageAlt: "Mobile app screens with low-bandwidth mode",
      },
    ],
    results: [
      { metric: "100+", label: "Vessels deployed globally" },
      { metric: "0", label: "Safety-critical UI incidents post-launch" },
      { metric: "↓ 62%", label: "Alert response time vs legacy system" },
      { metric: "3 regions", label: "Asia Pacific, Middle East, Europe" },
    ],
    nextSlug: "fwd-insurance",
  },
  {
    slug: "fwd-insurance",
    title: "FWD Insurance",
    subtitle: "Modernising insurance for the digital generation",
    industry: "Insurtech · Insurance",
    role: "Lead Product Designer",
    timeline: "2019 – 2021",
    platform: "Web · Mobile iOS & Android",
    outcome: "Redesigned the customer acquisition and self-service flows for FWD's digital insurance products",
    heroColor: "#7C2D12",
    heroColorEnd: "#EA580C",
    tags: ["Insurtech", "Mobile", "Web", "Acquisition", "Retention"],
    overview:
      "FWD Insurance is one of Asia's fastest-growing digital insurers. As Lead Designer, I was responsible for the end-to-end design of customer-facing digital products — from acquisition funnels to policy management and claims.",
    challenge:
      "Insurance is inherently complex and trust-sensitive. The challenge was translating dense policy information into clear, human experiences that reduced time-to-purchase while increasing customer confidence and reducing drop-off.",
    process: [
      {
        heading: "Funnel Audit & Analytics",
        body: "Conducted a full audit of the existing acquisition funnel using Mixpanel and session recordings. Identified 4 critical drop-off points and ran Jobs-to-be-Done interviews with 20 customers who had abandoned mid-purchase.",
        imageAlt: "Funnel analysis and drop-off heatmap",
      },
      {
        heading: "Content Strategy & Plain Language",
        body: "Partnered with content and legal to rewrite policy summaries in plain language. Designed a visual hierarchy that surfaced key coverage details at decision moments, with progressive disclosure for full policy details.",
        imageAlt: "Before/after content redesign",
      },
      {
        heading: "Acquisition Flow Redesign",
        body: "Redesigned the quote-to-purchase flow across 5 product lines. Introduced a persistent progress indicator, smart defaults, and a side-by-side plan comparison component that reduced cognitive load at the decision point.",
        imageAlt: "Quote flow redesign screens",
      },
      {
        heading: "Self-Service & Claims",
        body: "Designed the My FWD policy management portal and a guided claims submission flow. Reduced the average claims submission time from 12 minutes to 4 minutes through smart pre-fill and conditional logic.",
        imageAlt: "Policy portal and claims flow",
      },
    ],
    results: [
      { metric: "↑ 28%", label: "Acquisition funnel completion rate" },
      { metric: "↓ 67%", label: "Avg. claims submission time" },
      { metric: "↑ 41%", label: "NPS improvement post-redesign" },
      { metric: "5 markets", label: "Singapore, HK, Thailand, PH, Vietnam" },
    ],
    nextSlug: "uob-money-lock",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(currentSlug: string): CaseStudy | undefined {
  const current = getCaseStudy(currentSlug);
  if (!current) return undefined;
  return getCaseStudy(current.nextSlug);
}
