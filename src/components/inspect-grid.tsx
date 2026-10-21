/** Column overlay shown in Inspect mode (see globals.css). */
export function InspectGrid() {
  return (
    <div aria-hidden className="inspect-grid pointer-events-none fixed inset-0 z-[60]">
      <div className="frame grid-12 h-full">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={[
              "h-full border-x border-select/25 bg-select/[0.045]",
              i >= 4 && i < 8 ? "hidden md:block" : "",
              i >= 8 ? "hidden lg:block" : "",
            ].join(" ")}
          />
        ))}
      </div>
      <div className="t-label absolute bottom-3 left-1/2 -translate-x-1/2 bg-select px-2 py-1 text-white normal-case">
        12 col · gutter clamp(12px, 1.8vw, 28px) · margin clamp(16px, 4vw, 64px)
      </div>
    </div>
  );
}
