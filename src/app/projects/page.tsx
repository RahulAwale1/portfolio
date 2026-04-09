import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import ProjectShowcaseCard from "@/components/project-showcase-card";

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
          <div className="container-width space-y-6">
            <FadeIn>
              <ProjectShowcaseCard
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
                highlight
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <ProjectShowcaseCard
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
                  "Zephyr-7B",
                ]}
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <ProjectShowcaseCard
                title="Car Price Prediction"
                description="An end-to-end machine learning project covering exploratory analysis, feature engineering, model comparison, and deployment as a FastAPI microservice. Random Forest achieved the strongest performance, with R² of 0.908 and lower error than linear baselines."
                href="/projects/car-price-prediction"
                tags={[
                  "Regression",
                  "Random Forest",
                  "scikit-learn",
                  "FastAPI",
                  "Docker",
                  "REST API",
                ]}
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <ProjectShowcaseCard
                title="Stock Price Prediction: ARIMA vs LSTM"
                description="A time-series forecasting project on Tesla stock data comparing ARIMA and LSTM models. LSTM significantly outperformed ARIMA, reducing RMSE from about 43.25 to 13.19 and better capturing volatile price movement."
                href="/projects/stock-price-forecasting"
                tags={[
                  "Time Series",
                  "ARIMA",
                  "LSTM",
                  "TensorFlow",
                  "yfinance",
                  "Forecasting",
                ]}
              />
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}