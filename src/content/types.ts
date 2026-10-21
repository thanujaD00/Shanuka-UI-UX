export type Discipline =
  | "Web Design"
  | "Mobile App Design"
  | "Dashboard Design"
  | "Interaction Study"
  | "Visual Design";

export type Platform = "Desktop web" | "Responsive web" | "Mobile app" | "Prototype" | "Social graphic";

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * A zoomed "loupe" into the project's cover image.
 * `x` and `y` are the focal point as fractions (0–1) of the image.
 */
export interface Detail {
  x: number;
  y: number;
  zoom: number;
  caption: string;
}

export interface Project {
  slug: string;
  /** Display title used on this site. */
  title: string;
  /** Title exactly as published on Behance. */
  behanceTitle: string;
  behanceUrl: string;
  kind: "work" | "experiment";
  featured?: boolean;
  discipline: Discipline;
  platform: Platform;
  /** Only set when the year is printed on the work itself. */
  year?: string;
  /** Brand or product name visible inside the design. */
  brand?: string;
  /** Only set when verifiable (e.g. the Figma mark appears on the cover). */
  tools?: string[];
  role: string;
  /** Accent sampled from the project's own imagery. */
  accent: string;
  /** Whether the accent panel is dark (text on it should be light). */
  tone: "light" | "dark";
  cover: ImageAsset;
  /** One-line preview description, derived from the visible design. */
  summary: string;
  /** What the published frames actually show. */
  highlights: string[];
  /** Verbatim text published with the project. */
  quote?: { text: string; source: string };
  tags?: string[];
  details?: Detail[];

  /* ------------------------------------------------------------------
   * Long-form case study fields. These are NOT documented on Behance
   * (project pages could not be read). Leave undefined until you have
   * real content — they render as "pending" notes in development only.
   * ------------------------------------------------------------------ */
  context?: string;
  challenge?: string;
  process?: string[];
  outcome?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organisation: string;
  location?: string;
  description?: string;
  source: string;
}

export interface EducationItem {
  period: string;
  qualification: string;
  institution: string;
  description?: string;
  source: string;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  /** Position on the design ↔ engineering spectrum, 0–100. Not a proficiency score. */
  range: [number, number];
  description: string;
  skills: string[];
  /** Slugs of projects that evidence this group. */
  evidence?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
