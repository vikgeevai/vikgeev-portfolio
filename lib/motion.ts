import type { Transition, Variants } from "framer-motion";

// Custom cubic bezier for smooth exits — equivalent to "easeOutExpo"
export const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function makeFadeUp(shouldReduce: boolean | null, delay = 0): Variants {
  const transition: Transition = {
    duration: 0.6,
    ease: easeOutExpo,
    delay: shouldReduce ? 0 : delay,
  };
  return {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition },
  };
}
