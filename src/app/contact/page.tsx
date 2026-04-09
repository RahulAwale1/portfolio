import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import ContactMethodCard from "@/components/contact-method-card";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Rahul Awale",
  description:
    "Selected projects by Rahul Awale across machine learning, retrieval systems, APIs, and deployable AI applications.",
};
export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Contact"
          title="Let’s connect"
          description="I’m open to ML, Applied AI, and GenAI-focused opportunities. Whether you’re hiring, recruiting, or just want to connect, feel free to reach out."
        />

        <section className="pb-8">
          <div className="container-width">
            <FadeIn>
              <div className="surface rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
                      Reach Out
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                      Open to meaningful opportunities and conversations
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      I’m especially interested in roles and conversations around
                      machine learning systems, Applied AI, retrieval-based applications,
                      and deployment-focused engineering. If there’s an opportunity that
                      aligns, I’d be glad to connect.
                    </p>
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
                      <p className="mt-2 text-sm font-medium">Applied AI / ML</p>
                    </div>

                    <div className="surface-solid rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Availability
                      </p>
                      <p className="mt-2 text-sm font-medium">Open to opportunities</p>
                    </div>

                    <div className="surface-solid rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        Best Contact
                      </p>
                      <p className="mt-2 text-sm font-medium">Email / LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-width">
            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.05}>
                <ContactMethodCard
                  label="Email"
                  value="awaler181@gmail.com"
                  href="mailto:awaler181@gmail.com"
                />
              </FadeIn>

              <FadeIn delay={0.1}>
                <ContactMethodCard
                  label="LinkedIn"
                  value="linkedin.com/in/rahul-awale"
                  href="https://www.linkedin.com/in/rahul-awale/"
                />
              </FadeIn>

              <FadeIn delay={0.15}>
                <ContactMethodCard
                  label="GitHub"
                  value="github.com/RahulAwale1"
                  href="https://github.com/RahulAwale1"
                />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}