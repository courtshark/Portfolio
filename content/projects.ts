import type { Project } from "@/lib/types";

/**
 * All projects, in display order. The flagship project comes first.
 *
 * Rules for this file:
 * - Every metric must be real and verifiable. No invented numbers.
 * - `confidential: true` means the case study is anonymized and uses
 *   synthetic examples; never add employer-internal data here.
 * - `repoUrl` stays unset until a verified public repository exists.
 */
export const projects: Project[] = [
  {
    slug: "equity-gap-calculator",
    title: "Equity Gap Calculator",
    tagline:
      "Translating complex statistical methodology into an accessible decision-support application for higher education practitioners.",
    summary:
      "A live, public web application that implements the California Community Colleges Chancellor's Office PPG-1 methodology, helping practitioners identify student groups succeeding at lower rates than their peers. It handles student-level and pre-aggregated data, statistical thresholds, insufficient-data cases, and gap-closing estimates, with both simple and technical result modes.",
    context: "Independent public project, informed by institutional research practice",
    period: "Live product",
    categories: ["Data Products", "Analytics", "Data Science", "AI"],
    roles: [
      "Data Analyst",
      "Senior Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "Analytics Engineer",
    ],
    skills: [
      "Statistical methodology",
      "PPG-1",
      "Data validation",
      "CSV/Excel import",
      "Data product design",
      "TypeScript",
      "Visualization",
      "Accessibility",
    ],
    liveUrl: "https://di-calculator.com",
    flagship: true,
    featured: true,
  },
  {
    slug: "pslo-automation",
    title: "PSLO Automation System",
    tagline:
      "Automating a two-month manual institutional research process across 300+ program websites.",
    summary:
      "A Python pipeline that collects and structures program learning-outcome information from 300+ program websites and generates 300+ formatted Excel workbooks. It replaced roughly two months of manual copy-paste effort and removed the anticipated need for temporary staffing.",
    context: "Institutional research, California community college",
    period: "Since 2024",
    categories: ["Automation", "Business Analysis", "Analytics"],
    roles: [
      "Business Process Automation",
      "Data Analyst",
      "Senior Data Analyst",
      "Business Analyst",
      "Analytics Engineer",
    ],
    skills: [
      "Python",
      "Web automation",
      "Data extraction",
      "pandas",
      "openpyxl",
      "Validation & QA",
      "Requirements analysis",
      "Process improvement",
    ],
    metrics: [
      { value: "300+", label: "program websites processed" },
      { value: "300+", label: "Excel workbooks generated" },
      { value: "~2 months", label: "manual effort saved" },
    ],
    featured: true,
    confidential: true,
  },
  {
    slug: "certificate-eligibility-pipeline",
    title: "Certificate Eligibility Discovery Pipeline",
    tagline:
      "An end-to-end pipeline that found hundreds of students already eligible for certificates they never claimed.",
    summary:
      "Scraped 500+ public program and course pages with Python and R, structured the certificate requirements, joined them against student records with SQL, and applied business-rule matching. The pipeline identified 200+ potentially eligible students and fed an operational outreach effort.",
    context: "Retention research, Coastline College",
    period: "2023 – 2024",
    categories: ["Automation", "Analytics", "Data Science", "Integration"],
    roles: [
      "Data Analyst",
      "Senior Data Analyst",
      "Analytics Engineer",
      "Business Process Automation",
      "Data Scientist",
    ],
    skills: [
      "Python",
      "R",
      "SQL",
      "Web scraping",
      "ETL",
      "Business rules",
      "Data matching",
      "Operationalization",
    ],
    metrics: [
      { value: "500+", label: "public pages scraped" },
      { value: "200+", label: "eligible students identified" },
    ],
    featured: true,
    confidential: true,
  },
  {
    slug: "retention-modeling",
    title: "Student Success & Retention Modeling",
    tagline:
      "Interpretable predictive modeling that supported real outreach, validated honestly and presented without hype.",
    summary:
      "Built interpretable logistic-regression models to support student success and outreach work. The model reached ROC AUC ≈ 0.719 and held ROC AUC ≈ 0.679 on outreach validation, reported with limitations rather than as a magic score.",
    context: "Retention research, Coastline College",
    period: "2023 – 2024",
    categories: ["Data Science", "Analytics"],
    roles: ["Data Scientist", "Data Analyst", "Senior Data Analyst"],
    skills: [
      "Logistic regression",
      "Feature engineering",
      "Model evaluation",
      "ROC AUC",
      "Python / R",
      "Interpretation",
      "Intervention design",
      "Responsible analytics",
    ],
    metrics: [
      { value: "0.719", label: "ROC AUC", note: "interpretable model" },
      { value: "0.679", label: "ROC AUC", note: "outreach validation" },
    ],
    featured: true,
    confidential: true,
  },
  {
    slug: "customer-success-operations",
    title: "Customer Success Technology Operations",
    tagline:
      "The data and systems layer behind a healthcare-technology customer success organization.",
    summary:
      "At Tebra (and previously Kareo), owned the reporting and operations tooling a CS org runs on: Snowflake SQL for customer-success metrics, Salesforce and Gainsight administration, and Jira Service Desk automation, including a ticket state machine that replaced a manual customer-outreach process with automated send, close, and reopen logic, plus a pre-payment data-quality checklist.",
    context: "Tebra / Kareo · healthcare technology",
    period: "2017 – 2023",
    categories: ["Automation", "Analytics", "Business Analysis", "Integration"],
    roles: [
      "Customer Operations / Revenue Operations",
      "Business Process Automation",
      "Business Analyst",
      "Data Analyst",
      "Integration Analyst",
    ],
    skills: [
      "Snowflake SQL",
      "Jira Service Desk automation",
      "Workflow automation",
      "QA & data validation",
      "Salesforce",
      "Gainsight",
      "Process improvement",
      "Regulated-data awareness",
    ],
    featured: true,
    confidential: true,
  },
  {
    slug: "ai-infrastructure-research-desk",
    title: "AI Infrastructure Research Desk",
    tagline:
      "A personal research desk for tracking AI-driven market trends: theme mapping, scored signals, journaled outcomes, and an interface with two voices.",
    summary:
      "An end-to-end research platform built solo. Python collectors ingest Reddit, StockTwits, SEC EDGAR filings, and market data; interpretable engines score signals 0–100; and a SQLite model maps how the AI buildout ripples across semiconductors, power, networking, memory, and space. The whole desk ships in two registers: a jargon-dense Full Desk and a plain-English Soft Mode that makes investing research less intimidating for newcomers.",
    context: "Personal project · AI infrastructure research",
    period: "2026 – present",
    demoUrl: "https://research-desk-demo.vercel.app",
    categories: ["Data Products", "Data Science", "Automation", "AI"],
    roles: [
      "Data Scientist",
      "Analytics Engineer",
      "Data Analyst",
      "Business Process Automation",
    ],
    skills: [
      "Python",
      "SQLite",
      "ETL",
      "APIs",
      "SEC EDGAR",
      "Signal scoring",
      "Data modeling",
      "Web scraping",
      "Inclusive UX design",
      "AI-assisted development",
    ],
  },
  {
    slug: "dod-ta-xml-pipeline",
    title: "DoD Tuition Assistance XML Pipeline",
    tagline:
      "A compliance-oriented annual workflow transforming ~1,600 courses into a valid federal data submission.",
    summary:
      "An annual data requirement for military tuition assistance: mapping ~1,600 courses to a required XML schema, transforming and validating the data, and getting the submission right. Errors here have compliance consequences for the institution and access consequences for students.",
    context: "Institutional data workflow, California community college",
    period: "Annual cycle",
    categories: ["Integration", "Automation", "Business Analysis"],
    roles: [
      "Integration Analyst",
      "Business Analyst",
      "Data Analyst",
      "Business Process Automation",
    ],
    skills: [
      "XML",
      "Schema mapping",
      "Data transformation",
      "Validation",
      "Compliance workflows",
      "QA",
      "Automation",
    ],
    metrics: [{ value: "~1,600", label: "courses per annual cycle" }],
    confidential: true,
  },
  {
    slug: "accjc-online-program-analysis",
    title: "Online Program / ACCJC Analysis",
    tagline:
      "Two years of course data, one clear compliance answer: ~70 programs met the online threshold for review.",
    summary:
      "Analyzed two years of course and program data to determine which programs crossed the online-course threshold that triggers institutional review. The analysis identified approximately 70 programs and gave accreditation stakeholders a defensible, documented answer.",
    context: "Institutional research, California community college",
    period: "Since 2024",
    categories: ["Analytics", "Business Analysis"],
    roles: ["Data Analyst", "Senior Data Analyst", "Business Analyst"],
    skills: [
      "SQL",
      "Data validation",
      "Business rules",
      "Compliance reporting",
      "Stakeholder communication",
    ],
    metrics: [{ value: "~70", label: "programs identified for review" }],
    confidential: true,
  },
  {
    slug: "zero-cost-textbook-dashboard",
    title: "Zero Cost Textbook Dashboard",
    tagline:
      "Four academic years of textbook-cost data, modeled and made explorable in Power BI.",
    summary:
      "A Power BI dashboard spanning four academic years of zero-cost-textbook course data, with a proper data model underneath and a stakeholder-friendly surface on top for tracking institutional progress on course material affordability.",
    context: "Institutional research, Orange Coast College",
    period: "Since 2024",
    categories: ["BI", "Analytics"],
    roles: ["Data Analyst", "Senior Data Analyst", "Business Analyst"],
    skills: [
      "Power BI",
      "Data modeling",
      "Visualization",
      "Reporting",
      "Stakeholder communication",
    ],
    confidential: true,
  },
  {
    slug: "time-to-completion-dashboard",
    title: "Time to Completion Dashboard",
    tagline:
      "Making a slow-moving institutional question visible and discussable: how long does a degree really take?",
    summary:
      "A dashboard translating student completion timelines into a form leadership and program stakeholders can interrogate, designed around the questions people actually ask in program review rather than the shape of the source tables.",
    context: "Institutional research, Orange Coast College",
    period: "Since 2024",
    categories: ["BI", "Analytics"],
    roles: ["Data Analyst", "Senior Data Analyst", "Business Analyst"],
    skills: [
      "Dashboard design",
      "Institutional analytics",
      "Communication",
      "Stakeholder presentation",
    ],
    confidential: true,
  },
];

export const flagshipProject = projects.find((p) => p.flagship)!;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
