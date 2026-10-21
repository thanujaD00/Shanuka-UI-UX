import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Pending } from "@/components/pending";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle, Mute } from "@/components/section-title";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="frame pb-24 md:pb-36">
      <SectionTitle
        chip="Testimonials"
        id="testimonials-title"
        lines={[
          <>
            Kind <Mute>words.</Mute>
          </>,
        ]}
        aside={<p>A space for honest feedback from clients and collaborators. Only real words belong here.</p>}
      />

      {testimonials.length > 0 ? (
        <div className="mt-14 grid gap-[var(--gutter)] md:mt-20 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.name}-${testimonial.organisation}`}
              delay={index * 0.06}
              className="flex flex-col justify-between bg-card p-6 md:min-h-[300px] md:p-8"
            >
              <Quote aria-hidden className="size-8 fill-signal text-signal" strokeWidth={1.5} />
              <blockquote className="my-8 text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-snug tracking-[-0.025em]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="rule flex items-center gap-3 pt-5">
                <span aria-hidden className="grid size-10 place-items-center bg-ink text-[13px] font-semibold text-white">
                  {testimonial.name
                    .split(/\s+/)
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")
                    .toUpperCase()}
                </span>
                <span className="text-[14px]">
                  <span className="block font-semibold">{testimonial.name}</span>
                  <span className="text-ink-2">
                    {testimonial.role} · {testimonial.organisation}
                  </span>
                </span>
              </footer>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-14 bg-card p-6 md:mt-20 md:p-8">
          <p className="max-w-[36ch] text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-snug tracking-[-0.025em]">
            Have we worked together? I&rsquo;d love to hear about your experience.
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-signal-ink transition-colors hover:text-ink"
          >
            Share your feedback <ArrowUpRight aria-hidden className="size-4" />
          </Link>
          <div className="mt-6">
            <Pending field="Testimonials">
              Add real quotes and attribution in src/content/testimonials.ts.
            </Pending>
          </div>
        </div>
      )}
    </section>
  );
}
