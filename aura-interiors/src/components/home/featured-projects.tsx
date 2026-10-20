import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { focusRing } from "@/components/common/styles";
import { getFeaturedProjects } from "@/features/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <SectionWrapper id="projects" bordered tone="white">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="The rooms below, and the photographs, are demonstration material. They are not completed commissions."
        />
      </AnimatedSection>
      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        {projects.map((project, index) => {
          const lead = index === 0;

          return (
            <li key={project.slug} className={cn(lead && "md:row-span-2")}>
              <Link
                href={`/portfolio/${project.slug}`}
                className={cn(
                  "group relative flex h-full min-h-72 overflow-hidden rounded-lg shadow-soft",
                  lead ? "md:min-h-[40rem]" : "md:min-h-0",
                  focusRing,
                )}
              >
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt=""
                    fill
                    sizes={lead ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                ) : (
                  <div className="absolute inset-0 bg-sand" />
                )}
                <div className="relative mt-auto w-full bg-charcoal px-5 py-4 text-ivory">
                  <p className="font-nav text-xs tracking-[0.16em] uppercase">{project.location}</p>
                  <h3 className="mt-1 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
