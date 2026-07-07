import type { ExperienceEntry } from "@/lib/types";

/**
 * Professional experience, most recent first.
 *
 * Periods marked "" are unverified — the UI hides empty periods.
 * TODO: fill in exact start/end dates for pre-2024 roles before
 * publishing a dated resume. Do not guess dates.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "Senior Research Analyst",
    org: "Orange Coast College",
    period: "April 2024 – present",
    domain: "Higher Education Analytics",
    bullets: [
      "Institutional research and analytics for a large California community college — equity analysis, program review, accreditation support, and executive reporting.",
      "Automated the PSLO collection process across 300+ program websites, generating 300+ Excel workbooks and saving roughly two months of manual effort.",
      "Built Power BI dashboards including a four-academic-year Zero Cost Textbook dashboard and a Time to Completion dashboard used with institutional stakeholders.",
      "Ran the ACCJC online-program threshold analysis across two years of course data, identifying ~70 programs for institutional review.",
    ],
  },
  {
    role: "Retention Research Specialist / Analyst",
    org: "Coastline College",
    period: "", // TODO: confirm dates
    domain: "Higher Education Analytics",
    bullets: [
      "Research and analytics focused on student retention, success, and completion.",
      "Built the Certificate Eligibility Discovery Pipeline — scraping public program requirements and matching them against student records to surface hundreds of potentially eligible students.",
      "Developed interpretable retention models (logistic regression, ROC AUC ≈ 0.719; outreach validation ≈ 0.679) to support targeted outreach.",
      "Maintained the annual DoD Tuition Assistance XML workflow covering ~1,600 courses.",
    ],
  },
  {
    role: "Customer Success Technology Operations Analyst",
    org: "Tebra",
    period: "", // TODO: confirm dates
    domain: "Customer Success Operations",
    bullets: [
      "Owned reporting and systems operations for the customer success organization in a healthcare-technology company.",
      "Built Snowflake SQL reporting for customer-success metrics; administered and reported across Salesforce, Gainsight, and Jira Service Desk.",
      "Improved operational processes bridging CS leadership, support teams, and engineering.",
    ],
  },
  {
    role: "Data Services Technology Lead",
    org: "Kareo",
    period: "", // TODO: confirm dates
    domain: "Healthcare Technology",
    bullets: [
      "Led the technical side of data services — moving practice data into and out of regulated healthcare systems, with validation and QA appropriate to HIPAA-aware environments.",
      "Designed and improved data-migration and reporting workflows; served as escalation point for complex data issues.",
    ],
  },
  {
    role: "Data Services Supervisor",
    org: "Kareo",
    period: "", // TODO: confirm dates
    domain: "Healthcare Technology",
    bullets: [
      "Supervised a data services team handling customer data onboarding and conversions for a healthcare-technology platform.",
      "Balanced throughput, quality, and compliance while translating between customers, support, and engineering.",
    ],
  },
  {
    role: "Clinical Research Data Roles",
    org: "Healthcare / clinical research organizations",
    period: "", // TODO: confirm organizations and dates
    domain: "Clinical Research",
    bullets: [
      "Protocol-driven data collection, validation, and documentation in clinical research settings — where data quality standards are non-negotiable.",
    ],
  },
  {
    role: "9-1-1 Database Work",
    org: "Public safety",
    period: "", // TODO: confirm organization and dates
    domain: "Public Safety Data",
    bullets: [
      "Maintained public-safety database records supporting 9-1-1 emergency response — an early, formative lesson in what data accuracy actually means.",
    ],
  },
];

export const education = [
  {
    credential: "B.S. Biological Sciences and Zoology",
    org: "Colorado State University",
  },
  {
    credential: "Data Science Certificate",
    org: "University of California, Irvine",
  },
  {
    credential: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
  },
] as const;
