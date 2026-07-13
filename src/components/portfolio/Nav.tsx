import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "connect", label: "connect" },
];

export function Nav() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-ink/30 bg-background/80 px-4 py-2 backdrop-blur-md">
        <a href="#top" className="mr-2 text-ink" aria-label="home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
            <path d="M8 14 Q 12 17, 16 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </a>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onMouseEnter={() => setHover(l.id)}
            onMouseLeave={() => setHover(null)}
            className="relative px-3 py-1 font-hand text-lg text-foreground/85 transition-colors hover:text-ink"
          >
            {l.label}
            {hover === l.id && (
              <motion.svg
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 4 Q 30 1, 50 3 T 98 2"
                  stroke="var(--ink)"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
