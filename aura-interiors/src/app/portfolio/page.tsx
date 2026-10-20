import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
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
      <SectionWrapper>
        <ProjectGrid projects={projects} />
      </SectionWrapper>
    </>
  );
}
