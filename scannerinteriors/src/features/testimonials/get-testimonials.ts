import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";

export function getTestimonials(): readonly Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(): readonly Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.featured);
}
