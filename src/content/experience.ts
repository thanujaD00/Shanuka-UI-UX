import type { EducationItem, ExperienceItem } from "./types";

/**
 * Sources: Behance profile "Work Experience" (organisations, countries) and
 * Dribbble "About" (dates, education). Descriptions are not published anywhere
 * accessible — add them here when ready.
 */
export const experience: ExperienceItem[] = [
  
  {
    period: "2025 — Present",
    role: "Creative Designer",
    organisation: "Point Five Global Events",
    location: "United Arab Emirates",
    // DUMMY description — replace.
    description:
      "Designing event websites, registration flows and digital collateral, keeping screen and print work consistent with each event's identity.",
    source: "Behance · Dribbble",
  },
  {
    period: "Part-time",
    role: "Lead Designer",
    organisation: "TILLHIVE",
    location: "Sri Lanka",
    description:
      "Leading the design process for digital experiences, shaping concepts into clear, user-friendly interfaces and collaborating with the team to deliver consistent, polished designs.",
    source: "User-provided",
  },
  {
    period: "2024 — 2025",
    role: "UI/UX Designer",
    organisation: "KITO Asset Holding Limited",
    location: "United Kingdom",
    // DUMMY description — replace.
    description:
      "Designed web and mobile interfaces from wireframes to developer-ready Figma files, working closely with engineers on a shared component library.",
    source: "Behance · Dribbble",
  },
  {
    period: "2023 — Present",
    role: "Freelance UI/UX Designer",
    organisation: "Independent practice",
    // DUMMY description — replace.
    description:
      "Websites, landing pages and mobile app UI for small businesses and startups — from first sketch to responsive, developer-ready designs.",
    source: "Behance · Dribbble",
  },
];

export const education: EducationItem[] = [
  {
    period: "2025",
    qualification: "BSc (Hons) Information Technology",
    institution: "SLIIT — Sri Lanka Institute of Information Technology",
    // DUMMY description — replace.
    description: "Coursework spanning software engineering, web technologies and human-computer interaction.",
    source: "Dribbble",
  },
];

/**
 * ⚠️ DUMMY certifications — examples only. Replace with certificates you
 * actually hold, or empty this array to hide the block, before publishing.
 */
export const certifications: EducationItem[] = [
  {
    period: "2024",
    qualification: "UI/UX Design Specialization",
    institution: "Coursera",
    description: "User research, wireframing, prototyping and visual design fundamentals.",
    source: "Dummy",
  },
  {
    period: "2023",
    qualification: "Responsive Web Design",
    institution: "freeCodeCamp",
    description: "Semantic HTML, modern CSS layout and accessible, responsive pages.",
    source: "Dummy",
  },
];
