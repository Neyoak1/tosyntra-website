// Structured data (schema.org) builders. These tell Google and AI search engines
// exactly who Tosyntra is, who founded it and what each page is about.
import { absoluteUrl, founders, site, type Founder } from "./site";
import { topSkills } from "./skills";

export const orgId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");
export const personId = (slug: string) => absoluteUrl(`/about/${slug}#person`);

export function organizationSchema() {
  const sameAs = [site.github, site.linkedinCompany].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": orgId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    foundingDate: site.foundingYear,
    address: { "@type": "PostalAddress", addressCountry: site.location.countryCode },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: ["Go-to-market engineering", ...topSkills],
    founder: founders.map((f) => ({ "@id": personId(f.slug) })),
    sameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

export function personSchema(f: Founder) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(f.slug),
    name: f.name,
    givenName: f.givenName,
    familyName: f.familyName,
    jobTitle: f.jobTitle,
    description: f.short,
    url: absoluteUrl(`/about/${f.slug}`),
    worksFor: { "@id": orgId },
    knowsAbout: f.slug === "omoniyi-akinnusi" ? [...f.focus, ...topSkills] : f.focus,
    nationality: { "@type": "Country", name: "Nigeria" },
    sameAs: [f.linkedin, f.github].filter(Boolean),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
