import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Courtney Youngberg about data analytics, automation, business analysis, and data product work.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Bring me the messy thing"
        lead="The process everyone hates, the spreadsheet held together with hope, the question nobody can quite answer from the data — that's the conversation I want to have."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">Email</h2>
          <p className="mt-2 text-ink">
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">
            The fastest way to reach me. I read everything.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">
            Live work
          </h2>
          <p className="mt-2 text-ink">
            <a
              href={site.flagshipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
            >
              di-calculator.com
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">
            The Equity Gap Calculator — the fastest way to see how I think about data products.
          </p>
        </div>

        {/* TODO: add LinkedIn / GitHub cards here once site.linkedin / site.github are verified. */}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          Browse the work first
        </ButtonLink>
      </div>
    </Container>
  );
}
