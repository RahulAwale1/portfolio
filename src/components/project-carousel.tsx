"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./project-card";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const target = track?.children[index] as HTMLElement | undefined;

    if (!track || !target) {
      return;
    }

    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollByCard = (direction: "previous" | "next") => {
    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, projects.length - 1)
        : Math.max(activeIndex - 1, 0);

    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const closestIndex = Array.from(track.children).reduce(
      (closest, child, index) => {
        const element = child as HTMLElement;
        const distance = Math.abs(element.offsetLeft - track.scrollLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActiveIndex(closestIndex);
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
            onClick={() => scrollByCard("previous")}
            disabled={activeIndex === 0}
            className="surface rounded-2xl p-3 transition duration-300 ease-out hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("next")}
            disabled={activeIndex === projects.length - 1}
            className="surface rounded-2xl p-3 transition duration-300 ease-out hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]"
            aria-label="Next project"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="relative -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-5 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.href}
            className="min-w-[86%] snap-start sm:min-w-[68%] lg:min-w-[48%]"
            animate={{
              opacity: activeIndex === index ? 1 : 0.62,
              scale: activeIndex === index ? 1 : 0.965,
              y: activeIndex === index ? 0 : 10,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      <div className="relative mt-1 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
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
              onClick={() => scrollToIndex(index)}
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
