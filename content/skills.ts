import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & Querying",
    description:
      "Writing the queries that answer the question — and validating that the answer is right.",
    skills: ["SQL", "Snowflake", "SQL Server", "Oracle / ODS", "ARGOS", "Data validation"],
  },
  {
    title: "Programming & Automation",
    description:
      "Replacing manual, error-prone work with pipelines that run the same way every time.",
    skills: [
      "Python",
      "R",
      "pandas",
      "Selenium",
      "openpyxl",
      "Web scraping",
      "Workflow automation",
    ],
  },
  {
    title: "BI & Analytics",
    description:
      "From data model to decision — dashboards and analysis built around real stakeholder questions.",
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "Statistical analysis",
      "Logistic regression",
      "Dashboard development",
    ],
  },
  {
    title: "Business Systems",
    description:
      "The platforms operations teams actually live in — administered, integrated, and reported on.",
    skills: ["Salesforce", "Gainsight", "Jira Service Desk", "ARGOS"],
  },
  {
    title: "Methods",
    description:
      "The unglamorous work that makes technical work land: requirements, process, documentation.",
    skills: [
      "Requirements analysis",
      "Process improvement",
      "Stakeholder communication",
      "Data modeling",
      "QA",
      "Documentation",
    ],
  },
  {
    title: "Cloud & Technical",
    description:
      "The connective tissue between systems — and enough cloud fluency to design responsibly.",
    skills: [
      "AWS fundamentals (Certified Cloud Practitioner)",
      "APIs",
      "XML",
      "Integration concepts",
      "Reporting automation",
    ],
  },
];
