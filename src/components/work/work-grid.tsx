"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/content/types";

const filters: { id: string; label: string; match: (p: Project) => boolean }[] = [
  { id: "all", label: "All", match: () => true },
  { id: "web", label: "Web", match: (p) => p.discipline === "Web Design" },
  { id: "mobile", label: "Mobile", match: (p) => p.discipline === "Mobile App Design" },
  { id: "dashboard", label: "Dashboard", match: (p) => p.discipline === "Dashboard Design" },
  { id: "experiments", label: "Experiments", match: (p) => p.kind === "experiment" },
];

export function WorkGrid() {
  const [active, setActive] = useState("all");
  const filter = filters.find((f) => f.id === active)!;
  const visible = projects.filter(filter.match);

  return (
    <div className="mt-12 md:mt-16">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = projects.filter(f.match).length;
          const on = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.id)}
              className={`min-h-10 px-4 text-[14px] font-semibold uppercase transition-colors ${
                on ? "bg-ink text-white" : "bg-paper-2 text-ink hover:bg-ink/10"
              }`}
            >
              {f.label} <span className={on ? "text-signal" : "text-ink-2"}>({count})</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} projects
      </p>

      <motion.ul layout className="mt-8 columns-1 gap-[var(--gutter)] sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: Math.min(i, 8) * 0.03 }}
              className="mb-[var(--gutter)] break-inside-avoid"
            >
              <ProjectCard project={p} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw" showSummary />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
