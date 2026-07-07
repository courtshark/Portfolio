import type { Category, Project, TargetRole } from "./types";

export interface ProjectFilter {
  categories: Category[];
  role: TargetRole | null;
}

export const EMPTY_FILTER: ProjectFilter = { categories: [], role: null };

/**
 * Filter projects by category (OR within categories) and target role (AND with categories).
 * An empty filter returns all projects.
 */
export function filterProjects(projects: Project[], filter: ProjectFilter): Project[] {
  return projects.filter((project) => {
    const categoryMatch =
      filter.categories.length === 0 ||
      filter.categories.some((c) => project.categories.includes(c));
    const roleMatch = filter.role === null || project.roles.includes(filter.role);
    return categoryMatch && roleMatch;
  });
}

export function toggleCategory(filter: ProjectFilter, category: Category): ProjectFilter {
  const active = filter.categories.includes(category);
  return {
    ...filter,
    categories: active
      ? filter.categories.filter((c) => c !== category)
      : [...filter.categories, category],
  };
}

export function setRole(filter: ProjectFilter, role: TargetRole | null): ProjectFilter {
  return { ...filter, role };
}
