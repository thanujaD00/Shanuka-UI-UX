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
];
