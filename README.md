# Shanuka Amarasinghe — Portfolio

**Where design meets engineering.** A personal portfolio for a UI/UX engineer, built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and Motion.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are statically generated)
npm run start
npm run lint
npm run typecheck
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in production so canonical URLs, Open Graph, the sitemap and robots.txt point to the real domain. On Vercel, the production URL is picked up automatically.

---

## Creative direction — "Hot Spec"

Inspired by the reference *Personal Portfolio Framer Website* (Behance 255990499 / Dribbble 27497608), built with real content.

| Element | Rule |
| --- | --- |
| **Palette** | Gallery-grey canvas `#f5f4f1`, white cards, ink `#0e0e0e`, muted grey `#6e6d69` for the second tone of headlines, signal orange `#ff4d1a`. The hero, bento, marquee and contact use rich orange → magenta → teal gradients; every project card sits on its own accent colour. |
| **Type** | Geist: heavy uppercase two-tone headlines (`.t-head` + `<Mute>`), Geist Mono for small technical labels. |
| **Motifs** | Asterisk label chips, crosshair grid on the hero, white-framed project cards with caption bars, black process cards, a ghost name behind the hero, a giant name in the footer. |
| **Home sections** | Hero → experience strip → intro and stats → services (/001–/004) → selected projects → process → Frame → Component breakdown → why me (bento + toolkit) → cover marquee → experience → playground → contact form → footer. |
| **Signature interactions** | **Inspect** toggle (reveals the grid and type specs) · interactive **Frame → Component** breakdown · filterable `/work` index · contact form that composes an email · floating hero cards. |
| **Motion** | CSS keyframes for the hero (they paint before JavaScript loads), Motion for scroll reveals and the work filters. No scroll-jacking. `prefers-reduced-motion` turns it all off. |
| **Honesty rules** | No fake testimonials, pricing, client logos or inflated stats. Stats shown are verifiable (14 published projects, designing since 2023, 2 international teams). |

## Where content lives

