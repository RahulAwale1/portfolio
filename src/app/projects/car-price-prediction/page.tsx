import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import CaseStudySection from "@/components/case-study-section";
import InfoCard from "@/components/info-card";
import TagRow from "@/components/tag-row";

export const metadata: Metadata = {
  title: "Car Price Prediction | Rahul Awale",
  description:
    "A car price prediction project covering EDA, feature engineering, model comparison, FastAPI deployment, and Docker packaging.",
};

export default function CarPricePage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Project"
          title="Car Price Prediction"
          description="An end-to-end machine learning project that moves from exploratory analysis and feature engineering to model selection, API deployment, and Docker-based packaging."
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
                      From notebook experimentation to a deployable ML prediction service
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      This project predicts car prices using the Car Price Assignment
                      dataset and demonstrates a complete ML workflow: exploratory data
                      analysis, feature engineering, model comparison, and deployment as
                      a REST API using FastAPI and Docker. The final system turns a
                      trained model into a usable microservice rather than stopping at
                      notebook results alone.
                    </p>

                    <div className="mt-6">
                      <TagRow
                        tags={[
                          "Regression",
                          "scikit-learn",
                          "FastAPI",
                          "Docker",
                          "Feature Engineering",
                          "Random Forest",
                          "REST API",
                        ]}
                      />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href="https://github.com/RahulAwale1/Car_price_prediction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <InfoCard label="Task" value="Supervised regression" />
                    <InfoCard label="Dataset" value="205 rows, 26 columns" />
                    <InfoCard label="Target" value="price" />
                    <InfoCard label="Best Model" value="Random Forest" />
                    <InfoCard label="Deployment" value="FastAPI + Docker" />
                    <InfoCard label="Focus" value="ML to deployment" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CaseStudySection title="Problem">
          <p>
            Car pricing is influenced by a mix of numeric and categorical features,
            including size, horsepower, fuel type, brand, body style, and mileage.
            Predicting price accurately requires more than fitting a baseline model,
            because brand quality, category effects, and non-linear interactions all
            play an important role.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Solution">
          <p>
            I built a full regression workflow that started with exploratory analysis
            and data cleaning, then moved into feature engineering, training, model
            comparison, and deployment. After evaluating multiple regression
            approaches, I selected the strongest model and exposed it through a
            FastAPI endpoint, packaged in Docker for portable use.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Feature Engineering">
          <div className="space-y-4">
            <p>
              A major part of the project was making the raw dataset more useful for
              prediction by improving feature quality before model training.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Extracted brand from CarName",
                "Added luxury flag for premium brands",
                "Corrected brand typos such as vw, vokswagen, and maxda",
                "Removed irrelevant identifier column (car_ID)",
                "Encoded categorical features for training",
                "Integrated preprocessing into the ML pipeline",
              ].map((item) => (
                <div key={item} className="surface rounded-2xl p-4">
                  <p className="text-sm leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <div className="space-y-4">
            <p>
              The project was structured as a practical end-to-end ML system rather
              than only a notebook experiment.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-5">
                {[
                  "EDA + Cleaning",
                  "Feature Engineering",
                  "Model Training",
                  "FastAPI Inference",
                  "Docker Deployment",
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
              The final deployed workflow includes preprocessing, brand cleaning,
              model inference, and API response generation. This makes the system
              usable as a standalone service rather than a one-time training script.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Model Comparison">
          <div className="space-y-4">
            <p>
              I evaluated multiple regression models using MAE, RMSE, and R² to
              compare prediction quality across linear, regularized, tree-based, and
              ensemble approaches. Random Forest performed best, with lower error and
              stronger overall fit than the baseline linear models.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="pb-3 pr-4 font-medium">Model</th>
                      <th className="pb-3 pr-4 font-medium">MAE</th>
                      <th className="pb-3 pr-4 font-medium">RMSE</th>
                      <th className="pb-3 font-medium">R²</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 pr-4">Linear Regression</td>
                      <td className="py-3 pr-4">1992.09</td>
                      <td className="py-3 pr-4">2603.75</td>
                      <td className="py-3">0.853</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 pr-4">Ridge Regression</td>
                      <td className="py-3 pr-4">1982.39</td>
                      <td className="py-3 pr-4">2600.44</td>
                      <td className="py-3">0.854</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 pr-4">Lasso Regression</td>
                      <td className="py-3 pr-4">1992.11</td>
                      <td className="py-3 pr-4">2603.78</td>
                      <td className="py-3">0.853</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 pr-4">Decision Tree</td>
                      <td className="py-3 pr-4">1559.32</td>
                      <td className="py-3 pr-4">2135.54</td>
                      <td className="py-3">0.901</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[var(--foreground)]">
                        Random Forest
                      </td>
                      <td className="py-3 pr-4 font-medium text-[var(--foreground)]">
                        1393.35
                      </td>
                      <td className="py-3 pr-4 font-medium text-[var(--foreground)]">
                        2068.17
                      </td>
                      <td className="py-3 font-medium text-[var(--foreground)]">
                        0.908
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Deployment">
          <div className="space-y-4">
            <p>
              After selecting Random Forest as the best-performing model, I extended
              the project into deployment by exposing the model through a FastAPI REST
              API and packaging the service with Docker. The inference layer includes
              preprocessing and brand cleaning so inputs can be handled consistently
              at prediction time.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "FastAPI endpoint for prediction requests",
                "Swagger documentation via /docs",
                "Saved ML pipeline using joblib",
                "Dockerized API for portable deployment",
                "Preprocessing integrated into inference flow",
                "Input correction for misspelled brand names",
              ].map((item) => (
                <div key={item} className="surface rounded-2xl p-4">
                  <p className="text-sm leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Challenges">
          <div className="space-y-4">
            <p>
              One of the main challenges was improving model performance through
              feature engineering rather than relying only on algorithm choice.
              Extracting brand information and identifying premium brands helped make
              the structured data more predictive.
            </p>

            <p>
              Another challenge was ensuring that deployment behavior matched training
              behavior. This meant integrating preprocessing and brand correction into
              the inference pipeline so the API could handle real input more reliably.
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
                Built a complete ML workflow that moved from exploratory analysis and
                feature engineering to deployed inference, demonstrating the full
                lifecycle of a regression project.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Technical Value
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Strengthened experience in regression modeling, model comparison,
                feature engineering, FastAPI API design, and Docker-based deployment
                of machine learning services.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What I Learned">
          <p>
            This project reinforced that strong ML performance often comes from data
            preparation and feature design as much as model selection. It also helped
            me connect notebook-based experimentation to production-oriented delivery
            by packaging the trained model into a real API service.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </>
  );
}