import { motion } from "framer-motion";
import catImg from "@/assets/about-cat.png";
import { DecorativeStar } from "./DecorativeStar";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-clip px-4 sm:px-8 md:px-14 py-10 md:py-16"
      style={{ backgroundColor: "#EEEBDA" }}
    >
      <div className="mx-auto max-w-[1196px] w-full">
        {/* ── Section Header (Left: Decorative Star, Right: Title) ─────── */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <DecorativeStar type="small" size={52} rotation={-8} />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-right text-[#282B4A] font-medium text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ABOUT
          </motion.h2>
        </div>

        {/* ── Main About Card (#282B4A, w-1196, h-634) ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[1196px] md:h-[480px] rounded-[36px] md:rounded-[48px] overflow-hidden bg-[#282B4A] p-6 sm:p-8 md:p-[49px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Text content */}
          <div className="md:col-span-7 flex flex-col justify-between h-full z-10">
            <div
              className="text-[#EEEBDA] space-y-5 text-base sm:text-lg md:text-[19px] font-medium leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>Hi, I'm Tanvi.</p>
              <p>
                I can do backend, but frontend is where I actually have fun.
              </p>
              <p>I think the interface is the product.</p>
              <p>
                I'm a CS grad ('26), and along the way I've built real stuff at a couple of startups and won a hackathon I'm still proud of. When I'm not working on something, I'm probably losing an evening to my cats or whatever show everyone's talking about.
              </p>
            </div>

            <div
              className="mt-10 md:mt-14 text-[#EEEBDA]/90 text-sm sm:text-base md:text-lg font-medium tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>Based in Bengaluru, GMT +5:30.</p>
            </div>
          </div>

          {/* Right Column: Photo with cat - 50px corner radius placed at 49px padding, NO shadow */}
          <div className="md:col-span-5 flex items-center justify-center md:justify-end h-full">
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] w-full max-w-[420px] max-h-[536px] flex items-center justify-center">
              <img
                src={catImg}
                alt="Tanvi with cat"
                className="w-full h-auto object-cover select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Bottom border separator ──────────────────────────────── */}
        <div className="mt-16 sm:mt-24 border-b border-[#282B4A]/20 w-full" />
      </div>
    </section>
  );
}
