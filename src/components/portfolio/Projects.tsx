import { motion } from "framer-motion";

const projects = [
  {
    title: "RefactorPlus",
    date: "Jul 2026",
    stack: "React.js · Express.js · MongoDB · Node.js · Groq API · Prism.js",
    body: "AI-powered code review assistant that analyzes React components or Node.js controllers via LLM — returns a quality score, categorized issues, and a GitHub PR-style unified diff view with inline annotations.",
    live: "https://refactor-plus.vercel.app/",
    github: "https://github.com/Tanvik01/RefactorPlus",
    accent: "oklch(0.72 0.22 160)",
    tag: "New ✦",
  },
  {
    title: "DripCheck",
    date: "2025",
    stack: "React · Tailwind CSS · Gemini API",
    body: "Upload photos of your clothes, tell it the vibe you're going for, and it styles an outfit for you.",
    live: "https://drip-check-ten.vercel.app/",
    github: "https://github.com/Tanvik01/DripCheck",
    accent: "oklch(0.72 0.22 28)",
    tag: "",
  },
  {
    title: "Talk-to-DB",
    date: "2025",
    stack: "React · Express · Postgres · Llama 3",
    body: "For people who just wanna see data and not code for it. Uses NLP to convert voice to SQL queries.",
    live: "https://talk-to-db.netlify.app/",
    github: "https://github.com/Tanvik01/talk-to-db",
    accent: "oklch(0.72 0.20 270)",
    tag: "",
  },
  {
    title: "CampusExchange",
    date: "2024",
    stack: "MERN Stack",
    body: "For students who wanna sell their stuff when moving back home. Helps other campus students buy second-hand products.",
    live: "https://campusexchange-production-507e.up.railway.app/",
    github: "https://github.com/Tanvik01/campusExchange",
    accent: "oklch(0.72 0.18 200)",
    tag: "",
  },
  {
    title: "Movie Recommender",
    date: "2024",
    stack: "JS · Python · Flask · TMDB API",
    body: "Recommends movies using collaborative filtering and TMDB API to fuel your weekend binge watch.",
    live: "https://madsreccoms.netlify.app/",
    github: "https://github.com/Tanvik01/Movie-Reccomender-System",
    accent: "oklch(0.72 0.20 55)",
    tag: "",
  },
  {
    title: "Text-Highlighter",
    date: "2024",
    stack: "HTML · CSS · JS",
    body: "Chrome extension to save highlights from any webpage. Find them later in the extension and let AI summarize them for you.",
    live: "https://www.loom.com/share/753f3d83a6134223a8e15774d4bfa827",
    github: "https://github.com/Tanvik01/texthighlighter",
    accent: "oklch(0.72 0.20 320)",
    tag: "",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Projects() {
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
        <p className="mt-3 font-hand text-xl ink/60">↓ latest first</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="group relative flex flex-col rounded-2xl border border-ink/10 bg-paper overflow-hidden"
              style={
                {
                  "--accent": p.accent,
                  minHeight: "260px",
                } as React.CSSProperties
              }
            >
              {/* Coloured top bar */}
              <div
                className="h-[3px] w-full shrink-0"
                style={{ background: p.accent }}
              />

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Date + number row */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-hand text-xs uppercase tracking-widest"
                    style={{ color: p.accent }}
                  >
                    {p.date}
                    {p.tag ? (
                      <>
                        {" · "}
                        <span className="font-semibold">{p.tag}</span>
                      </>
                    ) : null}
                  </span>
                  <span
                    className="font-hand text-2xl opacity-25 group-hover:opacity-55 transition-opacity duration-300"
                    style={{ color: p.accent }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-1 font-display text-xl sm:text-2xl ink leading-snug">
                  {p.title}
                </h3>

                {/* Tech stack */}
                <p className="mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-paper-foreground/60 leading-relaxed">
                  {p.stack}
                </p>

                {/* Description — always visible, clamped to 4 lines */}
                <p className="mt-3 font-note text-sm leading-relaxed text-paper-foreground/80 flex-1 line-clamp-4">
                  {p.body}
                </p>

                {/* Links */}
                <div className="mt-4 flex gap-5 font-hand text-base">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 ink hand-underline hover:opacity-70 transition-opacity"
                  >
                    live ↗
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 ink hand-underline hover:opacity-70 transition-opacity"
                  >
                    github ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
