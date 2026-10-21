import { Asterisk } from "lucide-react";
import { certifications, education, experience } from "@/content/experience";
import { SectionTitle, Mute } from "@/components/section-title";
import { Reveal } from "@/components/motion/reveal";
import { Pending } from "@/components/pending";

type RowProps = { period: string; title: string; subtitle: string; meta?: string; description?: string };

function Row({ period, title, subtitle, meta, description }: RowProps) {
  return (
    <li>
      <Reveal className="grid-12 group gap-y-3 bg-card p-5 transition-colors hover:bg-ink hover:text-white md:p-7">
        <p className="col-span-full flex items-center gap-2 text-[14px] font-medium md:col-span-2 lg:col-span-3">
          <Asterisk aria-hidden className="size-3.5 text-signal" strokeWidth={2.25} />
          {period}
        </p>
        <div className="col-span-full md:col-span-3 lg:col-span-4">
          <h4 className="text-[clamp(1.2rem,1.8vw,1.6rem)] font-bold uppercase leading-tight tracking-[-0.035em]">{title}</h4>
          <p className="mt-1 text-[15px] text-ink-2 transition-colors group-hover:text-white/70">
            {subtitle}
            {meta ? ` · ${meta}` : ""}
          </p>
        </div>
        <div className="col-span-full md:col-span-3 lg:col-span-5">
          {description && (
            <p className="text-[15px] leading-relaxed text-ink-2 transition-colors group-hover:text-white/75">{description}</p>
          )}
        </div>
      </Reveal>
    </li>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        layout="split"
        chip="Experience & education"
        id="experience-title"
        lines={[
          <>
            The road <Mute>so far</Mute>
          </>,
        ]}
      />

      <div className="mt-14 md:mt-20">
        <h3 className="mb-3 text-[13px] font-semibold uppercase text-ink-2">Experience</h3>
        <ol className="space-y-2">
          {experience.map((e) => (
            <Row key={e.organisation} period={e.period} title={e.role} subtitle={e.organisation} meta={e.location} description={e.description} />
          ))}
        </ol>

        <h3 className="mb-3 mt-12 text-[13px] font-semibold uppercase text-ink-2">Education</h3>
        <ol className="space-y-2">
          {education.map((e) => (
            <Row key={e.qualification} period={e.period} title={e.qualification} subtitle={e.institution} description={e.description} />
          ))}
        </ol>

        {certifications.length > 0 ? (
          <>
            <h3 className="mb-3 mt-12 text-[13px] font-semibold uppercase text-ink-2">Certifications</h3>
            <ol className="space-y-2">
              {certifications.map((c) => (
                <Row key={c.qualification} period={c.period} title={c.qualification} subtitle={c.institution} description={c.description} />
              ))}
            </ol>
          </>
        ) : (
          <div className="mt-12">
            <Pending field="Certifications">Add them in src/content/experience.ts.</Pending>
          </div>
        )}
      </div>
    </section>
  );
}
