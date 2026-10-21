import Image from "next/image";
import { Asterisk } from "lucide-react";
import { profile } from "@/content/profile";
import { getProject, workProjects } from "@/content/projects";
import { SectionTitle, Mute } from "@/components/section-title";
import { Reveal } from "@/components/motion/reveal";

/** Every number here is verifiable from Behance / Dribbble. */
const stats = [
  {
    value: "30+",
    label: "Projects published",
    body: "Websites, mobile apps and dashboards, all on Behance and other platforms.",
  },
  {
    value: "2023",
    label: "Designing since",
    body: "Freelance since 2023, in-house since 2024.",
  },
  {
    value: "2",
    label: "International teams",
    body: "In-house roles with companies in the UAE and the UK.",
  },
];

export function IntroSection() {
  const small = getProject("travel-guide-app")!;
  const large = getProject("budget-tracker-app")!;
  const portrait = profile.portrait;

  return (
    <section id="about" aria-labelledby="about-title" className="frame py-24 md:py-36">
      <div className="grid-12 gap-y-10">
        <div className="col-span-full lg:col-span-7">
          <SectionTitle
            chip="Design × Engineering"
            id="about-title"
            lines={[
              <>Where design</>,
              <>
                meets <Mute>engineering</Mute>
              </>,
            ]}
          />
        </div>
        <div aria-hidden className="col-span-2 hidden items-center justify-center lg:col-span-2 lg:flex">
          <Asterisk className="size-24 text-ink-3/40" strokeWidth={1} />
        </div>
        <Reveal className="col-span-full sm:col-span-2 sm:col-start-3 md:col-span-3 md:col-start-6 lg:col-span-3 lg:col-start-10">
          <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: small.accent }}>
            <Image src={small.cover.src} alt="" fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover object-[58%_50%]" />
          </div>
        </Reveal>
      </div>

      <div className="grid-12 mt-16 gap-y-12 md:mt-24">
        <Reveal className="col-span-full md:col-span-4 lg:col-span-4 lg:col-start-2">
          <div className="relative">
            <span aria-hidden className="crosshair -left-6 -top-6 hidden text-ink-3 md:block" />
            <span aria-hidden className="crosshair -right-6 -top-6 hidden text-ink-3 md:block" />
            {portrait ? (
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  unoptimized={portrait.src.endsWith(".svg")}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: large.accent }}>
                <Image src={large.cover.src} alt="" fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
              </div>
            )}
            <span aria-hidden className="crosshair -bottom-6 -left-6 hidden text-ink-3 md:block" />
            <span aria-hidden className="crosshair -bottom-6 -right-6 hidden text-ink-3 md:block" />
          </div>
        </Reveal>

        <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="text-[15px] font-medium uppercase leading-[1.6] text-ink-2">
              Hi, I&rsquo;m {profile.firstName} — a passionate UI/UX Designer dedicated to creating clean, intuitive, and user-friendly digital experiences. 
              With a strong focus on usability, visual design, and functionality, 
              I transform ideas into meaningful digital products that connect with users.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
              Knowing how an interface gets built changes how I design it. I think in components, states and
              breakpoints from the first wireframe — so what I hand over is something a team can ship, and what gets
              built still looks like the design.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-3">
            {stats.map((s, i) => (
              <li key={s.label}>
                <Reveal delay={i * 0.06} className="flex items-center gap-6 bg-card p-5 sm:gap-8 sm:p-6">
                  <span className="w-[4.5ch] shrink-0 text-[clamp(2.4rem,4vw,3.6rem)] font-bold leading-none tracking-[-0.06em]">
                    {s.value}
                  </span>
                  <span className="h-12 w-px shrink-0 bg-line" aria-hidden />
                  <span>
                    <span className="flex items-center gap-1.5 text-[14px] font-semibold uppercase">
                      <Asterisk aria-hidden className="size-3.5 text-signal" strokeWidth={2.25} />
                      {s.label}
                    </span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-ink-2">{s.body}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
