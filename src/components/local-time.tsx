"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timeZone,
});

/** Live local time in Sri Lanka. Renders a stable placeholder on the server. */
export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className}>
      <time suppressHydrationWarning aria-label={time ? `Local time in ${profile.location}: ${time}` : undefined}>
        {time ?? "--:--"}
      </time>{" "}
      <span aria-hidden>GMT+5:30</span>
    </span>
  );
}
