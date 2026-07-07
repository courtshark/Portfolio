/**
 * Core content types for the portfolio.
 *
 * All page copy lives in `content/` as data conforming to these types.
 * Components render the data; they do not own it.
 */

export const CATEGORIES = [
  "Analytics",
  "Automation",
  "Data Science",
  "Data Products",
  "Business Analysis",
  "Integration",
  "BI",
  "AI",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const TARGET_ROLES = [
  "Data Analyst",
  "Senior Data Analyst",
  "Business Analyst",
  "Business Process Automation",
  "Analytics Engineer",
  "Data Scientist",
  "Customer Operations / Revenue Operations",
  "Integration Analyst",
] as const;

export type TargetRole = (typeof TARGET_ROLES)[number];

export interface Metric {
  value: string;
  label: string;
  /** Extra qualifier shown in smaller type, e.g. "validation set". */
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line positioning statement shown under the title. */
  tagline: string;
  /** Short card/summary copy (2–3 sentences). */
  summary: string;
  /** Where the work happened, phrased for public sharing. */
  context: string;
  /** Optional, only when truthfully known — never guess dates. */
  period?: string;
  categories: Category[];
  roles: TargetRole[];
  skills: string[];
  metrics?: Metric[];
  liveUrl?: string;
  /** TODO: set when a public repository exists. Never fabricate. */
  repoUrl?: string;
  flagship?: boolean;
  featured?: boolean;
  /** True when the underlying work is employer-internal and the case study is anonymized. */
  confidential?: boolean;
}

/* ---------- Case study blocks ---------- */

export interface ParagraphBlock {
  type: "p";
  text: string;
}

export interface ListBlock {
  type: "list";
  ordered?: boolean;
  items: string[];
}

export interface CodeBlock {
  type: "code";
  language: string;
  /** Short label shown in the block header, e.g. "Business-rule matching (illustrative)". */
  label?: string;
  code: string;
  /** Marks the snippet as synthetic/illustrative rather than production code. */
  synthetic?: boolean;
}

export interface CalloutBlock {
  type: "callout";
  tone: "note" | "confidential" | "limitation";
  title?: string;
  text: string;
}

export interface TableBlock {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
  /** Marks table contents as synthetic/illustrative data. */
  synthetic?: boolean;
}

export interface DiagramBlock {
  type: "diagram";
  /** Key into the diagram registry in components/diagrams. */
  diagram:
    | "equity-calculator-flow"
    | "pslo-pipeline"
    | "certificate-pipeline"
    | "datacenter-tracker-pipeline";
  caption: string;
}

export interface StatsBlock {
  type: "stats";
  items: Metric[];
}

export type Block =
  | ParagraphBlock
  | ListBlock
  | CodeBlock
  | CalloutBlock
  | TableBlock
  | DiagramBlock
  | StatsBlock;

export interface CaseStudySection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface CaseStudy {
  /** Must match the slug of a project in content/projects.ts. */
  slug: string;
  /** Longer subtitle used on the case-study page header. */
  subtitle: string;
  sections: CaseStudySection[];
}

/* ---------- Skills & experience ---------- */

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  domain: string;
  bullets: string[];
}
