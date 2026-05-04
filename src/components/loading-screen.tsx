"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LOADING_DURATION_MS = 1800;

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;

    const updateProgress = () => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min(
        100,
        Math.round((elapsed / LOADING_DURATION_MS) * 100),
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        frame = requestAnimationFrame(updateProgress);
      }
    };

    frame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.025,
        filter: "blur(10px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading Rahul Awale portfolio"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,var(--glow),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(200,217,230,0.08),transparent_26%),radial-gradient(circle_at_50%_82%,rgba(110,151,170,0.1),transparent_30%)]" />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.035]" />

      <motion.div
        className="relative mx-6 flex w-full max-w-[42rem] flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="mb-5 h-px w-14 bg-[var(--accent)]/70 shadow-[0_0_18px_var(--glow)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.h1
          className="font-mono text-4xl font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] sm:text-6xl"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          RAHUL AWALE
        </motion.h1>

        <motion.p
          className="mt-5 font-mono text-xs uppercase tracking-[0.34em] text-muted sm:text-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
        >
          AI/ML ENGINEER
        </motion.p>

        <div className="mt-10 w-full max-w-sm">
          <div className="mb-3 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted">
            <span>INITIALIZING PORTFOLIO</span>
            <span>{progress}%</span>
          </div>
          <div className="h-px overflow-hidden bg-[var(--border)]">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[var(--accent-strong)] to-transparent shadow-[0_0_20px_var(--glow)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: LOADING_DURATION_MS / 1000,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
