import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tape?: "both" | "top-left" | "top-right" | "none";
  lined?: boolean;
  grid?: boolean;
}

export function PaperCard({
  children,
  className = "",
  rotate = 0,
  tape = "both",
  lined = false,
  grid = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative bg-paper text-paper-foreground sketch-border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ${
        grid ? "paper-grid" : ""
      } ${lined ? "paper-lined" : ""} ${className}`}
    >
      {(tape === "both" || tape === "top-left") && (
        <div className="absolute -top-3 left-8 h-6 w-20 -rotate-6 tape rounded-sm" />
      )}
      {(tape === "both" || tape === "top-right") && (
        <div className="absolute -top-3 right-10 h-6 w-24 rotate-3 tape rounded-sm" />
      )}
      {children}
    </motion.div>
  );
}
