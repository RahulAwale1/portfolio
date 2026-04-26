import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-width">
        <div className="surface relative overflow-hidden rounded-[2.25rem] p-8 md:p-12">
          <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.04]" />

          <div className="relative max-w-4xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
              Let’s Connect
            </p>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Open to ML, Applied AI, and GenAI-focused opportunities
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
                I’m currently building projects in machine learning, retrieval systems,
                and deployable AI products. If you’re hiring for ML or Applied AI roles,
                I’d be glad to connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Contact Me
                </Link>

                <Link
                  href="/resume"
                  className="surface-solid rounded-2xl px-6 py-3 text-sm font-medium transition duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
