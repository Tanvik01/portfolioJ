import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorDoodle() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Outer ring lags behind — smooth, fluid feel
  const ringX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.6 });

  const rafRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const el = e.target as HTMLElement | null;
      setHovering(
        !!el?.closest("a, button, [role='button'], input, textarea, [data-click-sound='card']")
      );
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [x, y, visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      {/* Outer ring — trails behind with spring physics */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute"
        animate={{ scale: hovering ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <div
          className="absolute"
          style={{
            left: -18,
            top: -18,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1.5px solid var(--ink)",
            opacity: hovering ? 0.5 : 0.3,
            transition: "opacity 0.2s",
          }}
        />
      </motion.div>

      {/* Inner dot — follows exactly, shrinks on hover */}
      <motion.div
        style={{ x, y }}
        className="absolute"
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div
          className="absolute rounded-full"
          style={{
            left: -3,
            top: -3,
            width: 6,
            height: 6,
            background: "var(--ink)",
            opacity: 0.7,
          }}
        />
      </motion.div>
    </div>
  );
}
