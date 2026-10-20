import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { PortfolioExplorer } from "@/components/portfolio/portfolio-explorer";
import { getPublishedProjects } from "@/features/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Demonstration projects and photographs for Scanner Interiors Pvt Ltd.",
};

export default function PortfolioPage() {
  const projects = getPublishedProjects();

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Our Selected Works"
        description="Demonstration projects and photographs, shown until real commissions are ready to be published."
      />
      <SectionWrapper>
        <PortfolioExplorer projects={projects} />
      </SectionWrapper>
    </>
  );
}
