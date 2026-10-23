"use client";

import { useEffect, useRef } from "react";

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Orange signal pulses that streak across the page at random — vertical or
 * horizontal — each re-rolling its position and direction after every pass.
 * Runs on the Web Animations API with transform/opacity only, so it stays on the compositor.
 */
export function LiveLines() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const count = matchMedia("(min-width: 768px)").matches ? 7 : 4;
    const running = new Set<Animation>();
    let stopped = false;

    const play = (line: HTMLSpanElement, first: boolean) => {
      if (stopped) return;
      const pulse = line.firstElementChild as HTMLSpanElement;
      const vertical = Math.random() < 0.5;
      const reverse = Math.random() < 0.5;

      line.dataset.axis = vertical ? "y" : "x";
      line.dataset.dir = reverse ? "rev" : "fwd";
      line.style.left = vertical ? `${rand(3, 97)}%` : "";
      line.style.top = vertical ? "" : `${rand(6, 94)}%`;

      const start = vertical ? "translate3d(0, -100%, 0)" : "translate3d(-100%, 0, 0)";
      const end = vertical ? "translate3d(0, 100vh, 0)" : "translate3d(100vw, 0, 0)";
      const timing = { duration: rand(vertical ? 5000 : 6500, vertical ? 8000 : 10000), delay: rand(first ? 0 : 600, first ? 5000 : 3500) };

      const travel = pulse.animate(
        [
          { transform: reverse ? end : start, opacity: 0 },
          { opacity: 1, offset: 0.1 },
          { opacity: 1, offset: 0.85 },
          { transform: reverse ? start : end, opacity: 0 },
        ],
        { ...timing, easing: "cubic-bezier(0.45, 0, 0.2, 1)" },
      );

      running.add(travel);
      travel.onfinish = () => {
        running.delete(travel);
        play(line, false);
      };
    };

    const lines = Array.from({ length: count }, () => {
      const line = document.createElement("span");
      line.className = "live-line";
      line.appendChild(document.createElement("span")).className = "live-pulse";
      root.appendChild(line);
      return line;
    });
    lines.forEach((line) => play(line, true));

    return () => {
      stopped = true;
      running.forEach((a) => a.cancel());
      lines.forEach((line) => line.remove());
    };
  }, []);

  return <div ref={ref} aria-hidden className="live-lines" />;
}
