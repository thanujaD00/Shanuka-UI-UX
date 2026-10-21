import Link from "next/link";
import { ArrowUpRight, Asterisk, Code2, Zap } from "lucide-react";
import { profile } from "@/content/profile";
import { capabilities } from "@/content/capabilities";
import { SectionTitle, Mute } from "@/components/section-title";
import { Reveal } from "@/components/motion/reveal";

/** Bento grid: why work with me, plus the full toolkit. */
export function WhySection() {
  return (
    <section id="capabilities" aria-labelledby="why-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        layout="split"
        chip="Why work with me"
        id="why-title"
        lines={[
          <>Focused on</>,
          <>
            design <Mute>that</Mute>
          </>,
          <>
            <Mute>actually ships</Mute>
          </>,
        ]}
      />

      <div className="mt-14 grid grid-cols-1 gap-[var(--gutter)] md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 */}
        <div className="grid gap-[var(--gutter)]">
          <Reveal className="flex flex-col justify-between bg-card p-6 md:min-h-[230px]">
            <p className="flex items-center gap-1.5 text-[14px] font-semibold uppercase">
              <Asterisk aria-hidden className="size-4 text-signal" strokeWidth={2.25} /> Design + code
            </p>
            <div>
              <p className="mt-8 text-[clamp(2.2rem,3.6vw,3.2rem)] font-bold leading-none tracking-[-0.06em]">
                Figma <span className="text-signal">→</span> React
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                One person from the first wireframe to typed, component-based code.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col justify-between bg-card p-6 md:min-h-[230px]">
            <p className="flex items-center gap-1.5 text-[14px] font-semibold uppercase">
              <Asterisk aria-hidden className="size-4 text-signal" strokeWidth={2.25} /> Responsive by default
            </p>
            <div>
              <p className="mt-8 text-[clamp(2.2rem,3.6vw,3.2rem)] font-bold leading-none tracking-[-0.06em]">
                375 <Mute>→</Mute> 1680
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                Every layout has an answer for every breakpoint and state before it leaves the design file.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Column 2 — colourful quote card */}
        <Reveal
          delay={0.08}
          className="relative flex min-h-[420px] flex-col justify-between overflow-hidden p-6 text-white"
          style={{
            background:
              "radial-gradient(90% 70% at 20% 10%, #ffd36b 0%, transparent 55%), radial-gradient(80% 80% at 90% 30%, #ff4d1a 0%, transparent 60%), radial-gradient(90% 90% at 30% 100%, #c2185b 0%, transparent 65%), linear-gradient(160deg, #ff8a3d, #6a1b9a)",
          }}
        >
          <p className="flex items-center gap-1.5 text-[14px] font-semibold uppercase">
            <Asterisk aria-hidden className="size-4" strokeWidth={2.25} /> In my words
          </p>
          <blockquote>
            <p className="text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-snug tracking-[-0.02em]">
              &ldquo;{profile.publishedBio[0]} {profile.publishedBio[2]}&rdquo;
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center bg-white text-[14px] font-bold text-ink">
                {profile.initials}
              </span>
              <span className="text-[14px]">
                <span className="block font-semibold">{profile.name}</span>
                <span className="text-white/80">Published bio · Behance &amp; Dribbble</span>
              </span>
            </footer>
          </blockquote>
        </Reveal>

        {/* Column 3 */}
        <div className="grid gap-[var(--gutter)] md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
          <Reveal
            delay={0.1}
            className="relative flex min-h-[240px] flex-col items-center justify-between overflow-hidden p-6 text-center text-white"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 0%, #ff7a36 0%, #e8401a 45%, #3b0a1f 100%)",
            }}
          >
            <p className="text-[20px] font-semibold tracking-tight">
              {profile.firstName}
              <sup className="ml-0.5 text-[10px]">®</sup>
            </p>
            <Code2 aria-hidden className="size-14 text-white/90" strokeWidth={1.25} />
            <div>
              <p className="text-[19px] font-bold uppercase tracking-[-0.03em]">{profile.title}</p>
              <p className="mt-1 text-[14px] text-white/80">Designed with the build in mind.</p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col justify-between bg-card p-6">
            <Zap aria-hidden className="size-6 fill-signal text-signal" />
            <div className="mt-6">
              <p className="text-[16px] font-semibold uppercase">Open to work</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                {profile.availability}. Based in {profile.location}, working with teams anywhere.
              </p>
              <Link href="#contact" className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-signal-ink">
                Start a project <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Toolkit */}
      <Reveal className="mt-[var(--gutter)] bg-card p-6 md:p-8">
        <p className="flex items-center gap-1.5 text-[14px] font-semibold uppercase">
          <Asterisk aria-hidden className="size-4 text-signal" strokeWidth={2.25} /> Toolkit
        </p>
        <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((group) => (
            <div key={group.id}>
              <h3 className="text-[13px] font-semibold uppercase text-ink-2">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="bg-paper px-2 py-1 text-[13px] font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
