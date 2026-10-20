import Link from "next/link";
import { Reveal } from "@/components/common/reveal";
import { services } from "@/data/services";

export function Disciplines() {
  return (
    <section id="disciplines" className="scroll-mt-32">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Disciplines
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            Spaces for living, hosting, and work.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug} className="h-full">
              <article className="flex h-full flex-col border border-border bg-card p-6 sm:p-8">
                <h3 className="font-heading text-3xl font-medium tracking-tight">
                  <Link
                    href={`/services#${service.slug}`}
                    className="hover:text-brand"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {service.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
