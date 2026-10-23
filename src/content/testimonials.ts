export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shanuka did outstanding work. He met and exceeded all expectations. He never complained if changes needed to be done, he made them in a timely manner and was always willing to work hard to get it right. I would highly recommend Shanuka for any work you need done.",
    name: "JP Ledermann",
    role: "UI/UX portfolio design client",
    organisation: "USA",
  },
  {
    quote:
      "It was a pleasure working with Shanuka on several mobile app design projects. He was easy to work with, understood my needs, and consistently delivered thoughtful designs. I'm really happy with the results and would gladly recommend his work to others. Beyond our professional collaboration, we've also built a great friendship despite living in different countries. He's not just a talented designer but also a great buddy!",
    name: "Jhonatta Bernardes",
    role: "Mobile app design client",
    organisation: "Brazil",
  },
  // DUMMY testimonial — added at the owner's request on 23 Oct 2026. Replace with a real quote.
  {
    quote:
      "Shanuka turned a messy set of requirements into a clear, usable dashboard. The handoff files were organised, the components were consistent, and our developers could build from them without guesswork.",
    name: "Placeholder Client",
    role: "Dashboard design client",
    organisation: "Placeholder",
  },
  // DUMMY testimonial — added at the owner's request on 23 Oct 2026. Replace with a real quote.
  {
    quote:
      "Working with Shanuka felt like having a designer who also thinks like an engineer. He asked the right questions early, and the final web design looked exactly the same once it was live.",
    name: "Placeholder Collaborator",
    role: "Web design collaborator",
    organisation: "Placeholder",
  },
];
