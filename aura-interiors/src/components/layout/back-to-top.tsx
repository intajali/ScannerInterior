"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      className="inline-flex size-11 items-center justify-center rounded-lg border border-sage bg-white text-charcoal shadow-soft transition-colors duration-300 hover:border-bronze hover:text-bronze focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-bronze"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </button>
  );
}
