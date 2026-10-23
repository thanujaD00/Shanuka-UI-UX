import { Asterisk, Plus, Sparkle, Zap } from "lucide-react";
import { processSteps } from "@/content/services";
import { SectionTitle, Mute } from "@/components/section-title";
import { Reveal } from "@/components/motion/reveal";

const icons = [Sparkle, Asterisk, Plus, Zap];

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        
        chip="My design process"
        id="process-title"
        lines={[
          <>Design process</>,
          <>
            <Mute>that works</Mute>
          </>,
        ]}
      />
      <ol className="mt-14 grid grid-cols-1 gap-[var(--gutter)] sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        {processSteps.map((step, i) => {
          const Icon = icons[i];
          return (
            <li key={step.title} className={i % 2 === 1 ? "lg:mt-20" : ""}>
              <Reveal
                delay={i * 0.08}
                className="h-full"
              >
                <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-ink p-6 text-white shadow-[0_16px_40px_-24px_rgb(0_0_0/0.45)] transition-[transform,box-shadow] duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-3 hover:rotate-[1deg] hover:shadow-[0_32px_60px_-24px_rgb(0_0_0/0.55)] motion-reduce:transform-none motion-reduce:transition-none md:min-h-[340px]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-signal/20 opacity-0 blur-3xl transition-[transform,opacity] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-150 group-hover:opacity-100 motion-reduce:transition-none"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-y-8 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-[transform,opacity] duration-1000 ease-[var(--ease-out-expo)] group-hover:translate-x-[300%] group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:transition-none"
                  />
                  <div>
                    <span aria-hidden className="absolute right-4 top-[-2.3rem] select-none text-[11rem] font-bold leading-none tracking-[-0.1em] text-white/[0.035] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:rotate-6 motion-reduce:transition-none">
                      0{i + 1}
                    </span>
                    <span className="relative grid size-14 place-items-center rounded-full border border-white/15 transition-[background-color,border-color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-12 group-hover:border-signal/60 group-hover:bg-signal/10 motion-reduce:transition-none">
                      <Icon
                        aria-hidden
                        className="size-6 fill-signal text-signal transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-[180deg] group-hover:scale-125 motion-reduce:transition-none"
                        strokeWidth={2}
                      />
                    </span>
                    <h3 className="mt-5 flex items-baseline gap-3 text-[19px] font-semibold uppercase tracking-[-0.02em]">
                      {step.title}
                    </h3>
                  </div>
                  <div className="relative">
                    <p className="mt-2 text-[14px] leading-relaxed text-white/75">{step.body}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="font-mono text-[11px] text-white/40">0{i + 1} / 0{processSteps.length}</span>
                      <span aria-hidden className="h-px flex-1 overflow-hidden bg-white/15">
                        <span
                          className="block h-full origin-left bg-signal"
                          style={{ transform: `scaleX(${(i + 1) / processSteps.length})` }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
