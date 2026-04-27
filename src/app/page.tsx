import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectCarousel from "@/components/project-carousel";
import FadeIn from "@/components/fade-in";
import CapabilityCard from "@/components/capability-card";
import ContactCTA from "@/components/contact-cta";
import EducationTimeline from "@/components/education-timeline";
import ExperienceTimeline from "@/components/experience-timeline";

const featuredProjects = [
  {
    title: "CivicAI",
    description:
      "A full-stack AI-powered municipal by-law assistant that combines RAG, pgvector semantic retrieval, Redis and Celery background processing, S3-based document storage, and FastAPI backend services to deliver structured, citation-backed answers through a production-style architecture.",
    href: "/projects/civicai",
    tags: [
      "RAG",
      "FastAPI",
      "Next.js",
      "pgvector",
      "Redis",
      "Celery",
      "AWS",
      "S3",
      "Cloudflare",
    ],
    live: "https://civicai.rahulawale.com",
  },
  {
    title: "InboxPilot AI",
    description:
      "AI-powered email assistant that integrates with Gmail and Google Calendar to classify job-related emails, track application status, automate interview scheduling, and generate a structured career digest. Built as a full-stack AI system using LLMs, APIs, and workflow automation.",
    href: "/projects/inboxpilot-ai",
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "OAuth",
      "Gmail API",
      "Calendar API",
    ],
    live: "https://inboxai.rahulawale.com",
  },
  {
    title: "Belleville By-Law Assistant",
    description:
      "An OCR-powered RAG assistant for municipal by-law documents built with Tesseract, MiniLM embeddings, FAISS retrieval, FastAPI, and Streamlit/Gradio interfaces, designed to turn scanned PDFs into citation-grounded legal question answering workflows.",
    href: "/projects/belleville-by-law-assistant",
    tags: ["OCR", "RAG", "FAISS", "FastAPI", "Streamlit", "Gradio", "Llama3"],
  },
  {
    title: "Car Price Prediction",
    description:
      "An end-to-end machine learning project covering exploratory analysis, feature engineering, model comparison, and deployment as a FastAPI microservice. Random Forest achieved the strongest performance with R² of 0.908.",
    href: "/projects/car-price-prediction",
    tags: ["Regression", "Random Forest", "scikit-learn", "FastAPI", "Docker"],
  },
  {
    title: "Stock Price Prediction: ARIMA vs LSTM",
    description:
      "A time-series forecasting project on Tesla stock data comparing ARIMA and LSTM models. LSTM significantly outperformed ARIMA, reducing RMSE from about 43.25 to 13.19 on the evaluated series.",
    href: "/projects/stock-price-forecasting",
    tags: ["Time Series", "ARIMA", "LSTM", "TensorFlow", "yfinance"],
  },
];

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

            <FadeIn delay={0.05}>
              <ProjectCarousel projects={featuredProjects} />
            </FadeIn>
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

            <div className="grid auto-rows-fr items-stretch gap-6 md:grid-cols-3">
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

            <ExperienceTimeline />
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

            <EducationTimeline />
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
