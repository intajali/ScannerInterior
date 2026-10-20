import { siteConfig } from "@/config/site";

export function ConsultationBand() {
  return (
    <section id="consultation" className="scroll-mt-32 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            Tell us about the space.
          </h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/80">
            We take a limited number of commissions each season. Write with
            the location, the timeline, and what you want the room to feel
            like.
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex h-11 items-center justify-center border border-primary-foreground/30 px-5 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
