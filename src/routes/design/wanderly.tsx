import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DecorativeStar } from "@/components/portfolio/DecorativeStar";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

export const Route = createFileRoute("/design/wanderly")({
  component: WanderlyCaseStudy,
});

/* ── Fade-up wrapper ── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section label ── */
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "rgba(238,235,218,0.18)",
          lineHeight: 1,
        }}
      >
        {n}
      </span>
      <h2
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
          color: "#EEEBDA",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </h2>
    </div>
  );
}

function WanderlyCaseStudy() {
  return (
    <SmoothScroll>
      <main
        className="relative min-h-screen"
        style={{ backgroundColor: "#EEEBDA", color: "#282B4A" }}
      >
        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#EEEBDA",
            paddingTop: "clamp(4.5rem, 8vw, 7rem)",
            paddingBottom: "clamp(2rem, 4vw, 4rem)",
            paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
            paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          }}
        >
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            {/* Top row: Back link + decorative star cluster in empty whitespace */}
            <div className="relative flex items-center justify-between mb-8 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to="/"
                  hash="design"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "rgba(40,43,74,0.55)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                >
                  ← back to portfolio
                </Link>
              </motion.div>

              {/* Tasteful top decorative star mini-cluster in empty negative space */}
              <div
                className="relative select-none pointer-events-none hidden sm:block"
                style={{ width: "175px", height: "95px", flexShrink: 0 }}
                aria-hidden="true"
              >
                {/* Large star */}
                <DecorativeStar
                  type="large"
                  size={92}
                  rotation={16}
                  style={{ position: "absolute", left: "0px", top: "0px", zIndex: 1 }}
                />
                {/* Small accent star with clear visible space */}
                <DecorativeStar
                  type="small"
                  size={44}
                  rotation={-12}
                  style={{ position: "absolute", left: "120px", top: "38px", zIndex: 2 }}
                />
              </div>
            </div>

            {/* Hero card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                backgroundColor: "#1e2240",
                borderRadius: "clamp(20px, 3vw, 36px)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                minHeight: "clamp(280px, 36vw, 480px)",
              }}
            >
              {/* Left: title */}
              <div
                style={{
                  flex: "0 0 42%",
                  padding: "clamp(2rem, 4vw, 4rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRight: "1px solid rgba(238,235,218,0.08)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(238,235,218,0.25)",
                    borderRadius: "999px",
                    padding: "4px 14px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                    color: "rgba(238,235,218,0.55)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "clamp(1.2rem, 2.5vw, 2rem)",
                    alignSelf: "flex-start",
                  }}
                >
                  Travel / Web Design · Self-Directed Project
                </span>

                <h1
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                    color: "#EEEBDA",
                    lineHeight: 0.95,
                    margin: 0,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Wanderly
                </h1>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                    color: "rgba(238,235,218,0.7)",
                    marginTop: "clamp(0.75rem, 1.5vw, 1.25rem)",
                    lineHeight: 1.45,
                    fontStyle: "italic",
                  }}
                >
                  Exploring South Korea with intention.
                </p>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.72rem, 1vw, 0.85rem)",
                    color: "rgba(238,235,218,0.35)",
                    marginTop: "clamp(0.5rem, 1vw, 0.9rem)",
                    lineHeight: 1.6,
                  }}
                >
                  A travel discovery experience designed to make exploring South Korea feel more visual, personal, and effortless ·{" "}
                  <em>Self-directed practice project</em>
                </p>
              </div>

              {/* Right: hero image */}
              <div
                style={{
                  flex: "1 1 0",
                  backgroundColor: "#EEEBDA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(12px, 2vw, 24px)",
                }}
              >
                <img
                  src="/assets/travel1.png"
                  alt="Wanderly travel discovery experience: landing screen"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: "clamp(8px, 1.2vw, 16px)",
                    display: "block",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── BODY ──────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
            paddingRight: "clamp(1.5rem, 5vw, 5rem)",
            paddingBottom: "clamp(4rem, 8vw, 8rem)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {/* ── Full-width Screen 1: History Page (travel2) ── */}
          <FadeUp>
            <div
              style={{
                backgroundColor: "#EEEBDA",
                borderRadius: "clamp(16px, 2.5vw, 28px)",
                overflow: "hidden",
                border: "1px solid rgba(40,43,74,0.12)",
              }}
            >
              <img
                src="/assets/travel2.png"
                alt="Wanderly: History and heritage curation page"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
                draggable={false}
              />
            </div>
          </FadeUp>

          {/* ── 01 The Problem ── */}
          <FadeUp delay={0.05}>
            <div
              style={{
                backgroundColor: "#1e2240",
                borderRadius: "clamp(16px, 2.5vw, 28px)",
                padding: "clamp(2rem, 4vw, 4rem)",
              }}
            >
              <SectionLabel n="01" label="The Problem" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "clamp(1.5rem, 3vw, 3rem)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                    color: "rgba(238,235,218,0.8)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  Most travel platforms answer one question:{" "}
                  <em style={{ color: "#EEEBDA", fontWeight: 600 }}>
                    what can I book next.
                  </em>{" "}
                  They confront travelers with endless inventory grids, aggressive booking
                  filters, and repetitive top-10 lists — burying the genuine atmosphere,
                  neighborhood stories, and cultural texture that inspire someone to explore
                  in the first place. Discovery begins to feel like sorting a spreadsheet rather
                  than embarking on a journey.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 1.8vw, 1.5rem)" }}>
                  {[
                    {
                      label: "Visual fatigue & density",
                      body: "Overcrowded interfaces prioritize ad inventory over evocative photography and narrative.",
                    },
                    {
                      label: "Culture flattened into lists",
                      body: "Heritage sites and local food traditions are reduced to bullet points with star ratings.",
                    },
                    {
                      label: "No intuitive sense of journey",
                      body: "Fragmented pages force users to jump between disjointed maps, blogs, and booking engines.",
                    },
                  ].map((gap, i) => (
                    <motion.div
                      key={gap.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                        padding: "clamp(1rem, 1.5vw, 1.25rem)",
                        backgroundColor: "rgba(238,235,218,0.05)",
                        borderRadius: "12px",
                        border: "1px solid rgba(238,235,218,0.08)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          color: "rgba(238,235,218,0.3)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginTop: "3px",
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                            color: "#EEEBDA",
                            margin: 0,
                            marginBottom: "4px",
                          }}
                        >
                          {gap.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 400,
                            fontSize: "clamp(0.8rem, 1vw, 0.88rem)",
                            color: "rgba(238,235,218,0.55)",
                            margin: 0,
                            lineHeight: 1.6,
                          }}
                        >
                          {gap.body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ── 02 The Goal & Principles ── */}
          <FadeUp delay={0.05}>
            <div
              style={{
                backgroundColor: "#282B4A",
                borderRadius: "clamp(16px, 2.5vw, 28px)",
                padding: "clamp(2rem, 4vw, 4rem)",
              }}
            >
              <SectionLabel n="02" label="Three principles I designed against" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              >
                {[
                  {
                    rule: "Editorial narrative first.",
                    body: "Lead with evocative full-bleed photography, curated historical context, and thoughtful storytelling rather than raw database entries.",
                  },
                  {
                    rule: "Effortless destination context.",
                    body: "Let visitors absorb the seasonal mood, cultural history, and rhythm of a Korean province before overwhelming them with scheduling details.",
                  },
                  {
                    rule: "Spacious visual pacing.",
                    body: "Generous whitespace, structured hierarchy, and seamless typography give each destination room to breathe and inspire genuine wanderlust.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.rule}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      paddingLeft: "clamp(1rem, 1.5vw, 1.5rem)",
                      borderLeft: "2px solid rgba(238,235,218,0.2)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(0.72rem, 0.9vw, 0.8rem)",
                        color: "rgba(238,235,218,0.35)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}
                    >
                      Rule {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                        color: "#EEEBDA",
                        margin: 0,
                        marginBottom: "10px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.rule}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(0.8rem, 1vw, 0.88rem)",
                        color: "rgba(238,235,218,0.55)",
                        margin: 0,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── Full-width Screen 2: Destination / Exploration Page (travel3) ── */}
          <FadeUp delay={0.05}>
            <div
              style={{
                backgroundColor: "#EEEBDA",
                borderRadius: "clamp(16px, 2.5vw, 28px)",
                overflow: "hidden",
                border: "1px solid rgba(40,43,74,0.12)",
              }}
            >
              <img
                src="/assets/travel3.png"
                alt="Wanderly: Destination exploration and itinerary guide"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
                draggable={false}
              />
            </div>
          </FadeUp>

          {/* ── 03 + 04 side by side ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(1.5rem, 2.5vw, 2rem)",
            }}
          >
            <FadeUp delay={0.05}>
              <div
                style={{
                  backgroundColor: "#1e2240",
                  borderRadius: "clamp(16px, 2.5vw, 28px)",
                  padding: "clamp(2rem, 3.5vw, 3.5rem)",
                  height: "100%",
                }}
              >
                <SectionLabel n="03" label="Design Direction" />
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
                    color: "rgba(238,235,218,0.75)",
                    lineHeight: 1.75,
                    margin: 0,
                    marginBottom: "1rem",
                  }}
                >
                  Wanderly is anchored in an editorial design language: strong, elegant typographic scales,
                  warm earthen neutrals, and deep navy structures that frame high-resolution photography.
                  Instead of noisy conversion banners, the interface honors the destination's natural beauty.
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
                    color: "rgba(238,235,218,0.75)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  Layouts shift seamlessly between expansive scenic showcases and focused cultural vignettes,
                  establishing natural visual pacing as travelers move through history, cuisine, and local highlights.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                style={{
                  backgroundColor: "#282B4A",
                  borderRadius: "clamp(16px, 2.5vw, 28px)",
                  padding: "clamp(2rem, 3.5vw, 3.5rem)",
                  height: "100%",
                }}
              >
                <SectionLabel n="04" label="Reflection & Next Steps" />
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
                    color: "rgba(238,235,218,0.75)",
                    lineHeight: 1.75,
                    margin: 0,
                    marginBottom: "1rem",
                  }}
                >
                  Designing Wanderly independently reinforced how easily travel products regress into dense utility grids
                  when inspiration should take priority. The core challenge was keeping the experience rich in imagery and
                  story while keeping wayfinding and route discovery instantly clear.
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.8rem, 1vw, 0.88rem)",
                    color: "rgba(238,235,218,0.4)",
                    lineHeight: 1.7,
                    margin: 0,
                    fontStyle: "italic",
                    paddingLeft: "1rem",
                    borderLeft: "2px solid rgba(238,235,218,0.15)",
                  }}
                >
                  As a self-directed concept built on informed assumptions, the next step would be testing how real travelers
                  navigate between atmospheric exploration and concrete day-by-day travel planning.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* ── Footer ── */}
          <FadeUp>
            <div
              className="relative"
              style={{
                textAlign: "center",
                paddingTop: "clamp(3rem, 5vw, 5rem)",
                paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              {/* Bottom decorative star cluster (positioned in whitespace on left, balancing top-right cluster) */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block"
                style={{ width: "175px", height: "100px" }}
                aria-hidden="true"
              >
                {/* Large star */}
                <DecorativeStar
                  type="large"
                  size={92}
                  rotation={-16}
                  style={{ position: "absolute", left: "0px", top: "0px", zIndex: 1 }}
                />
                {/* Small accent star with clear visible separation */}
                <DecorativeStar
                  type="small"
                  size={42}
                  rotation={14}
                  style={{ position: "absolute", left: "120px", top: "42px", zIndex: 2 }}
                />
              </div>

              <Link
                to="/"
                hash="design"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "rgba(40,43,74,0.45)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                ← back to portfolio
              </Link>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.78rem",
                  color: "rgba(40,43,74,0.3)",
                  marginTop: "1.5rem",
                  letterSpacing: "0.06em",
                }}
              >
                drawn by hand · built with react · Tanvi, 2026
              </p>
            </div>
          </FadeUp>
        </div>
      </main>
    </SmoothScroll>
  );
}
