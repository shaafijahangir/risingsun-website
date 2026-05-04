import { useEffect, useRef, useState } from "react";

interface Options {
  duration?: number;   // ms — default 2000
  threshold?: number;  // IntersectionObserver threshold — default 0.4
}

/**
 * Animates a number from 0 to `end` when the returned `ref` element
 * enters the viewport. Runs once per mount. Respects prefers-reduced-motion.
 *
 * @example
 * const { ref, count } = useCountUp<HTMLDivElement>(10000);
 * return <div ref={ref}>{count.toLocaleString()}+</div>;
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  end: number,
  { duration = 2000, threshold = 0.4 }: Options = {}
) {
  const [count, setCount] = useState(0);
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        // Skip animation for zero targets or reduced-motion users
        if (reducedMotion || end === 0) {
          setCount(end);
          return;
        }

        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - (1 - progress) ** 3; // cubic ease-out
          setCount(Math.round(eased * end));
          if (progress < 1) {
            rafId.current = requestAnimationFrame(tick);
          }
        };

        rafId.current = requestAnimationFrame(tick);
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [end, duration, threshold]);

  return { ref, count };
}
