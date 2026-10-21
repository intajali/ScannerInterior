export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-bronze";

const touchControl =
  "touch-manipulation max-w-full min-h-11";

export const primaryButtonClass = `inline-flex h-11 items-center justify-center rounded-lg border border-charcoal bg-charcoal px-5 font-nav text-sm font-medium tracking-wide text-white shadow-soft transition-colors duration-300 hover:bg-ivory hover:text-charcoal ${touchControl} ${focusRing}`;

export const secondaryButtonClass = `inline-flex h-11 items-center justify-center rounded-lg border border-sage bg-white px-5 font-nav text-sm font-medium tracking-wide text-charcoal transition-colors duration-300 hover:border-bronze hover:bg-sand ${touchControl} ${focusRing}`;

export const secondaryButtonInverseClass = `inline-flex h-11 items-center justify-center rounded-lg border border-ivory bg-transparent px-5 font-nav text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:bg-ivory hover:text-charcoal ${touchControl} ${focusRing}`;

export const splitLayoutClass =
  "grid min-w-0 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16";

export const mediaFrameClass =
  "relative aspect-[4/3] overflow-hidden rounded-lg bg-sand shadow-soft lg:aspect-[4/5]";

export const surfaceCardClass =
  "rounded-lg border border-sage bg-white shadow-soft";

export const interactiveCardClass = `${surfaceCardClass} transition-colors duration-300 hover:border-bronze`;
