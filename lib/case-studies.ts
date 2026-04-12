export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  role: string;
  timeline: string;
  platform: string;
  outcome: string;
  coverImage?: string; // path to cover/thumbnail image, e.g. "/case-studies/uob-money-lock/cover-icon.png"
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
  images?: string[];   // paths relative to /public, e.g. "/case-studies/uob-money-lock/flow-overview.png"
  imageAlt?: string;
}

export interface ResultMetric {
  metric: string;
  label: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "uob-money-lock",
    title: "UOB Money Lock 2.0",
    subtitle: "MAS initiative: To keep bank customers safe from scams",
    industry: "Fintech · Banking",
    role: "Product Design Lead",
    timeline: "Jan – June 2024",
    platform: "Mobile iOS & Android (UOB TMRW)",
    outcome: "$3.9B CASA locked in 3 weeks · 50K+ customers · MAS anti-scam mandate",
    coverImage: "/case-studies/uob-money-lock/cover-icon.png",
    heroColor: "#1E3A8A",
    heroColorEnd: "#2563EB",
    tags: ["Fintech", "Banking", "Mobile", "MAS Regulation", "Security UX"],
    overview:
      "UOB Money Lock 2.0 was designed in response to a Monetary Authority of Singapore (MAS) mandate requiring banks to offer customers a way to lock their CASA (Current Account and Savings Account) funds — preventing withdrawals even if their account credentials were compromised by scammers. Working as Product Design Lead within UOB TMRW, I led the end-to-end design of this feature from discovery through to launch, collaborating with a content designer, product owner, and 10 engineers.",
    challenge:
      "Three core design tensions defined this project: (1) Users struggled to understand the concept of setting a lock limit higher than their current balance — a key MAS requirement to future-proof the lock. (2) Any deduction charged from the locked amount would undermine the core proposition of the feature. (3) Terminology — \"Available Balance,\" \"Locked Amount,\" and \"Withdrawable Amount\" — needed to be crystal clear to avoid customer confusion and support escalations. Balancing regulatory compliance with genuinely user-centred design was the central challenge.",
    process: [
      {
        heading: "Discovery & CVP Research",
        body: "Ran a cross-functional kickoff and empathy workshop to understand the MAS mandate's requirements and customer pain points around digital scams. Mapped existing customer mental models around \"locking\" funds — most users conflated it with a term deposit or account freeze. Defined the core Customer Value Proposition: protect what you have earned, even if your credentials are stolen.",
        imageAlt: "Empathy workshop and CVP mapping",
      },
      {
        heading: "User Testing & Insights",
        body: "Conducted 8+ user testing sessions across diverse customer segments — from digitally-savvy millennials to older TMRW users. Key insight: users were confused when asked to set a lock amount higher than their current balance. Iterated on framing, microcopy, and interaction patterns to reframe the limit as a \"ceiling for protection\" rather than a withdrawal cap.",
        images: [
          "/case-studies/uob-money-lock/user-testing-1.png",
          "/case-studies/uob-money-lock/user-testing-2.png",
          "/case-studies/uob-money-lock/user-testing-3.png",
        ],
        imageAlt: "User testing sessions and insight synthesis",
      },
      {
        heading: "Terminology & Content Design Workshop",
        body: "Ran a dedicated workshop with the content designer, legal, and compliance teams to standardise language. Landed on three plain-English terms used consistently across all touchpoints: \"Available Balance\" (what you can spend today), \"Locked Amount\" (your protected ceiling), and \"Withdrawable Amount\" (what remains accessible). Validated terminology comprehension in a follow-up usability test.",
        imageAlt: "Terminology workshop outputs and content guidelines",
      },
      {
        heading: "Flow Design & Delivery",
        body: "Designed a 6-step onboarding flow: (1) CVP Screen explaining the benefit, (2) Select Account, (3) Set Lock Amount with real-time balance display, (4) Cognitive Break screen reinforcing what locking means, (5) Confirmation, (6) Success state with locked amount visible. Delivered full Figma specs to the team of 10 engineers with edge cases, error states, and accessibility annotations.",
        images: [
          "/case-studies/uob-money-lock/flow-overview.png",
          "/case-studies/uob-money-lock/flow-step-1.png",
          "/case-studies/uob-money-lock/flow-steps-2-3.png",
          "/case-studies/uob-money-lock/flow-step-4.png",
          "/case-studies/uob-money-lock/flow-step-5.png",
          "/case-studies/uob-money-lock/flow-step-6.png",
        ],
        imageAlt: "6-step Money Lock flow — Figma screens",
      },
    ],
    results: [
      { metric: "$1B+", label: "CASA locked within the first 2 days of launch" },
      { metric: "50K+", label: "Customers activated Money Lock in the first month" },
      { metric: "$3.9B", label: "Total CASA locked within 3 weeks of launch" },
      { metric: "$6.3M", label: "Estimated project value (MAS mandate compliance)" },
    ],
    nextSlug: "safevue-ai",
  },
  {
    slug: "safevue-ai",
    title: "SafeVUE.ai",
    subtitle: "A Safer, More Productive and Sustainable World with SOL-X",
    industry: "Maritime · IIoT · Safety 4.0",
    role: "Lead UX Designer",
    timeline: "3 Months",
    platform: "Web Dashboard · Mobile iOS & Android",
    outcome: "100+ vessels deployed globally · 98% crew satisfaction · 4000 man-hours saved/vessel/yr",
    coverImage: "/case-studies/safevue-ai/dashboard.png",
    heroColor: "#0F172A",
    heroColorEnd: "#0369A1",
    tags: ["Maritime", "IIoT", "Safety 4.0", "Dashboard", "Mobile"],
    overview:
      "SafeVUE is an Industry 4.0 Permit To Work digital solution for ship managers to improve operational safety at sea. It replaces legacy paper-based SMS compliance systems with a real-time digital platform that connects the bridge, deck, and shore.",
    challenge:
      "Designing for safety-critical environments is unforgiving — a confusing alert hierarchy or slow interface could have real-world consequences. Four systemic failures defined the brief: paper-based SMS compliance, zero operational visibility for shore-side managers, siloed safety data, and a disconnected information flow between bridge and deck.",
    process: [
      {
        heading: "Contextual Inquiry",
        body: "Conducted onboard research across vessels to observe bridge officers, safety officers, and crew during shifts. Documented real usage contexts — lighting conditions, interruption patterns, cognitive load, and the physical constraints of working with gloves.",
        imageAlt: "Onboard research and field notes",
      },
      {
        heading: "Alert Hierarchy & Information Architecture",
        body: "Designed a 4-tier alert hierarchy (Critical → High → Medium → Info) with distinct colour, iconography, and haptic patterns. Ran tabletop exercises with safety officers to validate urgency perception and response workflows.",
        imageAlt: "Alert hierarchy design system",
      },
      {
        heading: "Dashboard Design",
        body: "Built a command-center dashboard for fleet safety officers giving a single-pane-of-glass view of all vessel safety activities, with drill-down from fleet to vessel to individual crew member. Offline-first architecture ensures graceful degradation when satellite connectivity drops.",
        images: ["/case-studies/safevue-ai/dashboard.png"],
        imageAlt: "SafeVUE.ai fleet monitoring dashboard",
      },
      {
        heading: "Mobile App for Crew",
        body: "Designed a glove-friendly mobile interface for permit requests, hazard reporting, and safety briefings. All touch targets meet 48dp minimum. High-contrast alert system is visible in direct sunlight. Offline mode syncs on reconnect for low-bandwidth satellite environments.",
        images: [
          "/case-studies/safevue-ai/mobile-1.png",
          "/case-studies/safevue-ai/mobile-2.png",
          "/case-studies/safevue-ai/mobile-3.png",
        ],
        imageAlt: "SafeVUE.ai mobile app screens",
      },
    ],
    results: [
      { metric: "4,000", label: "Man-hours saved per vessel per year" },
      { metric: "98%", label: "Crew satisfaction post-deployment" },
      { metric: "100+", label: "Vessels deployed globally" },
      { metric: "↓ 62%", label: "Alert response time vs legacy system" },
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
    nextSlug: "indian-life-memorial",
  },
  {
    slug: "indian-life-memorial",
    title: "Indian Life Memorial",
    subtitle: "Designing for grief and building with AI — Singapore's first agentic funeral planner",
    industry: "End-of-Life · AI-Native · Singapore",
    role: "Lead Product Designer & Builder",
    timeline: "2024",
    platform: "Claude Code · React · GitHub · Vercel",
    outcome: "10+ pages shipped, 5-step AI funeral planner, live at indianlifememorial.com — built end-to-end with Claude",
    coverImage: "/case-studies/indian-life-memorial/cover-logo.png",
    heroColor: "#1A0D0A",
    heroColorEnd: "#92400E",
    tags: ["End-of-Life", "Claude Code", "AI-Native", "Compassion UX", "Singapore"],
    overview:
      "Indian Life Memorial is Singapore's first agentic funeral planner — a compassionate digital product serving the Indian, Hindu, and multi-faith community. It was designed and built end-to-end with Claude: from IA and content strategy through to the React codebase, GitHub, and Vercel deployment.",
    challenge:
      "Three design challenges, no easy answers: designing for users in acute emotional distress, navigating multi-faith complexity across 8 service types, and bringing pricing transparency to an industry historically resistant to it. All while building AI-natively — directing Claude at every layer of the product.",
    process: [
      { heading: "Plan — IA & Strategy", body: "Defined the product brief, user needs, and cultural constraints. Claude generated the full 10-page IA, user journey maps across 3 user states (crisis, informed, pre-planning), and per-page content strategy.", imageAlt: "IA and strategy" },
      { heading: "Design — UX Copy & Compassion UX", body: "Defined tone of voice (compassionate, direct, never clinical) and emotional hierarchy. Claude wrote all homepage copy, service descriptions, configurator microcopy, FAQ content, and error states — ~4,000 words of production UX copy.", imageAlt: "UX writing and design" },
      { heading: "Build — React Implementation", body: "Made all architectural decisions and reviewed outputs critically. Claude generated the full React + TypeScript codebase: the 5-step configurator state machine, real-time pricing logic, and Tailwind styling across 18 components.", imageAlt: "React build" },
      { heading: "Ship & Evaluate", body: "Configured Vercel, pointed indianlifememorial.com, ran final QA. Post-launch heuristic evaluation used Claude to synthesise findings into a scored action backlog for the next iteration.", imageAlt: "Ship and evaluate" },
    ],
    results: [
      { metric: "10+", label: "Pages designed and deployed" },
      { metric: "5", label: "Configurator steps with real-time pricing" },
      { metric: "Weeks", label: "From brief to production launch" },
      { metric: "Claude", label: "Built AI-natively, end-to-end" },
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
