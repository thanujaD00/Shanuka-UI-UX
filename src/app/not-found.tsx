import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="frame flex min-h-[100svh] flex-col justify-center pt-[var(--nav-h)]">
      <p className="t-label text-ink-2">Error 404 — frame not found</p>
      <h1 className="t-display mt-6 text-[clamp(3rem,12vw,12rem)]">
        Nothing on <span className="t-serif">this</span>
        <br />
        <span className="t-mono">artboard.</span>
      </h1>
      <p className="mt-8 max-w-[44ch] text-[17px] text-ink-2">
        The page you were looking for has moved or never existed.
      </p>
      <Link href="/" className="group mt-8 inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-[17px]">
        <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
        Back to the portfolio
      </Link>
    </section>
  );
}
