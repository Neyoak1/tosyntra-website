import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/work";
import { getService } from "@/lib/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { orgId, personId } from "@/lib/schema";
import { absoluteUrl, ogBase } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      ...ogBase,
      title: `${p.title} | Tosyntra`,
      description: p.metaDescription,
      url: `/work/${p.slug}`,
      ...(p.image ? { images: [{ url: p.image, width: 1920, height: 1010 }] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const service = getService(p.service);
  const others = projects.filter((o) => o.slug !== p.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    headline: p.title,
    description: p.metaDescription,
    url: absoluteUrl(`/work/${p.slug}`),
    creator: { "@id": personId("omoniyi-akinnusi") },
    publisher: { "@id": orgId },
    keywords: p.stack.join(", "),
    ...(p.image ? { image: absoluteUrl(p.image) } : {}),
    ...(p.repo ? { codeRepository: p.repo, isBasedOn: p.repo } : {}),
  };

  return (
    <>
      <JsonLd data={ld} />
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Work", path: "/work" }, { name: p.name, path: `/work/${p.slug}` }]} />
          <div className="work-meta" style={{ marginBottom: 16 }}>
            <span className="tag">{p.kind}</span>
            <span className={`tag${p.status === "Built" ? " is-plain" : " is-progress"}`}>{p.status}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="lede">{p.summary}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap detail">
          <div className="detail-main">
            {p.image && (
              <figure className="shot-frame" style={{ margin: 0 }}>
                <Image src={p.image} alt={`The ${p.name} workflow in the n8n editor`} width={1920} height={1010} sizes="(max-width: 900px) 100vw, 800px" priority />
                <figcaption>The workflow in the n8n editor.</figcaption>
              </figure>
            )}
            <div>
              <h2>The problem</h2>
              <p className="lede">{p.problem}</p>
            </div>
            <div>
              <h2>How it works</h2>
              <ol className="steps">
                {p.how.map((h) => (
                  <li key={h.step}>
                    <div>
                      <h3>{h.step}</h3>
                      <p>{h.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2>Where it fits</h2>
              <ul className="ticks">
                {p.useCases.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>What we would add next</h2>
              <ul className="ticks">
                {p.next.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="aside">
            <div>
              <h2>Built with</h2>
              <ul className="chips">
                {p.stack.map((t) => (
                  <li key={t} className="tag is-plain">{t}</li>
                ))}
              </ul>
            </div>
            {p.repo && (
              <div>
                <h2>Source</h2>
                <a href={p.repo} className="text-link" rel="noopener">View the workflow on GitHub</a>
              </div>
            )}
            {service && (
              <div>
                <h2>Service</h2>
                <Link href={`/services/${service.slug}`} className="text-link">{service.name}</Link>
              </div>
            )}
            <div>
              <h2>More work</h2>
              <ul className="ticks">
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/work/${o.slug}`}>{o.name}</Link></li>
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
