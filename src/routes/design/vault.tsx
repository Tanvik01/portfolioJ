import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DecorativeStar } from "@/components/portfolio/DecorativeStar";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

export const Route = createFileRoute("/design/vault")({
  component: VaultCaseStudy,
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

function VaultCaseStudy() {
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
                  Product · UI · 17 screens
                </span>

                <h1
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                    color: "#EEEBDA",
                    lineHeight: 0.95,
                    margin: 0,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Vault
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
                  Saving with a finish line.
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
                  A goal-based savings redesign for Kotak ·{" "}
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
                  src="/assets/vault-detail.jpg"
                  alt="Vault app: onboarding screen and goals dashboard"
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

          {/* ── Full-width screens image ── */}
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
                src="/assets/vault-screens.png"
                alt="Vault app: manage goal, all goals, and goal details screens"
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
                  Kotak's savings surface answers one question:{" "}
                  <em style={{ color: "#EEEBDA", fontWeight: 600 }}>
                    how much do I have.
                  </em>{" "}
                  It doesn't say what the money is for, or whether you're on
                  track to get there. A trip, a pair of headphones, and an
                  emergency buffer all sit in the same pot — so when it's time
                  to spend, there's no signal you're borrowing from a plan you
                  made yourself.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 1.8vw, 1.5rem)" }}>
                  {[
                    { label: "No target, no pace", body: "A balance alone gives no feedback loop." },
                    { label: "Setup is the drop-off", body: "Opening an RD or FD means a dense, jargon-heavy form." },
                    { label: "Nothing to come back for", body: "A static number gives no reason to reopen the app." },
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

          {/* ── 02 Three rules ── */}
          <FadeUp delay={0.05}>
            <div
              style={{
                backgroundColor: "#282B4A",
                borderRadius: "clamp(16px, 2.5vw, 28px)",
                padding: "clamp(2rem, 4vw, 4rem)",
              }}
            >
              <SectionLabel n="02" label="Three rules I designed against" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              >
                {[
                  {
                    rule: "One decision per screen.",
                    body: "Creating a goal is six questions, never bundled — what, name, amount, date, plan, payment method. A step counter keeps the end always in view.",
                  },
                  {
                    rule: "Progress is the product.",
                    body: "Every screen repeats the same three numbers: percentage, amount saved, days left. You never have to re-learn where to look.",
                  },
                  {
                    rule: "Products, not jargon.",
                    body: "Savings, FD, and RD are shown as monthly amounts first, rate second. You compare ₹8,334 against ₹8,268 — not 3.5% p.a. against 7% p.a.",
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
                <SectionLabel n="03" label="The System" />
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
                  Two grounds, one meaning each: the six-step creation flow runs on
                  navy — a one-time, focused setup. The daily shell (home, goals,
                  activity, profile) runs on white — the place you keep coming back.
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
                  Color follows the same rule: red is progress-fill and destructive
                  actions only — it never fights against the thing it represents.
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
                <SectionLabel n="04" label="What I'd test next" />
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
                  Whether the six-step flow survives contact with real users, or
                  needs to collapse to three. Whether the red progress arc reads as{" "}
                  <em style={{ color: "#EEEBDA" }}>on track</em> or as an error state.
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
                  Neither was user-tested — designed on informed assumption, not
                  research. That's the gap I'd close first if this became real.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* ── Links ── */}
          <FadeUp>
            <div
              style={{
                paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
                borderTop: "1px solid rgba(40,43,74,0.15)",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#282B4A",
                  color: "#EEEBDA",
                  borderRadius: "999px",
                  padding: "12px 28px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                View Figma prototype ↗
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "#282B4A",
                  border: "1.5px solid rgba(40,43,74,0.35)",
                  borderRadius: "999px",
                  padding: "12px 28px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Live frontend prototype ↗
              </a>
            </div>
          </FadeUp>

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
