import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js",
  "Python", "Java", "MongoDB", "Firebase", "AWS", "Docker", "Git",
  "React Native", "Socket.IO", "Tailwind CSS",
];

export function Skills() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-4xl md:text-6xl ink hand-underline inline-block"
        >
          what's on my desk
        </motion.h2>

        <div className="mt-12 flex flex-wrap gap-3 md:gap-4">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: (i % 5 - 2) * 1.5,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08, rotate: 0, y: -4 }}
              className="cursor-default rounded-lg border-2 border-ink/50 bg-paper px-4 py-2 font-hand text-xl ink shadow-[3px_3px_0_var(--ink)]"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
