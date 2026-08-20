import { useState, useEffect, useRef } from "react";

export function BulbReveal({
  children,
  alwaysVisible,
}: {
  children: React.ReactNode;
  alwaysVisible?: React.ReactNode;
}) {
  const [isLit, setIsLit] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const [swinging, setSwinging] = useState(true);
  const cordRef = useRef<SVGPathElement>(null);

  // Gentle sway animation
  useEffect(() => {
    const timer = setTimeout(() => setSwinging(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (hasClicked) return;
    setGlowing(true);
    setTimeout(() => {
      setIsLit(true);
      setHasClicked(true);
    }, 600);
  };

  return (
    <div className="relative">
      {/* Dark overlay that fades out when bulb is clicked */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "oklch(0.08 0.01 30)",
          zIndex: 40,
          /* never capture pointer events — cursor stays visible and bulb is clickable */
          pointerEvents: "none",
          opacity: isLit ? 0 : 1,
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Bulb widget — always on top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: "clamp(20px, 5vw, 60px)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "auto",
        }}
      >
        {/* Swing container */}
        <div
          style={{
            transformOrigin: "top center",
            animation: swinging && !hasClicked ? "bulbSwing 3s ease-in-out infinite" : "none",
          }}
        >
          {/* SVG: cord + hand-drawn bulb */}
          <svg
            width="90"
            height="260"
            viewBox="0 0 90 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
            style={{
              cursor: hasClicked ? "default" : "pointer",
              display: "block",
              outline: "none",
              filter: glowing
                ? "drop-shadow(0 0 18px oklch(0.92 0.18 75)) drop-shadow(0 0 40px oklch(0.85 0.22 70))"
                : "none",
              transition: "filter 0.5s ease",
            }}
            aria-label="Click to reveal portfolio"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
          >
            {/* Ceiling screw/hook */}
            <ellipse
              cx="45"
              cy="6"
              rx="8"
              ry="5"
              stroke="oklch(0.72 0.14 35)"
              strokeWidth="2"
              fill="oklch(0.55 0.12 35)"
              strokeLinecap="round"
            />
            {/* Hand-drawn cord — slightly wobbly */}
            <path
              ref={cordRef}
              d="M45 11 C43 40, 47 70, 44 100 C42 130, 46 155, 45 170"
              stroke="oklch(0.65 0.1 35)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Bulb cap / base */}
            <path
              d="M34 172 C33 170, 34 165, 45 164 C56 165, 57 170, 56 172 L54 178 C53 181, 37 181, 36 178 Z"
              stroke="oklch(0.58 0.14 35)"
              strokeWidth="1.8"
              fill="oklch(0.78 0.08 50)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Screw lines on cap */}
            <line x1="36" y1="174" x2="54" y2="174" stroke="oklch(0.5 0.1 35)" strokeWidth="1.2" />
            <line x1="37" y1="177" x2="53" y2="177" stroke="oklch(0.5 0.1 35)" strokeWidth="1.2" />

            {/* Main bulb body — hand-drawn teardrop */}
            <path
              d="M36 178 C29 188, 24 200, 25 212 C26 228, 35 242, 45 244 C55 242, 64 228, 65 212 C66 200, 61 188, 54 178 Z"
              stroke="oklch(0.62 0.15 35)"
              strokeWidth="2"
              fill={glowing ? "oklch(0.96 0.18 80)" : "oklch(0.82 0.06 55)"}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "fill 0.5s ease" }}
            />

            {/* Inner glow circle */}
            <ellipse
              cx="45"
              cy="212"
              rx="12"
              ry="14"
              fill={glowing ? "oklch(1 0.06 90 / 0.7)" : "oklch(0.9 0.04 60 / 0.25)"}
              style={{ transition: "fill 0.5s ease" }}
            />

            {/* Filament — hand-drawn squiggle */}
            <path
              d="M42 220 C41 216, 43 210, 45 208 C47 206, 49 210, 48 215 C47 220, 44 224, 43 228"
              stroke={glowing ? "oklch(0.85 0.22 70)" : "oklch(0.55 0.12 35)"}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              style={{ transition: "stroke 0.5s ease" }}
            />

            {/* Sparkles when glowing */}
            {glowing && (
              <>
                <line x1="15" y1="200" x2="8" y2="193" stroke="oklch(0.95 0.18 80)" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "sparkle 0.6s ease forwards" }} />
                <line x1="20" y1="215" x2="11" y2="218" stroke="oklch(0.95 0.18 80)" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "sparkle 0.6s 0.1s ease forwards" }} />
                <line x1="75" y1="200" x2="82" y2="193" stroke="oklch(0.95 0.18 80)" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "sparkle 0.6s 0.05s ease forwards" }} />
                <line x1="70" y1="215" x2="79" y2="218" stroke="oklch(0.95 0.18 80)" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "sparkle 0.6s 0.15s ease forwards" }} />
                <line x1="45" y1="248" x2="45" y2="258" stroke="oklch(0.95 0.18 80)" strokeWidth="1.5" strokeLinecap="round" style={{ animation: "sparkle 0.6s 0.2s ease forwards" }} />
              </>
            )}
          </svg>
        </div>

        {/* "Click me!" hand-drawn label */}
        {!hasClicked && (
          <div
            style={{
              position: "absolute",
              top: "200px",
              right: "85px",
              pointerEvents: "none",
              opacity: glowing ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          >
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sketchy arrow pointing right toward bulb */}
              <path
                d="M10 30 C30 28, 60 26, 85 30"
                stroke="oklch(0.75 0.16 45)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                style={{ animation: "draw 0.8s ease forwards", strokeDasharray: 100, strokeDashoffset: 100 }}
              />
              {/* Arrowhead */}
              <path
                d="M80 24 L88 30 L80 37"
                stroke="oklch(0.75 0.16 45)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* "click me!" text */}
              <text
                x="5"
                y="18"
                fontFamily="Caveat, cursive"
                fontSize="15"
                fill="oklch(0.82 0.14 50)"
              >
                click me!
              </text>
            </svg>
          </div>
        )}
      </div>

      {/* Always-visible slot: custom cursor, etc. — sits above the dark overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          pointerEvents: "none",
        }}
      >
        {alwaysVisible}
      </div>

      {/* Page content — fades in after click */}
      <div
        style={{
          opacity: isLit ? 1 : 0,
          transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
          pointerEvents: isLit ? "auto" : "none",
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes bulbSwing {
          0%, 100% { transform: rotate(-4deg); }
          50%       { transform: rotate(4deg); }
        }
        @keyframes sparkle {
          0%   { opacity: 0; transform: scale(0.5); }
          60%  { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.7; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
