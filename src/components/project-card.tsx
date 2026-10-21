import Image from "next/image";
import Link from "next/link";
import { Asterisk, Plus } from "lucide-react";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Show the one-line summary under the caption bar. */
  showSummary?: boolean;
};

const shortDiscipline: Record<Project["discipline"], string> = {
  "Web Design": "Web Design",
  "Mobile App Design": "Mobile App",
  "Dashboard Design": "Dashboard",
  "Interaction Study": "Interaction",
  "Visual Design": "Visual Design",
};

/**
 * White-framed project card with a caption bar — the artwork keeps its
 * original proportions and sits on the project's own accent colour.
 */
export function ProjectCard({ project, sizes, priority, className = "", showSummary }: ProjectCardProps) {
  return (
    <article className={`group relative bg-card p-2.5 shadow-[0_1px_0_rgb(0_0_0/0.04)] sm:p-3 ${className}`}>
      <div className="relative overflow-hidden" style={{ backgroundColor: project.accent }}>
        <Image
          src={project.cover.src}
          width={project.cover.width}
          height={project.cover.height}
          alt={project.cover.alt}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 scale-50 place-items-center rounded-full bg-signal/90 text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:scale-100 group-hover:opacity-100"
        >
          <Plus className="size-6" />
        </span>
      </div>
      <div className="mt-2.5 flex items-center justify-between gap-3 bg-paper-2 px-2.5 py-2 text-[13px] sm:text-[14px]">
        <h3 className="flex min-w-0 items-center gap-1.5 font-medium uppercase tracking-[-0.01em]">
          <Asterisk aria-hidden className="size-3.5 shrink-0 text-signal" strokeWidth={2.25} />
          <Link href={`/work/${project.slug}`} className="stretched truncate">
            {project.title}
          </Link>
        </h3>
        <span className="shrink-0 text-ink-2">/{shortDiscipline[project.discipline]}</span>
      </div>
      {showSummary && <p className="mt-2.5 px-1 pb-1 text-[14px] leading-relaxed text-ink-2">{project.summary}</p>}
    </article>
  );
}
