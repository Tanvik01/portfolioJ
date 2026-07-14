import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "DripCheck",
    stack: "React · Tailwind CSS · Gemini API",
    body: "Upload photos of your clothes, tell it the vibe you're going for, and it styles an outfit for you.",
    live: "https://drip-check-ten.vercel.app/",
    github: "https://github.com/Tanvik01/DripCheck",
  },
  {
    title: "Talk-to-DB",
    stack: "React · Express · Postgres · Llama 3",
    body: "For the people who just wanna see data and not code for it. Uses NLP to convert voice to SQL queries.",
    live: "https://talk-to-db.netlify.app/",
    github: "https://github.com/Tanvik01/talk-to-db",
  },
  {
    title: "CampusExchange",
    stack: "MERN Stack",
    body: "For students like me who wanna sell their stuff when moving back home, CampusExchange helps other students in the campus buy second hand products.",
    live: "https://campusexchange-production-507e.up.railway.app/",
    github: "https://github.com/Tanvik01/campusExchange",
  },
  {
    title: "Movie Recommendation",
    stack: "JS · Python · Flask · TMDB API",
    body: "Recommends movies using collaborative filtering and TMDB API to contribute to your weekend binge watch.",
    live: "https://madsreccoms.netlify.app/",
    github: "https://github.com/Tanvik01/Movie-Reccomender-System",
  },
  {
    title: "Text-Highlighter",
    stack: "HTML · CSS · JS",
    body: "Chrome extension to save highlights from any webpage. Later, find them in the extension and let AI summarize them for you.",
    live: "https://www.loom.com/share/753f3d83a6134223a8e15774d4bfa827",
    github: "https://github.com/Tanvik01/texthighlighter",
  },
];

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-4xl md:text-6xl ink hand-underline inline-block"
        >
          Things I've shipped
        </motion.h2>
        <p className="mt-3 font-hand text-xl ink/60">↓ pick one</p>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
          {/* Tab list */}
          <div className="flex flex-col gap-3">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative flex items-center gap-4 rounded-lg border-2 border-transparent p-4 text-left transition-all hover:border-ink/40"
                style={{
                  background:
                    active === i ? "oklch(0.58 0.19 28 / 0.12)" : "transparent",
                  transform: active === i ? "translateX(8px)" : "translateX(0)",
                }}
              >
                <span
                  className="font-hand text-4xl transition-opacity"
                  style={{ color: "var(--ink)", opacity: active === i ? 1 : 0.35 }}
                >
                  0{i + 1}
                </span>
                <div>
                  <p className="font-display text-2xl">{p.title}</p>
                  <p className="font-note text-sm text-foreground/60">{p.stack}</p>
                </div>
                {active === i && (
                  <motion.span
                    layoutId="proj-arrow"
                    className="ml-auto font-hand text-3xl ink"
                  >
                    →
                  </motion.span>
                )}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-paper text-paper-foreground sketch-border paper-grid p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute -top-3 right-10 h-6 w-24 rotate-3 tape rounded-sm" />
            <p className="font-hand text-2xl ink/60">project</p>
            <h3 className="mt-1 font-display text-4xl md:text-5xl ink">
              {projects[active].title}
            </h3>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest ink/70">
              {projects[active].stack}
            </p>
            <p className="mt-6 font-note text-lg leading-relaxed ink/90">
              {projects[active].body}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-hand text-xl">
              <a
                href={projects[active].live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 ink hand-underline"
              >
                live demo{" "}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <a
                href={projects[active].github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 ink hand-underline"
              >
                github{" "}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
