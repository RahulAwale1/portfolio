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
    <div className="surface flex h-full min-h-[320px] flex-col rounded-[2rem] p-6 transition duration-300 ease-out hover:-translate-y-1 active:scale-[0.99] md:p-8">
      <div className="flex h-full flex-col">
        <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent)]/70" />
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-muted md:text-[15px]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-xs text-muted dark:bg-white/[0.03]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
