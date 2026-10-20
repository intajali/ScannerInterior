import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ServiceList } from "@/components/services/service-list";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, hospitality, and workplace interiors by Scanner Interiors Pvt Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Three kinds of rooms."
        description="Homes, hospitality, and workplaces, each planned around use, light, and materials that can be lived with."
      />
      <section>
        <Container className="py-16 sm:py-20">
          <ServiceList services={services} />
        </Container>
      </section>
    </>
  );
}
