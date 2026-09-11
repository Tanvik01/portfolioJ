import { motion } from "framer-motion";
import { DecorativeStar } from "./DecorativeStar";

export function Contact() {
  return (
    <section
      id="connect"
      className="relative w-full overflow-hidden px-4 sm:px-8 md:px-14 py-24 sm:py-32"
      style={{ backgroundColor: "#EEEBDA" }}
    >
      <div className="relative mx-auto max-w-4xl text-center">
        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm uppercase text-[#282B4A]/70 mb-4 sm:mb-6 select-none"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.22em",
          }}
        >
          PSST —
        </motion.p>

        {/* ── Headline wrapper with flanking star clusters ── */}
        <div className="relative inline-block mx-auto">
          {/* Left star cluster: at the height of "let's build", smaller star below/left */}
          <div
            className="absolute -left-[110px] sm:-left-[140px] md:-left-[180px] top-[-15px] sm:top-[-8px] pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            <div className="relative w-[180px] h-[160px]">
              {/* Large star */}
              <DecorativeStar
                type="large"
                size={115}
                rotation={-18}
                style={{ position: "absolute", left: "58px", top: "0px", zIndex: 2 }}
              />
              {/* Small star below and left with clear separation */}
              <DecorativeStar
                type="small"
                size={50}
                rotation={-14}
                style={{ position: "absolute", left: "0px", top: "96px", zIndex: 1 }}
              />
            </div>
          </div>

          {/* Right star cluster: at the height of "that" & "stays up.", smaller star below/right */}
          <div
            className="absolute -right-[110px] sm:-right-[140px] md:-right-[175px] bottom-[4px] sm:bottom-[10px] pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            <div className="relative w-[175px] h-[155px]">
              {/* Large star */}
              <DecorativeStar
                type="large"
                size={115}
                rotation={-16}
                style={{ position: "absolute", left: "0px", top: "4px", zIndex: 2 }}
              />
              {/* Small star below and right with clear separation */}
              <DecorativeStar
                type="small"
                size={50}
                rotation={-12}
                style={{ position: "absolute", left: "120px", top: "78px", zIndex: 1 }}
              />
            </div>
          </div>

          {/* 3-line Headline matching reference */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#282B4A] tracking-tight leading-[1.08] select-none text-center"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.75rem, 6.2vw, 5.25rem)",
              letterSpacing: "-0.03em",
            }}
          >
            let's build
            <br />
            something{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              that
            </span>
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              stays up.
            </span>
          </motion.h2>
        </div>

        {/* ── Action Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* say hi → */}
          <a
            href="mailto:hello@tanvi.dev"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#282B4A] hover:bg-[#1a1c31] px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-[#EEEBDA] select-none transition-all duration-200 hover:shadow-md active:scale-95"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            say hi →
          </a>

          {/* github ↗ */}
          <a
            href="https://github.com/Tanvik01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#282B4A] bg-[#EEEBDA] hover:bg-[#282B4A] hover:text-[#EEEBDA] px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-[#282B4A] select-none transition-all duration-200 hover:shadow-md active:scale-95"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            github ↗
          </a>

          {/* linkedin ↗ */}
          <a
            href="https://www.linkedin.com/in/tanvi-kokitkar01/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#282B4A] bg-[#EEEBDA] hover:bg-[#282B4A] hover:text-[#EEEBDA] px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-[#282B4A] select-none transition-all duration-200 hover:shadow-md active:scale-95"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            linkedin ↗
          </a>
        </motion.div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 sm:mt-24 text-xs sm:text-sm text-[#282B4A]/50 select-none"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          drawn by hand · built with react · Tanvi, 2026
        </motion.p>
      </div>
    </section>
  );
}
