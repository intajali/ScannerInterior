import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-6xl flex-col justify-end px-5 pt-16 pb-14 sm:px-8 sm:pb-20">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Interior design & decoration
        </p>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          {siteConfig.description} We design spaces that feel settled from the
          first visit and still feel right years later.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
          >
            Begin a consultation
          </Link>
          <Link
            href="/#approach"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 px-5",
            )}
          >
            Our approach
          </Link>
        </div>
      </div>
    </section>
  );
}
