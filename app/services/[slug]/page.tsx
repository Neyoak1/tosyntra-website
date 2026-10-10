import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { getProject } from "@/lib/work";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, orgId } from "@/lib/schema";
import { absoluteUrl, site, ogBase } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { ...ogBase, title: `${s.title} | Tosyntra`, description: s.metaDescription, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = s.relatedWork.map(getProject).filter(Boolean);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: absoluteUrl(`/services/${s.slug}`),
    provider: { "@id": orgId },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqSchema(s.faqs)]} />
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: s.name, path: `/services/${s.slug}` }]} />
          <h1>{s.name}</h1>
          <p className="lede">{s.summary}</p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary">Discuss your project</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap detail">
          <div className="detail-main">
            <div>
              <h2>The problem</h2>
              <p className="lede">{s.problem}</p>
            </div>
            <div>
              <h2>What we build</h2>
              <dl className="def-list">
                {s.builds.map((b) => (
                  <div key={b.name}>
                    <dt>{b.name}</dt>
                    <dd>{b.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2>What you get</h2>
              <ul className="ticks">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Questions</h2>
              <div className="faq">
                {s.faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <aside className="aside">
            <div>
              <h2>Tools we use</h2>
              <ul className="chips">
                {s.stack.map((t) => (
                  <li key={t} className="tag is-plain">{t}</li>
                ))}
              </ul>
            </div>
            {related.length > 0 && (
              <div>
                <h2>Related work</h2>
                <ul className="ticks">
                  {related.map((p) => (
                    <li key={p!.slug}>
                      <Link href={`/work/${p!.slug}`}>{p!.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2>Other services</h2>
              <ul className="ticks">
                {services
                  .filter((o) => o.slug !== s.slug)
                  .map((o) => (
                    <li key={o.slug}>
                      <Link href={`/services/${o.slug}`}>{o.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
