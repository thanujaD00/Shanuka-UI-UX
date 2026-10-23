import { Chip } from "./chip";
import { MaskLines } from "./motion/reveal";

type SectionTitleProps = {
  chip: string;
  lines: React.ReactNode[];
  id?: string;
  /** "split": chip in a left column, title to the right. "stacked": chip above. "center": centred. */
  layout?: "split" | "stacked" | "center";
  aside?: React.ReactNode;
  inverted?: boolean;
};

/** Chip label + heavy two-tone uppercase headline. Wrap words in <Mute> for the grey tone. */
export function SectionTitle({ chip, lines, id, layout = "stacked", aside, inverted }: SectionTitleProps) {
  const chipEl = <Chip tone={inverted ? "dark" : "light"}>{chip}</Chip>;
  const title = (
    <MaskLines id={id} lines={lines} className="t-head" />
  );

  if (layout === "center") {
    return (
      <header className="flex flex-col items-center text-center">
        {chipEl}
        <div className="mt-5">{title}</div>
      </header>
    );
  }

  if (layout === "split") {
    return (
      <header className="grid-12 gap-y-5">
        <div className="col-span-full lg:col-span-3">{chipEl}</div>
        <div className="col-span-full lg:col-span-9">
          {title}
          {aside && <div className={`mt-6 max-w-[52ch] ${inverted ? "text-white/70" : "text-ink-2"}`}>{aside}</div>}
        </div>
      </header>
    );
  }

  return (
    <header className="grid-12 gap-y-5">
      <div className={aside ? "col-span-full lg:col-span-8" : "col-span-full"}>
        {chipEl}
        <div className="mt-5">{title}</div>
      </div>
      {aside && (
        <div className={`col-span-full self-end text-[14px] uppercase leading-relaxed md:col-span-5 lg:col-span-4 lg:text-right ${inverted ? "text-white/70" : "text-ink-2"}`}>
          {aside}
        </div>
      )}
    </header>
  );
}

/** The muted half of a two-tone headline. */
export function Mute({ children }: { children: React.ReactNode }) {
  return <span className="text-mute">{children}</span>;
}
