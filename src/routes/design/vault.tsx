import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/portfolio/Nav";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/design/vault")({
  component: VaultCaseStudy,
});

function VaultCaseStudy() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-x-hidden bg-background">
        <ScrollProgress />
        <Nav />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative px-4 pt-28 pb-12">
          {/* Margin doodle */}
          <svg
            className="pointer-events-none absolute left-4 top-44 hidden lg:block opacity-35"
            width="52" height="80" viewBox="0 0 52 80" fill="none"
          >
            <path d="M8 16 Q 4 35, 12 50 Q 20 65, 16 76" stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3.5" stroke="var(--ink)" strokeWidth="1.4" fill="none" />
          </svg>

          <div className="mx-auto max-w-5xl">
            {/* Back link */}
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link
                to="/"
                hash="design"
                className="inline-flex items-center gap-2 font-hand text-lg ink/60 hover:ink transition-colors mb-10 group"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                back to portfolio
              </Link>
            </motion.div>

            {/* Title card — full-width with image right */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -0.8 }}
              animate={{ opacity: 1, y: 0, rotate: -0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -top-3 left-16 z-10 h-6 w-24 -rotate-6 tape rounded-sm shadow-md" />
              <div className="absolute -top-3 right-20 z-10 h-6 w-20 rotate-3 tape rounded-sm shadow-md" />

              <div className="bg-paper text-paper-foreground sketch-border paper-grid shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
                {/* Two-column hero */}
                <div className="grid md:grid-cols-[45%_55%] min-h-[320px]">
                  {/* Left: title block */}
                  <div className="p-8 md:p-12 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink/15">
                    <span className="inline-block self-start rounded-full border border-ink/40 px-3 py-0.5 font-hand text-sm ink/70 mb-4">
                      Product · UI · 17 screens
                    </span>
                    <h1 className="font-hand text-6xl md:text-7xl ink font-bold leading-none">
                      Vault
                    </h1>
                    <p className="mt-3 font-display text-2xl md:text-3xl ink/80 italic leading-snug">
                      Saving with a finish line.
                    </p>
                    <p className="mt-3 font-note text-sm ink/55">
                      A goal-based savings redesign for Kotak ·{" "}
                      <span className="italic">Self-directed practice project</span>
                    </p>

                    {/* Honest framing note */}

                  </div>

                  {/* Right: vault-hero screenshot — no hover, as-is */}
                  <div className="relative overflow-hidden bg-[#dde1e8]">
                    <img
                      src="/assets/vault-detail.jpg"
                      alt="Vault app: onboarding screen and goals dashboard"
                      className="w-full h-full object-contain object-center"
                      style={{ minHeight: "280px" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Case study body ──────────────────────────────── */}
        <div className="mx-auto max-w-5xl px-4 pb-32">

          {/* Row 1: Problem (wide) */}
          <div className="mt-14">
            <CaseStudyBlock rotate={-1} delay={0.05}>
              <BlockLabel n="01" label="The Problem" />
              <div className="mt-6 grid md:grid-cols-2 gap-8">
                <p className="font-note text-base md:text-lg leading-relaxed ink/90">
                  Kotak's savings surface answers one question:{" "}
                  <em className="font-display ink">how much do I have.</em>{" "}
                  It doesn't say what the money is for, or whether you're on
                  track to get there. A trip, a pair of headphones, and an
                  emergency buffer all sit in the same pot — so when it's time
                  to spend, there's no signal you're borrowing from a plan you
                  made yourself.
                </p>
                <div className="space-y-4">
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
                      className="flex gap-3 font-note text-base leading-relaxed ink/85"
                    >
                      <span className="mt-1 shrink-0 ink" aria-hidden>✦</span>
                      <span>
                        <strong className="font-hand text-lg ink">{gap.label}</strong>{" "}
                        — {gap.body}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CaseStudyBlock>
          </div>

          {/* vault-detail — full-width, no hover, as-is */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 relative"
          >
            <div className="absolute -top-3 left-16 z-10 h-6 w-24 -rotate-6 tape rounded-sm shadow-md" />
            <div className="absolute -top-3 right-20 z-10 h-6 w-16 rotate-3 tape rounded-sm shadow-md" />
            <div className="sketch-border overflow-hidden bg-[#dde1e8] shadow-[0_20px_55px_-18px_rgba(0,0,0,0.6)]">
              <img
                src="/assets/vault-screens.png"
                alt="Vault app: manage goal, all goals, and goal details screens"
                className="w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Row 2: Three Rules */}
          <div className="mt-10">
            <CaseStudyBlock rotate={1} delay={0.05}>
              <BlockLabel n="02" label="Three rules I designed against" />
              <div className="mt-8 grid md:grid-cols-3 gap-8">
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
                    className="relative pl-5 border-l-2 border-ink/30"
                  >
                    <span className="absolute -left-4 top-0 font-hand text-xl ink/35 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg ink italic">{item.rule}</h3>
                    <p className="mt-2 font-note text-sm leading-relaxed ink/80">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </CaseStudyBlock>
          </div>

          {/* Row 3: The System + What I'd Test — side by side */}
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <CaseStudyBlock rotate={-0.5} delay={0.05}>
              <BlockLabel n="03" label="The System" />
              <p className="mt-5 font-note text-base leading-relaxed ink/90">
                Two grounds, one meaning each: the six-step creation flow runs on
                navy — a one-time, focused setup. The daily shell (home, goals,
                activity, profile) runs on white — the place you keep coming back.
              </p>
              <p className="mt-4 font-note text-base leading-relaxed ink/90">
                Color follows the same rule: red is progress-fill and destructive
                actions only — it never fights against the thing it represents.
              </p>
            </CaseStudyBlock>

            <CaseStudyBlock rotate={1.2} delay={0.1}>
              <BlockLabel n="04" label="What I'd test next" />
              <p className="mt-5 font-note text-base leading-relaxed ink/90">
                Whether the six-step flow survives contact with real users, or
                needs to collapse to three. Whether the red progress arc reads as{" "}
                <em className="font-display ink">on track</em> or as an error state.
              </p>
              <p className="mt-4 font-note text-sm leading-relaxed ink/65 italic border-l-2 border-ink/25 pl-4">
                Neither was user-tested — designed on informed assumption, not
                research. That's the gap I'd close first if this became real.
              </p>
            </CaseStudyBlock>
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap gap-4 pt-6 border-t-2 border-ink/20"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 font-hand text-xl text-paper transition-transform hover:-rotate-1 hover:scale-105"
            >
              View Figma prototype ↗
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3 font-hand text-xl ink transition-transform hover:rotate-1 hover:scale-105"
            >
              Live frontend prototype ↗
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/"
              hash="design"
              className="font-hand text-xl ink/60 hover:ink transition-colors hand-underline"
            >
              ← back to portfolio
            </Link>
            <p className="mt-8 font-note text-sm text-foreground/40">
              drawn by hand · built with react · Tanvi, 2026
            </p>
          </motion.div>
        </div>
      </main>
    </SmoothScroll>
  );
}

/* ─── Sub-components ─────────────────────────────────────── */

function CaseStudyBlock({
  children,
  delay = 0,
  rotate = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: rotate - 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative h-full"
    >
      <div className="absolute -top-3 left-8 z-10 h-6 w-20 -rotate-3 tape rounded-sm shadow-sm" />
      <div className="relative h-full bg-paper text-paper-foreground sketch-border paper-grid shadow-[0_20px_55px_-18px_rgba(0,0,0,0.6)] p-8 md:p-10">
        {children}
      </div>
    </motion.div>
  );
}

function BlockLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-hand text-4xl ink/30 leading-none">{n}</span>
      <h2 className="font-hand text-3xl md:text-4xl ink hand-underline inline-block">
        {label}
      </h2>
    </div>
  );
}
