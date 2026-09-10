import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const designCaseStudies = [
  {
    slug: "vault",
    name: "Vault",
    tagline: "Kotak goal-based savings redesign",
    problem:
      "Kotak's savings surface tells you how much you have — not what it's for, or whether you're on track. Every goal drowns in one undifferentiated balance.",
    heroImage: "/assets/vault-hero.jpg",
    tag: "Product · UI · 17 screens",
  },
];

export function DesignSection() {
  return (
    <section id="design" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-hand text-xl ink/70">chapter IV —</p>
          <h2 className="mt-1 font-hand text-4xl md:text-6xl ink hand-underline inline-block">
            Tanvi as a Designer
          </h2>
          <p className="mt-6 font-display text-2xl md:text-3xl ink italic leading-snug">
            "I design the systems I then build."
          </p>
          <p className="mt-4 font-note text-base md:text-lg ink/65 leading-relaxed max-w-2xl">
            Design is newer territory for me than code — these are
            self-directed practice projects, built to test whether I could
            think in interfaces, not just APIs.
          </p>
        </motion.div>

        {/* Case study cards — full-width horizontal like the rest of the site */}
        <div className="mt-16 space-y-10">
          {designCaseStudies.map((study, i) => (
            <DesignCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignCard({
  study,
  index,
}: {
  study: (typeof designCaseStudies)[number];
  index: number;
}) {
  const rotate = index % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate - 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative"
    >
      {/* Tape strips */}
      <div className="absolute -top-3 left-16 z-10 h-6 w-24 -rotate-6 tape rounded-sm shadow-md" />
      <div className="absolute -top-3 right-20 z-10 h-6 w-20 rotate-3 tape rounded-sm shadow-md" />

      <Link
        to="/design/vault"
        className="block relative bg-paper text-paper-foreground sketch-border paper-grid shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)] overflow-hidden transition-all duration-300 hover:shadow-[0_30px_80px_-12px_rgba(0,0,0,0.85)]"
      >
        {/* Two-column: image left, text right — same proportions as Hero */}
        <div className="grid md:grid-cols-[55%_45%] min-h-[300px]">

          {/* Left: screenshot — no hover, displayed as-is */}
          <div className="relative overflow-hidden border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-ink/15 bg-[#e8eaed]">
            <img
              src={study.heroImage}
              alt={`${study.name} app screens`}
              className="w-full h-full object-contain object-center"
              style={{ minHeight: "260px" }}
            />
          </div>

          {/* Right: text */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {/* Tag pill */}
            <span className="inline-block self-start rounded-full border border-ink/40 px-3 py-0.5 font-hand text-sm ink/70 mb-5">
              {study.tag}
            </span>

            {/* Project name */}
            <h3 className="font-display text-4xl md:text-5xl ink leading-none">
              {study.name}
            </h3>
            <p className="font-hand text-lg ink/60 mt-1">{study.tagline}</p>

            {/* Problem statement */}
            <p className="mt-5 font-note text-base leading-relaxed ink/80">
              {study.problem}
            </p>

            {/* Read more */}
            <div className="mt-8 inline-flex items-center gap-2 font-hand text-xl ink transition-all duration-200 group-hover:gap-3 self-start">
              read case study
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </div>
          </div>
        </div>

        {/* Corner sparkle */}
        <span className="absolute bottom-4 right-5 font-hand text-lg ink/30 select-none pointer-events-none">
          ✦
        </span>
      </Link>
    </motion.div>
  );
}
