import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import { PageLoader } from "@/components/page-loader";
import { SiteHeader } from "@/components/site-header";
import { profile, siteUrl, socials } from "@/content/profile";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const description =
  "Shanuka Amarasinghe is a UI/UX engineer from Sri Lanka designing websites, mobile apps and dashboards with the build in mind — where design meets engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "UI/UX Engineer",
    "UI/UX Designer",
    "Product Designer",
    "Frontend Developer",
    "Figma",
    "React",
    "Next.js",
    "Sri Lanka",
    profile.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f1eee7",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressCountry: "LK" },
  alumniOf: "Sri Lanka Institute of Information Technology",
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <PageLoader />
        <a
          href="#main"
          className="sr-only-focusable t-label fixed left-4 top-4 z-[100] bg-ink px-4 py-3 text-paper"
        >
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
