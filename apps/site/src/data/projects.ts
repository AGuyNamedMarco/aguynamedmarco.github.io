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
    slug: "usaspending-search",
    title: "USAspending.gov Search Experience",
    summary:
      "Delivered a scalable search experience that became the primary way users explore federal spending data.",
    client: "U.S. Department of the Treasury, Bureau of the Fiscal Service",
    project: "USAspending.gov - Search",
    problem:
      "Trillions of dollars in federal spending records existed, but were effectively inaccessible without meaningful search and analysis tools.",
    constraint:
      "A single interface needed to support both casual users and expert analysts.",
    role: "Primary Individual Contributor",
    timeline: "Multi-release delivery",
    tools: ["Figma", "Design Systems", "Usability Testing", "Cross-functional Workshops"],
    challenge:
      "The interface needed to make complex federal award data discoverable and analyzable without overwhelming new users.",
    approach: [
      "Designed an end-to-end search interface from concept to production-ready specs.",
      "Validated interaction patterns through user research, outreach, and stakeholder reviews.",
      "Built reusable UI components aligned to engineering constraints and performance needs.",
      "Iterated on filter architecture, table interactions, and analysis modules to support novice and expert workflows."
    ],
    outcome:
      "The resulting experience became the primary entry point for exploring federal spending data while supporting analysis at both record and macro levels.",
    metrics: [
      "Primary pathway for discovery on USAspending.gov",
      "Single scalable interface for search and analysis",
      "Improved access to federal spending transparency data"
    ],
    roleScope: [
      "Owned interaction design, visual hierarchy, and component architecture.",
      "Executed wireframing, prototyping, iterative validation, and high-fidelity design delivery.",
      "Worked from concepting through production-ready handoff with engineering."
    ],
    collaboration: [
      "Product Owners to shape requirements, priorities, and tradeoffs.",
      "UX Designers to align research insights with interaction patterns.",
      "Front-End Engineers to ensure feasibility, performance, and implementation quality.",
      "Project Managers to align scope, sequencing, and delivery timelines.",
      "Subject Matter Experts to validate data semantics and analytical accuracy."
    ],
    directExecution: [
      "Produced wireframes, prototypes, high-fidelity UI, and reusable component systems.",
      "Defined interaction patterns for data filtering and analytical workflows.",
      "Conducted user research and outreach for validation.",
      "Co-facilitated design-thinking sessions with team members."
    ],
    strategicInfluence: [
      "Set design strategy and direction for the search experience.",
      "Contributed to scrum planning and design sequencing.",
      "Improved design operations and design-engineering collaboration practices.",
      "Influenced front-end implementation approaches through close partnership."
    ],
    designDecisions: [
      {
        title: "Two-Column Layout - Inputs and Outputs",
        decision: "Used an independently scrollable filter sidebar and content area.",
        details: [
          "Separated query construction from result interpretation to create a predictable analysis flow.",
          "Kept filters persistent while users reviewed tables and visualizations.",
          "Reduced disruption from linear filter-submit-review loops."
        ],
        tradeoff:
          "A persistent sidebar reduces result space; mitigated with a collapsible sidebar and responsive scaling."
      },
      {
        title: "Modular Components - Reusable and Adaptable",
        decision: "Built the experience as a composable, grid-based component system.",
        details: [
          "Reused structural patterns across filters, tables, and visual modules.",
          "Supported multiple chart types, pivot options, and stacked modules for macro insights.",
          "Improved consistency while reducing one-off UI patterns."
        ],
        tradeoff:
          "Required upfront design and engineering investment, paid back through faster feature delivery and lower maintenance."
      },
      {
        title: "Filter Architecture - Complex but Structured",
        decision: "Offered comprehensive filters with prioritized defaults.",
        details: [
          "Matched filter controls to underlying data semantics.",
          "Enabled quick novice workflows and precise expert queries in the same interface.",
          "Prioritized broad-use filters like keywords and period at the top."
        ],
        tradeoff:
          "Filter volume can feel heavy for casual users; mitigated by opening only high-value groups by default."
      },
      {
        title: "Tabbed Results Table - Discoverability and Analysis",
        decision: "Grouped results by award/record type in tabbed tables.",
        details: [
          "Handled contracts, grants, loans, and other types in context-specific views.",
          "Included sorting, pinned index behavior, and related organization links.",
          "Enabled common ranking and attribution questions directly in-product."
        ],
        tradeoff:
          "Tabs prevent single-table sorting across all record types; mitigated by download options for external analysis."
      },
      {
        title: "Macro Analysis - Beyond Raw Search Results",
        decision: "Added reusable chart and map modules for macro-level interpretation.",
        details: [
          "Supported questions about major spenders, recipients, and location patterns.",
          "Designed modules for reconfiguration and future expansion."
        ],
        tradeoff:
          "Higher initial build cost offset by long-term reuse and reduced maintenance overhead."
      },
      {
        title: "Tooltips and Transparency",
        decision: "Embedded unobtrusive disclosures for definitions and methodology.",
        details: [
          "Used tooltips, expandable sections, and modals to provide required disclosures.",
          "Kept disclosure content accessible while minimizing visual interruption."
        ],
        tradeoff:
          "Additional elements add density; mitigated with reduced emphasis and accessible interaction patterns."
      },
      {
        title: "Interaction Efficiency",
        decision: "Removed avoidable friction in common workflows.",
        details: [
          "Added fixed submit positioning to avoid post-filter scrolling.",
          "Used nested checkbox trees for multi-level selections.",
          "Enabled type-to-find inputs and one-click fiscal year presets."
        ],
        tradeoff:
          "Added control complexity in exchange for significantly faster repeat analysis tasks."
      }
    ],
    accessibility: [
      "Designed to meet Section 508 requirements for a U.S. federal website.",
      "Ensured non-color cues and WCAG AA-aligned contrast for critical information.",
      "Supported screen reader usage through semantic structure and clear labels.",
      "Provided text equivalents for non-text elements and stylesheet-independent readability.",
      "Implemented accessible form and validation patterns compatible with assistive technology."
    ],
    impact: [
      "Made trillions of dollars in spending data searchable and analyzable through one interface.",
      "Enabled both casual users and expert analysts to find relevant federal spending subsets.",
      "Integrated macro analysis with row-level search results to support more use cases.",
      "Advanced the Treasury's transparency mission through improved public data access."
    ],
    refinements: [
      "Emphasize temporal analysis with year-over-year fiscal comparisons.",
      "Add side-by-side comparative search views for direct result-set contrast.",
      "Further separate record-level results from aggregate analysis surfaces.",
      "Improve screen-space efficiency by reducing component footprint."
    ]
  },
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