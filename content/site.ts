export const site = {
  name: "Courtney Youngberg",
  role: "Data, Automation & Analytics",
  headline: "I turn messy data and manual processes into useful systems.",
  intro:
    "Senior research analyst with experience across higher education, healthcare technology, customer operations, clinical research, and public safety data. I build analytics, automations, data products, and decision-support tools that bridge technical systems and business needs.",
  email: "courtney.youngberg@gmail.com",
  // Vercel production domain. TODO: swap for a custom domain if one is added later.
  url: "https://portfolio-eight-beta-7g89fj2kbh.vercel.app",
  // TODO: add verified profile URLs. Do not publish until confirmed.
  linkedin: "",
  github: "",
  flagshipUrl: "https://di-calculator.com",
  location: "Southern California",
} as const;

export const domains = [
  {
    title: "Public Safety Data",
    description:
      "9-1-1 database work — where a wrong record isn't a typo, it's a failed emergency response.",
  },
  {
    title: "Clinical Research",
    description:
      "Clinical research data roles — protocol-driven collection, validation, and documentation.",
  },
  {
    title: "Healthcare Technology",
    description:
      "Data services leadership at Kareo — moving practice data into and out of regulated systems at scale.",
  },
  {
    title: "Customer Success Operations",
    description:
      "Technology operations at Tebra — Snowflake, Salesforce, Gainsight, and the reporting that runs a CS org.",
  },
  {
    title: "Higher Education Analytics",
    description:
      "Institutional research at Coastline College and Orange Coast College — equity analytics, automation, and decision support.",
  },
] as const;

export const whatIDo = [
  {
    title: "Analyze",
    description:
      "SQL, statistics, dashboards, and modeling — turning raw records into answers people can act on.",
    items: ["SQL & Snowflake", "Statistical analysis", "Power BI & Tableau", "Predictive modeling"],
  },
  {
    title: "Automate",
    description:
      "Python, workflows, and data processing — replacing months of manual effort with reliable pipelines.",
    items: ["Python automation", "Web scraping & Selenium", "Excel automation", "Workflow design"],
  },
  {
    title: "Build",
    description:
      "Data tools, decision-support products, and integrations that people actually use.",
    items: ["Data products", "Decision-support tools", "APIs & XML pipelines", "Dashboards"],
  },
  {
    title: "Translate",
    description:
      "Business needs into technical solutions — requirements, documentation, and stakeholder alignment.",
    items: ["Requirements analysis", "Process mapping", "Documentation", "Stakeholder communication"],
  },
] as const;

/**
 * Selected impact figures. Every number here is supported by real work;
 * do not add metrics that cannot be verified.
 */
export const impactStats = [
  { value: "300+", label: "program websites processed in PSLO automation" },
  { value: "300+", label: "Excel workbooks generated automatically" },
  { value: "~2 months", label: "of manual effort saved in one cycle" },
  { value: "~1,600", label: "courses in the annual DoD TA XML workflow" },
  { value: "~70", label: "online programs identified for institutional review" },
  { value: "0.719", label: "ROC AUC, interpretable retention model" },
] as const;
