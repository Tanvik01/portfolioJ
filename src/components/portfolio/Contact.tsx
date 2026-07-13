import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="connect" className="relative px-4 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-hand text-2xl ink/70"
        >
          psst —
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-display text-5xl md:text-7xl leading-tight ink"
        >
          let's build something{" "}
          <span className="italic font-hand text-6xl md:text-8xl">that stays up.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@tanvi.dev"
            className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-hand text-2xl text-paper transition-transform hover:-rotate-2 hover:scale-105"
          >
            say hi ✉
          </a>
          <a
            href="https://github.com/Tanvik01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-hand text-2xl ink transition-transform hover:rotate-2 hover:scale-105"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/tanvi-kokitkar01/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-hand text-2xl ink transition-transform hover:-rotate-2 hover:scale-105"
          >
            linkedin ↗
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 font-note text-sm text-foreground/50"
        >
          drawn by hand · built with react · Tanvi, 2026
        </motion.p>
      </div>
    </section>
  );
}
