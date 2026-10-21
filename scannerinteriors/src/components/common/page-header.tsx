import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-sage bg-ivory">
      <Container className="py-12 sm:py-16 lg:py-24">
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Container>
    </header>
  );
}
