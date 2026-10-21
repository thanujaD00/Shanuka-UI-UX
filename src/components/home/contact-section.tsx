import Link from "next/link";
import { ArrowUp, ArrowUpRight, Sparkle } from "lucide-react";
import { profile, primaryContact, socials } from "@/content/profile";
import { MaskLines, Reveal } from "@/components/motion/reveal";
import { Chip } from "@/components/chip";
import { LocalTime } from "@/components/local-time";
import { ContactForm } from "./contact-form";
import { CopyEmail } from "./copy-email";

const footerNav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function ContactSection() {
  const contact = primaryContact();
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="frame pb-20 md:pb-28">
        <div
          className="on-ink relative overflow-hidden px-5 py-10 text-white sm:px-10 md:py-16 lg:px-16"
          style={{
            background:
              "radial-gradient(60% 80% at 10% 20%, #ff8a3d 0%, transparent 60%), radial-gradient(60% 90% at 45% 60%, #b3124f 0%, transparent 65%), radial-gradient(70% 90% at 95% 40%, #0f6e6e 0%, transparent 65%), radial-gradient(50% 60% at 80% 100%, #ffb238 0%, transparent 60%), #5a0f2a",
          }}
        >
          <div className="grid-12 relative items-center gap-y-12">
            <Reveal className="order-2 col-span-full md:col-span-4 lg:order-1 lg:col-span-5">
              {profile.email ? (
                <ContactForm email={profile.email} name={profile.firstName} />
              ) : (
                <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block bg-card p-6 text-ink">
                  {contact.label}
                </a>
              )}
            </Reveal>

            <div className="order-1 col-span-full md:col-span-4 lg:order-2 lg:col-span-6 lg:col-start-7">
              <Chip tone="white">Contact me</Chip>
              <MaskLines
                id="contact-title"
                className="mt-5 text-[clamp(2.8rem,6.6vw,6.2rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em]"
                lines={[<>Let&rsquo;s create</>, <>together</>]}
              />
              <div className="mt-10 max-w-[40ch] md:mt-16">
                <Sparkle aria-hidden className="size-7 fill-signal text-signal" />
                <p className="mt-3 text-[16px] font-semibold uppercase">Design that works in the browser</p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                  A product to design, a design to build, or a team that needs both — I&rsquo;m{" "}
                  {profile.availability.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-12 mt-14 gap-y-10 md:mt-20">
          <Reveal className="col-span-full md:col-span-5 lg:col-span-6">
            <p className="max-w-[32ch] text-[clamp(1.2rem,1.8vw,1.55rem)] font-medium leading-snug tracking-[-0.02em] text-mute">
              Focused on clean, intuitive experiences that blend creativity, usability and{" "}
              <span className="text-ink">code that ships</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={contact.href}
                {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[clamp(1.2rem,2vw,1.6rem)] font-semibold tracking-[-0.03em] underline decoration-2 underline-offset-[6px] hover:text-signal-ink"
              >
                {contact.label}
              </a>
              {profile.email && <CopyEmail email={profile.email} />}
            </div>
          </Reveal>
          <Reveal delay={0.06} className="col-span-full md:col-span-3 lg:col-span-5 lg:col-start-8">
            <div className="bg-card p-6">
              <p className="text-[17px] font-semibold">Elsewhere</p>
              <ul className="mt-4 divide-y divide-line">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-[15px]"
                    >
                      <span className="font-medium">{s.label}</span>
                      <span className="flex items-center gap-2 text-ink-2">
                        @{s.handle}
                        <ArrowUpRight aria-hidden className="size-4 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-center justify-between border-t border-line pt-4 text-[14px] text-ink-2">
                Local time in {profile.location}
                <LocalTime className="font-mono text-[13px] text-ink" />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-paper">
        <div className="frame grid-12 items-start gap-y-10 pb-10">
          <nav aria-label="Footer" className="col-span-2 md:col-span-2 lg:col-span-2">
            <p className="text-[13px] text-ink-2">Navigation</p>
            <ul className="mt-3 space-y-1.5 text-[15px]">
              {footerNav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="link-draw">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <p className="text-[13px] text-ink-2">Social</p>
            <ul className="mt-3 space-y-1.5 text-[15px]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                    <span className="link-draw">{s.label}</span>
                    <ArrowUpRight aria-hidden className="size-3.5 text-signal" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p
            aria-hidden
            className="col-span-full select-none whitespace-nowrap text-right text-[clamp(3.5rem,12.5vw,13rem)] font-bold leading-[0.8] tracking-[-0.07em] md:col-span-8 lg:col-span-8 lg:self-end"
          >
            {profile.firstName}
            <sup className="ml-1 align-[0.9em] text-[0.22em]">®</sup>
          </p>
        </div>
        <div className="bg-ink text-white">
          <div className="frame flex flex-wrap items-center justify-between gap-3 py-4 text-[13px]">
            <p>
              © {year} {profile.name}. All rights reserved.
            </p>
            <p className="text-white/60">Built with Next.js, TypeScript, Tailwind CSS &amp; Motion.</p>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-signal">
              Back to top <ArrowUp aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
