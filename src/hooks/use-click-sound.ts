import { useEffect } from "react";
import { playClick } from "@/lib/click-sound";

export function useGlobalClickSound() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Cards (and anything inside them) get the deeper "pencil tap"
      if (target.closest("[data-click-sound='card']")) {
        playClick("card");
      } else {
        playClick("tick");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
