import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  pulse?: boolean;
};

export function CtaButton({ className, pulse, children, ...props }: CtaButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "btn-cta inline-flex w-full max-w-[400px] items-center justify-center rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-hover sm:px-12 sm:py-[18px] sm:text-xl",
        pulse && "animate-pulse-soft",
        className,
      )}
    >
      {children}
    </a>
  );
}
