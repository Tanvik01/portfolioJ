import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  rotate?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  rotate = 0,
  className = "",
  once = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y, rotate: rotate - 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
