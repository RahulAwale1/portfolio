"use client";

import { useRouter } from "next/navigation";

type ProjectShowcaseCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  highlight?: boolean;
  live?: string;
};

export default function ProjectShowcaseCard({
  title,
  description,
  href,
  tags,
  highlight = false,
  live,
}: ProjectShowcaseCardProps) {
  const router = useRouter();

  const goToCaseStudy = () => {
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={goToCaseStudy}
      onKeyDown={handleKeyDown}
      className={`surface group block cursor-pointer rounded-[2rem] p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
        highlight ? "ring-1 ring-[var(--accent)]/20" : ""
      }`}
      aria-label={`Open case study for ${title}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

            {live && (
              <div className="mt-3">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  ● Live Project
                </a>
              </div>
            )}
          </div>

          <span className="mt-1 text-base accent transition duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="max-w-4xl text-sm leading-7 text-muted md:text-[15px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <span className="inline-flex rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
            View Case Study
          </span>
        </div>
      </div>
    </div>
  );
}