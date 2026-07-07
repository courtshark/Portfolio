import { describe, expect, it } from "vitest";
import {
  EMPTY_FILTER,
  filterProjects,
  setRole,
  toggleCategory,
  type ProjectFilter,
} from "@/lib/filtering";
import type { Project } from "@/lib/types";

const make = (slug: string, categories: Project["categories"], roles: Project["roles"]): Project => ({
  slug,
  title: slug,
  tagline: "",
  summary: "",
  context: "",
  categories,
  roles,
  skills: [],
});

const projects: Project[] = [
  make("a", ["Analytics", "BI"], ["Data Analyst"]),
  make("b", ["Automation"], ["Business Process Automation", "Data Analyst"]),
  make("c", ["Data Science"], ["Data Scientist"]),
];

describe("filterProjects", () => {
  it("returns all projects for an empty filter", () => {
    expect(filterProjects(projects, EMPTY_FILTER)).toHaveLength(3);
  });

  it("filters by a single category", () => {
    const result = filterProjects(projects, { categories: ["Automation"], role: null });
    expect(result.map((p) => p.slug)).toEqual(["b"]);
  });

  it("ORs multiple categories", () => {
    const result = filterProjects(projects, {
      categories: ["Automation", "Data Science"],
      role: null,
    });
    expect(result.map((p) => p.slug)).toEqual(["b", "c"]);
  });

  it("filters by role", () => {
    const result = filterProjects(projects, { categories: [], role: "Data Analyst" });
    expect(result.map((p) => p.slug)).toEqual(["a", "b"]);
  });

  it("ANDs role with categories", () => {
    const result = filterProjects(projects, {
      categories: ["Analytics", "Automation"],
      role: "Business Process Automation",
    });
    expect(result.map((p) => p.slug)).toEqual(["b"]);
  });

  it("returns empty when nothing matches", () => {
    const result = filterProjects(projects, { categories: ["AI"], role: null });
    expect(result).toHaveLength(0);
  });
});

describe("toggleCategory", () => {
  it("adds an inactive category", () => {
    const next = toggleCategory(EMPTY_FILTER, "BI");
    expect(next.categories).toEqual(["BI"]);
  });

  it("removes an active category", () => {
    const withBI = toggleCategory(EMPTY_FILTER, "BI");
    expect(toggleCategory(withBI, "BI").categories).toEqual([]);
  });

  it("does not mutate the input filter", () => {
    const original: ProjectFilter = { categories: [], role: null };
    toggleCategory(original, "BI");
    expect(original.categories).toEqual([]);
  });
});

describe("setRole", () => {
  it("sets and clears the role", () => {
    const withRole = setRole(EMPTY_FILTER, "Data Scientist");
    expect(withRole.role).toBe("Data Scientist");
    expect(setRole(withRole, null).role).toBeNull();
  });
});
