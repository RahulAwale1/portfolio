import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import CaseStudySection from "@/components/case-study-section";
import InfoCard from "@/components/info-card";
import TagRow from "@/components/tag-row";

export const metadata: Metadata = {
  title: "Belleville By-Law Assistant | Rahul Awale",
  description:
    "A retrieval-augmented municipal by-law assistant built with OCR, FAISS, FastAPI, Streamlit, Gradio, and local LLM workflows.",
};

export default function ByLawPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Project"
          title="Belleville By-Law Assistant"
          description="A retrieval-augmented municipal by-law assistant built to answer natural-language questions over scanned city by-law documents with structured, citation-backed responses."
        />

        <section className="pb-8">
          <div className="container-width">
            <FadeIn>
              <div className="surface rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
                      Project Overview
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                      Transforming scanned by-law PDFs into an interactive legal assistant
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      Belleville By-Law Assistant is a retrieval-augmented generation
                      system that turns the City of Belleville’s public by-law
                      documents into a searchable AI assistant. Many of these documents
                      exist as scanned PDFs, so the system combines OCR, chunking,
                      embeddings, vector retrieval, and LLM-based answering to provide
                      structured responses with legal grounding and page-level citations.
                    </p>

                    <div className="mt-6">
                      <TagRow
                        tags={[
                          "OCR",
                          "RAG",
                          "FAISS",
                          "FastAPI",
                          "Streamlit",
                          "Gradio",
                          "Sentence-Transformers",
                          "Llama3",
                          "Zephyr-7B",
                        ]}
                      />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href="https://github.com/RahulAwale1/Belleville-By-Law-Assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <InfoCard label="Focus" value="Municipal legal Q&A" />
                    <InfoCard label="System Type" value="OCR + RAG assistant" />
                    <InfoCard label="Retrieval" value="MiniLM + FAISS" />
                    <InfoCard label="Backend" value="FastAPI" />
                    <InfoCard label="Frontend" value="Streamlit + Gradio" />
                    <InfoCard label="LLM Support" value="Llama3 + Zephyr-7B" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CaseStudySection title="Problem">
          <p>
            Municipal by-law documents are often long, difficult to navigate, and in
            many cases stored as scanned PDFs rather than clean text. That makes
            standard keyword search unreliable, especially when users ask questions in
            natural language and need precise, legally grounded answers instead of
            guessing which section to open manually.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Solution">
          <p>
            I built a RAG-based assistant that processes scanned by-law PDFs through
            OCR, cleans and chunks the extracted text, generates semantic embeddings,
            stores them in a FAISS index, and retrieves the most relevant sections for
            answering. The retrieved context is then passed to local or hosted LLM
            workflows to generate structured answers with citations.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <div className="space-y-4">
            <p>
              The system is structured as a document intelligence pipeline with
              retrieval and answer generation layered on top of OCR and preprocessing.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-6">
                {[
                  "Scanned PDFs",
                  "Tesseract OCR",
                  "Cleaning + Chunking",
                  "MiniLM Embeddings",
                  "FAISS Retrieval",
                  "Llama3 / Zephyr Answering",
                ].map((item) => (
                  <div
                    key={item}
                    className="surface-solid rounded-2xl p-4 text-center text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p>
              The pipeline begins with scanned or text-based by-law PDFs, extracts
              text using Tesseract OCR and pdf2image, normalizes and chunks the
              content, generates embeddings using Sentence-Transformers
              MiniLM-L6-v2, and indexes the chunks in FAISS for semantic retrieval.
              The system then uses Llama3 through Ollama or Zephyr-7B for grounded
              answer generation, with FastAPI powering inference and Streamlit or
              Gradio used for interaction.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Processing Pipeline">
          <div className="space-y-4">
            <p>
              The core workflow follows a structured RAG pipeline designed for noisy
              real-world municipal documents.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-3 text-sm md:grid-cols-6">
                {[
                  "OCR",
                  "Cleaning",
                  "Chunking",
                  "Embeddings",
                  "FAISS Search",
                  "Structured Legal Answer",
                ].map((step) => (
                  <div
                    key={step}
                    className="surface-solid rounded-xl p-3 text-center"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <p>
              This workflow helps convert static PDFs into a usable knowledge system,
              where users can ask legal or municipal questions and receive grounded
              responses instead of manually scanning through entire documents.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Key Features">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "OCR extraction from scanned municipal PDFs using Tesseract and pdf2image",
              "Cleaning and normalization to handle noisy formatting and OCR errors",
              "Semantic retrieval using MiniLM embeddings and FAISS vector search",
              "Dual LLM support with local Llama3 and Zephyr-7B benchmarking",
              "FastAPI backend for RAG inference and question answering",
              "Streamlit and Gradio interfaces for chat-based interaction",
            ].map((feature) => (
              <div key={feature} className="surface rounded-2xl p-4">
                <p className="text-sm leading-7 text-muted">{feature}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="Challenges">
          <div className="space-y-4">
            <p>
              A major challenge was dealing with document quality. Scanned by-law PDFs
              introduce OCR noise, broken formatting, and multi-page inconsistencies,
              all of which affect the quality of downstream chunking and retrieval.
            </p>

            <p>
              Another challenge was improving retrieval quality in a legal-style
              domain. Strong answers depended not only on the model, but also on
              meaningful chunk boundaries, embedding quality, and retrieving the right
              sections for grounding.
            </p>

            <p>
              The project also involved comparing different LLM options for latency,
              grounding, and hallucination behavior. Using both local Llama3 via
              Ollama and Zephyr-7B helped evaluate trade-offs between offline
              inference, answer quality, and response speed.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Results">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Outcome
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Built an interactive municipal by-law assistant capable of answering
                natural-language questions with structured, citation-backed responses
                instead of forcing users to manually search scanned PDFs.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Technical Value
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Strengthened hands-on experience in OCR preprocessing, FAISS-based
                semantic retrieval, RAG pipeline design, API integration, UI delivery,
                and evaluation of multiple LLM workflows.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What I Learned">
          <p>
            This project reinforced that document AI systems depend heavily on
            preprocessing and retrieval quality, not just the generation layer.
            Working with scanned PDFs also made it clear how important robust OCR,
            chunk design, and citation grounding are when building useful AI systems
            for legal or policy-oriented documents.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </>
  );
}