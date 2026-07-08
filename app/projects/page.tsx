import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectExplorer } from "@/components/project/ProjectExplorer";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in data analytics, business process automation, data products, and analytics engineering, from a live equity analysis application to institutional automation pipelines.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Projects"
        title="Work, written up properly"
        lead="Each project is a case study: the problem, the constraints, the approach, what shipped, and what I'd improve. Filter by category, or view the set through the lens of a specific role."
      />
      <div className="mt-12">
        <ProjectExplorer projects={projects} />
      </div>
    </Container>
  );
}
