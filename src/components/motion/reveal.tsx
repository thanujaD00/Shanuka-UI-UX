"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Fades and lifts content in once it scrolls into view. */
export function Reveal({ delay = 0, y = 28, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type MaskLinesProps = {
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** Animate immediately on mount instead of when scrolled into view. */
  immediate?: boolean;
  id?: string;
};

/** Reveals each line from behind a mask — an editorial headline entrance. */
export function MaskLines({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  immediate = false,
  id,
}: MaskLinesProps) {
  // Above-the-fold headings animate with CSS so they paint before hydration.
  if (immediate) {
    return (
      <Tag className={className} id={id}>
        {lines.map((line, i) => (
          <span key={i} className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${lineClassName ?? ""}`}>
            <span className="anim-rise block" style={{ animationDelay: `${delay + i * stagger}s` }}>
              {line}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  // Observe the whole heading (it has a real box) and drive each masked line
  // through variants — the lines themselves start fully clipped, so observing
  // them directly would never report an intersection.
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${lineClassName ?? ""}`}>
          <motion.span
            className="block"
            variants={{
              hidden: { y: "105%" },
              show: { y: "0%", transition: { duration: 1, ease: EASE_OUT_EXPO, delay: delay + i * stagger } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
