import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import CaseStudySection from "@/components/case-study-section";
import InfoCard from "@/components/info-card";
import TagRow from "@/components/tag-row";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InboxPilot AI | Rahul Awale",
  description:
    "InboxPilot AI is an AI-powered email assistant that connects Gmail, Google Calendar, OpenAI, FastAPI, PostgreSQL, Next.js, Vercel, and Render to automate job search workflows.",
};

export default function InboxPilotPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Project"
          title="InboxPilot AI"
          description="An AI-powered email assistant that transforms job search inboxes into structured insights, automated workflows, and actionable career intelligence."
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
                      Building an AI-powered workflow system for job search emails
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      InboxPilot AI connects to Gmail and Google Calendar to help
                      organize job search activity automatically. It fetches
                      job-related emails, classifies them using AI, extracts structured
                      application data, tracks application status, creates interview
                      events, and generates an AI-powered career digest.
                    </p>

                    <div className="mt-6">
                      <TagRow
                        tags={[
                          "Next.js",
                          "FastAPI",
                          "PostgreSQL",
                          "OpenAI",
                          "Gmail API",
                          "Google Calendar API",
                          "OAuth",
                          "SQLAlchemy",
                          "Docker",
                          "Vercel",
                          "Render",
                        ]}
                      />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href="https://inboxai.rahulawale.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        View Live Project
                      </a>

                      <a
                        href="https://github.com/RahulAwale1/InboxPilotAI.git"
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
                    <InfoCard label="System Type" value="Full-stack AI assistant" />
                    <InfoCard label="Focus" value="Job search automation" />
                    <InfoCard label="AI Layer" value="OpenAI classification" />
                    <InfoCard label="Integrations" value="Gmail + Calendar APIs" />
                    <InfoCard label="Deployment" value="Vercel + Render" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CaseStudySection title="Problem">
          <p>
            Job search emails are difficult to manage manually. Application updates,
            recruiter replies, interview invitations, rejections, and follow-ups can
            get buried in the inbox, making it hard to track progress and take timely
            action.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Solution">
          <p>
            InboxPilot AI turns the inbox into a structured job tracking system. It
            connects securely through Google OAuth, syncs Gmail messages, classifies
            emails using AI, extracts relevant job information, updates application
            status, and creates calendar events for interviews when needed.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <div className="space-y-4">
            <p>
              InboxPilot AI is built as a full-stack workflow automation system that
              connects the frontend, backend, database, AI layer, and Google APIs.
            </p>

            <div className="surface rounded-[2rem] p-4 md:p-6">
              <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <img
                  src="/inbox-architecture.png"
                  alt="InboxAI Architecture Diagram"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-5">
                {[
                  "Next.js Frontend",
                  "FastAPI Backend",
                  "PostgreSQL Database",
                  "Gmail + Calendar APIs",
                  "OpenAI Processing",
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
              The frontend is deployed on Vercel, while the FastAPI backend and
              PostgreSQL database are hosted on Render. Gmail and Google Calendar APIs
              provide email and scheduling access, and OpenAI is used for
              classification, extraction, and career digest generation.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Workflow">
          <div className="space-y-4">
            <p>
              The system follows an end-to-end workflow from authentication to email
              intelligence and automation.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-3 text-sm md:grid-cols-6">
                {[
                  "Google OAuth",
                  "Sync Gmail",
                  "Classify Email",
                  "Extract Job Data",
                  "Track Status",
                  "Create Digest",
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
              This workflow helps convert unstructured email content into structured
              career data, making the job search easier to review, track, and act on.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Key Features">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Secure Google OAuth login with Gmail and Calendar access",
              "Inbox sync engine for fetching job-related emails",
              "AI email classification into job, event, and other categories",
              "Structured extraction of company, role, and application status",
              "Job application lifecycle tracking with deduplication and updates",
              "Google Calendar automation for interview events",
              "Token refresh system for expired OAuth tokens",
              "AI-powered career digest for activity summaries and next actions",
            ].map((feature) => (
              <div key={feature} className="surface rounded-2xl p-4">
                <p className="text-sm leading-7 text-muted">{feature}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="Integrations">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Google APIs
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Gmail API is used to fetch and process emails, while Google Calendar
                API enables automated interview event creation.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                AI Processing
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                OpenAI is used to classify emails, extract structured job data, and
                generate career digest summaries.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Backend
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                FastAPI and SQLAlchemy power the backend API, data models, sync logic,
                and structured job tracking workflows.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Deployment
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                The frontend is deployed on Vercel, while the backend API and
                PostgreSQL database are deployed on Render.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Challenges">
          <div className="space-y-4">
            <p>
              One major challenge was handling Google OAuth properly, including login,
              token storage, expired token handling, and refresh flows so Gmail and
              Calendar access would remain reliable over time.
            </p>

            <p>
              Another challenge was turning messy real-world email content into
              structured job tracking data. The system needed to classify messages,
              extract useful fields, avoid duplicates, and update application status
              consistently.
            </p>

            <p>
              Since the app interacts with sensitive user data, the project also
              required careful thinking around OAuth scopes, secure API communication,
              environment configuration, and production deployment behavior.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Security & Deployment">
          <div className="space-y-4">
            <p>
              InboxPilot AI uses Google OAuth for authentication and connects to Gmail
              and Calendar APIs through approved scopes. The frontend is served from
              Vercel, the backend API runs on Render, and PostgreSQL stores structured
              application and sync data.
            </p>

            <p>
              Google OAuth is currently in testing mode, so access is limited to
              approved test users. This keeps the project usable for demonstration
              while respecting Google’s OAuth app verification process.
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
                Built a deployed AI assistant that connects Gmail, Google Calendar,
                OpenAI, FastAPI, and PostgreSQL to automate job search tracking and
                career activity summaries.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Technical Value
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Strengthened hands-on experience with OAuth, external API
                integrations, AI classification, structured data extraction, backend
                workflows, and full-stack cloud deployment.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What I Learned">
          <p>
            InboxPilot AI reinforced how powerful AI becomes when connected to real
            user workflows. The project helped me practice integrating LLMs with
            external APIs, managing OAuth-based access, designing structured tracking
            systems, and deploying a full-stack AI application that solves a practical
            career workflow problem.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </>
  );
}