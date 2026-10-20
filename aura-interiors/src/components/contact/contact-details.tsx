import { siteConfig } from "@/config/site";

export function ContactDetails() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
      <div>
        <h2 className="font-heading text-3xl font-medium tracking-tight">
          Write to the studio
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
          Include the location, the timeline, and what you want the room to
          feel like. Commissions are taken by appointment.
        </p>
      </div>
      <dl className="space-y-6 text-base">
        <div>
          <dt className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Email
          </dt>
          <dd className="mt-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Studio
          </dt>
          <dd className="mt-2">{siteConfig.name}</dd>
        </div>
      </dl>
    </div>
  );
}
