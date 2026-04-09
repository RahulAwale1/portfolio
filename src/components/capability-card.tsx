type CapabilityCardProps = {
  title: string;
  description: string;
  items: string[];
};

export default function CapabilityCard({
  title,
  description,
  items,
}: CapabilityCardProps) {
  return (
    <div className="surface flex h-full min-h-[320px] flex-col rounded-[2rem] p-6 md:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-full flex-col">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-muted md:text-[15px]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}