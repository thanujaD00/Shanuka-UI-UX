import Image from "next/image";
import Link from "next/link";
import { Asterisk } from "lucide-react";
import { services } from "@/content/services";
import { getProject } from "@/content/projects";
import { SectionTitle, Mute } from "@/components/section-title";
import { Reveal } from "@/components/motion/reveal";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        layout="split"
        chip="What I do"
        id="services-title"
        lines={[
          <>Design services</>,
          <>
            that <Mute>ship as</Mute>
          </>,
          <>
            <Mute>well as they look</Mute>
          </>,
        ]}
      />

      <ol className="mt-16 md:mt-24">
        {services.map((s, i) => {
          const p = getProject(s.project)!;
          return (
            <li key={s.id} className="border-t border-line">
              <Reveal className="grid-12 gap-y-6 py-8 md:py-10">
                <p className="col-span-full flex items-center gap-2 self-start text-[15px] font-medium lg:col-span-3">
                  <Asterisk aria-hidden className="size-4 text-signal" strokeWidth={2.25} />/
                  {String(i + 1).padStart(3, "0")}
                </p>
                <div className="col-span-full md:col-span-4 lg:col-span-5">
                  <h3 className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-bold uppercase leading-none tracking-[-0.045em]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-2">{s.description}</p>
                  <ul className="mt-6 flex max-w-[46ch] flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="bg-paper-2 px-2.5 py-1.5 text-[13px] font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/work/${p.slug}`}
                  className="group relative col-span-full block aspect-[4/3] overflow-hidden md:col-span-4 lg:col-span-4"
                  style={{ backgroundColor: p.accent }}
                  aria-label={`See ${p.title}`}
                >
                  <Image
                    src={p.cover.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 bg-card px-1.5 py-1" aria-hidden>
                    {services.map((_, j) => (
                      <span key={j} className={`size-2 ${j === i ? "bg-signal" : "bg-paper-2"}`} />
                    ))}
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
