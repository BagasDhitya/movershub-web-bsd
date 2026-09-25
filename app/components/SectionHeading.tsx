interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {description && <p className="text-slate-600 mt-2">{description}</p>}
    </div>
  );
}
