import { useEffect, useRef, useState } from "react";

interface ScrollState {
  scrolled: boolean;
  compact: boolean;
}

function getScrollY(): number {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

export function useScrollDirection(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrolled: false,
    compact: false,
  });

  const lastY = useRef(0);
  const lastDirection = useRef<"up" | "down" | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const DEAD_ZONE = 8;
    const TOP_THRESHOLD = 20;

    const update = () => {
      const y = getScrollY();
      const scrolled = y > TOP_THRESHOLD;

      if (!scrolled) {
        lastY.current = y;
        lastDirection.current = null;
        setState({ scrolled: false, compact: false });
        ticking.current = false;
        return;
      }

      const delta = y - lastY.current;

      if (Math.abs(delta) < DEAD_ZONE) {
        setState((prev) => (prev.scrolled === scrolled ? prev : { ...prev, scrolled }));
        ticking.current = false;
        return;
      }

      const newDirection = delta > 0 ? "down" : "up";
      lastY.current = y;

      if (newDirection !== lastDirection.current) {
        lastDirection.current = newDirection;
        const compact = newDirection === "down";
        setState({ scrolled, compact });
      } else {
        setState((prev) => (prev.scrolled === scrolled ? prev : { ...prev, scrolled }));
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    lastY.current = getScrollY();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
