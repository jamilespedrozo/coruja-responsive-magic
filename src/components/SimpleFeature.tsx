type SimpleFeatureProps = {
  icon: string;
  title: string;
  description: string;
};

export function SimpleFeature({ icon, title, description }: SimpleFeatureProps) {
  return (
    <div className="p-5 text-center">
      <div className="mb-4 text-5xl drop-shadow-lg">{icon}</div>
      <h4 className="mb-2 text-xl font-bold">{title}</h4>
      <p className="text-[15px] text-muted-foreground">{description}</p>
    </div>
  );
}
