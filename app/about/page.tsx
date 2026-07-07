import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ten years across public safety data, clinical research, healthcare technology, customer success operations, and higher education analytics — one consistent job: turning messy data and manual processes into useful systems.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="The same job, five different costumes"
          lead="My career looks varied on paper — 9-1-1 databases, clinical research, healthcare technology, customer success, higher education. Underneath, it has been one job the whole time."
        />

        <div className="mt-10 max-w-prose space-y-5 leading-relaxed text-ink-soft">
          <p>
            Every environment I&rsquo;ve worked in has had the same shape: important data living in
            messy systems, critical processes running on manual effort, and smart people separated
            from the answers they need by a technical gap nobody owns. My job — whatever the title
            said — has been to own that gap.
          </p>
          <p>
            It started with 9-1-1 database work, where I learned what data accuracy actually means:
            not a quality metric, but whether help arrives at the right address. Clinical research
            added the discipline of protocol — data collected, validated, and documented so that
            someone else can trust it without trusting you. Those two experiences set a standard for
            data work that has never felt optional since.
          </p>
          <p>
            At Kareo and then Tebra, I moved to the systems side of healthcare technology: leading
            data services, then running the reporting and operations layer for a customer success
            organization — Snowflake SQL, Salesforce, Gainsight, Jira Service Desk, and the
            unglamorous truth that most reporting problems are process problems wearing a costume.
            Working in a regulated, HIPAA-aware environment taught me to treat data handling as an
            ethical practice, not a compliance checkbox.
          </p>
          <p>
            Higher education is where all of it converged. At Coastline College I built retention
            models, scraped public program requirements to find students already eligible for
            certificates, and ran compliance data workflows. At Orange Coast College, as a Senior
            Research Analyst, I automate institutional processes, build dashboards leadership
            actually uses, and translate methodology into decisions. The Equity Gap Calculator — a
            live public tool implementing the state&rsquo;s disproportionate-impact methodology — is
            that whole career in miniature: statistics, product thinking, and translation, shipped.
          </p>
          <p>
            The common thread is not an industry or a stack. It&rsquo;s a habit: find the thing that
            is manual, ambiguous, or quietly broken; understand why it&rsquo;s really like that; and
            replace it with a system people can rely on. I use modern tools to do it — including AI
            coding tools, used deliberately and reviewed carefully — but the value has never been the
            tool. It&rsquo;s knowing what to build, proving it&rsquo;s right, and getting people to
            use it.
          </p>
        </div>
      </Container>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="border-t border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Grouped by capability, not by percentage bar"
            lead="What I actually work with, organized by the kind of problem it solves."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif text-lg font-medium text-ink">{group.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{group.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/projects">See the skills in use</ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              Full resume
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
