import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tape?: "both" | "top-left" | "top-right" | "none";
  lined?: boolean;
  grid?: boolean;
  dropIn?: boolean;
  dropDelay?: number;
}

const REST_SHADOW  = "0 20px 60px -20px rgba(0,0,0,0.60)";
const THUNK_SHADOW = "0 36px 90px -4px  rgba(0,0,0,0.95)";

export function PaperCard({
  children,
  className = "",
  rotate = 0,
  tape = "both",
  lined = false,
  grid = true,
  dropIn = false,
  dropDelay = 0,
}: Props) {
  const reduceMotion = useReducedMotion();
  const controls    = useAnimation();
  const cardRef     = useRef<HTMLDivElement>(null);

  // Stable initial-tilt value (more tilted than resting, same direction)
  const initRotate = rotate + (rotate >= 0 ? 3 : -3);

  useEffect(() => {
    if (!dropIn || !cardRef.current) return;

    let outTimer:   ReturnType<typeof setTimeout> | null = null;
    let thunkTimer: ReturnType<typeof setTimeout> | null = null;
    let wasFullyOut = true;   // card must have been out before we replay
    let isAnimating = false;  // guard against jitter mid-spring

    // Snap back to pre-animation state (called after debounce on exit)
    const resetCard = () => {
      controls.set(
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: -18, rotate: initRotate, boxShadow: REST_SHADOW },
      );
      wasFullyOut = true;
      isAnimating  = false;
    };

    // Full spring drop + shadow thunk sequence
    const playDrop = () => {
      wasFullyOut = false;
      isAnimating  = true;

      if (reduceMotion) {
        controls.start({ opacity: 1, transition: { duration: 0.4, delay: dropDelay } });
        return;
      }

      // Phase 1 - spring drop from tape anchor
      controls.start({
        opacity: 1,
        y: 0,
        rotate,
        transition: {
          opacity: { duration: 0.15, delay: dropDelay },
          y:       { type: "spring", stiffness: 280, damping: 16, mass: 0.85, delay: dropDelay },
          rotate:  { type: "spring", stiffness: 260, damping: 14, mass: 0.85, delay: dropDelay },
        },
      });

      // Phase 2 - shadow thunk timed to spring settle point
      thunkTimer = window.setTimeout(() => {
        controls.start({
          boxShadow: [REST_SHADOW, THUNK_SHADOW, REST_SHADOW],
          transition: { duration: 0.38, times: [0, 0.28, 1], ease: "easeOut" },
        });
        thunkTimer  = null;
        isAnimating = false;
      }, (dropDelay + 0.46) * 1000);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entered view - cancel any pending reset, play if ready
          if (outTimer) { clearTimeout(outTimer); outTimer = null; }
          if (wasFullyOut && !isAnimating) playDrop();
        } else {
          // Left view - cancel pending thunk, debounce reset (guards scroll jitter)
          if (thunkTimer) { clearTimeout(thunkTimer); thunkTimer = null; }
          isAnimating = false;
          outTimer = window.setTimeout(resetCard, 300);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
      if (outTimer)   clearTimeout(outTimer);
      if (thunkTimer) clearTimeout(thunkTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropIn]); // Static props - closure values do not change after mount

  const cardClasses = `relative bg-paper text-paper-foreground sketch-border ${
    grid ? "paper-grid" : ""
  } ${lined ? "paper-lined" : ""} ${className}`;

  // Drop-in variant - tape in outer wrapper (stays fixed), card body springs in
  if (dropIn) {
    return (
      <div className="relative">
        {(tape === "both" || tape === "top-left") && (
          <div className="absolute -top-3 left-8 z-10 h-6 w-20 -rotate-6 tape rounded-sm" />
        )}
        {(tape === "both" || tape === "top-right") && (
          <div className="absolute -top-3 right-10 z-10 h-6 w-24 rotate-3 tape rounded-sm" />
        )}

        <motion.div
          ref={cardRef}
          data-click-sound="card"
          animate={controls}
          style={{ transformOrigin: "top center", boxShadow: REST_SHADOW }}
          initial={{
            opacity: 0,
            y:      reduceMotion ? 0 : -18,
            rotate: reduceMotion ? rotate : initRotate,
          }}
          className={cardClasses}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Default (non-drop-in) - unchanged behaviour
  return (
    <motion.div
      data-click-sound="card"
      initial={{ opacity: 0, y: 40, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${cardClasses}`}
    >
      {(tape === "both" || tape === "top-left") && (
        <div className="absolute -top-3 left-8 h-6 w-20 -rotate-6 tape rounded-sm" />
      )}
      {(tape === "both" || tape === "top-right") && (
        <div className="absolute -top-3 right-10 h-6 w-24 rotate-3 tape rounded-sm" />
      )}
      {children}
    </motion.div>
  );
}
