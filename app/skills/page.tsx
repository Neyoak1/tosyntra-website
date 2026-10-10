import Link from "next/link";
import type { Metadata } from "next";
import { skillGroups } from "@/lib/skills";
import { founders, site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { orgId } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "GTM Engineering Skills: Clay, n8n, AI Agents, Outbound & CRM",
  description:
    "GTM engineering skills at Tosyntra: Clay and waterfall enrichment, signal-based prospecting, cold email deliverability, n8n and API automation, AI agents, HubSpot and dashboards. Hire us for projects or roles worldwide.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GTM engineering skills and tools",
    url: absoluteUrl("/skills"),
    itemListElement: skillGroups.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "DefinedTermSet",
        name: g.name,
        hasDefinedTerm: [...g.skills, ...g.tools].map((t) => ({ "@type": "DefinedTerm", name: t })),
      },
    })),
    author: { "@id": orgId },
  };

  return (
    <>
      <JsonLd data={ld} />
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Skills", path: "/skills" }]} />
          <h1>GTM engineering skills and tools</h1>
          <p className="lede">
            The core of GTM engineering, from defining the ICP to building the enrichment, outbound, automation, AI and
            reporting behind it. Available for client projects and for remote GTM engineering roles
            worldwide.
          </p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href="/contact?topic=hiring" className="btn btn-primary">Hire a GTM engineer</Link>
            <Link href="/contact" className="btn btn-ghost">Start a project</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <nav aria-label="Skill areas" className="skill-index">
            {skillGroups.map((g) => (
              <a key={g.slug} href={`#${g.slug}`}>{g.name}</a>
            ))}
          </nav>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <section key={g.slug} id={g.slug} className="skill-group" aria-labelledby={`${g.slug}-h`}>
                <div>
                  <h2 id={`${g.slug}-h`}>{g.name}</h2>
                  <p>{g.summary}</p>
                </div>
                <div className="skill-cols">
                  <div>
                    <h3>Skills</h3>
                    <ul className="ticks">
                      {g.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Tools</h3>
                    <ul className="chips">
                      {g.tools.map((t) => (
                        <li key={t} className="tag is-plain">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap band-grid">
          <div className="stack-gap">
            <h2>Hiring a GTM engineer?</h2>
            <p className="lede">
              Omoniyi is open to remote GTM engineering roles and contracts with teams anywhere in the world. Tosyntra
              can also take on a defined build alongside your team.
            </p>
            <div className="btn-row">
              <Link href="/contact?topic=hiring" className="btn btn-band">Get in touch about a role</Link>
            </div>
          </div>
          <dl className="band-points">
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd><a href={founders[0].linkedin} rel="noopener">{founders[0].name}</a></dd>
            </div>
            <div>
              <dt>Work samples</dt>
              <dd>
                <Link href="/work">Case studies</Link> and the workflows on <a href={site.github} rel="noopener">GitHub</a>
              </dd>
            </div>
            <div>
              <dt>Time zones</dt>
              <dd>Remote, with working-hour overlap for the US, UK, Europe, the Middle East and Africa.</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
