import { experiments } from "@/content/projects";
import { SectionTitle, Mute } from "@/components/section-title";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";

export function PlaygroundSection() {
  return (
    <section id="playground" aria-labelledby="playground-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        chip="Playground"
        id="playground-title"
        lines={[
          <>
            Small <Mute>experiments</Mute>
          </>,
        ]}
        aside={<p>Interaction studies and visual sketches — testing how one component should move, feel and look.</p>}
      />
      <ul className="-mx-[var(--margin)] mt-12 flex snap-x snap-mandatory gap-[var(--gutter)] overflow-x-auto px-[var(--margin)] pb-4 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {experiments.map((p, i) => (
          <li key={p.slug} className="w-[80vw] shrink-0 snap-start md:w-auto">
            <Reveal delay={i * 0.06}>
              <ProjectCard project={p} sizes="(min-width: 768px) 30vw, 80vw" showSummary />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
