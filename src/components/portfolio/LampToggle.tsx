import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PullCord } from "pullcord";
import "pullcord/pullcord.css";
import { playClick } from "@/lib/click-sound";

export function LampToggle() {
  // isOn = lamp is lit (light mode feel); starts false (dark / lamp off)
  const [isOn, setIsOn] = useState(false);

  // Keep <html> .dark class in sync — dark when lamp is off
  useEffect(() => {
    document.documentElement.classList.toggle("dark", !isOn);
  }, [isOn]);

  const handlePull = () => {
    playClick("switch");
    setIsOn((prev) => !prev);
  };

  return (
    <>
      {/* Dark vignette overlay — visible when lamp is OFF */}
      <AnimatePresence>
        {!isOn && (
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

      {/* Warm glow overlay — visible when lamp is ON */}
      <AnimatePresence>
        {isOn && (
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

      {/* "Pull the cord" hint — visible while lamp is off */}
      <AnimatePresence>
        {!isOn && (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="pointer-events-none fixed z-[60]"
            style={{ right: "calc(7rem + 56px)", top: "160px" }}
          >
            {/* Label */}
            <p
              className="font-hand text-xl leading-tight whitespace-nowrap text-right"
              style={{
                color: "var(--foreground)",
                textShadow: "0 1px 6px rgba(0,0,0,0.6)",
              }}
            >
              pull the cord
            </p>

            {/* Curved arrow pointing right toward the cord */}
            <div className="flex justify-end mt-1">
              <motion.svg
                width="52"
                height="36"
                viewBox="0 0 52 36"
                fill="none"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M4 28 Q 18 32, 30 20 Q 40 10, 46 14"
                  stroke="var(--foreground)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M40 9 L 46 14 L 39 17"
                  stroke="var(--foreground)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PullCord — CSS vars set via wrapper so the knob lands at top-right */}
      <div
        style={
          {
            "--pullcord-top": "0px",
            "--pullcord-right": "7rem",
            "--pullcord-z": "59",
          } as React.CSSProperties
        }
      >
        <PullCord
          onPull={handlePull}
          pulled={isOn}
          ariaLabel="Toggle lamp"
        />
      </div>
    </>
  );
}
