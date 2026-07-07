import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { experience, education } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Courtney Youngberg — Senior Research Analyst. Ten years of experience across higher education analytics, healthcare technology, customer success operations, clinical research, and public safety data.",
};

const RESUME_PDF_AVAILABLE = true;
const RESUME_PDF_PATH = "/resume/courtney-youngberg-resume.pdf";

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          as="h1"
          eyebrow="Resume"
          title="Experience"
          lead="Roughly ten years across five data-heavy domains. Project write-ups live in the case studies; this is the timeline."
        />
        {RESUME_PDF_AVAILABLE && (
          <a
            href={RESUME_PDF_PATH}
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent-strong"
          >
            Download PDF
          </a>
        )}
      </div>

      <ol className="mt-12 space-y-0">
        {experience.map((entry, i) => (
          <li
            key={`${entry.role}-${entry.org}`}
            className="relative border-l border-border pb-10 pl-8 last:pb-0"
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                i === 0 ? "bg-accent" : "bg-border-strong"
              }`}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h2 className="font-serif text-xl font-medium text-ink">{entry.role}</h2>
              <Tag tone="accent">{entry.domain}</Tag>
            </div>
            <p className="mt-1 text-sm text-muted">
              {entry.org}
              {entry.period && <> · {entry.period}</>}
            </p>
            <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft marker:text-accent">
              {entry.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <section aria-labelledby="education-heading" className="mt-16">
        <h2
          id="education-heading"
          className="font-serif text-2xl font-medium tracking-tight text-ink"
        >
          Education & Credentials
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {education.map((item) => (
            <li key={item.credential} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-medium text-ink">{item.credential}</p>
              <p className="mt-1 text-sm text-muted">{item.org}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-sm text-faint">
        Want the details behind any of these roles? Most of them have a{" "}
        <Link href="/projects" className="text-accent-strong underline underline-offset-4">
          case study
        </Link>
        , or{" "}
        <a href={`mailto:${site.email}`} className="text-accent-strong underline underline-offset-4">
          just ask
        </a>
        .
      </p>
    </Container>
  );
}
