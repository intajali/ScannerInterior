import { primaryButtonClass } from "@/components/common/styles";
import { cn } from "@/lib/utils";

export function SkipLink() {
  return (
    <a
      href="#main"
      className={cn(primaryButtonClass, "fixed top-4 left-4 z-[60] -translate-y-24 focus:translate-y-0")}
    >
      Skip to content
    </a>
  );
}
