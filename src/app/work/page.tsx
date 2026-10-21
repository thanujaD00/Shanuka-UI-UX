import type { Metadata } from "next";
import { WorkGrid } from "@/components/work/work-grid";
import { SectionTitle, Mute } from "@/components/section-title";
import { MiniFooter } from "@/components/mini-footer";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "All work",
  description: "Every published project — websites, mobile apps, dashboards and interaction experiments.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <>
      <section className="frame pb-24 pt-[calc(var(--nav-h)+3.5rem)] md:pb-36 md:pt-[calc(var(--nav-h)+5rem)]">
        <SectionTitle
          chip="Portfolio"
          lines={[
            <>
              All <Mute>projects.</Mute>
            </>,
          ]}
          aside={<p>{projects.length} pieces of work published on Behance, each with its own case study.</p>}
        />
        <WorkGrid />
      </section>
      <MiniFooter />
    </>
  );
}
