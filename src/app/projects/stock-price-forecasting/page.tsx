import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import CaseStudySection from "@/components/case-study-section";
import InfoCard from "@/components/info-card";
import TagRow from "@/components/tag-row";

export const metadata: Metadata = {
  title: "Stock Price Forecasting | Rahul Awale",
  description:
    "A Tesla stock forecasting project comparing ARIMA and LSTM using Yahoo Finance data, with RMSE-based evaluation.",
};

export default function StockPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          eyebrow="Project"
          title="Stock Price Prediction: ARIMA vs LSTM"
          description="A time-series forecasting project built on Tesla stock data to compare a classical statistical baseline with a deep learning sequence model and evaluate how each performs on volatile financial series."
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
                      Comparing classical forecasting and deep learning on Tesla stock prices
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                      This project demonstrates time-series forecasting on Tesla
                      (TSLA) stock prices using both ARIMA and LSTM. The goal was to
                      compare how a classical forecasting method and a deep learning
                      sequence model handle real stock price movement, especially in a
                      volatile and non-stationary financial setting.
                    </p>

                    <div className="mt-6">
                      <TagRow
                        tags={[
                          "Time Series",
                          "ARIMA",
                          "LSTM",
                          "TensorFlow",
                          "yfinance",
                          "Forecasting",
                          "RMSE",
                        ]}
                      />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href="https://github.com/RahulAwale1/Stock-Price-Prediction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <InfoCard label="Dataset" value="Tesla (TSLA)" />
                    <InfoCard label="Source" value="Yahoo Finance" />
                    <InfoCard label="Period" value="2018-01-01 to 2023-12-31" />
                    <InfoCard label="Feature Used" value="Closing Price" />
                    <InfoCard label="Classical Model" value="ARIMA (5,1,0)" />
                    <InfoCard label="Deep Learning" value="2-layer LSTM" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CaseStudySection title="Problem">
          <p>
            Stock price prediction is difficult because financial time-series data is
            noisy, non-stationary, and highly sensitive to changing market dynamics.
            Classical forecasting models can provide useful baselines, but they often
            struggle when price movement becomes more nonlinear or volatile.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Solution">
          <p>
            I built two forecasting pipelines on Tesla closing price data: one using
            ARIMA as a statistical baseline, and another using LSTM to model
            sequential patterns in the time series. Both models were evaluated on the
            same test period using RMSE to compare their predictive performance.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Dataset">
          <div className="space-y-4">
            <p>
              The dataset was sourced from Yahoo Finance and focused specifically on
              Tesla stock.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Stock
                </p>
                <p className="mt-3 text-sm font-medium">Tesla Inc. (TSLA)</p>
              </div>

              <div className="surface rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Date Range
                </p>
                <p className="mt-3 text-sm font-medium">2018-01-01 → 2023-12-31</p>
              </div>

              <div className="surface rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Source
                </p>
                <p className="mt-3 text-sm font-medium">Yahoo Finance via yfinance</p>
              </div>

              <div className="surface rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Series Used
                </p>
                <p className="mt-3 text-sm font-medium">Closing Price</p>
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <div className="space-y-4">
            <p>
              The project followed a structured comparison workflow, beginning with
              data preparation and splitting into two forecasting approaches for
              evaluation.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-5">
                {[
                  "Yahoo Finance Data",
                  "Preprocessing",
                  "ARIMA Baseline",
                  "LSTM Sequence Model",
                  "RMSE Evaluation",
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
              Both models were trained on historical Tesla closing prices and tested
              on a held-out portion of the series. ARIMA provided a classical
              forecasting benchmark, while LSTM was used to capture sequential and
              nonlinear patterns more effectively.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Methods">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface rounded-2xl p-5">
              <h3 className="text-lg font-semibold tracking-tight">ARIMA</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Used ARIMA with parameters (p=5, d=1, q=0), trained on 80% of the
                historical data and forecasted on the remaining 20%. This served as a
                strong statistical baseline for comparison.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <h3 className="text-lg font-semibold tracking-tight">LSTM</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Used MinMax scaling with a 60-day lookback window and a two-layer LSTM
                architecture with 50 units per layer, dropout of 0.2, and a dense
                output layer for next-day prediction.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Model Comparison">
          <div className="space-y-4">
            <p>
              The models were evaluated using RMSE to compare predictive error on the
              same test period. ARIMA struggled with Tesla’s volatility, while LSTM
              tracked price movement more closely and significantly reduced forecast
              error.
            </p>

            <div className="surface rounded-[2rem] p-5 md:p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="pb-3 pr-4 font-medium">Model</th>
                      <th className="pb-3 pr-4 font-medium">RMSE</th>
                      <th className="pb-3 font-medium">Observation</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 pr-4">ARIMA (5,1,0)</td>
                      <td className="py-3 pr-4">43.25</td>
                      <td className="py-3">
                        Flattened around the mean and struggled with volatility
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[var(--foreground)]">
                        LSTM
                      </td>
                      <td className="py-3 pr-4 font-medium text-[var(--foreground)]">
                        13.19
                      </td>
                      <td className="py-3 font-medium text-[var(--foreground)]">
                        Followed actual movements more closely
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Key Insights">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "ARIMA provided a useful baseline but struggled with Tesla’s volatility",
              "LSTM significantly reduced prediction error compared to ARIMA",
              "Deep learning was better at modeling nonlinear stock movement",
              "Time-series preprocessing strongly influenced model behavior",
              "More flexible models can perform better on non-stationary financial data",
              "Better performance came with greater tuning and modeling complexity",
            ].map((insight) => (
              <div key={insight} className="surface rounded-2xl p-4">
                <p className="text-sm leading-7 text-muted">{insight}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="Challenges">
          <div className="space-y-4">
            <p>
              A major challenge was working with non-stationary stock data, where
              price patterns and volatility shift over time. This makes forecasting
              difficult for models that assume more stable structure.
            </p>

            <p>
              Another challenge was building a fair comparison between a statistical
              model and a neural sequence model. Each method requires different
              preprocessing and assumptions, so evaluation had to stay grounded in a
              shared test setup and consistent error metric.
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
                Built a comparative forecasting project that showed LSTM
                substantially outperforming ARIMA on Tesla stock price prediction,
                with roughly a 70% reduction in RMSE.
              </p>
            </div>

            <div className="surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Technical Value
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Strengthened practical understanding of time-series preprocessing,
                ARIMA baselines, sequence modeling with LSTM, and RMSE-based
                forecasting evaluation on real stock data.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What I Learned">
          <p>
            This project helped me better understand how different forecasting
            paradigms behave on the same financial dataset. It reinforced the value
            of using strong baselines, carefully preparing sequential data, and
            evaluating models with clear metrics before claiming improvement.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </>
  );
}