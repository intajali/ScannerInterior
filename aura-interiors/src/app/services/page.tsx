import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
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
      <SectionWrapper>
        <ServiceList services={services} />
      </SectionWrapper>
    </>
  );
}
