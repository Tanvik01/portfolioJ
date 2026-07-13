import { motion } from "framer-motion";
import heroSketch from "@/assets/hero-sketch.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen px-4 pt-28 pb-16 md:pt-32">
      {/* margin doodles */}
      <MarginDoodles />

      <div className="mx-auto max-w-6xl">
        <div className="relative bg-paper text-paper-foreground sketch-border paper-grid p-8 md:p-16 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
          <div className="absolute -top-3 left-16 h-6 w-24 -rotate-6 tape rounded-sm" />
          <div className="absolute -top-3 right-20 h-6 w-28 rotate-3 tape rounded-sm" />
          <div className="absolute -bottom-3 right-24 h-6 w-24 -rotate-3 tape rounded-sm" />

          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-hand text-3xl ink"
              >
                Tanvi ~
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-1 font-note text-lg ink/80"
              >
                Full stack developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl ink"
              >
                Software should{" "}
                <span className="italic font-hand text-6xl md:text-8xl">just</span>{" "}
                <br className="hidden md:block" />
                work.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 max-w-md font-hand text-xl leading-relaxed ink/90"
              >
                I'm a CS grad '26, a tech enthusiast, and I have previously
                worked at <span className="relative inline-block ink font-semibold px-2"><svg className="pointer-events-none absolute inset-0 h-full w-full -z-0" viewBox="0 0 120 40" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M8 22 Q 20 4, 60 6 Q 108 8, 112 20 Q 116 34, 60 34 Q 10 34, 8 22" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span className="relative">startups</span></span> and helped them build full-fledged software
                products. I have also won <span className="hand-underline ink font-semibold">hackathons</span> for social good, and I
                love binge watching shows and cats.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 font-note text-sm ink/70"
              >
                Bengaluru • GMT +5:30
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="relative mx-auto max-w-md"
            >
              <img
                src={heroSketch}
                alt="Sketch of a developer at a desk with servers, birds and plants"
                className="w-full rounded-lg mix-blend-multiply"
              />
            </motion.div>
          </div>
        </div>

        <ScrollHint />
      </div>
    </section>
  );
}

function ScrollHint() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mt-10 flex flex-col items-center gap-1 font-hand text-lg ink/70"
    >
      <span>scroll ↓</span>
      <svg width="18" height="30" viewBox="0 0 18 30" fill="none">
        <path d="M9 2 L9 26 M4 21 L9 27 L14 21" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

function MarginDoodles() {
  return (
    <>
      <svg className="pointer-events-none absolute left-4 top-40 hidden lg:block" width="60" height="90" viewBox="0 0 60 90" fill="none">
        <path d="M10 20 Q 5 40, 15 55 Q 25 70, 20 85" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
        <circle cx="15" cy="15" r="4" stroke="var(--ink)" strokeWidth="1.4" fill="none" opacity="0.6" />
        <path d="M35 30 L45 40 M45 30 L35 40" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="pointer-events-none absolute right-4 top-64 hidden lg:block" width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M20 10 Q 40 30, 30 60 Q 20 90, 40 110" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M55 40 L65 40 M60 35 L60 45" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        <path d="M10 80 Q 20 75, 25 85" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
      </svg>
    </>
  );
}
