"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { BreakdownPart } from "@/content/breakdown";
import type { Project } from "@/content/types";
import { CodeBlock } from "@/components/code-block";

const lenses = [
  { id: "decision", label: "Design decision" },
  { id: "responsive", label: "Responsive" },
  { id: "interaction", label: "Interaction" },
] as const;

type Lens = (typeof lenses)[number]["id"];

/**
 * Interactive decomposition of a real design into components.
 * Selecting a region (hotspot or list) swaps the rationale and the code.
 */
export function Breakdown({ parts, project }: { parts: BreakdownPart[]; project: Project }) {
  const [activeId, setActiveId] = useState(parts[1]?.id ?? parts[0].id);
  const [lens, setLens] = useState<Lens>("decision");
  const active = parts.find((p) => p.id === activeId) ?? parts[0];
  const activeIndex = parts.indexOf(active);

  return (
    <div className="grid-12 gap-y-10">
      {/* Design side */}
      <div className="col-span-full lg:col-span-7">
        <div className="t-label mb-3 flex items-center justify-between text-ink-3">
          <span>
            <span className="t-serif text-[15px] normal-case tracking-normal text-paper">Design</span> — {project.title}
          </span>
          <Link href={`/work/${project.slug}`} className="flex items-center gap-1 hover:text-paper">
            Case study <ArrowUpRight aria-hidden className="size-3" />
          </Link>
        </div>
        <div className="relative overflow-hidden bg-[#2d2e2e]">
          <Image
            src={project.cover.src}
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="h-auto w-full"
          />
          {parts.map((part, i) => {
            const isActive = part.id === activeId;
            return (
              <button
                key={part.id}
                type="button"
                tabIndex={-1}
                aria-hidden
                onClick={() => setActiveId(part.id)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 p-2"
                style={{ left: `${part.x * 100}%`, top: `${part.y * 100}%` }}
              >
                <span
                  className={`relative grid size-7 place-items-center rounded-full font-mono text-[11px] transition-all duration-300 ${
                    isActive ? "scale-110 bg-signal text-ink" : "bg-paper/90 text-ink group-hover:bg-paper"
                  }`}
                >
                  {i + 1}
                  {isActive && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-signal/50 motion-reduce:hidden" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <ul aria-label="Design regions" className="mt-4 flex flex-wrap gap-2">
          {parts.map((part, i) => {
            const isActive = part.id === activeId;
            return (
              <li key={part.id}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="breakdown-panel"
                  onClick={() => setActiveId(part.id)}
                  className={`t-label flex min-h-10 items-center gap-2 border px-3 transition-colors ${
                    isActive ? "border-signal bg-signal text-ink" : "border-line-inv text-paper hover:border-paper"
                  }`}
                >
                  <span className="font-mono">{i + 1}</span> {part.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Engineering side */}
      <div id="breakdown-panel" role="region" aria-label="Engineering notes" className="col-span-full lg:col-span-5">
        <div className="t-label mb-3 flex items-center justify-between text-ink-3">
          <span>
            <span className="t-mono text-[13px] normal-case text-paper">Engineering</span> — {activeIndex + 1}/{parts.length}
          </span>
          <span>{active.label}</span>
        </div>

        <div className="border border-line-inv">
          <div role="group" aria-label="Lens" className="flex border-b border-line-inv">
            {lenses.map((l) => (
              <button
                key={l.id}
                type="button"
                aria-pressed={lens === l.id}
                onClick={() => setLens(l.id)}
                className={`t-label min-h-10 flex-1 px-2 transition-colors ${
                  lens === l.id ? "bg-paper text-ink" : "text-ink-3 hover:text-paper"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div aria-live="polite" className="min-h-[8.5rem] p-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${active.id}-${lens}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-[17px] leading-relaxed text-paper"
              >
                {active[lens]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CodeBlock code={active.code} file={active.file} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
