import { motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";

const links = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "design", label: "design" },
  { id: "connect", label: "connect" },
];

export function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Home page: the Hero component owns its own nav — don't render the pill here
  if (isHome) return null;

  const href = (id: string) => `/#${id}`;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-ink/30 bg-background/80 px-4 py-2 backdrop-blur-md">
        <a
          href="/"
          className="mr-2 text-ink font-note text-base leading-none"
          aria-label="home"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          ←
        </a>
        {links.map((l) => (
          <a
            key={l.id}
            href={href(l.id)}
            className="relative px-3 py-1 font-hand text-lg text-foreground/85 transition-colors hover:text-ink hover:underline underline-offset-4"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
