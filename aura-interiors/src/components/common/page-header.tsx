import { Container } from "@/components/common/container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-border">
      <Container className="py-16 sm:py-24">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </Container>
    </header>
  );
}
