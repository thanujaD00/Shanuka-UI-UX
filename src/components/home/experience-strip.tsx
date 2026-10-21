import { experience, education } from "@/content/experience";

/** Where Shanuka has worked and studied — the honest version of a "trusted by" logo row. */
export function ExperienceStrip() {
  const names = [
    ...experience.filter((e) => e.organisation !== "Independent practice").map((e) => e.organisation),
    "SLIIT",
    "Freelance clients",
  ];
  return (
    <section aria-label="Experience at" className="border-b border-line bg-card">
      <div className="frame grid-12 items-center gap-y-5 py-8 md:py-10">
        <p className="col-span-full text-[13px] font-medium uppercase leading-snug md:col-span-2 lg:col-span-2">
          Experience
          <br className="hidden md:block" /> &amp; education
        </p>
        <ul className="col-span-full flex flex-wrap items-center gap-x-10 gap-y-3 md:col-span-6 lg:col-span-10 lg:justify-between">
          {names.map((n) => (
            <li
              key={n}
              className="text-[clamp(1.05rem,1.6vw,1.5rem)] font-semibold tracking-[-0.04em] text-mute transition-colors hover:text-ink"
            >
              {n}
            </li>
          ))}
        </ul>
        <span className="sr-only">
          {education[0].qualification}, {education[0].institution}
        </span>
      </div>
    </section>
  );
}
