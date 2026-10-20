"use client";

import { Expand } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectLightbox } from "@/components/portfolio/project-lightbox";
import { focusRing } from "@/components/common/styles";
import { cn } from "@/lib/utils";
import { projectCategories, type PortfolioFilter, type Project, type ProjectFrame } from "@/types";

type PortfolioExplorerProps = {
  projects: readonly Project[];
};

const filters: { id: PortfolioFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  ...projectCategories.map((category) => ({ id: category, label: category })),
];

const frameClass: Record<ProjectFrame, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export function PortfolioExplorer({ projects }: PortfolioExplorerProps) {
  const [filter, setFilter] = useState<PortfolioFilter>("all");
  const [open, setOpen] = useState<{ slug: string; index: number } | null>(null);
  const reduceMotion = useReducedMotion();
  const visible =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);
  const openProject = open ? projects.find((project) => project.slug === open.slug) : undefined;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Project categories">
        {filters.map((item) => {
          const selected = filter === item.id;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={cn(
                "inline-flex h-11 items-center rounded-lg border px-4 font-nav text-sm tracking-wide transition-colors duration-300",
                focusRing,
                selected
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-sage bg-white text-charcoal hover:border-bronze",
              )}
              onClick={() => {
                setFilter(item.id);
                setOpen(null);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filter}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {visible.length === 0 ? (
            <p className="mt-10 max-w-xl text-base leading-7">
              No demonstration projects in this category yet.
            </p>
          ) : (
            <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {visible.map((project) => (
                <article key={project.slug} className="mb-4 break-inside-avoid">
                  <div className="overflow-hidden rounded-lg border border-sage bg-white shadow-soft transition-colors duration-300 hover:border-bronze">
                    <div className="group relative">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className={cn("block rounded-t-lg", focusRing)}
                      >
                        <span className="sr-only">View {project.title}</span>
                        <div className={cn("relative bg-sand", frameClass[project.frame])}>
                          {project.coverImage ? (
                            <Image
                              src={project.coverImage}
                              alt=""
                              fill
                              loading="lazy"
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                            />
                          ) : null}
                        </div>
                      </Link>
                      <button
                        type="button"
                        className={cn(
                          "absolute right-3 bottom-3 inline-flex size-11 items-center justify-center rounded-lg border border-sage bg-ivory/95 text-charcoal shadow-soft transition-colors duration-300 hover:border-bronze hover:text-bronze",
                          focusRing,
                        )}
                        aria-label={`Open photographs of ${project.title}`}
                        onClick={() => setOpen({ slug: project.slug, index: 0 })}
                      >
                        <Expand className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className={cn("block rounded-b-lg p-5", focusRing)}
                    >
                      <p className="font-nav text-xs font-medium tracking-[0.16em] uppercase">
                        {project.category}
                      </p>
                      <h2 className="mt-2 font-heading text-2xl font-medium tracking-tight">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6">{project.location}</p>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      {open && openProject && openProject.images.length > 0 ? (
        <ProjectLightbox
          title={openProject.title}
          images={openProject.images}
          index={open.index}
          onClose={() => setOpen(null)}
          onIndexChange={(index) => setOpen({ slug: openProject.slug, index })}
        />
      ) : null}
    </div>
  );
}
