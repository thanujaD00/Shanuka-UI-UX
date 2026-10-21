import type { Project } from "./types";

type CaseNotes = Pick<Project, "context" | "challenge" | "process" | "outcome">;

/**
 * ⚠️ DUMMY CASE-STUDY COPY — added at the owner's request on 20 Oct 2026.
 *
 * Everything in this file is placeholder text, written to fill the case-study
 * template. It is NOT taken from Behance and has not been verified. It avoids
 * metrics and client claims on purpose. Replace each entry with your real
 * notes (or delete it to hide that section) before publishing.
 */
export const caseNotes: Record<string, CaseNotes> = {
  "rover-bike-import": {
    context:
      "ROVER imports motorcycles and scooters and needed a website that could sit comfortably next to the manufacturers it sells.",
    challenge:
      "Import businesses compete on trust. The site had to feel as considered as the bikes, while making it effortless to book or enquire.",
    process: [
      "Reviewed import and dealership websites to see how they establish credibility in the first screen.",
      "Set a dark, photography-led direction so the bikes carry the page and the interface stays quiet.",
      "Built the hero around one action, Book Now, with short proof points underneath.",
      "Placed manufacturer marques and floating contact actions early to answer “can I trust them?” before the first scroll.",
    ],
    outcome:
      "A brand-focused showcase with a single clear path to booking, handed over as responsive Figma designs ready for development.",
  },
  "engineering-consultancy": {
    context:
      "ProDream is an engineering consultancy offering planning, design & engineering, specialist services and project management.",
    challenge:
      "Present a broad, technical offering to clients from very different industries without overwhelming them.",
    process: [
      "Grouped the services into four numbered columns so the whole offering reads at a glance.",
      "Translated the company's values into a four-card grid that supports the “Who We Are” story.",
      "Designed a reusable project-detail template with structured metadata for country, client, services and sector.",
      "Added a client login with Google sign-in as a separate, focused screen.",
    ],
    outcome:
      "A modular page system — home, project detail and login — built from a shared set of red-and-white components.",
  },
  "patient-portal": {
    context: "A web portal that lets hospital inpatients request help and services from their bed.",
    challenge:
      "Patients may be unwell, tired or unfamiliar with technology, so every task had to be obvious, quick and forgiving.",
    process: [
      "Mapped the most common patient requests and grouped them into four services.",
      "Promoted the most time-sensitive needs — medication, nurse, breakfast — into one-tap quick actions.",
      "Paired every request form with a live ticket list so patients can see what happens next.",
      "Reused the same card and button patterns for meal ordering to keep the learning curve flat.",
    ],
    outcome:
      "A calm, card-based portal where each service is one or two steps away and every request can be tracked.",
  },
  "travel-guide-app": {
    context: "A mobile travel companion for planning trips and discovering destinations.",
    challenge:
      "Travel apps often overload the first screen. The goal was to inspire first, then make searching feel effortless.",
    process: [
      "Used full-bleed photography in onboarding so the first impression is the destination, not the interface.",
      "Put search and filters at the top of a personalised home screen.",
      "Introduced region chips to narrow choices before showing results.",
      "Showed one large destination card at a time, with a favourite action always in reach.",
    ],
    outcome:
      "A focused, photography-first app flow from onboarding to discovery, designed for one-handed use.",
  },
  "event-dashboard": {
    context: "An admin dashboard for an event-ticketing platform, used to track sales and manage events.",
    challenge:
      "Organisers need the big picture and the fine detail on the same screen without the interface feeling crowded.",
    process: [
      "Led with three KPI cards — tickets sold, refunds, revenue — each with a trend and sparkline.",
      "Added weekly sales charts underneath to explain the numbers above them.",
      "Designed the events table for scanning, with status tabs, search, sort and row actions at the edge.",
      "Kept navigation to six top-level sections so every task is one click away.",
    ],
    outcome:
      "A clear hierarchy from summary to detail, with reusable cards, charts and table patterns for future screens.",
  },
  "digital-solutions-studio": {
    context: "Dream Spot Studio offers digital services, from web design to AI integration, to businesses in Australia.",
    challenge: "Six quite different services needed to feel like one coherent studio rather than a list.",
    process: [
      "Opened with a direct headline that names the audience straight away.",
      "Turned the services into a single curved band of icons that doubles as navigation.",
      "Placed social proof next to the main Request Quote action.",
      "Kept the palette to teal, blue and white so the services read as one family.",
    ],
    outcome: "A friendly, approachable services site where every offering is visible in the first screen.",
  },
  "budget-tracker-app": {
    context: "A personal finance app for tracking spending, including spending abroad, against budgets and savings goals.",
    challenge: "Money apps can feel stressful. The aim was clarity without anxiety.",
    process: [
      "Used onboarding to explain the core promise in one sentence.",
      "Stacked balance, savings and investments on the home screen in order of priority.",
      "Designed budget comparisons across daily, weekly, monthly and yearly views.",
      "Added savings goals with a simple monthly contribution control.",
    ],
    outcome: "A bright, encouraging finance app with consistent cards, charts and progress rings.",
  },
  "hotel-booking-app": {
    context: "A concept for the schedule area of a hotel booking app.",
    challenge: "Travellers with several stays need to see dates, places and times together without switching screens.",
    process: [
      "Combined a month calendar and the list of upcoming stays in one scroll.",
      "Highlighted stay dates directly on the calendar.",
      "Gave each stay card its photo, dates and check-in time.",
    ],
    outcome: "A single schedule view that answers “where am I staying, and when?” at a glance.",
  },
  "burger-shop-website": {
    context: "A German-language website for a smash-burger restaurant.",
    challenge: "Make the food the hero and get visitors to order quickly.",
    process: [
      "Chose a black canvas so the product photography and orange accents pop.",
      "Added a bold vertical wordmark to give the brand presence.",
      "Built a product carousel with price and simple previous / next controls.",
      "Kept one primary action, Jetzt bestellen (order now), above the fold.",
    ],
    outcome: "A punchy, appetite-led landing page with a single clear ordering path.",
  },
  "food-delivery-app": {
    context: "Taste of Bakes is a food delivery app concept covering the full ordering journey.",
    challenge: "Take a hungry user from opening the app to a confirmed order in as few steps as possible.",
    process: [
      "Designed splash and sign-in with social login to reduce friction.",
      "Built discovery around search, a seasonal deal banner and nearby restaurants.",
      "Kept the cart simple, with clear prices and quantities.",
      "Closed the flow with a friendly confirmation screen.",
    ],
    outcome: "A warm yellow-and-white app flow from sign-in to order confirmation.",
  },
  "travel-landing-page": {
    context: "Travely is a landing page for a travel packages and community platform.",
    challenge: "Inspire visitors and move them to explore packages in a single screen.",
    process: [
      "Wrote a short, direct headline with supporting copy.",
      "Paired a primary Explore action with a secondary Destination video control.",
      "Built a layered collage with floating traveller ratings for social proof.",
    ],
    outcome: "A light, airy hero that balances inspiration with a clear next step.",
  },
  "sri-lanka-beaches-guide": {
    context: "An information page for travellers planning a beach holiday in Sri Lanka.",
    challenge: "There is a lot of useful information to share; it had to be scannable rather than overwhelming.",
    process: [
      "Split the content into clear sections: destinations, practical information, safety, etiquette and accommodation.",
      "Used icon-led cards for tips so each one can be read in seconds.",
      "Organised the best time to visit by coast, matching how travellers plan.",
    ],
    outcome: "A structured guide that reads like a checklist for planning the trip.",
  },
  "audio-store-web-page": {
    context: "A product page for an online store selling headsets and wearables.",
    challenge: "Stand out from generic e-commerce layouts while keeping products easy to compare.",
    process: [
      "Designed a graphic black-and-white diagonal hero around the line “Your Sound, Your World”.",
      "Used consistent product cards showing price and delivery promise.",
      "Added a carousel for related products such as smartwatches.",
    ],
    outcome: "A bold, product-focused page with a reusable card system.",
  },
  "early-portfolio": {
    context: "My first personal portfolio, designed while studying IT at SLIIT.",
    challenge: "Introduce myself and show both development and design skills in one place.",
    process: [
      "Chose a dark magenta gradient and expressive type for personality.",
      "Organised the content into what I do, work history and technologies.",
      "Ended with a direct “Let's work together” contact form.",
    ],
    outcome: "The starting point for this portfolio — and for positioning myself between design and development.",
  },
  "day-night-toggle": {
    context: "A micro-interaction study built entirely in Figma.",
    challenge: "Can a single on / off switch carry personality without losing clarity?",
    process: [
      "Designed two states: a sunny day and a starry night.",
      "Used Smart Animate to move the sun into the moon and swap the background.",
    ],
    outcome: "A playful toggle that still reads instantly as on or off.",
  },
  "image-slider-animation": {
    context: "A prototyping exercise exploring slide transitions in Figma.",
    challenge: "Make three slides feel like one connected system rather than three separate pages.",
    process: [
      "Built one layout and reused it across three fruit-themed slides.",
      "Animated the images and pagination together with Smart Animate.",
    ],
    outcome: "A smooth slider prototype that is ready to hand over to development.",
  },
  "happy-new-year-2025": {
    context: "A typographic greeting made for social media.",
    challenge: "Say “Happy New Year” with nothing but type and two colours.",
    process: [
      "Stacked 2025 in two plum tones, with a soft shadow for depth.",
      "Set Happy and New Year vertically to frame the numbers.",
    ],
    outcome: "A clean, square social graphic.",
  },
};
