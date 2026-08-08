import { motion } from "framer-motion";

interface Props {
  className?: string;
  flip?: boolean;
}

export function SectionDivider({ className = "", flip = false }: Props) {
  return (
    <div className={`relative flex justify-center py-6 ${className}`}>
      <motion.svg
        width="280"
        height="32"
        viewBox="0 0 280 32"
        fill="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <motion.path
          d="M4 16 Q 70 6, 140 16 T 276 14"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.5,
              transition: { duration: 1.4, ease: "easeInOut" },
            },
          }}
        />
        <motion.circle
          cx="140"
          cy="16"
          r="3"
          fill="var(--ink)"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 0.5,
              transition: { delay: 1.2, duration: 0.4 },
            },
          }}
        />
      </motion.svg>
    </div>
  );
}
