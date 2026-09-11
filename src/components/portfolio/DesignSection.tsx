import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { DecorativeStar } from "./DecorativeStar";

const designCaseStudies = [
  {
    slug: "vault",
    name: "Vault",
    tagline: "Nivora Bank goal-based savings redesign",
    problem:
      "Nivora Bank's savings surface tells you how much you have — not what it's for, or whether you're on track. Every goal drowns in one undifferentiated balance.",
    heroImage: "/assets/vault-hero.png",
    tag: "Product · UI · 17 screens",
    frameLabel: "Frame 4",
  },
  {
    slug: "wanderly",
    name: "Wanderly",
    tagline: "Travel / Web Design",
    problem:
      "A travel discovery experience designed to make exploring South Korea feel more visual, personal, and effortless.",
    heroImage: "/assets/travel1.png",
    tag: "SELF-DIRECTED PROJECT",
    frameLabel: "Frame 5",
  },
];

export function DesignSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = designCaseStudies.length;

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

  const activeStudy = designCaseStudies[activeIndex];

  return (
    <section
      id="design"
      className="relative w-full"
      style={{ backgroundColor: "#EEEBDA" }}
    >
      {/* Generous outer padding to match reference margins */}
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "1400px",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        {/* ── Header: Decorative Star on left, Arrows & "Work / As a designer" on right ── */}
        <div
          className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          style={{ marginBottom: "clamp(1.25rem, 3vw, 2rem)" }}
        >
          {/* ── Decorative Star Cluster (dominant large star + small star accent) ── */}
          <div
            className="relative select-none pointer-events-none"
            style={{ width: "185px", height: "115px", flexShrink: 0 }}
            aria-hidden="true"
          >
            {/* Dominant large star */}
            <DecorativeStar
              type="large"
              size={110}
              rotation={18}
              style={{ position: "absolute", left: "0px", top: "0px", zIndex: 1 }}
            />
            {/* Small accent star with clear visible space */}
            <DecorativeStar
              type="small"
              size={48}
              rotation={-12}
              style={{ position: "absolute", left: "128px", top: "44px", zIndex: 2 }}
            />
          </div>

          {/* Right Header Area: Section Title with Controls stacked below */}
          <div className="flex flex-col items-end gap-3 sm:gap-4">
            <div style={{ textAlign: "right" }}>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  color: "#282B4A",
                  fontWeight: 700,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                and my work
              </p>
              <p
                className="font-note"
                style={{
                  fontSize: "clamp(0.7rem, 1.3vw, 0.95rem)",
                  color: "#282B4A",
                  opacity: 0.6,
                  marginTop: "3px",
                  letterSpacing: "0.04em",
                }}
              >
                As a designer
              </p>
            </div>

            {/* ── Controls (Counter + Left & Right Arrows) placed below "As a designer" ── */}
            {total > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 mt-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Counter */}
                <span className="text-[#282B4A]/85 text-base sm:text-lg font-medium tracking-wider select-none min-w-[65px] text-right">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous design project"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#282B4A] hover:bg-[#1f223a] text-[#EEEBDA] flex items-center justify-center border border-[#282B4A]/20 transition-all hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next design project"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#282B4A] hover:bg-[#1f223a] text-[#EEEBDA] flex items-center justify-center border border-[#282B4A]/20 transition-all hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* ── Single Case Study Card with in-place transition ── */}
        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStudy.slug}
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
              <Link to={`/design/${activeStudy.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    backgroundColor: "#1e2240",
                    borderRadius: "clamp(16px, 2.5vw, 28px)",
                    padding: "clamp(12px, 1.8vw, 20px)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "clamp(10px, 1.5vw, 16px)",
                    alignItems: "stretch",
                    minHeight: "clamp(260px, 30vw, 400px)",
                    boxShadow: "0 8px 40px -8px rgba(30,34,64,0.30)",
                  }}
                >
                  {/* ── LEFT: image area — contains full image without cropping ── */}
                  <div
                    style={{
                      flex: "0 0 55%",
                      borderRadius: "clamp(10px, 1.6vw, 18px)",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "#EEEBDA",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "clamp(8px, 1.2vw, 16px)",
                    }}
                  >
                    <img
                      src={activeStudy.heroImage}
                      alt={`${activeStudy.name} app screens`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                        borderRadius: "clamp(6px, 0.8vw, 10px)",
                      }}
                    />

                    {/* Subtle frame label */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "12px",
                        fontSize: "10px",
                        fontFamily: "var(--font-note)",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.07em",
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    >
                      {activeStudy.frameLabel || "Frame 4"}
                    </span>
                  </div>

                  {/* ── RIGHT: title area ── */}
                  <div
                    style={{
                      flex: "1 1 0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding: "clamp(16px, 2.5vw, 32px) clamp(14px, 2vw, 28px)",
                    }}
                  >
                    {/* Tag label */}
                    <span
                      style={{
                        fontSize: "clamp(9px, 0.9vw, 11px)",
                        fontFamily: "var(--font-note)",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        marginBottom: "clamp(12px, 2vw, 22px)",
                      }}
                    >
                      {activeStudy.tag}
                    </span>

                    {/* Large bold project name */}
                    <h2
                      className="font-sans"
                      style={{
                        fontWeight: 700,
                        fontSize: "clamp(2.4rem, 5vw, 5rem)",
                        color: "#ffffff",
                        lineHeight: 1.0,
                        margin: 0,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {activeStudy.name}
                    </h2>

                    <p
                      style={{
                        fontFamily: "var(--font-note)",
                        fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)",
                        color: "rgba(255,255,255,0.45)",
                        marginTop: "clamp(8px, 1vw, 14px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {activeStudy.tagline}
                    </p>

                    {/* Problem statement */}
                    <p
                      style={{
                        fontFamily: "var(--font-note)",
                        fontSize: "clamp(0.72rem, 1vw, 0.85rem)",
                        color: "rgba(255,255,255,0.38)",
                        marginTop: "clamp(10px, 1.2vw, 16px)",
                        lineHeight: 1.65,
                      }}
                    >
                      {activeStudy.problem}
                    </p>

                    {/* CTA */}
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "clamp(20px, 3vw, 40px)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-note)",
                        fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      read case study
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
