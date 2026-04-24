import Link from "next/link";
import FadeIn from "./fade-in";

export default function Hero() {
  return (
    <section className="relative z-0 overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="container-width relative">
        {/* Background pattern */}
        <div className="grid-pattern pointer-events-none absolute inset-0 z-0 opacity-40" />
        {/* <FadeIn delay={0.12}>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Rahul Awale
            </h1>
          </FadeIn> */}
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div className="py-8 md:py-16">
            <FadeIn delay={0.05}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
                Applied AI • Machine Learning • GenAI Systems
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Rahul Awale.
                {/* Building real-world AI systems,
                <span className="block text-[var(--accent)]">
                  not just models.
                </span> */}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                An Applied AI / Machine Learning Engineer focused on
                building end-to-end systems - from data pipelines and models to APIs,
                retrieval systems, and production deployment.
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View Projects
                </Link>

                <Link
                  href="/resume"
                  className="surface rounded-2xl px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5"
                >
                  Resume
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT CARD */}
          <FadeIn delay={0.2}>
            <div className="surface relative overflow-hidden rounded-[2rem] p-7 md:p-8">
              {/* Glow */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--glow)] blur-3xl" />

              <div className="relative">
                <p className="text-sm text-muted">Toronto, ON</p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Applied AI / ML Engineer
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                  Focused on machine learning systems, RAG pipelines, semantic search,
                  and deployable backend services.
                </p>

                {/* SKILLS */}
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
                      className="rounded-full border border-[var(--border)] bg-white/40 px-3 py-1 text-xs text-muted dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* MINI STATS */}
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