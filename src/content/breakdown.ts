/**
 * "Frame → Component" breakdown for the Design + Engineering section.
 *
 * This is an ILLUSTRATIVE exercise: it shows how the published ROVER design
 * would be decomposed into a typed component architecture. It does not claim
 * that this code shipped in production.
 */
export interface BreakdownPart {
  id: string;
  label: string;
  /** Hotspot position on the ROVER cover, as fractions of the image. */
  x: number;
  y: number;
  decision: string;
  responsive: string;
  interaction: string;
  file: string;
  code: string;
}

export const breakdownSlug = "rover-bike-import";

export const breakdown: BreakdownPart[] = [
  {
    id: "nav",
    label: "Navigation",
    x: 0.43,
    y: 0.19,
    decision:
      "Only “Bikes” opens a menu, so one NavItem type with optional children covers every link — no separate dropdown component to keep in sync.",
    responsive: "Below 768px the links collapse into a sheet; Contact Us stays visible as the one persistent action.",
    interaction: "The menu opens on click or Enter, closes on Escape and returns focus to its trigger.",
    file: "components/site-nav.tsx",
    code: `type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export function SiteNav({ items, cta }: {
  items: NavItem[];
  cta: NavItem;
}) {
  return (
    <nav aria-label="Primary">
      {items.map((item) =>
        item.children
          ? <NavMenu key={item.href} item={item} />
          : <NavLink key={item.href} {...item} />
      )}
      <Button variant="outline" href={cta.href}>
        {cta.label}
      </Button>
    </nav>
  );
}`,
  },
  {
    id: "hero",
    label: "Product hero",
    x: 0.26,
    y: 0.25,
    decision:
      "Wordmark, statement and photograph sit in one component. The photograph is data, so the hero can feature any bike without layout changes.",
    responsive: "The image moves behind the copy with a gradient scrim on small screens; the headline scales with clamp().",
    interaction: "The image is preloaded as the LCP element; the copy fades in only after it has painted.",
    file: "components/product-hero.tsx",
    code: `interface ProductHeroProps {
  title: string;
  lead: string;
  media: { src: string; alt: string };
  proof: string[]; // "Fast Service", "Customer Satisfaction"
  action: { label: string; href: string };
}

export function ProductHero(props: ProductHeroProps) {
  const { title, lead, media, proof, action } = props;
  return (
    <section className="hero">
      <Image {...media} fill priority sizes="100vw" />
      <h1 className="text-[clamp(3rem,8vw,7rem)]">{title}</h1>
      <p>{lead}</p>
      <Button href={action.href}>{action.label}</Button>
      <ProofList items={proof} />
    </section>
  );
}`,
  },
  {
    id: "action",
    label: "Primary action",
    x: 0.27,
    y: 0.41,
    decision:
      "One filled-outline button style for the single primary action keeps “Book Now” unmistakable on a dark canvas.",
    responsive: "Becomes full-width on phones, with a minimum 44px touch target.",
    interaction: "Hover inverts fill and text; focus-visible draws a 2px offset ring in the brand colour.",
    file: "components/ui/button.tsx",
    code: `const variants = {
  solid:   "bg-white text-black hover:bg-neutral-200",
  outline: "border border-white/80 text-white hover:bg-white hover:text-black",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  href: string;
  children: React.ReactNode;
};

export function Button({ variant = "outline", href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full px-6",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
      )}
    >
      {children}
    </Link>
  );
}`,
  },
  {
    id: "brands",
    label: "Brand strip",
    x: 0.46,
    y: 0.52,
    decision:
      "Manufacturer marques are a typed list rendered as monochrome SVG — adding a brand is a data change, not a design change.",
    responsive: "Scroll-snaps horizontally on narrow screens instead of shrinking the logos.",
    interaction: "Each marque links to its filtered catalogue, with the brand name as accessible text.",
    file: "components/brand-strip.tsx",
    code: `type Brand = { name: string; logo: React.FC; href: string };

export function BrandStrip({ brands }: { brands: Brand[] }) {
  return (
    <ul className="flex snap-x overflow-x-auto gap-6 md:justify-center">
      {brands.map(({ name, logo: Logo, href }) => (
        <li key={name} className="snap-start">
          <Link href={href} aria-label={\`\${name} bikes\`}>
            <Logo aria-hidden className="h-8 w-auto opacity-80 hover:opacity-100" />
          </Link>
        </li>
      ))}
    </ul>
  );
}`,
  },
  {
    id: "contact",
    label: "Quick contact",
    x: 0.59,
    y: 0.44,
    decision:
      "Floating contact actions answer the trust goal directly: a person is always one tap away.",
    responsive: "Docked to the bottom-right on phones, clear of the browser's own UI.",
    interaction: "Each action exposes a text label to assistive tech and on hover.",
    file: "components/quick-contact.tsx",
    code: `type Channel = { id: string; label: string; href: string; icon: LucideIcon };

export function QuickContact({ channels }: { channels: Channel[] }) {
  return (
    <aside aria-label="Contact" className="fixed right-4 bottom-4 grid gap-3">
      {channels.map(({ id, label, href, icon: Icon }) => (
        <a key={id} href={href} title={label}
           className="grid size-11 place-items-center rounded-full bg-blue-600">
          <Icon aria-hidden className="size-5" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </aside>
  );
}`,
  },
];
