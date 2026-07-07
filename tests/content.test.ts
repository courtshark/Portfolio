import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { impactStats } from "@/content/site";
import { diagramRegistry } from "@/components/diagrams";

/**
 * Content integrity checks. These guard the editing workflow:
 * adding or renaming content should fail loudly here, not 404 in production.
 */

describe("projects content", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has exactly one flagship project", () => {
    expect(projects.filter((p) => p.flagship)).toHaveLength(1);
  });

  it("gives every project at least one category, role, and skill", () => {
    for (const p of projects) {
      expect(p.categories.length, p.slug).toBeGreaterThan(0);
      expect(p.roles.length, p.slug).toBeGreaterThan(0);
      expect(p.skills.length, p.slug).toBeGreaterThan(0);
    }
  });

  it("never fabricates repository URLs", () => {
    for (const p of projects) {
      if (p.repoUrl) {
        expect(p.repoUrl).toMatch(/^https:\/\//);
      }
    }
  });
});

describe("case studies content", () => {
  it("provides a case study for every project", () => {
    const projectSlugs = new Set(projects.map((p) => p.slug));
    const caseStudySlugs = new Set(caseStudies.map((c) => c.slug));
    for (const slug of projectSlugs) {
      expect(caseStudySlugs.has(slug), `missing case study for ${slug}`).toBe(true);
    }
    for (const slug of caseStudySlugs) {
      expect(projectSlugs.has(slug), `case study ${slug} has no project`).toBe(true);
    }
  });

  it("has unique section ids within each case study", () => {
    for (const cs of caseStudies) {
      const ids = cs.sections.map((s) => s.id);
      expect(new Set(ids).size, cs.slug).toBe(ids.length);
    }
  });

  it("only references diagrams that exist in the registry", () => {
    for (const cs of caseStudies) {
      for (const section of cs.sections) {
        for (const block of section.blocks) {
          if (block.type === "diagram") {
            expect(diagramRegistry[block.diagram], `${cs.slug}: ${block.diagram}`).toBeDefined();
          }
        }
      }
    }
  });

  it("marks confidential projects' case studies with a confidentiality callout", () => {
    const confidentialSlugs = projects.filter((p) => p.confidential).map((p) => p.slug);
    for (const slug of confidentialSlugs) {
      const cs = caseStudies.find((c) => c.slug === slug)!;
      const hasCallout = cs.sections.some((s) =>
        s.blocks.some((b) => b.type === "callout" && b.tone === "confidential")
      );
      // Dashboards and analyses describe patterns only; pipelines with code/diagrams
      // must carry an explicit anonymization callout.
      const hasSyntheticContent = cs.sections.some((s) =>
        s.blocks.some((b) => (b.type === "code" || b.type === "table") && b.synthetic)
      );
      if (hasSyntheticContent) {
        expect(hasCallout, `${slug} shows synthetic content without a confidentiality callout`).toBe(
          true
        );
      }
    }
  });

  it("labels all code and table examples in confidential case studies as synthetic", () => {
    const confidentialSlugs = new Set(projects.filter((p) => p.confidential).map((p) => p.slug));
    for (const cs of caseStudies) {
      if (!confidentialSlugs.has(cs.slug)) continue;
      for (const section of cs.sections) {
        for (const block of section.blocks) {
          if (block.type === "code" || block.type === "table") {
            expect(block.synthetic, `${cs.slug}/${section.id} has unlabeled example`).toBe(true);
          }
        }
      }
    }
  });
});

describe("impact stats", () => {
  it("only contains the approved, verifiable figures", () => {
    const approved = ["300+", "~2 months", "~1,600", "~70", "0.719", "0.679"];
    for (const stat of impactStats) {
      expect(approved, `unapproved metric: ${stat.value}`).toContain(stat.value);
    }
  });
});
