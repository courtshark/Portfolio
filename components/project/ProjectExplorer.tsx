"use client";

import { useMemo, useState } from "react";
import type { Category, Project, TargetRole } from "@/lib/types";
import { CATEGORIES, TARGET_ROLES } from "@/lib/types";
import { EMPTY_FILTER, filterProjects, setRole, toggleCategory } from "@/lib/filtering";
import { cx } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState(EMPTY_FILTER);
  const visible = useMemo(() => filterProjects(projects, filter), [projects, filter]);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
            Filter by category
          </legend>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = filter.categories.includes(category);
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter((f) => toggleCategory(f, category as Category))}
                  className={cx(
                    "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-border-strong bg-surface text-ink-soft hover:border-accent hover:text-accent-strong"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="role-filter"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-faint"
          >
            Viewing as
          </label>
          <select
            id="role-filter"
            value={filter.role ?? ""}
            onChange={(e) =>
              setFilter((f) => setRole(f, (e.target.value || null) as TargetRole | null))
            }
            className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm text-ink"
          >
            <option value="">All roles</option>
            {TARGET_ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {(filter.categories.length > 0 || filter.role) && (
            <button
              type="button"
              onClick={() => setFilter(EMPTY_FILTER)}
              className="text-sm text-accent-strong underline underline-offset-4 hover:text-accent"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-faint" role="status">
        Showing {visible.length} of {projects.length} projects
      </p>

      {visible.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-xl border border-border bg-surface p-8 text-center text-muted">
          No projects match this combination — try clearing a filter.
        </p>
      )}
    </div>
  );
}
