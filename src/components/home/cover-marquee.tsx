import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

function Row({ items, reverse, duration }: { items: typeof projects; reverse?: boolean; duration: string }) {
  // Duplicated once so the loop is seamless (translateX -50%).
  const loop = [...items, ...items];
  return (
    <div className="marquee overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-3 md:gap-4 ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {loop.map((p, i) => (
          <div
            key={`${p.slug}-${i}`}
            className="relative aspect-[16/10] w-[220px] shrink-0 overflow-hidden bg-card p-1.5 md:w-[300px]"
          >
            <span className="relative block size-full" style={{ backgroundColor: p.accent }}>
              <Image src={p.cover.src} alt="" fill sizes="300px" className="object-cover" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** A colourful, moving wall of every published project. */
export function CoverMarquee() {
  const a = projects.filter((_, i) => i % 2 === 0);
  const b = projects.filter((_, i) => i % 2 === 1);
  return (
    <section aria-label="All projects at a glance" className="frame pb-24 md:pb-36">
      <div
        className="relative overflow-hidden py-10 md:py-14"
        style={{
          background:
            "radial-gradient(80% 120% at 0% 0%, #ff9a3d 0%, transparent 55%), radial-gradient(70% 120% at 100% 100%, #b8135a 0%, transparent 60%), linear-gradient(120deg, #ff5a1f, #d63d14 55%, #8e1846)",
        }}
      >
        <div aria-hidden className="space-y-3 md:space-y-4">
          <Row items={a} duration="70s" />
          <Row items={b} reverse duration="80s" />
        </div>

        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <Link
            href="/work"
            className="pointer-events-auto group flex flex-col items-center gap-3 text-white"
          >
            <span className="grid size-20 place-items-center rounded-full bg-white text-ink shadow-[0_20px_40px_-12px_rgb(0_0_0/0.45)] transition-transform duration-500 group-hover:scale-110 md:size-24">
              <ArrowUpRight aria-hidden className="size-8 transition-transform duration-500 group-hover:rotate-45" />
            </span>
            <span className="bg-ink/70 px-3 py-1.5 text-[15px] font-semibold backdrop-blur-sm">
              Browse all {projects.length} projects
            </span>
          </Link>
        </div>
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[13px] font-medium text-white/85">
          ©2026 {profile.firstName}
        </p>
      </div>
    </section>
  );
}
