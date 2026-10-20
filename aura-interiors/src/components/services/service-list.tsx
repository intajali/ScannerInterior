import { ServiceCard } from "@/components/common/service-card";
import type { Service } from "@/types";

type ServiceListProps = {
  services: readonly Service[];
};

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          id={service.slug}
          as="h2"
          title={service.title}
          summary={service.summary}
          description={service.description}
        />
      ))}
    </div>
  );
}
