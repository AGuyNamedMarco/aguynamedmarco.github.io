export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client?: string;
  project?: string;
  problem?: string;
  constraint?: string;
  role: string;
  timeline: string;
  tools: string[];
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: string[];
  roleScope?: string[];
  collaboration?: string[];
  directExecution?: string[];
  strategicInfluence?: string[];
  designDecisions?: {
    title: string;
    decision: string;
    details: string[];
    tradeoff: string;
  }[];
  accessibility?: string[];
  impact?: string[];
  refinements?: string[];
};

export type ProjectCard = {
  title: string;
  type: string;
  description: string;
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "health-dashboard",
    title: "Remote Care Dashboard",
    summary:
      "Designed an operations dashboard for clinical teams monitoring high-risk patient cohorts.",
    role: "Senior UX Designer",
    timeline: "10 weeks",
    tools: ["Figma", "Miro", "Dovetail", "Storybook"],
    challenge:
      "Nurses needed faster triage decisions, but key patient trends were hidden behind dense tables and ambiguous status indicators.",
    approach: [
      "Audited existing workflows with cross-functional stakeholder interviews.",
      "Created an alert severity system with clear visual and text redundancy.",
      "Prototyped progressive disclosure for patient detail views.",
      "Partnered with engineering to document component accessibility rules."
    ],
    outcome:
      "Clinical staff reported higher confidence in escalation decisions and reduced manual searching during shift handoff.",
    metrics: [
      "Average triage time -22%",
      "Critical case detection +17%",
      "Task success in usability test: 93%"
    ]
  },
  {
    slug: "nonprofit-donations",
    title: "Nonprofit Donation Experience",
    summary:
      "Reworked a donation funnel to improve trust, transparency, and recurring contribution setup.",
    role: "Product Designer",
    timeline: "8 weeks",
    tools: ["Figma", "Hotjar", "Google Analytics", "Optimal Workshop"],
    challenge:
      "Potential donors dropped off before payment due to weak impact storytelling and unclear recurring donation controls.",
    approach: [
      "Conducted rapid card sort to clarify navigation and messaging priorities.",
      "Built narrative-driven donation pages with impact proof points.",
      "Improved form fields, validation, and recurring toggle affordance.",
      "A/B tested revised page structure and CTA wording."
    ],
    outcome:
      "The new funnel improved donor confidence and increased recurring plan adoption while preserving low friction for one-time gifts.",
    metrics: [
      "Recurring donations +19%",
      "Overall conversion +14%",
      "Form completion errors -31%"
    ]
  }
];

export const projectHighlights: ProjectCard[] = [
  {
    title: "Onboarding Email Sequence",
    type: "Growth UX",
    description: "Lifecycle touchpoints that improved first-week activation for trial users.",
    href: "#"
  },
  {
    title: "Design System Audit",
    type: "Design Ops",
    description: "Accessibility and consistency audit across 42 production components.",
    href: "#"
  },
  {
    title: "B2B Pricing Calculator",
    type: "Interaction Design",
    description: "Guided estimation tool that reduced support-led quote requests.",
    href: "#"
  },
  {
    title: "Mobile Signup Flow",
    type: "Conversion UX",
    description: "Streamlined account creation flow with fewer form fields and clearer copy.",
    href: "#"
  }
];