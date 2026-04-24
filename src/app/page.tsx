import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import FadeIn from "@/components/fade-in";
import CapabilityCard from "@/components/capability-card";
import ExperienceCard from "@/components/experience-card";
import ContactCTA from "@/components/contact-cta";


export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="section-padding pt-0">
          <div className="container-width">
            <FadeIn>
              <div className="mb-10">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
                  Featured Work
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  Selected Projects
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                  A selection of projects across retrieval-augmented generation, OCR-based
                  document intelligence, machine learning APIs, and forecasting workflows.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.05}>
                <div className="md:col-span-2">
                  <ProjectCard
                    title="CivicAI"
                    description="A full-stack AI-powered municipal by-law assistant that combines RAG, pgvector semantic retrieval, Redis and Celery background processing, S3-based document storage, and FastAPI backend services to deliver structured, citation-backed answers through a production-style architecture."
                    href="/projects/civicai"
                    tags={[
                      "RAG",
                      "FastAPI",
                      "Next.js",
                      "pgvector",
                      "Redis",
                      "Celery",
                      "AWS",
                      "S3",
                      "Cloudflare",
                    ]}
                    live="https://civicai.rahulawale.com"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <ProjectCard
                title="InboxPilot AI"
                description="AI-powered email assistant that integrates with Gmail and Google Calendar to classify job-related emails, track application status, automate interview scheduling, and generate a structured career digest. Built as a full-stack AI system using LLMs, APIs, and workflow automation."
                href="/projects/inboxpilot-ai"
                tags={[
                  "Next.js",
                  "FastAPI",
                  "PostgreSQL",
                  "OpenAI",
                  "OAuth",
                  "Gmail API",
                  "Calendar API",
                ]}
                live="https://inboxai.rahulawale.com"
              />
              </FadeIn>

              <FadeIn delay={0.15}>
                <ProjectCard
                  title="Belleville By-Law Assistant"
                  description="An OCR-powered RAG assistant for municipal by-law documents built with Tesseract, MiniLM embeddings, FAISS retrieval, FastAPI, and Streamlit/Gradio interfaces, designed to turn scanned PDFs into citation-grounded legal question answering workflows."
                  href="/projects/belleville-by-law-assistant"
                  tags={[
                    "OCR",
                    "RAG",
                    "FAISS",
                    "FastAPI",
                    "Streamlit",
                    "Gradio",
                    "Llama3",
                  ]}
                />
              </FadeIn>

              <FadeIn delay={0.2}>
                <ProjectCard
                  title="Car Price Prediction"
                  description="An end-to-end machine learning project covering exploratory analysis, feature engineering, model comparison, and deployment as a FastAPI microservice. Random Forest achieved the strongest performance with R² of 0.908."
                  href="/projects/car-price-prediction"
                  tags={[
                    "Regression",
                    "Random Forest",
                    "scikit-learn",
                    "FastAPI",
                    "Docker",
                  ]}
                />
              </FadeIn>

              <FadeIn delay={0.25}>
                <ProjectCard
                  title="Stock Price Prediction: ARIMA vs LSTM"
                  description="A time-series forecasting project on Tesla stock data comparing ARIMA and LSTM models. LSTM significantly outperformed ARIMA, reducing RMSE from about 43.25 to 13.19 on the evaluated series."
                  href="/projects/stock-price-forecasting"
                  tags={[
                    "Time Series",
                    "ARIMA",
                    "LSTM",
                    "TensorFlow",
                    "yfinance",
                  ]}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-width">
            <FadeIn>
              <div className="mb-10">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
                  What I Build
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  End-to-end systems across ML, retrieval, and deployment
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                  My work sits at the intersection of machine learning, applied AI,
                  backend engineering, and production-oriented system design.
                </p>
              </div>
            </FadeIn>

            <div className="grid items-stretch gap-6 md:grid-cols-3">
              <FadeIn delay={0.05}>
                <CapabilityCard
                  title="Machine Learning Systems"
                  description="Building practical ML workflows from data preparation and feature engineering to training, evaluation, and inference."
                  items={[
                    "Supervised Learning",
                    "Feature Engineering",
                    "Model Evaluation",
                    "Forecasting",
                    "Experimentation",
                  ]}
                />
              </FadeIn>

              <FadeIn delay={0.1}>
                <CapabilityCard
                  title="GenAI / RAG Systems"
                  description="Designing retrieval-based AI applications that combine document ingestion, embeddings, search, and grounded response generation."
                  items={[
                    "OCR Pipelines",
                    "Chunking & Retrieval",
                    "Embeddings",
                    "Semantic Search",
                    "Citation-grounded Q&A",
                  ]}
                />
              </FadeIn>

              <FadeIn delay={0.15}>
                <CapabilityCard
                  title="Deployment & APIs"
                  description="Turning models and AI workflows into usable products with API services, containers, async jobs, and cloud-ready architecture."
                  items={[
                    "FastAPI Services",
                    "Dockerized Apps",
                    "REST APIs",
                    "Async Workflows",
                    "Cloud Deployment",
                  ]}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-width">
            <FadeIn>
              <div className="mb-10">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
                  Experience Snapshot
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  Software engineering foundation, applied to AI systems
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                  My background in application development helps me approach machine learning
                  work with a stronger focus on APIs, usability, maintainability, and
                  end-to-end delivery.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <ExperienceCard
                role="Software Developer"
                company="Aalaya Soft-tech Pvt. Ltd., Nepal"
                period="Jul 2022 – Jan 2024"
                points={[
                  "Developed and maintained Flutter applications integrated with REST APIs and analytics modules.",
                  "Collaborated with backend teams to design APIs and implement data-driven features.",
                  "Mentored interns, reducing bug backlog by 20% and improving delivery speed by 20%.",
                  "Built production systems with a strong focus on performance, maintainability, and user experience.",
                ]}
              />
            </FadeIn>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-width">
            <FadeIn>
              <div className="mb-10">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
                  Education
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  Academic foundation in AI and computing
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                  A combination of postgraduate study in AI and Data Science and an earlier
                  computing degree that built my software and technical foundation.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-[var(--border)] md:block" />

              <div className="grid gap-6">
                <FadeIn delay={0.05}>
                  <div className="surface relative rounded-[2rem] p-6 md:p-8">
                    <div className="absolute left-[-2px] top-10 hidden h-3 w-3 rounded-full bg-[var(--accent)] md:block" />

                    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-medium text-[var(--accent)]">
                            Current
                          </span>
                          <span className="text-xs uppercase tracking-[0.18em] text-muted">
                            Postgraduate
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                          Loyalist College
                        </h3>

                        <p className="mt-2 text-base font-medium text-muted">
                          Post-Graduate Certificate in Artificial Intelligence & Data Science
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                          Focused on machine learning, data science, applied AI systems, and
                          project-based development. This program helped deepen my work across
                          retrieval systems, forecasting, model evaluation, and deployment-ready
                          AI applications.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {[
                            "Machine Learning",
                            "Applied AI",
                            "Data Science",
                            "RAG Systems",
                            "Forecasting",
                          ].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="surface-solid rounded-2xl px-4 py-3 text-sm text-muted">
                        2024 – 2026
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="surface relative rounded-[2rem] p-6 md:p-8">
                    <div className="absolute left-[-2px] top-10 hidden h-3 w-3 rounded-full bg-[var(--accent)]/60 md:block" />

                    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs uppercase tracking-[0.18em] text-muted">
                            Undergraduate
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                          London Metropolitan University
                        </h3>

                        <p className="mt-2 text-base font-medium text-muted">
                          BSc (Hons) in Computing
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                          Built my core foundation in computing, programming, software
                          development, and problem solving. This degree helped shape the
                          engineering mindset that now supports my work in machine learning
                          systems and applied AI projects.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {[
                            "Programming",
                            "Software Development",
                            "Problem Solving",
                            "Computing Fundamentals",
                          ].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="surface-solid rounded-2xl px-4 py-3 text-sm text-muted">
                        2019 – 2022
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}