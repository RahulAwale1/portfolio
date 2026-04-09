import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import CaseStudySection from "@/components/case-study-section";
import StatCard from "@/components/stat-card";
import TagRow from "@/components/tag-row";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Rahul Awale",
  description:
    "Selected projects by Rahul Awale across machine learning, retrieval systems, APIs, and deployable AI applications.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="About"
          title="Building AI systems with a software engineering mindset"
          description="I’m Rahul Awale, an Applied AI / Machine Learning Engineer with a background in software development and a growing focus on retrieval systems, ML workflows, APIs, and deployment-ready AI products."
        />

        <section className="pb-8">
          <div className="container-width">
            <FadeIn>
              <div className="surface rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
                      Snapshot
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                      From software development to end-to-end ML and GenAI systems
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-muted md:text-[15px]">
                      I started my career in software development, where I worked on
                      application development, API integration, analytics-related
                      features, and maintainable product delivery. That background
                      shaped how I approach AI work today: not just as model building,
                      but as system design, usability, and end-to-end delivery.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-muted md:text-[15px]">
                      As I transitioned into AI and Data Science, I became especially
                      interested in machine learning systems, retrieval-based
                      applications, model-serving APIs, and production-oriented
                      workflows. My projects reflect that direction, combining
                      practical engineering with applied ML and GenAI.
                    </p>

                    <div className="mt-6">
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

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <StatCard label="Current Focus" value="ML + GenAI Systems" />
                    <StatCard label="Background" value="Software Development" />
                    <StatCard label="Strength" value="End-to-End Delivery" />
                    <StatCard label="Location" value="Toronto, ON" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CaseStudySection title="What I Bring">
          <div className="space-y-4">
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
        </CaseStudySection>

        <CaseStudySection title="What I’m Interested In">
          <div className="space-y-4">
            <p>
              I’m most interested in roles where machine learning and engineering meet
              in practical ways — especially Applied AI, ML Engineer, and GenAI roles
              involving retrieval systems, backend services, semantic search, or
              deployable AI products.
            </p>

            <p>
              Long term, I want to keep building systems that move beyond notebooks and
              demos into reliable, useful products.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="How I Approach Building">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "System Thinking",
                text: "I think about data flow, architecture, retrieval quality, and how different layers of a product work together.",
              },
              {
                title: "Practical Delivery",
                text: "I prefer building things that can be deployed, tested, and used — not just trained once and left in a notebook.",
              },
              {
                title: "Continuous Growth",
                text: "I’m actively strengthening my work across ML systems, GenAI workflows, and production-oriented AI engineering.",
              },
            ].map((item) => (
              <div key={item.title} className="surface rounded-2xl p-5">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
      </main>

      <Footer />
    </>
  );
}