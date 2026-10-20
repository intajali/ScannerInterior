import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { ServiceShowcase } from "@/components/services/service-showcase";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial interiors, renovation, styling, materials, and space planning by Scanner Interiors Pvt Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="From the plan to the last object."
        description="Residential and commercial interiors, renovation, styling, furniture and materials, and space planning."
      />
      <ServiceShowcase services={services} />
      <ConsultationCTA />
    </>
  );
}
