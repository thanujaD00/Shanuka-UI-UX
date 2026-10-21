"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * No backend needed: the form composes an email in the visitor's own mail app.
 * Swap `onSubmit` for a server action or form service later if you prefer.
 */
export function ContactForm({ email, name }: { email: string; name: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const from = String(data.get("name") ?? "").trim();
    const reply = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Project enquiry from ${from}`;
    const body = `${message}\n\n— ${from}${reply ? ` (${reply})` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full bg-paper px-3 py-3 text-[15px] text-ink outline-none ring-signal transition placeholder:text-ink-3 focus-visible:ring-2";

  return (
    <form onSubmit={onSubmit} className="bg-card p-2 text-ink shadow-[0_30px_60px_-24px_rgb(0_0_0/0.5)]">
      <div
        className="grid h-24 place-items-center text-[20px] font-semibold tracking-tight text-white"
        style={{ background: "linear-gradient(120deg, #a3123f, #e8401a 55%, #ff8a3d)" }}
      >
        <span>
          {name}
          <sup className="ml-0.5 text-[10px]">®</sup>
        </span>
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <p className="text-center text-[19px] font-semibold tracking-tight">Reach out to me</p>
        <label className="block text-[14px] font-semibold">
          Full name*
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block text-[14px] font-semibold">
          E-mail*
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
        <label className="block text-[14px] font-semibold">
          Message*
          <textarea name="message" required rows={4} placeholder="Tell me about your project" className={`${field} resize-y`} />
        </label>
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 bg-ink py-3.5 text-[15px] font-semibold uppercase text-white transition-colors hover:bg-signal"
        >
          Send message
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:rotate-45" />
        </button>
        <p aria-live="polite" className="min-h-5 text-center text-[13px] text-ink-2">
          {sent ? "Your email app should open with the message ready to send." : "Opens in your email app."}
        </p>
      </div>
    </form>
  );
}
