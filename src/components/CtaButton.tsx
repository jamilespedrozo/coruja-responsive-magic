import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  pulse?: boolean;
};

export function CtaButton({ className, pulse, children, ...props }: CtaButtonProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={cn(
        "btn-cta inline-flex w-full max-w-[400px] items-center justify-center rounded-full bg-gradient-cta px-8 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-cta transition-all duration-300 hover:-translate-y-1 hover:shadow-cta-hover sm:px-12 sm:py-[18px] sm:text-xl",
        pulse && "animate-pulse-soft",
        className,
      )}
    >
      {children}
    </a>
  );
}
