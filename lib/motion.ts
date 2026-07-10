import type { Transition, Variants } from "framer-motion";

import { motionDuration } from "@/lib/design-system";

/** Refined ease — deliberate, never bouncy. */
export const easeRefined: Transition["ease"] = [0.25, 0.1, 0.25, 1];

export const transition: Transition = {
  duration: motionDuration.base,
  ease: easeRefined,
};

export const transitionFast: Transition = {
  duration: motionDuration.fast,
  ease: easeRefined,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/** Instant reveal when reduced motion is preferred. */
export const staticReveal: Variants = {
  hidden: { opacity: 1, y: 0, x: 0 },
  visible: { opacity: 1, y: 0, x: 0 },
};
