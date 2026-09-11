import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ProjectCard, type ProjectItem } from "@/components/portfolio/ProjectCard";
import refactorImg from "@/assets/refactor-plus.png";
import { DecorativeStar } from "./DecorativeStar";

const projectsData: ProjectItem[] = [
  {
    index: "01.",
    title: "Refactor Plus",
    description:
      "AI-powered code review assistant — quality scores, categorized issues, and GitHub PR-style diff view with inline annotations.",
    image: refactorImg,
    liveUrl: "https://refactor-plus.vercel.app/",
    githubUrl: "https://github.com/Tanvik01/RefactorPlus",
    rightBgColor: "#EEEBDA",
  },
  {
    index: "02.",
    title: "Golden Hour",
    description:
      "A real-time WebGL ocean built with React Three Fiber — height-field water simulation, underwater caustics, and a full sunset-to-seabed dive with fish schools and seagulls.",
    image: "/assets/ocean.png",
    liveUrl: "https://ocean-sunset.vercel.app/",
    rightBgColor: "#EEEBDA",
  },
  {
    index: "03.",
    title: "DripCheck",
    description:
      "Upload photos of your clothes, tell it the vibe you are going for, and it styles an outfit for you.",
    image: "/assets/dripcheck.png",
    liveUrl: "https://drip-check-ten.vercel.app/",
    githubUrl: "https://github.com/Tanvik01/DripCheck",
    rightBgColor: "#EEEBDA",
  },
  {
    index: "04.",
    title: "Talk-to-DB",
    description:
      "For people who just want to see data and not code for it. Converts voice to SQL queries using NLP.",
    image: "/assets/talk-to-db.png",
    liveUrl: "https://talk-to-db-frontend-five.vercel.app/",
    githubUrl: "https://github.com/Tanvik01/talk-to-db",
    rightBgColor: "#EEEBDA",
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = projectsData.length;

  const handleNext = () => {
    if (total <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (total <= 1) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const activeProject = projectsData[activeIndex];

  return (
    <section
      id="work"
      className="relative w-full overflow-clip px-4 sm:px-8 md:px-14 py-16 md:py-24"
      style={{ backgroundColor: "#EEEBDA" }}
    >
      <div className="mx-auto max-w-[1196px] w-full">
        {/* ── Section Header with Title & Arrow Navigation ─────────── */}
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#282B4A] tracking-tight">
              Work
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#282B4A]/90 mt-1">
              As a developer
            </p>
          </motion.div>

          {/* ── Stack Controls (Counter + Left & Right Arrows) + Star Cluster ── */}
          {total > 1 && (
            <div className="relative self-start sm:self-auto">
              {/* ── Decorative Stars sitting in empty space immediately above and slightly left of controls ── */}
              <div
                className="absolute right-0 bottom-[60px] z-10 pointer-events-none hidden sm:block"
                aria-hidden="true"
              >
                <div className="relative w-[272px] h-[135px]">
                  {/* Small star 1 (left flank / upper-left) */}
                  <DecorativeStar
                    type="small"
                    size={48}
                    rotation={-14}
                    style={{ position: "absolute", left: "4px", top: "30px", zIndex: 2 }}
                  />
                  {/* Main large star (roughly centered above the navigation controls) */}
                  <DecorativeStar
                    type="large"
                    size={118}
                    rotation={18}
                    style={{ position: "absolute", left: "76px", top: "8px", zIndex: 1 }}
                  />
                  {/* Small star 2 (upper-right flank) */}
                  <DecorativeStar
                    type="small"
                    size={44}
                    rotation={24}
                    style={{ position: "absolute", left: "218px", top: "20px", zIndex: 2 }}
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Project Index Counter */}
                <span className="text-[#282B4A]/85 text-base sm:text-lg font-medium tracking-wider select-none min-w-[65px]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>

                {/* Navigation Arrow Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#282B4A] hover:bg-[#1f223a] text-[#EEEBDA] flex items-center justify-center border border-[#282B4A]/20 transition-all hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#282B4A] hover:bg-[#1f223a] text-[#EEEBDA] flex items-center justify-center border border-[#282B4A]/20 transition-all hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {/* ── Single Project Card with in-place transition ───────── */}
        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeProject.index}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <ProjectCard {...activeProject} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom border separator ──────────────────────────────── */}
        <div className="mt-12 sm:mt-16 border-b border-[#282B4A]/20 w-full" />
      </div>
    </section>
  );
}
