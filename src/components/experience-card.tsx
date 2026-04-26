type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export default function ExperienceCard({
  role,
  company,
  period,
  points,
}: ExperienceCardProps) {
  return (
    <div className="surface rounded-[2rem] p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{role}</h3>
          <p className="mt-1 text-sm text-muted">
            {company}
          </p>
        </div>

        <span className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-xs text-muted dark:bg-white/[0.03]">
          {period}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
            <p className="text-sm leading-7 text-muted md:text-[15px]">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
