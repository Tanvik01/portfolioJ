import { motion } from "framer-motion";
import cutoutImg from "@/assets/cutout.png";
import { DecorativeStar } from "./DecorativeStar";

const NAV_LINKS = [
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "design", label: "DESIGN" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-clip select-none"
      style={{
        backgroundColor: "#EEEBDA",
        height: "100dvh",
        minHeight: "600px",
      }}
    >
      {/* ── Top Navigation Bar (approx 68px height with border-b) ── */}
      <nav className="relative z-30 h-[68px] flex items-center justify-between px-6 sm:px-10 md:px-14 border-b border-[#282B4A]/20">
        {/* Left: Section links */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs sm:text-sm font-medium tracking-[0.16em] text-[#282B4A]/70 hover:text-[#282B4A] transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Dark rounded Contact pill button */}
        <a
          href="#connect"
          className="rounded-full bg-[#282B4A] hover:bg-[#1a1c31] px-5 sm:px-6 py-2 text-xs sm:text-sm font-medium text-[#EEEBDA] transition-all duration-200 hover:shadow-md active:scale-95"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Contact
        </a>
      </nav>

      {/* ── Oversized Bold Serif "TANVI" Text (z-index 10, exactly 30px from nav bar) ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[98px] z-10 flex justify-center px-4"
        aria-hidden="true"
      >
        <h1
          className="w-full text-center text-[#282B4A] font-bold leading-none select-none tracking-[0.08em] sm:tracking-[0.12em]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(5rem, 18.5vw, 18.5rem)",
            fontWeight: 800,
          }}
        >
          TANVI
        </h1>
      </div>

      {/* ── Photo Cutout (z-index 20, top exactly 30px from nav bar, flush to bottom) ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[98px] bottom-0 z-20 flex justify-center items-end"
        style={{ height: "calc(100% - 98px)" }}
      >
        <motion.img
          src={cutoutImg}
          alt="Tanvi"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          draggable={false}
          className="select-none object-contain object-bottom pointer-events-none w-auto max-w-[90vw] h-full"
        />
      </div>

      {/* ── Tagline (z-index 30, bottom-left, Montserrat Medium 37px) ── */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 md:bottom-10 md:left-14 z-30 pointer-events-none">
        <p
          className="text-[#282B4A] leading-[1.25]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.25rem, 2.4vw, 37px)",
          }}
        >
          Frontend Dev by Training,<br />
          Design by Obsession
        </p>
      </div>

      {/* ── Bottom border connecting to About section ── */}
      <div className="absolute bottom-0 inset-x-0 border-b border-[#282B4A]/20 z-30" />

      {/* ── Decorative Star Group - Left (framing left side of hero, balancing right group) ── */}
      <div
        className="absolute left-[-10px] sm:left-0 md:left-[0.5%] lg:left-[0.8%] top-[24%] sm:top-[26%] md:top-[28%] z-20 pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        <div className="relative w-[260px] sm:w-[290px] lg:w-[325px] h-[220px] sm:h-[240px] lg:h-[265px]">
          {/* Large dominant star (upper-left, beside the T with comfortable gap) */}
          <DecorativeStar
            type="large"
            size="clamp(165px, 14vw, 225px)"
            rotation={-18}
            className="absolute left-0 top-0"
          />
          {/* Small accent star (lower-right with clear visible separation) */}
          <DecorativeStar
            type="small"
            size="clamp(72px, 5.6vw, 90px)"
            rotation={16}
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>

      {/* ── Decorative Star Group - Right (framing right side of hero) ── */}
      <div
        className="absolute right-[2%] sm:right-[4%] md:right-[6%] lg:right-[8%] bottom-[10%] sm:bottom-[13%] md:bottom-[15%] z-20 pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        <div className="relative w-[270px] sm:w-[310px] lg:w-[345px] h-[225px] sm:h-[250px] lg:h-[280px]">
          {/* Small accent star (upper-left of group) */}
          <DecorativeStar
            type="small"
            size="clamp(72px, 5.6vw, 90px)"
            rotation={-14}
            className="absolute left-0 top-0"
          />
          {/* Large dominant star (lower-right of group with clear visible space) */}
          <DecorativeStar
            type="large"
            size="clamp(175px, 15vw, 240px)"
            rotation={18}
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
