import { surfaceCardClass } from "@/components/common/styles";
import { mapsEmbedUrl, mapsUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function StudioAddress({ className }: { className?: string }) {
  return (
    <section className={cn(surfaceCardClass, "overflow-hidden", className)} aria-labelledby="studio-map">
      <div className="p-6 sm:p-8">
        <p className="font-nav text-xs font-medium tracking-[0.16em] text-charcoal uppercase sm:tracking-[0.22em]">
          {siteConfig.address.locality}
        </p>
        <h2 id="studio-map" className="mt-3 font-heading text-3xl text-balance text-charcoal sm:text-4xl">
          Where the rooms begin.
        </h2>
        <p className="mt-3 text-base leading-7">
          {siteConfig.name}. Open the map to find the studio.
        </p>
      </div>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open 56, Metcalfe Street, Kolkata in Google Maps"
        className="block"
      >
        <iframe
          title="Map of Scanner Interiors at 56, Metcalfe Street, Kolkata"
          src={mapsEmbedUrl}
          className="pointer-events-none aspect-[4/3] w-full border-0 sm:aspect-[16/10] lg:min-h-[24rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
        />
      </a>
    </section>
  );
}
