import type { Service } from "@/types";

type ServiceListProps = {
  services: readonly Service[];
};

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid gap-4">
      {services.map((service) => (
        <article
          key={service.slug}
          id={service.slug}
          className="scroll-mt-32 border border-border bg-card p-6 sm:p-8"
        >
          <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {service.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {service.summary}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7">{service.description}</p>
        </article>
      ))}
    </div>
  );
}
