import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Smooth the raw scroll value so the line glides instead of jumping
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1.5">
      {/* the ink line that fills as you scroll */}
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-ink"
      >
        {/* pencil tip riding the leading edge of the line */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path
              d="M4 18 L14 8 L18 12 L8 22 Z"
              transform="translate(-2 -6)"
              fill="var(--paper)"
              stroke="var(--ink)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M14 8 L17 5 L21 9 L18 12 Z"
              transform="translate(-2 -6)"
              fill="var(--ink)"
              stroke="var(--ink)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.div>
    </div>
  );
}
