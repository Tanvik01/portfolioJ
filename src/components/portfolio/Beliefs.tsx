import { motion } from "framer-motion";
import { PaperCard } from "./PaperCard";

const beliefs = [
  {
    n: "01",
    title: "Boring tech wins.",
    body: "Postgres, plain HTTP, and clear logs beat the shiniest new toy every single time.",
  },
  {
    n: "02",
    title: "Latency is a feature.",
    body: "A fast API feels like magic. A slow one feels broken, no matter how correct it is.",
  },
  {
    n: "03",
    title: "Read the source.",
    body: "Docs lie a little. Source code tells you exactly what will happen at 3am on Sunday.",
  },
];

export function Beliefs() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-hand text-4xl md:text-6xl ink hand-underline inline-block"
        >
          3 things I strongly believe in
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {beliefs.map((b, i) => (
            <PaperCard
              key={b.n}
              rotate={i === 0 ? -2 : i === 2 ? 2 : 0.5}
              tape={i % 2 === 0 ? "top-left" : "top-right"}
              className="p-8"
              dropIn
              dropDelay={i * 0.25}
            >
              <div className="font-hand text-5xl ink/40">{b.n}</div>
              <h3 className="mt-2 font-display text-2xl ink">{b.title}</h3>
              <p className="mt-4 font-note text-lg leading-relaxed ink/80">{b.body}</p>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
}
