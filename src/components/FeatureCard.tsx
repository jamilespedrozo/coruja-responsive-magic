type Theme = "pink" | "blue" | "green";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
  image?: string;
  theme?: Theme;
};

const themeMap: Record<Theme, { bg: string; iconBg: string; iconText: string; bar: string }> = {
  pink: {
    bg: "bg-[var(--card-pink)]",
    iconBg: "bg-white",
    iconText: "text-[var(--card-pink-fg)]",
    bar: "bg-[var(--card-pink-fg)]",
  },
  blue: {
    bg: "bg-[var(--card-blue)]",
    iconBg: "bg-white",
    iconText: "text-[var(--card-blue-fg)]",
    bar: "bg-[var(--card-blue-fg)]",
  },
  green: {
    bg: "bg-[var(--card-green)]",
    iconBg: "bg-white",
    iconText: "text-[var(--card-green-fg)]",
    bar: "bg-[var(--card-green-fg)]",
  },
};

export function FeatureCard({
  icon,
  title,
  description,
  items,
  image,
  theme = "pink",
}: FeatureCardProps) {
  const t = themeMap[theme];

  return (
    <div
      className={`group relative z-[1] overflow-hidden rounded-2xl border border-border/40 ${t.bg} p-8 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-elegant sm:p-10`}
    >
      <span
        aria-hidden
        className={`absolute left-0 top-0 -z-10 h-1.5 w-full origin-left scale-x-0 ${t.bar} transition-transform duration-400 group-hover:scale-x-100`}
      />
      {image ? (
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="block h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className={`absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-2xl ${t.iconBg} ${t.iconText} text-3xl shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
            aria-hidden
          >
            {icon}
          </div>
        </div>
      ) : (
        <div
          className={`mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl ${t.iconBg} ${t.iconText} text-4xl shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
        >
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-2xl font-extrabold">{title}</h3>
      <p className="mb-5 text-base text-foreground/70">{description}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-base font-medium">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-xs font-black text-success">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
