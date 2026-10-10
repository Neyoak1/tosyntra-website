import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tosyntra | GTM Engineering & AI Automation Consultancy",
    template: "%s | Tosyntra",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Omoniyi Akinnusi" }, { name: "Oluwatosin Olufemi" }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "GTM engineering",
    "GTM engineer",
    "go-to-market engineering",
    "GTM engineering agency",
    "hire GTM engineer",
    "freelance GTM engineer",
    "remote GTM engineer",
    "Clay expert",
    "outbound automation",
    "lead enrichment",
    "GTM engineer Nigeria",
    "Clay agency",
    "n8n automation",
    "AI sales automation",
    "cold email infrastructure",
    "RevOps",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    // Paste the code from Google Search Console here (Settings > Ownership verification > HTML tag)
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#10231e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
