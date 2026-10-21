"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Grid3x3, X } from "lucide-react";
import { useInspect } from "./providers";
import { LocalTime } from "./local-time";
import { profile, socials } from "@/content/profile";
import { workProjects } from "@/content/projects";
import { services } from "@/content/services";
import { EASE_OUT_EXPO } from "./motion/reveal";

export const navItems: { label: string; href: string; count?: number }[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/work", count: workProjects.length },
  { label: "Services", href: "/#services", count: services.length },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { inspecting, toggle } = useInspect();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    setHidden(y > 240 && y > prev && !open);
  });

  // Lock scroll, focus the menu and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const button = menuButtonRef.current;
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  // Over the orange hero the header is transparent with white text.
  const onHero = pathname === "/" && !scrolled;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          onHero
            ? "on-ink border-transparent bg-transparent text-white"
            : scrolled
              ? "border-line bg-paper text-ink"
              : "border-transparent bg-paper/0 text-ink"
        }`}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      >
        <div className="frame flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Link
            href="/#top"
            className="group flex items-center gap-3"
          >
            <span className="sr-only">Home — </span>
            <span aria-hidden className={`selection grid size-8 place-items-center text-[13px] font-semibold tracking-tight ${onHero ? "bg-white text-ink" : "bg-ink text-paper"}`}>
              {profile.initials}
              <span className="handle -left-[5px] -top-[5px] opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="handle -bottom-[5px] -right-[5px] opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="text-[16px] font-semibold tracking-tight max-sm:sr-only">
              {profile.firstName}
              <sup className="ml-0.5 text-[9px]">®</sup>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex items-baseline gap-1 text-[15px] font-medium tracking-tight">
                    <span className="underline decoration-1 underline-offset-4 transition-colors group-hover:decoration-signal">
                      {item.label}
                    </span>
                    {item.count !== undefined && (
                      <span className={`text-[10px] ${onHero ? "text-white/70" : "text-ink-2"}`}>
                        ({String(item.count).padStart(2, "0")})
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <LocalTime className={`t-label hidden xl:inline ${onHero ? "text-white/75" : "text-ink-2"}`} />
            <button
              type="button"
              onClick={toggle}
              aria-pressed={inspecting}
              title="Reveal the layout grid and type specs"
              className={`t-label flex h-9 items-center gap-2 border px-3 transition-colors ${
                inspecting
                  ? "border-select bg-select text-white"
                  : onHero
                    ? "border-white/30 text-white hover:border-white"
                    : "border-line text-ink hover:border-ink"
              }`}
            >
              <Grid3x3 aria-hidden className="size-3.5" strokeWidth={1.75} />
              <span>Inspect</span>
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`flex h-9 items-center gap-2 px-3 text-[13px] font-semibold uppercase md:hidden ${
                onHero ? "bg-white text-ink" : "bg-ink text-paper"
              }`}
            >
              <span aria-hidden className="flex flex-col gap-[3px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="on-ink fixed inset-0 z-[70] flex flex-col bg-ink text-paper md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <div className="frame flex h-[var(--nav-h)] items-center justify-between">
              <span className="t-label text-ink-3">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="t-label flex h-9 items-center gap-2 border border-line-inv px-3"
              >
                <X aria-hidden className="size-3.5" /> Close
              </button>
            </div>
            <nav aria-label="Mobile" className="frame mt-6 flex-1">
              <ul className="rule">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    className="rule"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="text-[clamp(2.4rem,11vw,4rem)] font-semibold leading-none tracking-[-0.05em]">
                        {item.label}
                      </span>
                      <span className="t-label text-ink-3">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="frame flex flex-wrap gap-x-6 gap-y-2 pb-8 pt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex items-center gap-1 text-paper"
                >
                  {s.label} <ArrowUpRight aria-hidden className="size-3" />
                </a>
              ))}
              <LocalTime className="t-label ml-auto text-ink-3" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
