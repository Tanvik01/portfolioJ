import React from "react";
import starLarge from "@/assets/star-large.png";
import starSmall from "@/assets/star-small.png";

export interface DecorativeStarProps {
  /** "large" (5-layer outer navy) or "small" (3-layer outer navy) */
  type?: "large" | "small";
  variant?: "primary" | "secondary" | "large" | "small";
  /** Width in pixels (or css string e.g. "120px") */
  size?: number | string;
  /** Rotation angle in degrees */
  rotation?: number;
  /** Extra CSS classes */
  className?: string;
  /** Custom inline style (position, zIndex, etc.) */
  style?: React.CSSProperties;
}

export function DecorativeStar({
  type,
  variant = "large",
  size,
  rotation = 0,
  className = "",
  style,
}: DecorativeStarProps) {
  const isSmall =
    type === "small" || variant === "small" || variant === "secondary";
  const src = isSmall ? starSmall : starLarge;
  const defaultSize = isSmall ? 64 : 140;
  const finalSize = size ?? defaultSize;

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`select-none pointer-events-none object-contain ${className}`}
      style={{
        width: typeof finalSize === "number" ? `${finalSize}px` : finalSize,
        height: "auto",
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        display: "block",
        ...style,
      }}
    />
  );
}

/**
 * Reusable two-star cluster matching the Figma component (small star + large star grouped together)
 */
export function StarCluster({
  scale = 1,
  className = "",
  style,
}: {
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        width: `${290 * scale}px`,
        height: `${245 * scale}px`,
        ...style,
      }}
    >
      {/* Small star (top-left) */}
      <img
        src={starSmall}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute select-none pointer-events-none object-contain"
        style={{
          width: `${82 * scale}px`,
          height: "auto",
          left: `${0 * scale}px`,
          top: `${0 * scale}px`,
          transform: "rotate(-10deg)",
          zIndex: 2,
        }}
      />
      {/* Large star (bottom-right) */}
      <img
        src={starLarge}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute select-none pointer-events-none object-contain"
        style={{
          width: `${185 * scale}px`,
          height: "auto",
          left: `${98 * scale}px`,
          top: `${50 * scale}px`,
          transform: "rotate(20deg)",
          zIndex: 1,
        }}
      />
    </div>
  );
}
