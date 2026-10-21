import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, workProjects } from "@/content/projects";
import { SectionTitle, Mute } from "@/components/section-title";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";

/** Staggered editorial composition for the six featured projects. */
const layout = [
  { className: "col-span-full md:col-span-5 lg:col-span-6", sizes: "(min-width: 1024px) 46vw, (min-width: 768px) 60vw, 100vw" },
  { className: "col-span-full md:col-span-3 lg:col-span-4 lg:col-start-9 md:mt-24", sizes: "(min-width: 1024px) 30vw, (min-width: 768px) 36vw, 100vw" },
  { className: "col-span-full", sizes: "(min-width: 1680px) 1550px, 92vw" },
  { className: "col-span-full md:col-span-3 lg:col-span-4", sizes: "(min-width: 1024px) 30vw, (min-width: 768px) 36vw, 100vw" },
  { className: "col-span-full md:col-span-5 lg:col-span-7 lg:col-start-6 md:mt-32", sizes: "(min-width: 1024px) 54vw, (min-width: 768px) 60vw, 100vw" },
  { className: "col-span-full md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3", sizes: "(min-width: 1024px) 62vw, 80vw" },
];

export function ProjectsSection() {
  // Put the widest cover in the full-width slot.
  const order = ["rover-bike-import", "travel-guide-app", "engineering-consultancy", "patient-portal", "event-dashboard", "digital-solutions-studio"];
  const projects = order.map((slug) => featuredProjects.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <section id="work" aria-labelledby="work-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        chip="Portfolio"
        id="work-title"
        lines={[
          <>Selected</>,
          <>
            <Mute>projects.</Mute>
          </>,
        ]}
        aside={
          <p>
            {workProjects.length} projects published on Behance — six featured here, every one with its own case study.
          </p>
        }
      />

      <div className="grid-12 mt-14 gap-y-10 md:mt-20 md:gap-y-14 lg:gap-y-20">
        {projects.map((p, i) => (
          <Reveal key={p.slug} className={layout[i].className}>
            <ProjectCard project={p} sizes={layout[i].sizes} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 md:mt-20">
        <Link
          href="/work"
          className="group inline-flex items-center gap-6 border-l-[3px] border-signal bg-paper-2 py-2 pl-4 pr-2 text-[15px] font-semibold uppercase transition-colors hover:bg-ink hover:text-white"
        >
          View all projects
          <span className="grid size-9 place-items-center bg-signal text-white">
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:rotate-45" />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
