import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";

export default function AdminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio desk"
        title="For the studio only."
        description="Project publishing and enquiries will be managed from this desk. It is not part of the public site."
      />
      <SectionWrapper>
        <p className="max-w-xl text-base leading-7">
          No studio tools are connected yet. Published projects still come
          from the project catalogue, and enquiries are not stored.
        </p>
      </SectionWrapper>
    </>
  );
}
