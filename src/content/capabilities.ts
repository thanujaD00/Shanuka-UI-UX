import type { CapabilityGroup } from "./types";

/**
 * Skills supplied by the owner, plus Figma (stated on Behance and Dribbble).
 * `range` places each discipline between pure design (0) and pure engineering (100).
 * It describes WHERE the work sits — it is not a proficiency rating.
 */
export const capabilities: CapabilityGroup[] = [
  {
    id: "visual",
    title: "Visual Design & Branding",
    range: [0, 28],
    description: "Typography, colour and composition that give a product a recognisable voice.",
    skills: ["Visual Design", "Branding", "Graphic Design", "Adobe Photoshop"],
    evidence: ["happy-new-year-2025", "burger-shop-website"],
  },
  {
    id: "ux",
    title: "UX Thinking & Prototyping",
    range: [12, 48],
    description: "Turning a fuzzy brief into flows, wireframes and clickable prototypes worth testing.",
    skills: ["User Experience Design", "Wireframing", "Prototyping", "Figma"],
    evidence: ["patient-portal", "travel-guide-app"],
  },
  {
    id: "interface",
    title: "Product & Interface Design",
    range: [26, 66],
    description: "Screens designed as systems — reusable patterns, clear states and layouts that hold at every breakpoint.",
    skills: ["UI/UX Design", "User Interface Design", "Responsive Web Design", "Design Systems"],
    evidence: ["event-dashboard", "engineering-consultancy"],
  },
  {
    id: "creative",
    title: "Creative Exploration",
    range: [38, 72],
    description: "Small interaction studies that test how an interface should move and respond.",
    skills: ["Micro-interactions", "Motion prototyping in Figma"],
    evidence: ["day-night-toggle", "image-slider-animation"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    range: [60, 100],
    description: "Typed, component-based interfaces that ship the design without losing it.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
      "Component-Based Architecture",
      "Responsive Frontend Development",
      "API Integration",
    ],
  },
];

/**
 * Working principles — draft copy written for the portfolio.
 * TODO(owner): edit so every line sounds like you.
 */
export const principles = [
  {
    title: "Clarity before decoration",
    body: "If a screen needs explaining, it isn't finished. Hierarchy and spacing do the work before colour or motion does.",
  },
  {
    title: "Systems, not screens",
    body: "Type, colour, spacing and components are decided once and reused everywhere, so the hundredth screen is as consistent as the first.",
  },
  {
    title: "Respect the build",
    body: "Every layout has an answer for every breakpoint, state and edge case before it leaves the design file.",
  },
  {
    title: "Details carry personality",
    body: "A toggle, a hover, a transition — the smallest interactions are where a product feels considered.",
  },
];