All copy and data is separate from presentation, in `src/content/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, title, location, email, portrait, socials, published bio, interests |
| `projects.ts` | All 17 Behance projects (14 work + 3 experiments) |
| `case-notes.ts` | Case-study narrative per project (currently DUMMY) |
| `services.ts` | Services (/001–/004) and process steps |
| `experience.ts` | Experience, education, certifications |
| `capabilities.ts` | Skill groups (spectrum positions) and working principles |
| `breakdown.ts` | The "Frame → Component" walkthrough (hotspots, rationale, code) |

Anything marked `TODO(owner)` or `DUMMY` needs your input. Fields left empty are **hidden in production**; in development (`npm run dev`) they show as dashed blue "Pending" notes.

## Sources and integrity

| Source | Status | Used for |
| --- | --- | --- |
| Behance profile `behance.net/shanukaudara` (pages 1–2) | ✅ Read | Name, location, title, bio, work experience, all 17 project titles, URLs and covers |
| Behance project pages (`/gallery/...`) | ❌ HTTP 403 to automated access | — (descriptions, tools, process and extra frames could not be read) |
| Behance CDN cover images | ✅ Downloaded (original resolution) | `public/work/*.webp` |
| Dribbble profile + About page `dribbble.com/shanuka06` | ✅ Read | Dates for experience, education (BSc (Hons) IT, SLIIT, 2025), skills list |
| Dribbble shot pages | ❌ Empty response | — |
| Reference shot `dribbble.com/shots/27497608-…` | ❌ Connection reset every time | Not studied — the creative direction is original |
| LinkedIn profile | ❌ HTTP 999 (blocks bots) | — |

Verified content (from Behance / Dribbble):

- **Project `highlights`** describe only what is visible on each published cover image.
- **ROVER's goal quote and tags** are verbatim text printed on its cover.
- **Tools** are listed only where the Figma logo is printed on the cover.
- **Years** appear only where printed on the work (ROVER 2025, Happy New Year 2025).
- The **Frame → Component** code is clearly labelled as an illustrative breakdown written for this site.

## ⚠️ Dummy content — replace before publishing

At the owner's request, the gaps are filled with **dummy data**, and it is visible on the live site. Each item is marked `DUMMY` in the code:

| What | Where |
| --- | --- |
| Case-study context, challenge, process and outcome (all 17 projects) | `src/content/case-notes.ts` |
| Role descriptions (Point Five, KITO, freelance) and education description | `src/content/experience.ts` |
| Certifications (Coursera, freeCodeCamp — **examples only**) | `src/content/experience.ts → certifications` |
| Creative interests | `src/content/profile.ts → interests` |
| Portrait (abstract placeholder graphic) | `public/portrait-placeholder.svg`, `profile.portrait` |

The dummy case notes are deliberately qualitative: no metrics, clients or results. **Remove any certification you don't actually hold** — a false credential on a public portfolio is a real risk with recruiters.

Also review the draft copy written in your voice:

- Hero statement and intro: `src/components/home/hero.tsx`
- About story paragraphs: `src/components/home/about-section.tsx`
- Working principles: `src/content/capabilities.ts → principles`
- Contact invitation: `src/components/home/contact-section.tsx`

## Still to supply

1. A real **portrait** → `public/portrait.webp` (≥1200px wide, 4:5), then update `profile.portrait`.
2. **GitHub / other profiles** → `socials` in `profile.ts` (deliberately not guessed — a wrong URL could point to someone else's account).
3. Real **case-study notes** and **extra Figma frames** (wireframes, flows, screens) → `public/work/<slug>/`.
4. Confirm **featured projects and order** (`featured: true` in `projects.ts`).
5. Confirm the **Hotel Booking App** framing (its cover reads "Booking.com Mobile App Design"; the site presents it neutrally as a concept).

### Asset map

| Project slug | File | Behance project |
| --- | --- | --- |
| rover-bike-import | `public/work/rover.webp` | 238654549 |
| engineering-consultancy | `public/work/engineering.webp` | 222041051 |
| patient-portal | `public/work/patient.webp` | 213335595 |
| travel-guide-app | `public/work/travelapp.webp` | 219274191 |
| event-dashboard | `public/work/dashboard.webp` | 212912107 |
| digital-solutions-studio | `public/work/digital.webp` | 239148101 |
| budget-tracker-app | `public/work/budget.webp` | 211416195 |
| hotel-booking-app | `public/work/hotel.webp` | 215227927 |
| burger-shop-website | `public/work/burger.webp` | 242122163 |
| food-delivery-app | `public/work/food.webp` | 209977883 |
| travel-landing-page | `public/work/travellanding.webp` | 216010391 |
| sri-lanka-beaches-guide | `public/work/webpage1.webp` | 210963871 |
| audio-store-web-page | `public/work/webpage2.webp` | 209725793 |
| early-portfolio | `public/work/portfolio.webp` | 209660515 |
| day-night-toggle | `public/work/toggle.webp` | 209569521 |
| image-slider-animation | `public/work/slider.webp` | 209412521 |
| happy-new-year-2025 | `public/work/newyear.webp` | 215815667 |

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, JSON-LD, skip link, header
    page.tsx              home composition
    work/[slug]/page.tsx  statically generated case studies (17)
    not-found.tsx, sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
  components/
    home/                 hero, project feature, archive index, breakdown, sections
    work/loupe.tsx        zoomed crops of real artwork
    motion/reveal.tsx     Reveal + MaskLines (Motion, reduced-motion aware)
    site-header.tsx       hide-on-scroll nav, Inspect toggle, mobile menu
    frame-figure.tsx      cover-as-artboard presentation
    code-block.tsx        dependency-free TSX highlighter
    pending.tsx           dev-only placeholders
  content/                all editable data (see above)
```
