import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { playClick } from "@/lib/click-sound";

export function LampToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [pullY, setPullY] = useState(0);

  const toggle = () => {
    playClick("switch");
    setIsOpen((value) => !value);
    setPullY(10);
    window.setTimeout(() => setPullY(0), 180);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pointer-events-none fixed inset-0 z-[55]"
            style={{
              background:
                "radial-gradient(ellipse 300px 360px at calc(100% - 105px) 145px, transparent 0%, rgba(8,6,4,0.4) 48%, rgba(8,6,4,0.96) 82%)",
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none fixed inset-0 z-[35]"
            style={{
              background:
                "radial-gradient(ellipse 620px 520px at calc(100% - 115px) 155px, rgba(255,210,140,0.08) 0%, transparent 72%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="fixed right-2 top-0 z-[58] w-[190px] pointer-events-none sm:right-8 lg:right-16">
        <svg
          width="190"
          height="190"
          viewBox="0 0 190 190"
          fill="none"
          className="pointer-events-none ml-auto"
          aria-hidden
        >
          <line x1="142" y1="0" x2="142" y2="7" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M132 7 Q 142 3, 152 7 L 152 12 Q 142 14, 132 12 Z"
            stroke="var(--ink)"
            strokeWidth="1.5"
            fill="var(--paper)"
            strokeLinejoin="round"
          />
          <path
            d="M142 12 Q 139 31, 142 48 Q 145 66, 141 84 Q 139 96, 142 108"
            stroke="var(--ink)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M129 103 Q 142 100, 155 103 L 155 119 Q 142 123, 129 119 Z"
            stroke="var(--ink)"
            strokeWidth="2"
            fill="var(--paper)"
            strokeLinejoin="round"
          />
          <path d="M131 107 Q 142 110, 153 107 M131 113 Q 142 116, 153 113" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="142" cy="151" r="35" fill="rgba(255,190,70,0.18)" />
          <path
            d="M134 119 Q 142 116, 150 119 L 150 128 Q 158 135, 157 146 Q 155 161, 142 167 Q 129 161, 127 146 Q 126 135, 134 128 Z"
            stroke="var(--ink)"
            strokeWidth="1.7"
            fill="rgba(255,211,92,0.95)"
            strokeLinejoin="round"
          />
          <path d="M133 132 Q 142 127, 151 132 M129 142 Q 142 136, 155 142 M130 152 Q 142 147, 154 152" stroke="rgba(255,255,220,0.72)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M135 166 Q 142 170, 149 166" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M136 171 Q 142 174, 148 171" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute right-[112px] top-[154px] w-[92px] rotate-[-7deg] text-right"
          >
            <p className="font-hand text-2xl leading-none ink">click me</p>
            <svg width="88" height="32" viewBox="0 0 88 32" fill="none" className="ml-auto mt-1">
              <path d="M4 7 Q 33 3, 70 17 Q 78 20, 84 16" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M75 11 L 84 16 L 75 20" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}

        <motion.button
          onClick={toggle}
          animate={{ y: pullY }}
          transition={{ type: "spring", stiffness: 500, damping: 12 }}
          className="pointer-events-auto absolute left-[116px] top-[108px] h-[70px] w-[52px] cursor-pointer rounded-full"
          data-click-sound="lamp"
          aria-label={isOpen ? "Turn the lamp off" : "Turn the lamp on"}
          title={isOpen ? "Turn the lamp off" : "Turn the lamp on"}
        >
          <span className="sr-only">Turn the lamp {isOpen ? "off" : "on"}</span>
        </motion.button>
      </div>
    </>
  );
}
