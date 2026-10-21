export const isDev = process.env.NODE_ENV !== "production";

/**
 * Marks content that hasn't been supplied yet. Visible in development only,
 * so production never shows invented or placeholder copy.
 */
export function Pending({ field, children }: { field: string; children: React.ReactNode }) {
  if (!isDev) return null;
  return (
    <div className="border border-dashed border-select/70 bg-select/5 p-4 text-[13px] leading-relaxed text-select">
      <span className="t-label mr-2 bg-select px-1.5 py-0.5 text-white">Pending · {field}</span>
      {children}
      <span className="mt-1 block font-mono text-[11px] opacity-80">Visible in development only.</span>
    </div>
  );
}
