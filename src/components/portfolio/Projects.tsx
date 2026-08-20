import { motion } from "framer-motion";
import { ProjectShowcase } from "@/components/ui/project-showcase";

export function Projects() {
  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-4xl md:text-6xl ink hand-underline inline-block"
        >
          Things I have shipped
        </motion.h2>
        <p className="mt-3 font-hand text-xl ink/60">down latest first</p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <ProjectShowcase />
        </motion.div>
      </div>
    </section>
  );
}
