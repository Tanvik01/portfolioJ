import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1.5 w-full origin-left"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 6"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0 3 Q 200 1, 400 3 T 800 3 T 1200 3"
          stroke="var(--ink)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
