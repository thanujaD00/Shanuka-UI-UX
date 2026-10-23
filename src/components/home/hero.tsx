import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { profile, primaryContact } from "@/content/profile";
import { getProject } from "@/content/projects";
import type { Project } from "@/content/types";

const fanSlugs = ["patient-portal", "travel-guide-app", "event-dashboard"];

const fanLayout = [
  "left-0 top-[16%] w-[56%] -rotate-[9deg]",
  "right-0 top-[4%] w-[56%] rotate-[7deg]",
  "left-[20%] top-[30%] z-10 w-[62%] -rotate-1",
];

/** Vertical / horizontal hairlines with crosshair markers at the intersections. */
function HeroGrid() {
  const cols = ["0%", "33.333%", "66.666%", "100%"];
  const rows = ["calc(var(--nav-h) + 0.5rem)", "44%", "74%", "calc(100% - 2rem)"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 text-white/40">
      <div className="frame relative h-full">
        <div className="absolute inset-y-0 left-[var(--margin)] right-[var(--margin)]">
          {cols.slice(1, 3).map((x) => (
            <span key={x} className="absolute inset-y-0 w-px bg-white/[0.12]" style={{ left: x }} />
          ))}
          {rows.map((y) => (
            <span key={y} className="absolute inset-x-0 h-px bg-white/[0.12]" style={{ top: y }} />
          ))}
          {rows.flatMap((y) =>
            cols.map((x) => <span key={`${x}-${y}`} className="crosshair" style={{ left: x, top: y }} />),
          )}
        </div>
      </div>
    </div>
  );
}

function FanCard({ project, className, delay, front }: { project: Project; className: string; delay: number; front?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.title} case study`}
      className={`absolute block ${className}`}
    >
      <span className="anim-fade-up block" style={{ animationDelay: `${0.35 + delay}s` }}>
        <span className="anim-float block" style={{ animationDelay: `${delay * 2}s` }}>
          <span className="block bg-card p-1.5 shadow-[0_30px_60px_-20px_rgb(60_10_0/0.55)] transition-transform duration-500 hover:-translate-y-2 sm:p-2">
            <Image
              src={project.cover.src}
              width={project.cover.width}
              height={project.cover.height}
              alt=""
              sizes="(min-width: 1024px) 28vw, 60vw"
              priority={front}
              loading={front ? undefined : "eager"}
              className="h-auto w-full"
            />
          </span>
        </span>
      </span>
    </Link>
  );
}

export function Hero() {
  const contact = primaryContact();
  const fan = fanSlugs.map((s) => getProject(s)!);
  const portrait = profile.portrait && !profile.portrait.src.endsWith(".svg") ? profile.portrait : undefined;

  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="on-ink relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(110% 90% at 78% 18%, #ff7a36 0%, #f2541f 32%, #d83f14 62%, #a92a0b 100%)",
      }}
    >
      <HeroGrid />

      {/* Ghost name */}
      <p
        aria-hidden
        className="anim-fade pointer-events-none absolute inset-x-0 top-[calc(var(--nav-h)+1.5rem)] select-none whitespace-nowrap text-center text-[clamp(5rem,21vw,21rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em] text-white/[0.09]"
      >
        {profile.firstName}
      </p>

      <div className="frame relative flex min-h-[100svh] flex-col pb-8 pt-[calc(var(--nav-h)+2rem)] lg:block lg:pb-0">
        {/* Statement */}
        <p
          className="anim-fade-up relative z-20 mt-[12vh] max-w-[32ch] text-[14px] font-medium uppercase leading-[1.55] tracking-[0.01em] sm:text-[15px] lg:absolute lg:left-[var(--margin)] lg:top-[34%] lg:mt-0"
          style={{ animationDelay: "0.2s" }}
        >
          <Asterisk aria-hidden className="mr-1 inline size-4 -translate-y-px text-white/80" />
          I design and build digital products that look right and work right — where design meets engineering.
        </p>

        {/* Centrepiece: portrait if supplied, otherwise a fan of real project covers */}
        <div className="relative mx-auto mt-10 aspect-[5/4] w-full max-w-[560px] lg:absolute lg:bottom-[9%] lg:left-[56%] lg:mt-0 lg:w-[min(44vw,660px)] lg:max-w-none lg:-translate-x-1/2">
          {portrait ? (
            <Image
              src={portrait.src}
              width={portrait.width}
              height={portrait.height}
              alt={portrait.alt}
              priority
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="anim-fade-up absolute inset-x-0 bottom-0 h-full w-full object-contain object-bottom"
            />
          ) : (
            fan.map((p, i) => (
              <FanCard key={p.slug} project={p} className={fanLayout[i]} delay={i * 0.12} front={i === fan.length - 1} />
            ))
          )}
        </div>

        {/* Name + Let's talk */}
        <div className="relative z-20 mt-10 flex flex-col gap-6 lg:absolute lg:inset-x-[var(--margin)] lg:bottom-[7%] lg:mt-0 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="anim-fade text-[15px] font-medium" style={{ animationDelay: "0.5s" }}>
              ©2026 · {profile.location}
            </p>
            <h1 id="hero-name" className="mt-2 font-bold uppercase leading-[0.82] tracking-[-0.06em]">
              {/* Visible from the first frame (it's the LCP element) — it settles rather than reveals. */}
              <span className="anim-settle block text-[clamp(4.2rem,15vw,13.5rem)] drop-shadow-[0_8px_30px_rgb(80_10_0/0.25)]">
                {profile.firstName}
              </span>
              <span className="block overflow-hidden">
                <span
                  className="anim-rise mt-3 block text-[clamp(1.1rem,2.4vw,2.1rem)] font-semibold tracking-[-0.03em] text-white/85"
                  style={{ animationDelay: "0.3s" }}
                >
                  {profile.lastName} — {profile.title}
                </span>
              </span>
            </h1>
          </div>

          <a
            href={contact.href}
            {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="anim-fade-up group flex w-full max-w-[340px] items-stretch gap-3 bg-ink p-2.5 text-white shadow-[0_24px_50px_-24px_rgb(0_0_0/0.6)]"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="relative grid size-[72px] shrink-0 place-items-center overflow-hidden bg-signal text-[22px] font-bold tracking-tight">
              {portrait ? (
                <Image src={portrait.src} alt="" fill sizes="72px" className="object-cover" />
              ) : (
                profile.initials
              )}
            </span>
            <span className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
              <span className="flex items-center justify-between text-[12px] text-white/65">
                Let&rsquo;s talk <Asterisk aria-hidden className="size-3.5 text-white/65" />
              </span>
              <span>
                <span className="block text-[15px] font-semibold">{profile.name}</span>
                <span className="block text-[12px] text-white/65">{profile.title}</span>
              </span>
            </span>
            <span className="grid size-9 shrink-0 self-end place-items-center bg-white text-ink transition-colors group-hover:bg-signal group-hover:text-white">
              <ArrowUpRight aria-hidden className="size-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
