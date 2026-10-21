/**
 * What Shanuka offers — built only from the skills the owner listed and the
 * kinds of work published on Behance. Each service is illustrated with a
 * real project cover.
 */
export const services = [
  {
    id: "web",
    title: "UI/UX Design",
    description:
      "Clean, intuitive web interfaces — from user flows and wireframes to polished, responsive screens.",
    tags: ["User flows", "Wireframing", "Responsive web design", "Design systems"],
    project: "engineering-consultancy",
  },
  {
    id: "mobile",
    title: "Mobile App Design",
    description: "App interfaces that stay consistent, friendly and easy to use on every screen size.",
    tags: ["Onboarding", "Prototyping", "Component libraries", "Figma"],
    project: "travel-guide-app",
  },
  {
    id: "product",
    title: "Dashboards & Product UI",
    description: "Data-heavy screens made scannable: KPIs, tables, filters and states that hold up in real use.",
    tags: ["Information architecture", "Data display", "Reusable components"],
    project: "event-dashboard",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Turning designs into typed, component-based interfaces with React, Next.js and Tailwind CSS.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "API integration"],
    project: "patient-portal",
  },
] as const;

/** How a project moves from brief to build. */
export const processSteps = [
  {
    title: "Discover",
    body: "Understanding the users, the business goal and the constraints before drawing a single box.",
  },
  {
    title: "Wireframe",
    body: "Structure, flows and layout first — so the idea is tested before it is polished.",
  },
  {
    title: "UI Design",
    body: "Clean, consistent screens built from reusable components, with every state accounted for.",
  },
  {
    title: "Build & refine",
    body: "Developer-ready files, or the interface built in React and Next.js — then refined through feedback.",
  },
] as const;
