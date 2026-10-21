"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { swapTransition } from "@/components/common/motion";
import { focusRing } from "@/components/common/styles";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types";

type ProjectLightboxProps = {
  title: string;
  images: readonly ProjectImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ProjectLightbox({
  title,
  images,
  index,
  onClose,
  onIndexChange,
}: ProjectLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];
  const total = images.length;

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % total);
      }
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + total) % total);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, onClose, onIndexChange, total]);

  if (!image) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col bg-charcoal/92 p-4 pt-[max(1rem,env(safe-area-inset-top))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photographs`}
      data-motion=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={swapTransition}
      onClick={onClose}
    >
      <div
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex shrink-0 items-start justify-between gap-3 text-ivory">
          <p className="min-w-0 flex-1 pt-3 font-nav text-xs tracking-[0.14em] uppercase sm:tracking-[0.16em]">
            {title}
            {total > 1 ? ` · ${index + 1} of ${total}` : null}
          </p>
          <button
            ref={closeRef}
            type="button"
            className={cn(
              "inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-lg border border-ivory/40 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-charcoal",
              focusRing,
            )}
            aria-label="Close photograph"
            onClick={onClose}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg bg-charcoal">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={image.src}
              className="absolute inset-0"
              data-motion=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={swapTransition}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {total > 1 ? (
          <div className="mt-3 flex shrink-0 justify-end gap-2">
            <button
              type="button"
              className={cn(
                "inline-flex size-11 touch-manipulation items-center justify-center rounded-lg border border-ivory/40 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-charcoal",
              focusRing,
            )}
            aria-label="Previous photograph"
              onClick={() => onIndexChange((index - 1 + total) % total)}
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 touch-manipulation items-center justify-center rounded-lg border border-ivory/40 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-charcoal",
              focusRing,
            )}
            aria-label="Next photograph"
              onClick={() => onIndexChange((index + 1) % total)}
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}
        <p className="mt-3 shrink-0 text-sm leading-6 text-ivory">{image.alt}</p>
      </div>
    </motion.div>
  );
}
