import Image from "next/image";
import type { Project } from "@/content/types";

type FrameFigureProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  /** Padding of the accent "canvas" around the artwork. */
  inset?: "tight" | "normal" | "wide";
  showLabel?: boolean;
  className?: string;
};

const insets = {
  tight: "p-[4%]",
  normal: "p-[6%]",
  wide: "px-[6%] py-[5%] lg:px-[13%] lg:py-[5%]",
};

/**
 * Presents a cover like an artboard on a design canvas: frame name above,
 * project accent as the canvas, selection handles on hover. Artwork is never
 * cropped — its original proportions are preserved.
 */
export function FrameFigure({
  project,
  sizes,
  priority,
  inset = "normal",
  showLabel = true,
  className = "",
}: FrameFigureProps) {
  const { cover } = project;
  return (
    <figure className={`relative ${className}`}>
      {showLabel && (
        <figcaption aria-hidden className="t-label mb-2 flex justify-between gap-4 text-ink-2 normal-case">
          <span className="truncate"># {project.slug}</span>
          <span className="shrink-0">
            {cover.width} × {cover.height}
          </span>
        </figcaption>
      )}
      <div className="relative">
        <div
          className={`relative overflow-hidden ${insets[inset]}`}
          style={{ backgroundColor: project.accent }}
        >
          <div className="relative overflow-hidden shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)]">
            <Image
              src={cover.src}
              width={cover.width}
              height={cover.height}
              alt={cover.alt}
              sizes={sizes}
              priority={priority}
              className="h-auto w-full transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.035]"
            />
          </div>
        </div>
        {/* Selection outline + handles on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 border border-select opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <span className="handle -left-[5px] -top-[5px]" />
          <span className="handle -right-[5px] -top-[5px]" />
          <span className="handle -bottom-[5px] -left-[5px]" />
          <span className="handle -bottom-[5px] -right-[5px]" />
        </span>
      </div>
    </figure>
  );
}
