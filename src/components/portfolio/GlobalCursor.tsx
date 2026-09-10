/**
 * GlobalCursor
 * Binds to window.addEventListener so it is never scoped to a container
 * and never disappears as you move around any page or route.
 *
 * Renders:
 *  - A small ink-pen SVG that follows the raw mouse position (no lag)
 *  - A "Hiring?" pill that spring-follows with a slight lag
 *
 * Hidden on touch / mobile via the `hidden md:block` wrapper so the
 * CSS `cursor: none` rule (md+) still applies correctly.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function GlobalCursor() {
  const [visible, setVisible] = useState(false);

  // Raw position — updated on every mousemove, drives the pen SVG
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Spring-lagged position — drives the "Hiring?" follow pill
  const springX = useSpring(rawX, { stiffness: 500, damping: 50 });
  const springY = useSpring(rawY, { stiffness: 500, damping: 50 });

  const rafRef = useRef<number | null>(null);
  const latestPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      latestPos.current = { x: e.clientX, y: e.clientY };

      // Batch via rAF so we never skip a frame
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          rawX.set(latestPos.current.x);
          rawY.set(latestPos.current.y);
          rafRef.current = null;
        });
      }

      if (!visible) setVisible(true);
    };

    // Hide when mouse leaves the browser window entirely
    const onLeave = (e: MouseEvent) => {
      if (e.relatedTarget === null) setVisible(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // Only render on md+ — identical guard to the original cursor
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {visible && (
          <>
            {/* Ink-pen cursor — snappy, zero lag */}
            <motion.div
              style={{
                position: "fixed",
                left: rawX,
                top: rawY,
                translateX: "-25%",
                translateY: "-10%",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <svg
                style={{ color: "var(--ink)" }}
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
              >
                <path
                  fill="currentColor"
                  d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                />
              </svg>
            </motion.div>

            {/* "Hiring?" follow pill — spring lag */}
            <motion.div
              style={{
                position: "fixed",
                left: springX,
                top: springY,
                translateX: "14px",
                translateY: "14px",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="px-2 py-1 rounded-lg text-sm shadow-lg font-note whitespace-nowrap"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Hiring?
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
