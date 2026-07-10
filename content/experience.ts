import type { ExperienceEntry } from "@/lib/types";

/**
 * Professional experience, most recent first. Dates and figures verified
 * against Courtney's LinkedIn profile (July 2026).
 *
 * Earlier science/service roles (USDA-ARS, Hufbauer Lab, pre-data jobs)
 * are intentionally omitted here to keep the portfolio resume focused on
 * the data decade; they remain on LinkedIn.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "Senior Research Analyst",
    org: "Orange Coast College",
    period: "April 2024 – present",
    domain: "Higher Education Analytics",
    bullets: [
      "Develop and support institutional effectiveness projects spanning instructional planning, accreditation, compliance reporting, student success, and faculty access to program data.",
      "Automated PSLO and required-course data collection from 300+ program websites using Python, generating 300+ customized Excel workbooks. Cut roughly two months of manual preparation and eliminated the need for temporary staffing.",
      "Analyzed two years of course and program data for ACCJC accreditation review, identifying and submitting 70 programs with more than 50% online availability.",
      "Created the Department of Defense XML file process translating ~1,600 catalog courses into an annual upload-ready compliance file for military tuition assistance.",
      "Built Power BI dashboards tracking four academic years of Zero Cost Textbook data, plus a Time to Completion dashboard for analyzing student progress and program effectiveness.",
      "Built a web-based PPG-1 calculator with data import and auto-calculation features that helps faculty and staff identify equity gaps in student outcomes.",
      "Create SQL reports, dashboards, and data tools, and support equity-centered data coaching that helps faculty, classified professionals, and managers use outcome data for inquiry and decision-making.",
    ],
  },
  {
    role: "Retention Research Analyst",
    org: "Coastline College",
    period: "June 2023 – April 2024",
    domain: "Higher Education Analytics",
    bullets: [
      "Developed and implemented data-driven projects under the guidance of the Dean of Institutional Effectiveness.",
      "Engineered a Python-based web scraper extracting academic course-offering data from 500+ websites (2020 – present).",
      "Developed SQL scripts merging web-scraped program requirements with student records, identifying 200+ students eligible for certificates and supporting success and retention outreach.",
      "Built interpretable retention models (logistic regression, ROC AUC ≈ 0.719; outreach validation ≈ 0.679) to prioritize student outreach.",
      "Created Power BI dashboards evaluating degree and certificate attainment across demographic factors, and produced weekly enrollment, drop, and Pell Grant reporting.",
    ],
  },
  {
    role: "CS Technology Operations Analyst",
    org: "Tebra",
    period: "January 2022 – October 2023",
    domain: "Customer Success Operations",
    bullets: [
      "Spearheaded development of customer success metrics using Snowflake analytics to assess customer health at the account level.",
      "Collaborated with legal and database teams to generate custom reports for federal subpoenas and search warrants, providing agents with essential data context.",
      "Analyzed declining CSAT scores, identified key indicators, and presented strategic recommendations to executives for policy development.",
      "Worked cross-functionally with Support leadership to build custom Gainsight workflows and goals improving workforce efficiency and accuracy.",
    ],
  },
  {
    role: "Data Services Technology Lead",
    org: "Kareo",
    period: "February 2020 – January 2022",
    domain: "Healthcare Technology",
    bullets: [
      "Built and customized 4 Jira Service Desk projects with custom workflows and automation, achieving an 85% time-efficiency improvement.",
      "Automated a manual customer-outreach workflow in Jira Service Desk as a state machine: it sent requests up to three times, auto-closed unanswered tickets, reopened them when customers replied by email, and routed cases between customer-facing staff and analysts. Paired it with a pre-payment data-readiness checklist that set expectations and reduced downstream rework.",
      "Developed a new bulk clinical-document import process that created a new revenue stream for the company.",
      "Programmed advanced SQL scripts automating data mapping and cleaning, achieving a 70% efficiency gain per project.",
    ],
  },
  {
    role: "Data Services Supervisor",
    org: "Kareo",
    period: "November 2018 – February 2020",
    domain: "Healthcare Technology",
    bullets: [
      "Led, trained, and managed a team of 7, including 2 offshore employees in Costa Rica.",
      "Created an incoming vendor data-quality process resulting in a 76% decrease in unneeded engineering tickets.",
      "Partnered with engineering on tooling improvements delivering a 3× increase in upload speed, and tested and implemented the CCDA (summary of care) import tool.",
    ],
  },
  {
    role: "Data Integration Specialist",
    org: "Kareo",
    period: "September 2017 – November 2018",
    domain: "Healthcare Technology",
    bullets: [
      "Planned and executed data conversion and migration processes between legacy and target healthcare systems, on time and within budget guidelines.",
      "Extracted, cleansed, transformed, and loaded customer data, verifying accuracy and application performance through structured testing.",
    ],
  },
  {
    role: "Associate Data Manager",
    org: "iCardiac Technologies",
    period: "November 2016 – September 2017",
    domain: "Clinical Research",
    bullets: [
      "Supported development of data and report-definition requirements for clinical studies.",
      "Validated data and reports, maintained study documentation to internal work processes, and issued and resolved data queries.",
      "Contributed to ongoing standardization and improvement of data-management procedures.",
    ],
  },
  {
    role: "Implementation Specialist",
    org: "West Safety Services",
    period: "October 2015 – November 2016",
    domain: "Public Safety Data",
    bullets: [
      "Managed and updated cell tower data in the 9-1-1 wireless database, maintaining a 99+% report accuracy rate with 100% on-time deliverables.",
      "Helped lead process updates enabling more automation and efficiency gains across multiple teams; received an excellence award for a large-scale project.",
    ],
  },
  {
    role: "Data Specialist",
    org: "West Safety Services",
    period: "September 2014 – October 2015",
    domain: "Public Safety Data",
    bullets: [
      "Sent, received, and logged customer file information to find data errors supporting 9-1-1 data accuracy.",
      "Updated and maintained process documentation, and automated log-sheet tallies and data entry to save team time.",
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
