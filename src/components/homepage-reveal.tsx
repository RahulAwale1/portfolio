"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import LoadingScreen, { LOADING_DURATION_MS } from "./loading-screen";

let introHasPlayed = false;

type HomepageRevealProps = {
  children: ReactNode;
};

export default function HomepageReveal({ children }: HomepageRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(() => !introHasPlayed);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      introHasPlayed = true;
      setIsLoading(false);
    }, shouldReduceMotion ? 900 : LOADING_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isLoading, shouldReduceMotion]);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <motion.div
        initial={introHasPlayed ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={
          isLoading
            ? { opacity: 0, y: 30, filter: "blur(8px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: shouldReduceMotion ? 0 : 0.08,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
