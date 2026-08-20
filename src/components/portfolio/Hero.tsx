import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import meImg from "@/assets/me.jpeg";
import wowImg from "@/assets/wow.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const leftDoodleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rightDoodleY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="top" ref={ref} className="relative px-4 pt-24 pb-8 md:pt-28">
      {/* margin doodles */}
      <MarginDoodles leftY={leftDoodleY} rightY={rightDoodleY} />

      <div className="mx-auto max-w-6xl">
        {/* Tape strips sit on the outer wrapper so they aren't clipped */}
        <div className="relative">
          <div className="absolute -top-3 left-16 z-10 h-6 w-24 -rotate-6 tape rounded-sm shadow-md" />
          <div className="absolute -top-3 right-20 z-10 h-6 w-28 rotate-3 tape rounded-sm shadow-md" />
          <div className="relative bg-paper text-paper-foreground sketch-border paper-grid shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">

            <div className="grid md:grid-cols-2 min-h-[360px]">
              {/* Left: text */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-hand text-3xl md:text-4xl ink font-bold inline-block"
                >
                  im tanvi. i can do backend, but frontend is where i actually have fun.
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="mt-3 font-display text-5xl leading-[1.08] md:text-6xl lg:text-7xl ink"
                >
                  The interface{" "}
                  <span className="italic font-hand text-6xl md:text-7xl lg:text-8xl">is </span>{" "}
                  the product.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="mt-4 max-w-xl font-hand text-xl md:text-2xl leading-relaxed ink/90"
                >
                  CS grad '26. Built real stuff at a couple{" "}
                  <span className="relative inline-block ink font-semibold px-1.5">
                    <svg className="pointer-events-none absolute inset-0 h-full w-full -z-0" viewBox="0 0 120 40" preserveAspectRatio="none" fill="none" aria-hidden="true">
                      <path d="M8 22 Q 20 4, 60 6 Q 108 8, 112 20 Q 116 34, 60 34 Q 10 34, 8 22" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                    <span className="relative">startups</span>
                  </span>
                  , won a <span className="hand-underline ink font-semibold">hackathon</span> I'm still proud of, lose most evenings to cats and whatever show everyone's talking about.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-3 font-note text-base md:text-lg ink/60"
                >
                  Bengaluru • GMT +5:30
                </motion.p>
              </div>

              {/* Right: photo with rounded border and wow doodle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative flex items-center justify-center p-6 md:p-10"
              >
                <div className="relative max-w-[280px] sm:max-w-[320px] w-full">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-ink/40 shadow-[4px_4px_0_var(--ink)] rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={meImg}
                      alt="Tanvi"
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />

                    {/* wow.png sparkle/arrows graphic anchored at 52% left, 62% top from bottom-left point */}
                    <div
                      className="absolute z-20 pointer-events-none select-none w-12 sm:w-14"
                      style={{ left: "47%", top: "62%", transform: "translate(0, -100%) rotate(-5deg)" }}
                    >
                      <motion.img
                        src={wowImg}
                        alt="wow doodle"
                        initial={{ opacity: 0, scale: 0, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 16 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 350, damping: 18 }}
                        className="w-full h-auto drop-shadow-md origin-bottom-left"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarginDoodles({
  leftY,
  rightY,
}: {
  leftY: import("framer-motion").MotionValue<number>;
  rightY: import("framer-motion").MotionValue<number>;
}) {
  return (
    <>
      <motion.svg
        style={{ y: leftY }}
        className="pointer-events-none absolute left-4 top-40 hidden lg:block"
        width="60"
        height="90"
        viewBox="0 0 60 90"
        fill="none"
      >
        <path d="M10 20 Q 5 40, 15 55 Q 25 70, 20 85" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
        <circle cx="15" cy="15" r="4" stroke="var(--ink)" strokeWidth="1.4" fill="none" opacity="0.6" />
        <path d="M35 30 L45 40 M45 30 L35 40" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      </motion.svg>
      <motion.svg
        style={{ y: rightY }}
        className="pointer-events-none absolute right-4 top-64 hidden lg:block"
        width="80"
        height="120"
        viewBox="0 0 80 120"
        fill="none"
      >
        <path d="M20 10 Q 40 30, 30 60 Q 20 90, 40 110" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M55 40 L65 40 M60 35 L60 45" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        <path d="M10 80 Q 20 75, 25 85" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
      </motion.svg>
    </>
  );
}
