import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";

export default function AdminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio desk"
        title="For the studio only."
        description="Project publishing and enquiries will be managed from this desk. It is not part of the public site."
      />
      <section>
        <Container className="py-16 sm:py-20">
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            No studio tools are connected yet. Published projects still come
            from the project catalogue, and enquiries are not stored.
          </p>
        </Container>
      </section>
    </>
  );
}
