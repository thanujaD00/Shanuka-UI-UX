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
                className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-ink p-6 text-white transition-colors duration-500 hover:bg-[#1a1a1a] md:min-h-[340px]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-signal/0 blur-3xl transition-colors duration-700 group-hover:bg-signal/25"
                />
                <div>
                  <Icon aria-hidden className="size-7 fill-signal text-signal" strokeWidth={2} />
                  <h3 className="mt-5 flex items-baseline gap-3 text-[19px] font-semibold uppercase tracking-[-0.02em]">
                    {step.title}
                  </h3>
                </div>
                <div>
                  <span className="font-mono text-[12px] text-white/45">0{i + 1}</span>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">{step.body}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
