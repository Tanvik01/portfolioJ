import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playClick } from "@/lib/click-sound";

export function LampToggle() {
  const [on, setOn] = useState(true);
  const [pullY, setPullY] = useState(0);
  const chainRef = useRef<HTMLButtonElement>(null);
  const firstRender = useRef(true);

  const toggle = () => {
    playClick("switch");
    setOn((v) => !v);
    // Animate the pull chain
    setPullY(12);
    setTimeout(() => setPullY(0), 180);
  };

  // Respect saved preference
  useEffect(() => {
    const saved = localStorage.getItem("lamp");
    if (saved === "off") {
      setOn(false);
    }
    // Mark first render done after a tick so the overlay fades in
    const t = setTimeout(() => (firstRender.current = false), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    localStorage.setItem("lamp", on ? "on" : "off");
  }, [on]);

  return (
    <>
      {/* Darkness overlay — covers everything except the lamp area */}
      <AnimatePresence>
        {!on && (
          <motion.div
            initial={{ opacity: firstRender.current ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[55] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle 280px at 50% 80px, transparent 0%, rgba(8,6,4,0.5) 55%, rgba(8,6,4,0.97) 85%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Warm glow when on */}
      <AnimatePresence>
        {on && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[35] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 600px 500px at 50% 120px, rgba(255,210,140,0.07) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* The lamp — fixed at top center */}
      <div className="fixed left-1/2 top-0 z-[58] -translate-x-1/2 pointer-events-none">
        <svg
          width="160"
          height="140"
          viewBox="0 0 160 140"
          fill="none"
          className="pointer-events-none"
          aria-hidden
        >
          {/* Ceiling mount */}
          <line
            x1="80"
            y1="0"
            x2="80"
            y2="6"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Small mounting plate */}
          <path
            d="M72 6 Q 80 2, 88 6 L 88 10 Q 80 12, 72 10 Z"
            stroke="var(--ink)"
            strokeWidth="1.5"
            fill="var(--paper)"
            strokeLinejoin="round"
          />
          {/* Hanging cord — two slightly wavy lines for hand-drawn feel */}
          <path
            d="M80 11 Q 78 25, 80 40 Q 82 52, 80 64"
            stroke="var(--ink)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Lamp shade — trapezoid with hand-drawn wobble */}
          <path
            d="M48 66 Q 50 64, 52 65 L 108 65 Q 112 64, 114 66 L 122 98 Q 123 100, 120 102 L 42 102 Q 38 100, 40 98 Z"
            stroke="var(--ink)"
            strokeWidth="2"
            fill={on ? "var(--ink)" : "var(--paper)"}
            strokeLinejoin="round"
          />
          {/* Shade inner line for depth */}
          <path
            d="M54 68 Q 56 67, 58 68 L 104 68 Q 106 67, 108 68"
            stroke={on ? "rgba(255,210,140,0.4)" : "var(--ink)"}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Light bulb — glows when on */}
          <AnimatePresence>
            {on && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "80px 120px" }}
              >
                {/* Bulb glow */}
                <circle
                  cx="80"
                  cy="118"
                  r="22"
                  fill="rgba(255,210,140,0.25)"
                />
                {/* Bulb body */}
                <path
                  d="M74 104 Q 80 102, 86 104 L 86 112 Q 90 114, 90 120 Q 90 126, 80 127 Q 70 126, 70 120 Q 70 114, 74 112 Z"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                  fill="rgba(255,225,160,0.85)"
                  strokeLinejoin="round"
                />
                {/* Bulb base */}
                <line x1="75" y1="127" x2="85" y2="127" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="77" y1="130" x2="83" y2="130" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" />
              </motion.g>
            )}
          </AnimatePresence>
          {/* When off, show a faint dark bulb outline */}
          {!on && (
            <path
              d="M74 104 Q 80 102, 86 104 L 86 112 Q 90 114, 90 120 Q 90 126, 80 127 Q 70 126, 70 120 Q 70 114, 74 112 Z"
              stroke="var(--ink)"
              strokeWidth="1.2"
              fill="none"
              strokeLinejoin="round"
              opacity="0.4"
            />
          )}
        </svg>

        {/* Pull chain — clickable */}
        <motion.button
          ref={chainRef}
          onClick={toggle}
          animate={{ y: pullY }}
          transition={{ type: "spring", stiffness: 500, damping: 12 }}
          className="pointer-events-auto absolute left-1/2 top-[128px] -translate-x-1/2 cursor-pointer"
          data-click-sound="lamp"
          aria-label={on ? "Turn lamp off" : "Turn lamp on"}
          title={on ? "Click to turn off" : "Click to turn on"}
        >
          {/* Chain links */}
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
            <ellipse cx="8" cy="5" rx="3" ry="4" stroke="var(--ink)" strokeWidth="1.3" fill="none" />
            <ellipse cx="8" cy="11" rx="3" ry="4" stroke="var(--ink)" strokeWidth="1.3" fill="none" />
            <ellipse cx="8" cy="17" rx="3" ry="4" stroke="var(--ink)" strokeWidth="1.3" fill="none" />
          </svg>
          {/* Pull knob */}
          <circle
            cx="8"
            cy="21"
            r="4"
            fill="var(--ink)"
            className="drop-shadow"
          />
        </motion.button>
      </div>
    </>
  );
}
