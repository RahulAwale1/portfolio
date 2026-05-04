"use client";

import StatCard from "./stat-card";
import TagRow from "./tag-row";

const buildingPrinciples = [
  {
    title: "System Thinking",
    text: "I think about data flow, architecture, retrieval quality, and how different layers of a product work together.",
  },
  {
    title: "Practical Delivery",
    text: "I prefer building things that can be deployed, tested, and used - not just trained once and left in a notebook.",
  },
  {
    title: "Continuous Growth",
    text: "I’m actively strengthening my work across ML systems, GenAI workflows, and production-oriented AI engineering.",
  },
];

export default function AboutScrollVideoExperience() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_20%_8%,var(--glow),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(200,217,230,0.1),transparent_24%)]" />

        <div className="container-width relative grid min-h-[calc(100dvh-8rem)] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="pointer-events-none absolute inset-x-4 bottom-16 h-28 rounded-full bg-[var(--accent)]/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-16 left-1/2 h-10 w-56 -translate-x-1/2 rounded-full bg-[var(--foreground)]/10 blur-2xl dark:bg-black/30" />

            <div className="relative flex min-h-[22rem] items-center justify-center md:min-h-[34rem]">
              <video
                src="/headingmoving2.mov"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="relative z-10 max-h-[22rem] w-full max-w-[22rem] object-contain drop-shadow-[0_30px_48px_rgba(15,26,36,0.28)] md:max-h-[32rem] md:max-w-[32rem]"
                aria-label="Animated avatar of Rahul Awale"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-muted">
              About
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Building AI systems with a software engineering mindset
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base">
              I’m Rahul Awale, an Applied AI / Machine Learning Engineer with a
              background in software development and a growing focus on retrieval
              systems, ML workflows, APIs, and deployment-ready AI products.
            </p>

            <div className="mt-8">
              <TagRow
                tags={[
                  "Applied AI",
                  "Machine Learning",
                  "RAG Systems",
                  "FastAPI",
                  "Docker",
                  "Semantic Search",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-width">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Current Focus" value="ML + GenAI Systems" />
            <StatCard label="Background" value="Software Development" />
            <StatCard label="Strength" value="End-to-End Delivery" />
            <StatCard label="Location" value="Toronto, ON" />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-width">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
                Snapshot
              </p>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                From software development to end-to-end ML and GenAI systems
              </h2>
            </div>

            <div className="surface rounded-[2rem] p-6 text-sm leading-7 text-muted md:p-8 md:text-[15px]">
              <p>
                I started my career in software development, where I worked on
                application development, API integration, analytics-related features,
                and maintainable product delivery. That background shaped how I
                approach AI work today: not just as model building, but as system
                design, usability, and end-to-end delivery.
              </p>

              <p className="mt-4">
                As I transitioned into AI and Data Science, I became especially
                interested in machine learning systems, retrieval-based applications,
                model-serving APIs, and production-oriented workflows. My projects
                reflect that direction, combining practical engineering with applied ML
                and GenAI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-width">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface rounded-[2rem] p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">What I Bring</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted md:text-[15px]">
                <p>
                  I bring a blend of software engineering discipline and applied AI
                  thinking. That means I care about how systems are structured, how APIs
                  are exposed, how data flows through an application, and how users
                  actually interact with the final product.
                </p>
                <p>
                  This perspective has been especially useful in projects involving
                  retrieval-augmented generation, document intelligence, regression
                  systems, forecasting, and backend deployment workflows.
                </p>
              </div>
            </div>

            <div className="surface rounded-[2rem] p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                What I’m Interested In
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted md:text-[15px]">
                <p>
                  I’m most interested in roles where machine learning and engineering
                  meet in practical ways — especially Applied AI, ML Engineer, and
                  GenAI roles involving retrieval systems, backend services, semantic
                  search, or deployable AI products.
                </p>
                <p>
                  Long term, I want to keep building systems that move beyond notebooks
                  and demos into reliable, useful products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24 md:py-12 md:pb-28">
        <div className="container-width">
          <div className="mb-6">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
              Building
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              How I approach building
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {buildingPrinciples.map((item) => (
              <div key={item.title} className="surface rounded-2xl p-5">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
