"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experienceItems = [
  {
    role: "Software Developer",
    company: "Aalaya Soft-tech Pvt. Ltd., Nepal",
    period: "Feb 2023 – Dec 2023",
    type: "Full-time",
    points: [
      "Developed and maintained Flutter applications integrated with REST APIs and analytics modules.",
      "Collaborated with backend teams to design APIs and implement data-driven features.",
      "Mentored interns, reducing bug backlog by 20% and improving delivery speed by 20%.",
      "Built production systems with a strong focus on performance, maintainability, and user experience.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Yeti Tech Pvt. Ltd., Nepal",
    period: "Jun 2022 – Jan 2023",
    type: "Mobile Development",
    points: [
      "Developed Flutter application features with responsive, user-focused interfaces.",
      "Integrated REST APIs and supported mobile app data flows across client-facing features.",
      "Worked with the development team to debug issues, refine app behavior, and improve reliability.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Varosa Technology",
    period: "Sep 2021 – Dec 2021",
    type: "Internship",
    points: [
      "Supported Flutter application development while learning production mobile development workflows.",
      "Built and refined UI screens, reusable widgets, and mobile layouts from design requirements.",
      "Assisted with debugging, testing, and improving app behavior across development tasks.",
    ],
  },
];

export default function ExperienceTimeline() {
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
      <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 overflow-hidden rounded-full bg-[var(--border)] md:left-[14.75rem]">
        <motion.div
          className="h-full w-full origin-top bg-[var(--accent)]"
          style={{ scaleY }}
        />
      </div>

      <div className="grid gap-8">
        {experienceItems.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 28, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.42 }}
            transition={{
              type: "spring",
              stiffness: 105,
              damping: 22,
              delay: index * 0.08,
            }}
            className="relative grid gap-4 pl-12 md:grid-cols-[11.5rem_3.5rem_minmax(0,1fr)] md:gap-6 md:pl-0"
          >
            <div className="order-2 md:order-none md:pt-5 md:text-right">
              <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] px-4 py-3 font-mono text-xs text-muted shadow-[0_18px_40px_-32px_rgba(23,32,51,0.45)] md:text-sm">
                <span className="max-w-[9rem]">{item.period}</span>
              </div>
            </div>

            <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] font-mono text-sm text-[var(--accent)] shadow-[0_18px_40px_-28px_rgba(23,32,51,0.5)] md:static md:mt-4">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="surface group relative overflow-hidden rounded-[1.75rem] p-5 transition duration-300 ease-out hover:-translate-y-1 active:scale-[0.99] md:p-7">
              <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.025]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] opacity-70" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-xs font-medium text-[var(--accent)] dark:bg-white/[0.03]">
                    {item.type}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Experience
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-base font-medium text-muted">
                    {item.company}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <p className="text-sm leading-7 text-muted md:text-[15px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
