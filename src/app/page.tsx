import { Hero } from "@/components/home/hero";
import { ExperienceStrip } from "@/components/home/experience-strip";
import { IntroSection } from "@/components/home/intro-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ProcessSection } from "@/components/home/process-section";
import { Breakdown } from "@/components/home/breakdown";
import { WhySection } from "@/components/home/why-section";
import { CoverMarquee } from "@/components/home/cover-marquee";
import { ExperienceSection } from "@/components/home/experience-section";
import { PlaygroundSection } from "@/components/home/playground-section";
import { ContactSection } from "@/components/home/contact-section";
import { SectionTitle, Mute } from "@/components/section-title";
import { getProject } from "@/content/projects";
import { breakdown, breakdownSlug } from "@/content/breakdown";

export default function Home() {
  const breakdownProject = getProject(breakdownSlug)!;

  return (
    <>
      <Hero />
      <ExperienceStrip />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />

      {/* Design + Engineering — the differentiator */}
      <section id="engineering" aria-labelledby="engineering-title" className="frame pb-24 md:pb-36">
        <div className="on-ink bg-ink px-5 py-12 text-white sm:px-8 md:py-16 lg:px-14 lg:py-20">
          <SectionTitle
            inverted
            chip="Design + engineering"
            id="engineering-title"
            lines={[
              <>From frame</>,
              <>
                <Mute>to component</Mute>
              </>,
            ]}
            aside={
              <p>
                Pick a region of the ROVER design to see how I&rsquo;d break it into typed, reusable components.
              </p>
            }
          />
          <div className="mt-12 md:mt-16">
            <Breakdown parts={breakdown} project={breakdownProject} />
          </div>
          <p className="mt-8 text-[13px] text-white/55">
            Illustrative breakdown of a published design. Code is written for this portfolio to show the approach.
          </p>
        </div>
      </section>

      <WhySection />
      <CoverMarquee />
      <ExperienceSection />
      <PlaygroundSection />
      <ContactSection />
    </>
  );
}
