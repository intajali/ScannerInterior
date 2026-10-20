import { PrincipleList } from "@/components/common/principle-list";
import { Reveal } from "@/components/common/reveal";
import { principles } from "@/data/home";
import { siteConfig } from "@/config/site";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-32 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.22em] text-brand uppercase">
            Approach
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            A quieter kind of luxury.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            {siteConfig.name} works with homeowners and hospitality teams who
            want rooms with restraint, warmth, and a clear point of view.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <PrincipleList principles={principles} />
        </div>
      </div>
    </section>
  );
}
