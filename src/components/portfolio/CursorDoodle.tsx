import { useEffect, useState } from "react";

export function CursorDoodle() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let id = 0;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const now = performance.now();
      if (now - last > 60) {
        last = now;
        id++;
        const point = { x: e.clientX, y: e.clientY, id };
        setTrail((t) => [...t.slice(-8), point]);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {trail.map((p, i) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x - 3,
            top: p.y - 3,
            width: 6 - i * 0.4,
            height: 6 - i * 0.4,
            background: "var(--ink)",
            opacity: (i + 1) / trail.length * 0.4,
            transition: "opacity 0.5s ease-out",
          }}
        />
      ))}
      <svg
        className="absolute"
        style={{ left: pos.x - 12, top: pos.y - 12 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 4 L12 18 L14 12 L20 10 Z"
          stroke="var(--ink)"
          strokeWidth="1.5"
          fill="var(--paper)"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
