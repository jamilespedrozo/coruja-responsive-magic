type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
  image?: string;
};

export function FeatureCard({ icon, title, description, items, image }: FeatureCardProps) {
  return (
    <div className="group relative z-[1] overflow-hidden rounded-2xl border border-border/40 bg-card p-8 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-elegant sm:p-10">
      <span
        aria-hidden
        className="absolute left-0 top-0 -z-10 h-1 w-full origin-left scale-x-0 bg-gradient-primary transition-transform duration-400 group-hover:scale-x-100"
      />
      {image ? (
        <div className="mb-6 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="block h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-accent text-3xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-2xl font-bold">{title}</h3>
      <p className="mb-5 text-base text-muted-foreground">{description}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-base font-medium">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-xs font-black text-success">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
