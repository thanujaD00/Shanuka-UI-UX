import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/content/profile";

/** Compact footer for inner pages. */
export function MiniFooter() {
  return (
    <footer className="on-ink border-t border-line-inv bg-ink text-paper">
      <div className="frame grid-12 gap-y-6 py-10 text-[15px]">
        <p className="col-span-full md:col-span-3 lg:col-span-4">
          <Link href="/#contact" className="group inline-flex items-center gap-2">
            <span className="link-draw">Start a conversation</span>
            <ArrowUpRight aria-hidden className="size-4 text-signal" />
          </Link>
        </p>
        <ul className="col-span-full flex flex-wrap gap-x-6 gap-y-2 md:col-span-3 lg:col-span-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-draw text-ink-3 hover:text-paper">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="col-span-full text-ink-3 md:col-span-2 md:text-right lg:col-span-3">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
