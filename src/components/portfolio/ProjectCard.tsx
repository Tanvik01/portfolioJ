import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export interface ProjectItem {
  index: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  rightBgColor?: string;
}

export function ProjectCard({
  index,
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  rightBgColor = "#EEEBDA",
}: ProjectItem) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1196, height: 600 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      if (el.clientWidth > 0 && el.clientHeight > 0) {
        setDimensions({
          width: el.clientWidth,
          height: el.clientHeight,
        });
      }
    };

    updateSize();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          setDimensions({
            width: Math.round(entry.contentRect.width),
            height: Math.round(entry.contentRect.height),
          });
        }
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { width: w, height: h } = dimensions;
  const splitRatio = 0.42;
  const xSplit = Math.round(w * splitRatio);
  const rOuter = 44;
  const rCurve = 44;

  // SVG path for left navy shape: large rounded rectangle with right rounded rectangle subtracted
  const leftNavyPath = `
    M 0,${rOuter}
    A ${rOuter},${rOuter} 0 0,1 ${rOuter},0
    L ${xSplit + rCurve},0
    A ${rCurve},${rCurve} 0 0,0 ${xSplit},${rCurve}
    L ${xSplit},${h - rCurve}
    A ${rCurve},${rCurve} 0 0,0 ${xSplit + rCurve},${h}
    L ${rOuter},${h}
    A ${rOuter},${rOuter} 0 0,1 0,${h - rOuter}
    Z
  `.replace(/\s+/g, " ").trim();

  return (
    <div className="relative w-full max-w-[1196px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
      >
        {/* DESKTOP: Figma subtracted-geometry card */}
        <div
          ref={containerRef}
          className="hidden md:flex relative w-full h-[580px] lg:h-[620px] select-none"
        >
          {/* Subtracted navy background SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${w} ${h}`}
            fill="none"
            aria-hidden="true"
          >
            <path d={leftNavyPath} fill="#282B4A" />
          </svg>

          {/* Left: dark text panel content */}
          <div
            className="relative z-10 flex flex-col justify-between p-8 lg:p-12 xl:p-14"
            style={{ width: `${xSplit}px`, flexShrink: 0 }}
          >
            <div>
              <span
                className="block text-4xl lg:text-5xl font-bold text-[#EEEBDA] mb-2 lg:mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {index}
              </span>
              <h3
                className="text-3xl lg:text-5xl font-bold text-[#EEEBDA] tracking-tight leading-[1.1] mb-6 lg:mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[#EEEBDA]/90 text-base lg:text-[18px] font-medium leading-relaxed max-w-[420px]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {description}
              </p>
            </div>
            <div
              className="flex items-center gap-10 lg:gap-14 pt-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xl lg:text-2xl font-medium text-[#EEEBDA] hover:text-[#EEEBDA]/80 transition-colors duration-200"
                >
                  <span>Live</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xl lg:text-2xl font-medium text-[#EEEBDA] hover:text-[#EEEBDA]/80 transition-colors duration-200"
                >
                  <span>Github</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: image panel with rounded corners fitting into the concave cut-out */}
          <div
            className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-5 lg:p-6 overflow-hidden"
            style={{
              backgroundColor: rightBgColor,
              borderRadius: "44px",
            }}
          >
            <div
              className="bg-[#EEEBDA] p-2.5 sm:p-3.5 lg:p-4 overflow-hidden w-full h-full shadow-inner flex items-center justify-center"
              style={{ borderRadius: "50px" }}
            >
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain select-none pointer-events-none"
                  style={{ clipPath: "inset(0 round 50px)" }}
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full" style={{ borderRadius: "50px" }} />
              )}
            </div>
          </div>
        </div>

        {/* MOBILE: stacked card */}
        <div className="block md:hidden bg-[#282B4A] rounded-[32px] overflow-hidden shadow-2xl p-6 sm:p-8">
          <span className="block text-3xl font-bold text-[#EEEBDA] mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>{index}</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#EEEBDA] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>{title}</h3>
          <p className="text-[#EEEBDA]/90 text-base font-medium leading-relaxed mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>{description}</p>
          <div className="rounded-[24px] p-3.5 shadow-lg mb-6" style={{ backgroundColor: rightBgColor }}>
            <div className="bg-[#EEEBDA] p-2.5 overflow-hidden min-h-[200px] flex items-center justify-center"
              style={{ borderRadius: "50px" }}>
              {image ? (
                <img src={image} alt={title} className="w-full h-auto object-contain select-none"
                  style={{ clipPath: "inset(0 round 50px)" }} draggable={false} />
              ) : (
                <div className="w-full h-[200px]" style={{ borderRadius: "50px" }} />
              )}
            </div>
          </div>
          <div className="flex items-center gap-8 pt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-lg font-medium text-[#EEEBDA] hover:text-[#EEEBDA]/80 transition-colors duration-200"
              >
                <span>Live</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-lg font-medium text-[#EEEBDA] hover:text-[#EEEBDA]/80 transition-colors duration-200"
              >
                <span>Github</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
