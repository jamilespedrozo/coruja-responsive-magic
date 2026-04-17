import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  initials: string;
  bgColor: string;
}

export function TestimonialCard({ name, role, text, initials, bgColor }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
        “{text}”
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: bgColor }}
          aria-hidden
        >
          {initials}
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-foreground">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}
