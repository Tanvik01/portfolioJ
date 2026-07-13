import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company: "Schneider Electric",
    location: "Bengaluru, India",
    dates: "Jul. 2025 – Sept. 2025",
    role: "Data Visualization / Frontend Intern",
    color: "oklch(0.72 0.16 55)",
    bullets: [
      "Designed and built 5+ interactive dashboard interfaces in Tableau, applying frontend UI/UX principles (layout hierarchy, color systems, interaction design) to make complex sales and supply-chain data easy to read at a glance.",
      "Built reusable visualization components (filters, drill-downs, KPI cards) for a multi-state performance dashboard, adopted by the regional leadership team.",
      "Collaborated with stakeholders to translate raw business requirements into clear visual design decisions.",
    ],
    tags: ["Tableau", "UI/UX", "Data Viz", "Frontend"],
  },
  {
    company: "KrishLabs",
    location: "Bengaluru, India",
    dates: "Jan. 2025 – Apr. 2025",
    role: "Front-End Developer Intern",
    color: "oklch(0.65 0.18 145)",
    bullets: [
      "Contributed to frontend development for two key products, improving feature delivery speed through modular design practices.",
      "Developed and deployed a responsive, SEO-optimized website using React.js, contributing to increased organic traffic.",
      "Designed interactive UI/UX components with Framer Motion to improve user engagement.",
      "Collaborated with design and backend teams on API integration, ensuring pixel-perfect implementation.",
    ],
    tags: ["React.js", "Framer Motion", "SEO", "API"],
  },
];

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-hand text-xl ink/70">chapter II —</p>
          <h2 className="mt-1 font-hand text-4xl md:text-6xl ink hand-underline inline-block">
            where I've been
          </h2>
        </motion.div>

        <div className="relative mt-20 grid gap-10 md:grid-cols-[240px_1fr] md:gap-14">
          {/* Timeline rail */}
          <div className="relative">
            <div className="flex md:flex-col gap-4 md:gap-16 md:pt-6">
              {experiences.map((exp, i) => (
                <button
                  key={exp.company}
                  onClick={() => setOpenIdx(i)}
                  className="group relative flex items-start gap-3 text-left"
                >
                  <motion.span
                    animate={{ scale: openIdx === i ? 1.3 : 1 }}
                    className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-2"
                    style={{
                      borderColor: exp.color,
                      background: openIdx === i ? exp.color : "var(--background)",
                    }}
                  />
                  <div>
                    <p className="font-note text-sm ink/60">{exp.dates}</p>
                    <p
                      className="font-hand text-2xl transition-colors"
                      style={{ color: openIdx === i ? exp.color : "var(--foreground)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sticky note detail */}
          <div className="relative min-h-[420px]">
            {experiences.map((exp, i) => (
              <StickyNote
                key={exp.company}
                exp={exp}
                active={openIdx === i}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyNote({
  exp,
  active,
  index,
}: {
  exp: (typeof experiences)[number];
  active: boolean;
  index: number;
}) {
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const rX = useTransform(rotY, [-50, 50], [8, -8]);
  const rY = useTransform(rotX, [-50, 50], [-8, 8]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    rotX.set(e.clientX - r.left - r.width / 2);
    rotY.set(e.clientY - r.top - r.height / 2);
  };
  const reset = () => {
    rotX.set(0);
    rotY.set(0);
  };

  if (!active) return null;

  return (
    <motion.div
      key={exp.company}
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rX, rotateY: rY, transformPerspective: 1000 }}
      className="relative bg-paper text-paper-foreground sketch-border paper-grid p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
    >
      <div className="absolute -top-3 left-10 h-6 w-24 -rotate-6 tape rounded-sm" />
      <div className="absolute -top-3 right-10 h-6 w-20 rotate-3 tape rounded-sm" />

      <div
        className="inline-block rounded-full px-3 py-1 font-note text-xs"
        style={{ background: exp.color, color: "oklch(0.15 0.02 30)" }}
      >
        {exp.role}
      </div>

      <h3 className="mt-4 font-display text-3xl md:text-4xl ink">{exp.company}</h3>
      <p className="mt-1 font-note text-sm ink/60">
        {exp.location} • {exp.dates}
      </p>

      <ul className="mt-6 space-y-4">
        {exp.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="flex gap-3 font-note text-base leading-relaxed ink/90"
          >
            <span className="mt-1 shrink-0 ink" aria-hidden>
              ✦
            </span>
            <span>{b}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {exp.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/40 px-3 py-1 font-hand text-base ink"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
