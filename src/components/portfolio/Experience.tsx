import { motion } from "framer-motion";
import { DecorativeStar } from "./DecorativeStar";

interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  line: string;
  isCurrent?: boolean;
}

const experiencesData: ExperienceItem[] = [
  {
    role: "Product Designer Intern",
    company: "DNEG",
    dates: "Sept 2026 – Present",
    line: "Working for client Kotak Mahindra Bank with the design and development team.",
    isCurrent: true,
  },
  {
    role: "Data Visualization / Frontend Intern",
    company: "Schneider Electric",
    dates: "Jul 2025 – Sept 2025",
    line: "Built dashboards in Tableau for a project with Schneider Electric's Energy & Automation division.",
  },
  {
    role: "Front-End Developer Intern",
    company: "KrishLabs",
    dates: "Jan 2025 – Apr 2025",
    line: "Contributed to frontend development for two key products.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-clip px-4 sm:px-8 md:px-14 py-10 md:py-16"
      style={{ backgroundColor: "#EEEBDA" }}
    >
      <div className="mx-auto max-w-[1196px] w-full">
        {/* ── Section Header (Left: Title, Right: Decorative Star) ─────── */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left text-[#282B4A] font-bold text-4xl sm:text-5xl md:text-6xl tracking-wide lowercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            where i've been
          </motion.h2>
          <DecorativeStar type="small" size={52} rotation={12} />
        </div>

        {/* ── Main Experience Card (#282B4A, max-w-1196) ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[1196px] rounded-[36px] md:rounded-[48px] overflow-hidden bg-[#282B4A] p-6 sm:p-8 md:p-12 text-[#EEEBDA]"
        >
          <div className="flex flex-col divide-y divide-[#EEEBDA]/15">
            {experiencesData.map((exp, idx) => (
              <div
                key={idx}
                className="py-6 first:pt-0 last:pb-0 flex flex-col justify-center"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#EEEBDA]">
                      {exp.role}
                    </span>
                    <span className="text-[#EEEBDA]/40 hidden sm:inline">·</span>
                    <span className="text-base sm:text-lg md:text-xl font-medium text-[#EEEBDA]/90">
                      {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ml-1 shadow-sm"
                        style={{
                          backgroundColor: "#EEEBDA",
                          color: "#282B4A",
                        }}
                      >
                        Present
                      </span>
                    )}
                  </div>

                  <span className="text-xs sm:text-sm md:text-base font-medium text-[#EEEBDA]/70 shrink-0">
                    {exp.dates}
                  </span>
                </div>

                <p className="mt-2 text-sm sm:text-base font-normal text-[#EEEBDA]/85 leading-relaxed">
                  {exp.line}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom border separator ──────────────────────────────── */}
        <div className="mt-16 sm:mt-24 border-b border-[#282B4A]/20 w-full" />
      </div>
    </section>
  );
}
