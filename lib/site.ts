// Single source of truth for brand, contact and founder details.
// Change a value here and it updates everywhere: pages, metadata, structured data.

export const site = {
  name: "Tosyntra Growth Systems",
  shortName: "Tosyntra",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://tosyntra.com").replace(/\/$/, ""),
  tagline: "GTM engineering, AI automation and outbound systems",
  description:
    "Tosyntra is a GTM engineering consultancy for B2B teams worldwide. We build Clay enrichment, signal-based outbound, n8n and AI automation, cold email infrastructure and revenue dashboards, remotely, across US, UK, European and African time zones.",
  email: "omoniyi@tosyntra.com",
  whatsapp: "2348064066706",
  whatsappDisplay: "+234 806 406 6706",
  location: { country: "Nigeria", countryCode: "NG" },
  areaServed: ["Worldwide", "United States", "Canada", "United Kingdom", "Europe", "Middle East", "Australia", "Africa"],
  github: "https://github.com/Neyoak1",
  linkedinCompany: "", // add the Tosyntra LinkedIn page URL here once it exists
  foundingYear: "2026",
};

export type Founder = {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  role: string;
  jobTitle: string;
  short: string;
  bio: string[];
  focus: string[];
  linkedin: string;
  github?: string;
};

export const founders: Founder[] = [
  {
    slug: "omoniyi-akinnusi",
    name: "Omoniyi Akinnusi",
    givenName: "Omoniyi",
    familyName: "Akinnusi",
    role: "Founder",
    jobTitle: "Founder & GTM Engineer",
    short:
      "Sales professional turned GTM engineer. Builds the outbound, enrichment and AI automation systems at Tosyntra.",
    bio: [
      "Omoniyi came to GTM engineering from sales. Years of prospecting, qualifying and following up by hand made one thing obvious: most of the effort in a sales process goes into work a well-built system could do better.",
      "Omoniyi has built AI voice agents that call and verify customers, WhatsApp and Telegram assistants that qualify leads, and a WhatsApp enrolment system for Nigerian private schools. He is now training in Clay, signal-based outbound and CRM architecture through a dedicated GTM engineering programme, while studying for an MBA.",
      "At Tosyntra, Omoniyi leads system design and build: the workflows, the enrichment logic and the outbound engine. He works with B2B teams worldwide and is open to remote GTM engineering roles and contracts.",
    ],
    focus: ["Clay and enrichment", "n8n and AI agents", "Outbound systems", "Sales process design"],
    linkedin: "https://www.linkedin.com/in/omoniyi-akinnusi-b7918743b",
    github: "https://github.com/Neyoak1",
  },
  {
    slug: "oluwatosin-olufemi",
    name: "Oluwatosin Olufemi",
    givenName: "Oluwatosin",
    familyName: "Olufemi",
    role: "Co-founder",
    jobTitle: "Co-founder & Business Analyst",
    short:
      "Business and data analyst. Turns messy requirements and raw data into clear processes, reporting and dashboards.",
    bio: [
      "Oluwatosin is a business and data analyst who works with large operational datasets: portfolio performance, fraud signals, collections and day-to-day reporting for leadership.",
      "Oluwatosin brings structure to the start and the end of every engagement. Before anything is built, that means mapping the process and pinning down what the business actually needs. After it ships, Oluwatosin defines the metrics, builds the reporting and makes sure the numbers can be trusted.",
      "At Tosyntra, Oluwatosin leads discovery, requirements, data quality and GTM analytics.",
    ],
    focus: ["Requirements and process mapping", "Data quality", "Dashboards and reporting", "GTM analytics"],
    linkedin: "https://www.linkedin.com/in/oluwatosin-olufemi-829590362",
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/insights", label: "Insights" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

// Page-level openGraph objects replace the site-wide one, so spread this in
// to keep the site name, locale and default preview image on every page.
export const ogBase = {
  siteName: site.name,
  locale: "en_US",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tosyntra: GTM engineering consultancy" }],
};
