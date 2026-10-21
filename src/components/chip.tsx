import { Asterisk } from "lucide-react";

type ChipProps = {
  children: React.ReactNode;
  tone?: "light" | "white" | "dark";
  className?: string;
};

const tones = {
  light: "bg-paper-2 text-ink",
  white: "bg-card text-ink",
  dark: "bg-white/10 text-white",
};

/** Section label: asterisk + uppercase text on a soft chip. */
export function Chip({ children, tone = "light", className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.02em] ${tones[tone]} ${className}`}
    >
      <Asterisk aria-hidden className="size-3.5 text-signal" strokeWidth={2.25} />
      {children}
    </span>
  );
}
