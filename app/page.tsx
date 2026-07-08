import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ProjectCard } from "@/components/project/ProjectCard";
import { EquityCalculatorFlow } from "@/components/diagrams/EquityCalculatorFlow";
import { site, domains, whatIDo, impactStats } from "@/content/site";
import { projects, flagshipProject } from "@/content/projects";

const featuredProjects = projects.filter((p) => p.featured && !p.flagship);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
            {site.name} · {site.role}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl"
          >
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View My Work</ButtonLink>
            <ButtonLink href={site.flagshipUrl} variant="secondary" external>
              Explore the Equity Gap Calculator
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Flagship */}
      <section aria-labelledby="flagship-heading" className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">
                Flagship project · Live product
              </p>
              <h2
                id="flagship-heading"
                className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl"
              >
                {flagshipProject.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                {flagshipProject.tagline} Built on the California Community Colleges Chancellor&rsquo;s
                Office PPG-1 methodology, with statistical thresholds, insufficient-data handling, and
                gap-closing estimates included, not skipped.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key capabilities">
                {["Live Product", "Statistical Methodology", "Data Import", "Interactive Analysis"].map(
                  (item) => (
                    <li key={item}>
                      <Tag tone="accent">{item}</Tag>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.flagshipUrl} external>
                  Launch Live Application
                </ButtonLink>
                <ButtonLink href={`/projects/${flagshipProject.slug}`} variant="secondary">
                  View Case Study
                </ButtonLink>
              </div>
            </div>
            <figure className="rounded-xl border border-border bg-background p-4 sm:p-6">
              <EquityCalculatorFlow />
              <figcaption className="mt-3 text-center text-xs text-faint">
                From messy institutional exports to defensible equity findings.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Selected impact */}
      <section aria-labelledby="impact-heading" className="border-b border-border">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            id="impact-heading"
            eyebrow="Selected impact"
            title="Real numbers from real work"
            lead="No vanity metrics. Each of these is a specific, verifiable outcome from a project on this site."
          />
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-surface p-5">
                <dd className="font-serif text-3xl font-medium tracking-tight text-accent-strong">
                  {stat.value}
                </dd>
                <dt className="mt-1.5 text-sm leading-snug text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* What I do */}
      <section aria-labelledby="what-heading" className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            id="what-heading"
            eyebrow="What I do"
            title="Four verbs, one job"
            lead="The through-line across ten years and five industries: find the manual, messy, or ambiguous thing and turn it into a system."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatIDo.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                  {item.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected projects */}
      <section aria-labelledby="projects-heading" className="border-b border-border">
        <Container className="py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              id="projects-heading"
              eyebrow="Selected projects"
              title="Case studies, not screenshots"
            />
            <Link
              href="/projects"
              className="text-sm font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
            >
              All projects →
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Professional journey */}
      <section aria-labelledby="journey-heading" className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            id="journey-heading"
            eyebrow="Professional journey"
            title="Five domains, one common thread"
            lead="Cross-domain range is the point, not a detour: every one of these environments involved high-stakes data, messy systems, and stakeholders who needed translation."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {domains.map((domain, i) => (
              <li key={domain.title} className="rounded-xl border border-border bg-background p-5">
                <p className="font-mono text-xs text-faint">0{i + 1}</p>
                <h3 className="mt-2 text-sm font-semibold text-ink">{domain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{domain.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Contact CTA */}
      <section aria-labelledby="contact-heading">
        <Container className="py-16 sm:py-24">
          <div className="rounded-2xl border border-accent-border bg-accent-soft px-6 py-12 text-center sm:px-12">
            <h2
              id="contact-heading"
              className="font-serif text-3xl font-medium tracking-tight text-ink"
            >
              Have a messy process or an unanswered data question?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              That&rsquo;s my favorite kind of email. I&rsquo;m open to conversations about analytics,
              automation, and data product roles.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                View resume
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
