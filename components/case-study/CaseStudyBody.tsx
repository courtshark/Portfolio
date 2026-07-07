import type { CaseStudy } from "@/lib/types";
import { BlockRenderer } from "./BlockRenderer";

export function CaseStudyBody({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
      {/* On-page navigation */}
      <nav aria-label="Case study sections" className="hidden lg:block">
        <div className="sticky top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
            On this page
          </p>
          <ul className="mt-3 space-y-1.5 border-l border-border">
            {caseStudy.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px block border-l border-transparent py-0.5 pl-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent-strong"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="min-w-0">
        {caseStudy.sections.map((section) => (
          <section
            key={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="mb-12 scroll-mt-24"
            id={section.id}
          >
            <h2
              id={`${section.id}-heading`}
              className="font-serif text-2xl font-medium tracking-tight text-ink"
            >
              {section.title}
            </h2>
            <div className="mt-4 space-y-5">
              {section.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
