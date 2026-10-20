import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/common/container";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import { getProjectBySlug, getPublishedProjects, getRelatedProjects } from "@/features/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): { slug: string }[] {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

function ProjectFallback() {
  return (
    <Container className="py-16 sm:py-24">
      <p className="text-sm text-muted-foreground">Loading project.</p>
    </Container>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} related={getRelatedProjects(slug)} />;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}
