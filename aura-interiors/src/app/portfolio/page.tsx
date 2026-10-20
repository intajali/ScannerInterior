import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { getPublishedProjects } from "@/features/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected residential, hospitality, and workplace projects by Scanner Interiors Pvt Ltd.",
};

export default function PortfolioPage() {
  const projects = getPublishedProjects();

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work."
        description="A short set of rooms and buildings, published as each commission is ready to be shown."
      />
      <section>
        <Container className="py-16 sm:py-20">
          <ProjectGrid projects={projects} />
        </Container>
      </section>
    </>
  );
}
