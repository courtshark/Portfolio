import Link from "next/link";
import type { Project } from "@/lib/types";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-[0_2px_16px_rgba(28,27,26,0.07)]">
      <div className="flex flex-wrap gap-1.5">
        {project.categories.map((c) => (
          <Tag key={c} tone="accent">
            {c}
          </Tag>
        ))}
      </div>

      <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-ink">
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 group-hover:text-accent-strong"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-faint">{project.context}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

      {project.metrics && project.metrics.length > 0 && (
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
          {project.metrics.map((m) => (
            <div key={`${m.value}-${m.label}`}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="font-serif text-lg font-medium text-accent-strong">{m.value}</span>{" "}
                <span className="text-xs text-muted">
                  {m.label}
                  {m.note ? ` (${m.note})` : ""}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      <p className="mt-4 text-sm font-medium text-accent-strong">
        Read the case study <span aria-hidden="true">→</span>
      </p>
    </article>
  );
}
