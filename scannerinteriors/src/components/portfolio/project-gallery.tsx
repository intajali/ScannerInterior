"use client";

import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ProjectLightbox } from "@/components/portfolio/project-lightbox";
import { focusRing } from "@/components/common/styles";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types";

type ProjectGalleryProps = {
  title: string;
  images: readonly ProjectImage[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <ul
        className={cn(
          "mt-10 grid grid-cols-1 gap-4 *:min-w-0",
          images.length === 2 && "md:grid-cols-2",
          images.length > 2 && "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {images.map((image, imageIndex) => {
          const lead = images.length > 2 && imageIndex === 0;

          return (
          <li key={image.src} className={lead ? "md:col-span-2 lg:col-span-3" : undefined}>
            <button
              type="button"
              className={cn(
                "group relative block w-full touch-manipulation overflow-hidden rounded-lg shadow-soft",
                lead ? "aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/3]",
                focusRing,
              )}
              aria-label={`Open photograph ${imageIndex + 1} of ${title}`}
              onClick={() => setIndex(imageIndex)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes={
                  lead
                    ? "(min-width: 1024px) 72rem, 100vw"
                    : "(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 100vw"
                }
                className="image-zoom object-cover"
              />
            </button>
          </li>
          );
        })}
      </ul>
      <AnimatePresence>
        {index !== null ? (
          <ProjectLightbox
            key="project-gallery"
            title={title}
            images={images}
            index={index}
            onClose={() => setIndex(null)}
            onIndexChange={setIndex}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
