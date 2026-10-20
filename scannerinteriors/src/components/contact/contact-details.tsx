import { surfaceCardClass } from "@/components/common/styles";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ContactDetails() {
  return (
    <aside className={cn(surfaceCardClass, "p-6 sm:p-8")}>
      <h2 className="font-heading text-3xl text-charcoal">Studio</h2>
      <dl className="mt-6 space-y-6 text-base">
        <div>
          <dt className="font-nav text-xs font-medium tracking-[0.18em] uppercase">Email</dt>
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
          <dt className="font-nav text-xs font-medium tracking-[0.18em] uppercase">Practice</dt>
          <dd className="mt-2">{siteConfig.name}</dd>
        </div>
        <div>
          <dt className="font-nav text-xs font-medium tracking-[0.18em] uppercase">Visits</dt>
          <dd className="mt-2">{siteConfig.address}</dd>
        </div>
      </dl>
      <WhatsAppButton className="mt-8" />
    </aside>
  );
}
