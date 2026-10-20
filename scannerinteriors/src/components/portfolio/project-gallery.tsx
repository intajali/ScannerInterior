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
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {images.map((image, imageIndex) => (
          <li key={image.src} className={imageIndex === 0 ? "sm:col-span-2" : undefined}>
            <button
              type="button"
              className={cn(
                "group relative block w-full overflow-hidden rounded-lg shadow-soft",
                imageIndex === 0 ? "aspect-[16/10]" : "aspect-[4/3]",
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
                sizes={imageIndex === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                className="image-zoom object-cover"
              />
            </button>
          </li>
        ))}
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
