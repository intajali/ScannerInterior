import type { Testimonial } from "@/types";

type TestimonialListProps = {
  testimonials: readonly Testimonial[];
};

export function TestimonialList({ testimonials }: TestimonialListProps) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <li key={testimonial.id} className="border border-border bg-card p-6 sm:p-8">
          <blockquote className="font-heading text-2xl leading-snug tracking-tight">
            {testimonial.quote}
          </blockquote>
          <footer className="mt-4 text-sm text-muted-foreground">
            <cite className="not-italic text-foreground">{testimonial.author}</cite>
            {testimonial.role ? <span> · {testimonial.role}</span> : null}
          </footer>
        </li>
      ))}
    </ul>
  );
}
