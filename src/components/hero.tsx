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
            <div className="surface animate-float-soft relative min-h-[26rem] overflow-hidden rounded-[2.25rem] p-5 md:min-h-[32rem] md:p-6">
              <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.04]" />
              <div className="absolute left-0 top-10 h-px w-full bg-[var(--accent)]/30 animate-scan-line" />

              <div className="relative flex h-full min-h-[23.5rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:bg-white/[0.04] md:min-h-[29.5rem]">
                <div className="pointer-events-none absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
                <div className="pointer-events-none absolute inset-x-10 bottom-20 h-20 rounded-full bg-[var(--accent)]/10 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    Toronto, ON
                  </p>
                  <div className="relative h-3 w-3 rounded-full bg-[var(--accent)]">
                    <span className="animate-breathe absolute inset-0 rounded-full bg-[var(--accent)]" />
                  </div>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-6">
                  <div className="absolute bottom-10 h-8 w-44 rounded-full bg-[var(--foreground)]/10 blur-xl dark:bg-black/25" />
                  <video
                    src="/headmoving.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="relative z-10 max-h-[18rem] w-full max-w-[18rem] object-contain drop-shadow-[0_28px_42px_rgba(15,26,36,0.28)] md:max-h-[24rem] md:max-w-[24rem]"
                    aria-label="Animated avatar of Rahul Awale"
                  />
                </div>

                <div className="relative border-t border-[var(--border)] pt-5">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Applied AI / ML Engineer
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Building end-to-end ML, RAG, and deployable AI systems.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
