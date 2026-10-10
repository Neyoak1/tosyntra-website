// /llms.txt: a plain-text summary of the site for AI assistants and AI search engines.
import { absoluteUrl, founders, site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/work";
import { getAllPosts } from "@/lib/insights";
import { skillGroups } from "@/lib/skills";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Founders: ${founders.map((f) => `${f.name} (${f.jobTitle})`).join("; ")}.`,
    `Based in ${site.location.country}. Works remotely with clients in ${site.areaServed.join(", ")}.`,
    `Contact: ${site.email} | WhatsApp +${site.whatsapp} | ${absoluteUrl("/contact")}`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`),
    "",
    "## Skills",
    ...skillGroups.map((g) => `- ${g.name}: ${[...g.skills, ...g.tools].join(", ")}`),
    `Full list and hiring contact: ${absoluteUrl("/skills")}`,
    "",
    "## Work",
    ...projects.map((p) => `- [${p.name}](${absoluteUrl(`/work/${p.slug}`)}) (${p.status}): ${p.summary}`),
    "",
    "## Insights",
    ...getAllPosts().map((p) => `- [${p.title}](${absoluteUrl(`/insights/${p.slug}`)}): ${p.description}`),
    "",
    "## Tools",
    `- [Cold email infrastructure calculator](${absoluteUrl("/tools/cold-email-infrastructure-calculator")})`,
    "",
    "## People",
    ...founders.map((f) => `- [${f.name}](${absoluteUrl(`/about/${f.slug}`)}): ${f.short}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
