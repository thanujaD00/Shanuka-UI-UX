import type { SocialLink } from "./types";

/**
 * Personal details.
 * Sources: Behance profile (behance.net/shanukaudara) and Dribbble profile
 * (dribbble.com/shanuka06/about), both read on 20 Oct 2026.
 *
 * TODO(owner): fill every field marked `TODO` — the site hides or falls back
 * gracefully until you do.
 */
export const profile = {
  name: "Shanuka Amarasinghe",
  firstName: "Shanuka",
  lastName: "Amarasinghe",
  initials: "SA",
  title: "UI/UX Engineer",
  location: "Sri Lanka",
  timeZone: "Asia/Colombo",
  /** From Behance: "Available for Freelance & Fulltime". */
  availability: "Open to freelance & full-time work",

  email: "shanukaudara6@gmail.com",

  /** DUMMY: abstract placeholder. Replace with a real photo, e.g. /portrait.webp. */
  portrait: {
    src: "/portrait-placeholder.svg",
    width: 1200,
    height: 1500,
    alt: "Portrait placeholder",
  } as { src: string; width: number; height: number; alt: string } | undefined,

  /** Bio published on Behance and Dribbble (verbatim). */
  publishedBio: [
    "UI/UX Designer with a passion for creating clean, intuitive, and user-friendly designs.",
    "Skilled in Figma, wireframing, prototyping, and responsive design.",
    "Focused on enhancing user experiences through thoughtful design and modern aesthetics.",
  ],

  /** DUMMY: replace with your real interests. */
  interests: ["Typography", "Motion design", "Photography", "Travel", "Music"] as string[],
};

export const socials: SocialLink[] = [
  {
    label: "Behance",
    href: "https://www.behance.net/shanukaudara",
    handle: "shanukaudara",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shanuka-udara-1b886a216",
    handle: "shanuka-udara",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/shanuka06",
    handle: "shanuka06",
  },
  // TODO(owner): add GitHub or other profiles here, e.g.
  // { label: "GitHub", href: "https://github.com/<you>", handle: "<you>" },
];

/** Primary contact action: email when available, otherwise LinkedIn. */
export function primaryContact(): { href: string; label: string; external: boolean } {
  if (profile.email) {
    return { href: `mailto:${profile.email}`, label: profile.email, external: false };
  }
  const linkedin = socials.find((s) => s.label === "LinkedIn")!;
  return { href: linkedin.href, label: "Message me on LinkedIn", external: true };
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
