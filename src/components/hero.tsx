import Link from "next/link";
import FadeIn from "./fade-in";
import ScrollBulb from "./scroll-bulb";

export default function Hero() {
  return (
    <section className="relative z-0 overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container-width relative">
        <ScrollBulb />
        <div className="grid-pattern pointer-events-none absolute inset-0 z-0 opacity-40" />
        <div className="relative grid min-h-[calc(100dvh-7rem)] items-center gap-10 md:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="py-8 md:py-16">
            <FadeIn delay={0.05}>
              <p className="mb-5 max-w-fit rounded-full border border-[var(--border)] bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] dark:bg-white/5">
                Applied AI • Machine Learning • GenAI Systems
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="max-w-4xl text-4xl font-semibold leading-none tracking-tight md:text-6xl">
                Rahul Awale.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-[63ch] text-base leading-8 text-muted md:text-lg">
                An Applied AI / Machine Learning Engineer focused on
                building end-to-end systems - from data pipelines and models to APIs,
                retrieval systems, and production deployment.
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Projects
                </Link>

                <Link
                  href="/resume"
                  className="surface rounded-2xl px-6 py-3 text-sm font-medium transition duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Resume
                </Link>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.2}>
            <div className="surface animate-float-soft relative overflow-hidden rounded-[2.25rem] p-5 md:p-6">
              <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.04]" />
              <div className="absolute left-0 top-10 h-px w-full bg-[var(--accent)]/30 animate-scan-line" />

              <div className="relative rounded-[1.75rem] border border-[var(--border)] bg-white/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:bg-white/[0.04]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Toronto, ON
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      Applied AI / ML Engineer
                    </h2>
                  </div>

                  <div className="relative h-3 w-3 rounded-full bg-[var(--accent)]">
                    <span className="animate-breathe absolute inset-0 rounded-full bg-[var(--accent)]" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted md:text-base">
                  Focused on machine learning systems, RAG pipelines, semantic search,
                  and deployable backend services.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "ML Systems",
                    "RAG",
                    "FastAPI",
                    "Docker",
                    "AWS",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-white/50 px-3 py-1 text-xs text-muted dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="surface-solid rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-medium">ML + GenAI</p>
                  </div>

                  <div className="surface-solid rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      Strength
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      End-to-End Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
