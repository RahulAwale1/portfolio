"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  live?: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const goToProject = (direction: "previous" | "next") => {
    setActiveIndex((current) =>
      direction === "next"
        ? Math.min(current + 1, projects.length - 1)
        : Math.max(current - 1, 0),
    );
  };

  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] dark:bg-white/[0.03] md:p-6">
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--glow)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-10 h-56 w-56 rounded-full bg-[var(--muted)]/40 blur-3xl dark:bg-[var(--muted)]/20" />

      <div className="relative mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Project reel
          </p>
          <div className="mt-2 font-mono text-sm font-medium text-[var(--foreground)]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goToProject("previous")}
            disabled={activeIndex === 0}
            className="surface rounded-2xl p-3 transition duration-300 ease-out hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={() => goToProject("next")}
            disabled={activeIndex === projects.length - 1}
            className="surface rounded-2xl p-3 transition duration-300 ease-out hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]"
            aria-label="Next project"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="surface-solid relative min-h-[34rem] overflow-hidden rounded-[1.75rem] p-6 md:p-8">
          <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.03]" />
          <div className="pointer-events-none absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--accent)]/35 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.href}
              className="relative flex h-full flex-col"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    Featured Project
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    {activeProject.title}
                  </h3>
                </div>

                <span className="font-mono text-sm text-muted">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  ● Live Project
                </a>
              )}

              <p className="mt-8 max-w-4xl text-sm leading-7 text-muted md:text-base">
                {activeProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-xs text-muted dark:bg-white/[0.03]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href={activeProject.href}
                  className="inline-flex rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid gap-3">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={project.href}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group rounded-[1.25rem] border p-4 text-left transition duration-300 ease-out ${
                  isActive
                    ? "border-[var(--accent)]/35 bg-[var(--card-solid)] shadow-[0_22px_60px_-44px_rgba(23,32,51,0.5)]"
                    : "border-[var(--border)] bg-white/25 hover:-translate-y-0.5 hover:bg-white/45 dark:bg-white/[0.025] dark:hover:bg-white/[0.045]"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-2 text-sm font-semibold tracking-tight">
                      {project.title}
                    </h4>
                  </div>

                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full transition ${
                      isActive ? "bg-[var(--accent)]" : "bg-[var(--muted-foreground)]/25"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="h-1.5 overflow-hidden rounded-full bg-[var(--muted)]">
          <motion.div
            className="h-full rounded-full bg-[var(--accent)]"
            animate={{
              width: `${((activeIndex + 1) / projects.length) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
          />
        </div>

        <div className="flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.href}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[var(--accent)]"
                  : "w-2.5 bg-[var(--muted-foreground)]/30 hover:bg-[var(--muted-foreground)]/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
