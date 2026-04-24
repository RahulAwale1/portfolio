import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import HighlightCard from "@/components/highlight-card";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resume | Rahul Awale",
  description:
    "Selected projects by Rahul Awale across machine learning, retrieval systems, APIs, and deployable AI applications.",
};
export default function ResumePage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Resume"
          title="Resume and professional highlights"
          description="A quick overview of my background in software development, applied AI, machine learning systems, retrieval-based applications, and deployment-oriented engineering."
        />

        <section className="pb-8">
          <div className="container-width">
            <FadeIn>
              <div className="surface rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
                      Summary
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                      Applied AI / ML Engineer focused on end-to-end systems
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      My work combines software engineering, machine learning,
                      retrieval systems, and deployment-focused development. I’m
                      especially interested in building AI products that go beyond
                      notebooks into usable, maintainable systems.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Open Resume
                      </a>

                      <a
                        href="/resume.pdf"
                        download
                        className="surface-solid rounded-2xl px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="surface-solid rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Location
                      </p>
                      <p className="mt-2 text-sm font-medium">Toronto, ON</p>
                    </div>

                    <div className="surface-solid rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Focus
                      </p>
                      <p className="mt-2 text-sm font-medium">ML + Applied AI</p>
                    </div>

                    <div className="surface-solid rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Background
                      </p>
                      <p className="mt-2 text-sm font-medium">Software Development</p>
                    </div>

                    <div className="surface-solid rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Strength
                      </p>
                      <p className="mt-2 text-sm font-medium">End-to-End Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-8">
          <div className="container-width">
            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.05}>
                <HighlightCard
                  title="Applied AI Systems"
                  text="Building real-world AI systems across retrieval-augmented generation, workflow automation, and production-ready applications. I focus on combining machine learning, APIs, and system design to create scalable, deployable AI products."
                />
              </FadeIn>

              <FadeIn delay={0.1}>
                <HighlightCard
                  title="Software Foundation"
                  text="Previous software development experience strengthened my approach to APIs, maintainability, product thinking, and production-oriented workflows."
                />
              </FadeIn>

              <FadeIn delay={0.15}>
                <HighlightCard
                  title="Deployment Mindset"
                  text="Comfortable working with FastAPI, Docker, backend services, async workflows, and deployment-aware AI system design."
                />
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-width">
            <FadeIn delay={0.2}>
              <div className="surface rounded-[2rem] p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                    Resume Preview
                  </h2>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium accent"
                  >
                    Open in new tab
                  </a>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white dark:bg-[var(--card-solid)]">
                  <iframe
                    src="/resume.pdf"
                    title="Rahul Awale Resume"
                    className="h-[700px] w-full"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}