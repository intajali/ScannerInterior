import { SectionHeading } from "@/components/common/section-heading";
import { surfaceCardClass } from "@/components/common/styles";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ContactDetails() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <SectionHeading
        as="h2"
        title="Write to the studio"
        description="Include the location, the timeline, and what you want the room to feel like. Commissions are taken by appointment."
      />
      <dl className={cn(surfaceCardClass, "space-y-6 p-6 text-base sm:p-8")}>
        <div>
          <dt className="font-nav text-xs font-medium tracking-[0.18em] uppercase">
            Email
          </dt>
          <dd className="mt-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-sage underline-offset-4 hover:decoration-bronze"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-nav text-xs font-medium tracking-[0.18em] uppercase">
            Studio
          </dt>
          <dd className="mt-2">{siteConfig.name}</dd>
        </div>
      </dl>
    </div>
  );
}
