import Image from "next/image";
import type { Detail, ImageAsset } from "@/content/types";

const CONTAINER_RATIO = 4 / 3;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/**
 * A magnified view of one area of the original artwork — real pixels, no
 * re-drawing. The focal point is centred and clamped inside the image.
 */
export function Loupe({ image, detail, accent, index }: { image: ImageAsset; detail: Detail; accent: string; index: number }) {
  const ratio = image.width / image.height;
  const w = detail.zoom * 100; // % of container width
  const h = detail.zoom * (CONTAINER_RATIO / ratio) * 100; // % of container height
  const left = clamp(50 - detail.x * w, 100 - w, 0);
  const top = clamp(50 - detail.y * h, 100 - h, 0);

  return (
    <figure className="group">
      <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: accent }}>
        <div className="absolute" style={{ width: `${w}%`, height: `${h}%`, left: `${left}%`, top: `${top}%` }}>
          <Image
            src={image.src}
            alt={detail.caption}
            fill
            sizes={`(min-width: 768px) ${Math.round(detail.zoom * 34)}vw, ${Math.round(detail.zoom * 100)}vw`}
            className="object-cover"
          />
        </div>
        <span aria-hidden className="t-label absolute left-3 top-3 bg-ink px-1.5 py-0.5 text-paper normal-case">
          {detail.zoom}× · {String(index).padStart(2, "0")}
        </span>
      </div>
      <figcaption className="mt-3 text-[15px] leading-relaxed text-ink-2">{detail.caption}</figcaption>
    </figure>
  );
}
