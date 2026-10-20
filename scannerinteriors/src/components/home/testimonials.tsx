"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { swapTransition } from "@/components/common/motion";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { focusRing } from "@/components/common/styles";
import { demonstrationTestimonials } from "@/data/home";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = demonstrationTestimonials.length;
  const testimonial = demonstrationTestimonials[index];

  function show(next: number) {
    setIndex((next + total) % total);
  }

  return (
    <SectionWrapper id="testimonials" bordered tone="white">
      <SectionHeading
        eyebrow="Testimonials"
        title="What a finished room can feel like."
        description="These responses are sample text for the website demonstration. They are not client reviews."
      />
      <div
        className={cn("mt-10 max-w-3xl rounded-lg outline-none", focusRing)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Demonstration testimonials"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            show(index + 1);
          }
          if (event.key === "ArrowLeft") {
            show(index - 1);
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.blockquote
            key={testimonial.id}
            data-motion=""
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={swapTransition}
            aria-live="polite"
            className="min-h-40"
          >
            <p className="font-heading text-3xl leading-snug font-medium tracking-tight sm:text-4xl">
              {testimonial.quote}
            </p>
            <footer className="mt-6 text-sm leading-6">
              <cite className="font-nav tracking-wide not-italic">{testimonial.author}</cite>
              <span> · Demonstration</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-lg border border-sage bg-white text-charcoal transition-colors duration-300 hover:border-bronze hover:text-bronze",
              focusRing,
            )}
            aria-label="Previous testimonial"
            onClick={() => show(index - 1)}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-lg border border-sage bg-white text-charcoal transition-colors duration-300 hover:border-bronze hover:text-bronze",
              focusRing,
            )}
            aria-label="Next testimonial"
            onClick={() => show(index + 1)}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
          <div className="ml-auto flex gap-2">
            {demonstrationTestimonials.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "size-2.5 rounded-full",
                  itemIndex === index ? "bg-bronze" : "bg-sage",
                  focusRing,
                )}
                aria-label={`Show testimonial ${itemIndex + 1} of ${total}`}
                aria-current={itemIndex === index ? "true" : undefined}
                onClick={() => show(itemIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
