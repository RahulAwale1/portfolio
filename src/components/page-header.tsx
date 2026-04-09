type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 md:pb-14 md:pt-40">
      <div className="container-width">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}