"use client";

import { useRouter } from "next/navigation";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
  tags,
  live,
}: ProjectCardProps) {
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
      className="surface group flex h-full min-h-[430px] cursor-pointer flex-col rounded-[2rem] p-6 transition duration-300 ease-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] active:scale-[0.99]"
      aria-label={`Open case study for ${title}`}
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

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
                  {title === "InboxPilot AI" && (<span className="ml-2 text-xs text-muted">(OAuth in testing)</span>)}
                </a>
              </div>
            )}
          </div>

          <span className="text-sm accent transition duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="line-clamp-6 text-sm leading-7 text-muted md:text-[15px]">
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

        <div className="mt-auto pt-4">
          <span className="inline-flex rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 group-hover:-translate-y-0.5">
            View Case Study
          </span>
        </div>
      </div>
    </div>
  );
}
