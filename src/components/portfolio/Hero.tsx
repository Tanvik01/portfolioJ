import { motion } from "framer-motion";
import doodle from "@/assets/doodle.png";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-24 pb-8 md:pt-28">
      {/* margin doodles */}
      <MarginDoodles />

      <div className="mx-auto max-w-6xl">
        {/* Tape strips sit on the outer wrapper so they aren't clipped */}
        <div className="relative">
          <div className="absolute -top-3 left-16 z-10 h-6 w-24 -rotate-6 tape rounded-sm shadow-md" />
          <div className="absolute -top-3 right-20 z-10 h-6 w-28 rotate-3 tape rounded-sm shadow-md" />
        <div className="relative bg-paper text-paper-foreground sketch-border paper-grid shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">

          <div className="grid md:grid-cols-2 min-h-[360px]">
            {/* Left: text */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-baseline gap-3 flex-wrap">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-hand text-2xl ink"
                >
                  Tanvi ~
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="font-note text-base ink/70"
                >
                  Full stack developer
                </motion.p>
              </div>

              <motion.h1
                variants={{
                  hidden: {},
                  show: { transition: { delayChildren: 0.5, staggerChildren: 0.12 } },
                }}
                initial="hidden"
                animate="show"
                className="mt-3 flex flex-wrap items-baseline gap-x-3 font-display text-4xl leading-[1.08] md:text-5xl lg:text-6xl ink"
              >
                {[
                  { text: "Software" },
                  { text: "should" },
                  { text: "just", hand: true },
                  { text: "work." },
                ].map((word) => (
                  <motion.span
                    key={word.text}
                    variants={{
                      hidden: { opacity: 0, y: 16, rotate: -3 },
                      show: { opacity: 1, y: 0, rotate: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className={
                      word.hand
                        ? "inline-block italic font-hand text-5xl md:text-6xl lg:text-7xl"
                        : "inline-block"
                    }
                  >
                    {word.text}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-4 max-w-lg font-hand text-lg leading-relaxed ink/90"
              >
                CS grad '26. Previously built full-fledged software products at{" "}
                <span className="relative inline-block ink font-semibold px-1.5">
                  <svg className="pointer-events-none absolute inset-0 h-full w-full -z-0" viewBox="0 0 120 40" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M8 22 Q 20 4, 60 6 Q 108 8, 112 20 Q 116 34, 60 34 Q 10 34, 8 22" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="relative">startups</span>
                </span>
                , won <span className="hand-underline ink font-semibold">hackathons</span> for social good, and love binge watching shows and cats.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-3 font-note text-sm ink/60"
              >
                Bengaluru • GMT +5:30
              </motion.p>
            </div>

            {/* Right: doodle — fills entire right half */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="relative flex items-center justify-center p-4 md:p-6"
            >
              <img
                src={doodle}
                alt="A hand-drawn doodle"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
        </div>
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
