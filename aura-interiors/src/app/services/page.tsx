import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceList } from "@/components/services/service-list";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial interiors, renovation, and styling by Scanner Interiors Pvt Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Design, renovation, and styling."
        description="Residential and commercial interiors, renovation, and styling, each planned around use, light, and materials."
      />
      <SectionWrapper>
        <ServiceList services={services} />
      </SectionWrapper>
    </>
  );
}
