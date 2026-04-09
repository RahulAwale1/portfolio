type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function CaseStudySection({
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="py-8 md:py-10">
      <div className="container-width">
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {title}
            </h2>
          </div>

          <div className="text-sm leading-7 text-muted md:text-[15px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}