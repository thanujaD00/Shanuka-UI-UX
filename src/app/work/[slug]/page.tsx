import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getNextProject, getProject, projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { MaskLines, Reveal } from "@/components/motion/reveal";
import { Loupe } from "@/components/work/loupe";
import { Pending, isDev } from "@/components/pending";
import { FrameFigure } from "@/components/frame-figure";
import { MiniFooter } from "@/components/mini-footer";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: `${project.title} — ${profile.name}`,
      description: project.summary,
      images: [{ url: project.cover.src, width: project.cover.width, height: project.cover.height, alt: project.cover.alt }],
    },
    twitter: { card: "summary_large_image", images: [project.cover.src] },
  };
}

function Chapter({
  index,
  title,
  children,
}: {
  index: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="grid-12 rule gap-y-6 pt-5">
      <h2 className="col-span-full md:col-span-3 lg:col-span-4">
        <span className="t-label block text-ink-2">{index}</span>
        <span className="mt-2 block text-[clamp(1.5rem,2.4vw,2.2rem)] font-medium leading-tight tracking-[-0.035em]">
          {title}
        </span>
      </h2>
      <div className="col-span-full md:col-span-5 lg:col-span-7 lg:col-start-6">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const pool = projects.filter((p) => p.kind === project.kind);
  const position = pool.findIndex((p) => p.slug === project.slug) + 1;
  const isExperiment = project.kind === "experiment";

  const meta = [
    { k: "Discipline", v: project.discipline },
    { k: "Platform", v: project.platform },
    { k: "Role", v: project.role },
    project.year && { k: "Year", v: project.year },
    project.brand && { k: "Brand in design", v: project.brand },
    project.tools && { k: "Tools", v: project.tools.join(", ") },
  ].filter(Boolean) as { k: string; v: string }[];

  const hasStory = Boolean(project.context || project.challenge || project.process?.length || project.outcome);
  let chapter = 0;
  const nextChapter = () => String(++chapter).padStart(2, "0");

  return (
    <article className="pt-[var(--nav-h)]">
      {/* Header */}
      <header className="frame pt-8 md:pt-12">
        <div className="t-label flex items-center justify-between gap-4 text-ink-2">
          <Link href={isExperiment ? "/#playground" : "/#work"} className="group inline-flex items-center gap-2 hover:text-ink">
            <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            {isExperiment ? "Playground" : "All work"}
          </Link>
          <span>
            {isExperiment ? "Experiment" : "Project"} {String(position).padStart(2, "0")} /{" "}
            {String(pool.length).padStart(2, "0")}
          </span>
        </div>

        <MaskLines
          as="h1"
          immediate
          className="mt-10 text-[clamp(2.6rem,8.5vw,9rem)] font-bold uppercase leading-[0.88] tracking-[-0.06em] md:mt-16"
          spec="Display / clamp(2.8rem, 9.5vw, 10rem)"
          lines={[project.title]}
        />

        <div className="grid-12 anim-fade-up mt-10 gap-y-8 md:mt-14" style={{ animationDelay: "0.2s" }}>
          <p className="t-lead col-span-full md:col-span-5 lg:col-span-6">{project.summary}</p>
          <div className="col-span-full md:col-span-3 lg:col-span-5 lg:col-start-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
              {meta.map((m) => (
                <div key={m.k} className="rule pt-2">
                  <dt className="t-label text-ink-2">{m.k}</dt>
                  <dd className="mt-1 text-[15px]">{m.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex min-h-11 items-center gap-2 bg-ink px-5 text-[15px] text-paper transition-colors hover:bg-signal hover:text-ink"
            >
              View on Behance
              <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero artwork */}
      <div className="frame anim-fade-up mt-14 md:mt-20" style={{ animationDelay: "0.3s" }}>
        <FrameFigure project={project} sizes="(min-width: 1680px) 1550px, 92vw" priority inset="wide" />
      </div>

      <div className="frame mt-20 space-y-20 pb-28 md:mt-32 md:space-y-28 md:pb-40">
        {/* Brief */}
        {(project.quote || project.tags || project.context || project.challenge || isDev) && (
          <Reveal>
            <Chapter index={nextChapter()} title="The brief">
              {project.quote ? (
                <blockquote>
                  <p className="t-serif text-[clamp(1.7rem,3.2vw,3rem)] leading-[1.1]">&ldquo;{project.quote.text}&rdquo;</p>
                  <footer className="t-label mt-4 text-ink-2">— {project.quote.source}</footer>
                </blockquote>
              ) : project.context || project.challenge ? null : (
                <Pending field="Brief / goal">
                  Not published with this project. Add <code>context</code> and <code>challenge</code> in
                  src/content/projects.ts.
                </Pending>
              )}
              {project.tags && (
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Positioning tags">
                  {project.tags.map((t) => (
                    <li key={t} className="rounded-full border border-ink px-3 py-1 text-[14px]">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              {project.context && (
                <p className={`text-[clamp(1.2rem,1.7vw,1.5rem)] leading-snug ${project.quote ? "mt-8" : ""}`}>{project.context}</p>
              )}
              {project.challenge && (
                <p className="mt-5 text-[17px] leading-relaxed text-ink-2">
                  <span className="t-label mr-2 text-signal-ink">Challenge</span>
                  {project.challenge}
                </p>
              )}
            </Chapter>
          </Reveal>
        )}

        {/* What's on the canvas */}
        <Reveal>
          <Chapter
            index={nextChapter()}
            title={
              <>
                What&rsquo;s on the <span className="t-serif">canvas</span>
              </>
            }
          >
            <ol className="space-y-0">
              {project.highlights.map((h, i) => (
                <li key={h} className="rule grid grid-cols-[2.5rem_1fr] gap-3 py-4 first:border-t-0 first:pt-0">
                  <span className="t-mono text-[13px] text-signal-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] leading-relaxed">{h}</span>
                </li>
              ))}
            </ol>
          </Chapter>
        </Reveal>

        {/* Details */}
        {project.details && project.details.length > 0 && (
          <section aria-labelledby="details-title">
            <div className="t-label rule flex justify-between pt-3 text-ink-2">
              <h2 id="details-title">{nextChapter()} — Up close</h2>
              <span>Crops of the published artwork</span>
            </div>
            <div className="grid-12 mt-8 gap-y-12">
              {project.details.map((d, i) => (
                <Reveal
                  key={d.caption}
                  delay={i * 0.06}
                  className={`col-span-full md:col-span-4 ${project.details!.length === 2 ? "lg:col-span-6" : "lg:col-span-4"}`}
                >
                  <Loupe image={project.cover} detail={d} accent={project.accent} index={i + 1} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Process & outcome — only real content, pending notes in dev */}
        {(hasStory || isDev) && (
          <Reveal>
            <Chapter index={nextChapter()} title="Process & outcome">
              {project.process?.length ? (
                <ol className="space-y-4">
                  {project.process.map((step, i) => (
                    <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3">
                      <span className="t-mono text-[13px] text-signal-ink">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[17px] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <Pending field="Process">
                  Research, wireframes and iterations aren&rsquo;t published for this project. Add real steps to{" "}
                  <code>process</code> — and upload extra frames to /public/work — when available.
                </Pending>
              )}
              {project.outcome ? (
                <p className="rule mt-8 pt-5 text-[17px] leading-relaxed">
                  <span className="t-label mr-2 text-signal-ink">Outcome</span>
                  {project.outcome}
                </p>
              ) : (
                <div className="mt-6">
                  <Pending field="Outcome">Only add outcomes or metrics you can verify.</Pending>
                </div>
              )}
            </Chapter>
          </Reveal>
        )}

        <p className="t-label max-w-[70ch] text-ink-2 normal-case">
          Source: “{project.behanceTitle}” on Behance. The full project, with every frame, lives there.
        </p>
      </div>

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        className="group on-ink block overflow-hidden text-paper"
        style={{ backgroundColor: "var(--color-ink)" }}
      >
        <div className="frame grid-12 items-center gap-y-8 py-16 md:py-24">
          <div className="col-span-full md:col-span-4 lg:col-span-6">
            <span className="t-label text-ink-3">Next {isExperiment ? "experiment" : "project"}</span>
            <span className="mt-4 block text-[clamp(2.4rem,6.5vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
              <span className="link-draw">{next.title}</span>
            </span>
            <span className="t-label mt-5 inline-flex items-center gap-2 text-ink-3 group-hover:text-signal">
              {next.discipline} <ArrowUpRight aria-hidden className="size-3.5" />
            </span>
          </div>
          <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-8">
            <div className="p-[6%] transition-transform duration-700 group-hover:-rotate-1" style={{ backgroundColor: next.accent }}>
              <Image
                src={next.cover.src}
                width={next.cover.width}
                height={next.cover.height}
                alt=""
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Link>
      <MiniFooter />
    </article>
  );
}
