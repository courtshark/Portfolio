import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { CaseStudyBody } from "@/components/case-study/CaseStudyBody";
import { projects, getProject } from "@/content/projects";
import { getCaseStudy } from "@/content/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);
  if (!project || !caseStudy) notFound();

  return (
    <>
      <header className="border-b border-border bg-surface">
        <Container className="py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-faint">
            <Link href="/projects" className="hover:text-accent-strong">
              Projects
            </Link>{" "}
            <span aria-hidden="true">/</span> <span className="text-muted">{project.title}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{caseStudy.subtitle}</p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                Context
              </dt>
              <dd className="mt-1 text-ink-soft">{project.context}</dd>
            </div>
            {project.period && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  Period
                </dt>
                <dd className="mt-1 text-ink-soft">{project.period}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                Categories
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {project.categories.map((c) => (
                  <Tag key={c} tone="accent">
                    {c}
                  </Tag>
                ))}
              </dd>
            </div>
          </dl>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} external>
                  Launch Live Application
                </ButtonLink>
              )}
              {project.repoUrl && (
                <ButtonLink href={project.repoUrl} variant="secondary" external>
                  View Source
                </ButtonLink>
              )}
            </div>
          )}
        </Container>
      </header>

      <Container className="py-14 sm:py-16">
        <CaseStudyBody caseStudy={caseStudy} />

        <footer className="mt-4 border-t border-border pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
            Skills in this project
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/projects"
              className="text-sm font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
            >
              ← All projects
            </Link>
          </div>
        </footer>
      </Container>
    </>
  );
}
