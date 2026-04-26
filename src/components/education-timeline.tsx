"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const educationItems = [
  {
    status: "Current",
    level: "Postgraduate",
    school: "Loyalist College",
    degree:
      "Post-Graduate Certificate in Artificial Intelligence & Data Science",
    description:
      "Focused on machine learning, data science, applied AI systems, and project-based development. This program helped deepen my work across retrieval systems, forecasting, model evaluation, and deployment-ready AI applications.",
    period: "2024 – 2026",
    tags: [
      "Machine Learning",
      "Applied AI",
      "Data Science",
      "RAG Systems",
      "Forecasting",
    ],
  },
  {
    level: "Undergraduate",
    school: "London Metropolitan University | Islington College",
    degree: "BSc (Hons) in Computing",
    description:
      "Built my core foundation in computing, programming, software development, and problem solving. This degree helped shape the engineering mindset that now supports my work in machine learning systems and applied AI projects.",
    period: "2019 – 2022",
    tags: [
      "Programming",
      "Software Development",
      "Problem Solving",
      "Computing Fundamentals",
    ],
  },
];

export default function EducationTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 45%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px overflow-hidden rounded-full bg-[var(--border)] md:block">
        <motion.div
          className="h-full w-full origin-top bg-[var(--accent)]"
          style={{ scaleY }}
        />
      </div>

      <div className="grid gap-7 md:pl-14">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.school}
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.42 }}
            transition={{
              type: "spring",
              stiffness: 105,
              damping: 22,
              delay: index * 0.08,
            }}
            className="surface group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 ease-out hover:-translate-y-1 active:scale-[0.99] md:p-8"
          >
            <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.035]" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--glow)] blur-3xl transition duration-500 group-hover:scale-125" />
            <div className="absolute -left-[3.5rem] top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-solid)] md:flex">
              <motion.span
                className="h-3 w-3 rounded-full bg-[var(--accent)]"
                initial={{ scale: 0.7 }}
                whileInView={{ scale: [0.7, 1.25, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              />
            </div>

            <div className="relative grid gap-7 lg:grid-cols-[1fr_11rem] lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  {item.status && (
                    <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-medium text-[var(--accent)]">
                      {item.status}
                    </span>
                  )}
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {item.level}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  {item.school}
                </h3>

                <p className="mt-2 text-base font-medium text-muted">
                  {item.degree}
                </p>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-[15px]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-xs text-muted dark:bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:text-right">
                <div className="surface-solid inline-flex rounded-2xl px-4 py-3 font-mono text-sm text-muted">
                  {item.period}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
