import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import ProjectShowcaseCard from "@/components/project-showcase-card";

const projects = [
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
    highlight: true,
  },
  {
    title: "InboxPilot AI",
    description:
      "A full-stack AI-powered email assistant that integrates with Gmail and Google Calendar to classify job-related emails, track application status, automate interview scheduling, and generate an AI-driven career digest. Built with Next.js, FastAPI, PostgreSQL, and OpenAI, and deployed on Vercel and Render.",
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
    tags: [
      "OCR",
      "RAG",
      "FAISS",
      "FastAPI",
      "Streamlit",
      "Gradio",
      "Llama3",
      "Zephyr-7B",
    ],
  },
  {
    title: "Car Price Prediction",
    description:
      "An end-to-end machine learning project covering exploratory analysis, feature engineering, model comparison, and deployment as a FastAPI microservice. Random Forest achieved the strongest performance, with R² of 0.908 and lower error than linear baselines.",
    href: "/projects/car-price-prediction",
    tags: [
      "Regression",
      "Random Forest",
      "scikit-learn",
      "FastAPI",
      "Docker",
      "REST API",
    ],
  },
  {
    title: "Stock Price Prediction: ARIMA vs LSTM",
    description:
      "A time-series forecasting project on Tesla stock data comparing ARIMA and LSTM models. LSTM significantly outperformed ARIMA, reducing RMSE from about 43.25 to 13.19 and better capturing volatile price movement.",
    href: "/projects/stock-price-forecasting",
    tags: [
      "Time Series",
      "ARIMA",
      "LSTM",
      "TensorFlow",
      "yfinance",
      "Forecasting",
    ],
  },
];

export const metadata: Metadata = {
  title: "Projects | Rahul Awale",
  description:
    "Selected projects by Rahul Awale across machine learning, retrieval systems, OCR pipelines, APIs, and deployable AI applications.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Projects"
          title="Selected work across ML, GenAI, and deployable systems"
          description="A collection of projects focused on retrieval-augmented generation, OCR-based document intelligence, regression systems, forecasting, and deployment-oriented backend engineering."
        />

        <section className="pb-24">
          <div className="container-width">
            <div className="relative">
              <div className="absolute left-1/2 top-0 hidden h-full w-3 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] md:block" />
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--accent)]/45 md:block" />

              <div className="space-y-10 md:space-y-0">
                {projects.map((project, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <FadeIn key={project.href} delay={index * 0.05}>
                      <div className="relative md:grid md:min-h-[430px] md:grid-cols-[1fr_6rem_1fr] md:items-start">
                        <div
                          className={`hidden md:block ${
                            isLeft ? "md:col-start-1" : "md:col-start-3"
                          }`}
                        >
                          <div className="relative">
                            <ProjectShowcaseCard {...project} />
                          </div>
                        </div>

                        <div className="hidden justify-center md:col-start-2 md:flex">
                          <div className="mt-[0.85rem] h-8 w-8 rounded-full border border-[var(--border)] bg-[var(--card-solid)] p-2 shadow-[0_20px_40px_-28px_rgba(47,65,86,0.5)]">
                            <div className="h-full w-full rounded-full bg-[var(--accent)]/80 shadow-[0_0_18px_var(--glow)]" />
                          </div>
                        </div>

                        <div className="md:hidden">
                          <ProjectShowcaseCard {...project} />
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
