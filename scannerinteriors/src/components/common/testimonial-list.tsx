import type { Testimonial } from "@/types";

type TestimonialListProps = {
  testimonials: readonly Testimonial[];
};

export function TestimonialList({ testimonials }: TestimonialListProps) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-4 *:min-w-0 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <li key={testimonial.id} className="rounded-lg border border-sage bg-white p-6 shadow-soft sm:p-8">
          <blockquote className="aura-quote font-heading font-medium tracking-tight text-balance">
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
