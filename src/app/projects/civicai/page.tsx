import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import CaseStudySection from "@/components/case-study-section";
import InfoCard from "@/components/info-card";
import TagRow from "@/components/tag-row";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CivicAI | Rahul Awale",
  description:
    "CivicAI is an AI-powered municipal by-law assistant built with RAG, pgvector, FastAPI, Redis, Celery, AWS, and Cloudflare.",
};

export default function CivicAIPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Flagship Project"
          title="CivicAI"
          description="An AI-powered municipal by-law assistant built to make long-form by-law documents searchable, explainable, and easier to interact with through retrieval-augmented generation, vector search, and asynchronous document processing."
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
                      Building a full-stack AI system for municipal document intelligence
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      CivicAI is a full-stack AI system that enables users to ask natural
                      language questions about municipal by-law documents and receive
                      structured, citation-backed answers. The system combines
                      retrieval-augmented generation (RAG), vector search, and a scalable
                      asynchronous processing pipeline to support real-world document
                      workflows.
                    </p>

                    <div className="mt-6">
                      <TagRow
                        tags={[
                          "RAG",
                          "FastAPI",
                          "Next.js",
                          "pgvector",
                          "Redis",
                          "Celery",
                          "Docker",
                          "AWS",
                          "S3",
                          "Nginx",
                          "Cloudflare",
                        ]}
                      />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href="https://civicai.rahulawale.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        View Live Project
                      </a>

                      <a
                        href="https://github.com/RahulAwale1/CivicAI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="surface-solid rounded-2xl px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <InfoCard label="Role" value="End-to-end builder" />
                    <InfoCard label="System Type" value="Full-stack AI application" />
                    <InfoCard label="Focus" value="Municipal document intelligence" />
                    <InfoCard label="Pipeline" value="Async RAG + vector search" />
                    <InfoCard label="Storage" value="PostgreSQL + pgvector + S3" />
                    <InfoCard label="Infra" value="Redis, Celery, Docker, AWS" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CaseStudySection title="Problem">
          <p>
            Municipal by-law documents are often long, dense, and difficult to search
            efficiently. Users may know what they want to ask, but not where that
            information is located inside a PDF. Traditional keyword search is limited,
            especially when users ask natural-language questions or need context-aware,
            source-backed answers rather than exact phrase matches.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Solution">
          <p>
            CivicAI was built as an AI-powered municipal by-law assistant that combines
            retrieval-augmented generation with vector search and a background
            processing pipeline. Instead of relying only on surface keyword matching,
            the system processes uploaded by-law PDFs, stores embeddings in pgvector,
            and retrieves relevant passages to support explainable, citation-backed
            answers through a chat interface.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <div className="space-y-4">
            <p>
              CivicAI is built as a layered system combining frontend interaction,
              backend APIs, asynchronous processing, and retrieval-based AI workflows.
            </p>

            {/* 👇 ARCHITECTURE IMAGE */}
            <div className="surface rounded-[2rem] p-4 md:p-6">
              <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <img
                  src="/civicai_architecture.png"
                  alt="CivicAI Architecture Diagram"
                  className="w-full h-auto"
                />
              </div>
            </div>


            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-5">
                {[
                  "Next.js Frontend",
                  "FastAPI Backend",
                  "Redis + Celery Queue",
                  "pgvector Retrieval",
                  "AWS + Nginx + Cloudflare",
                ].map((item) => (
                  <div
                    key={item}
                    className="surface-solid rounded-2xl p-4 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p>
              The frontend provides a clean chat-based experience for asking by-law
              questions. FastAPI exposes backend services for document management,
              answering workflows, and admin operations. Redis and Celery manage
              asynchronous jobs, while documents are stored in S3 and embeddings are
              stored in PostgreSQL with pgvector for semantic retrieval.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Processing Workflow">
          <div className="space-y-4">
            <p>
              CivicAI uses an asynchronous document pipeline so uploaded files can be
              processed in the background before becoming searchable.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-3 text-sm md:grid-cols-6">
                {[
                  "Upload PDF",
                  "Store in S3",
                  "Queue Job",
                  "Process (OCR + Chunk)",
                  "Generate Embeddings",
                  "Store in pgvector",
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
              This workflow makes the platform more scalable and production-oriented.
              Instead of processing everything synchronously, jobs move through a queue
              and are handled by workers, allowing the application to support larger
              document sets and clearer job tracking.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Key Features">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Natural language question answering over municipal by-laws",
              "Citation-backed responses with page-level grounding",
              "Admin dashboard for city and document management",
              "Asynchronous processing using Redis and Celery",
              "Vector search using pgvector for semantic retrieval",
              "OCR fallback support for scanned PDF documents",
            ].map((feature) => (
              <div key={feature} className="surface rounded-2xl p-4">
                <p className="text-sm leading-7 text-muted">{feature}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="Job Lifecycle">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                ProcessingJob
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["queued", "running", "completed", "failed"].map((status) => (
                  <span
                    key={status}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
                  >
                    {status}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Document
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["uploaded", "processing", "processed", "failed"].map((status) => (
                  <span
                    key={status}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
                  >
                    {status}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Challenges">
          <div className="space-y-4">
            <p>
              One of the key challenges was designing a reliable asynchronous
              processing pipeline that could handle document ingestion, OCR, chunking,
              and embedding without blocking the main application flow.
            </p>

            <p>
              Another challenge was ensuring retrieval quality. The effectiveness of
              the system depends heavily on how documents are chunked, embedded, and
              stored, which required careful iteration to improve answer relevance and
              accuracy.
            </p>

            <p>
              Building CivicAI as a production-style system also required thinking
              beyond models — focusing on APIs, job lifecycle management,
              infrastructure, secure deployment, and the admin workflows needed to
              manage cities and document sets.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Security & Deployment">
          <div className="space-y-4">
            <p>
              CivicAI was deployed with a layered infrastructure approach using Docker,
              AWS EC2, Nginx, and Cloudflare. S3 is used for document storage, while
              Cloudflare and Nginx help secure and route traffic to the application.
            </p>

            <p>
              The system uses HTTPS, reverse proxy architecture, environment-based
              configuration, and secure API communication between frontend and backend
              services to support a more deployment-ready setup.
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
                Built a complete full-stack AI application that demonstrates municipal
                document question answering, async document processing, admin-managed
                ingestion, semantic retrieval, and deployment-aware engineering.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Technical Value
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Strengthened hands-on experience across RAG architecture, vector
                search, asynchronous systems, deployment infrastructure, and
                full-stack AI application design.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What I Learned">
          <p>
            CivicAI reinforced the importance of treating AI products as systems rather
            than isolated model demos. Building useful AI applications requires strong
            coordination between document ingestion, retrieval quality, job execution,
            API design, infrastructure, and user-facing experience. This project
            strengthened my approach to building AI tools that are not only technically
            interesting, but also architecturally practical and deployable.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </>
  );
}