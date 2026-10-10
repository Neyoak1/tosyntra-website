import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { founders, ogBase } from "@/lib/site";
import { getAllPosts, formatDate } from "@/lib/insights";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { personSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return founders.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = founders.find((x) => x.slug === slug);
  if (!f) return {};
  const description = `${f.name}, ${f.jobTitle} at Tosyntra Growth Systems. ${f.short}`;
  return {
    title: `${f.name}, ${f.jobTitle}`,
    description,
    alternates: { canonical: `/about/${f.slug}` },
    openGraph: { ...ogBase, type: "profile", title: `${f.name} | Tosyntra`, description, url: `/about/${f.slug}` },
  };
}

export default async function FounderPage({ params }: Props) {
  const { slug } = await params;
  const f = founders.find((x) => x.slug === slug);
  if (!f) notFound();
  const posts = getAllPosts().filter((p) => p.author === f.slug);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: personSchema(f) }} />
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "About", path: "/about" }, { name: f.name, path: `/about/${f.slug}` }]} />
          <div className="monogram" aria-hidden="true" style={{ marginBottom: 22 }}>{f.givenName[0]}{f.familyName[0]}</div>
          <h1>{f.name}</h1>
          <p className="lede">{f.jobTitle}, Tosyntra Growth Systems</p>
        </div>
      </header>
      <section className="section">
        <div className="wrap detail">
          <div className="detail-main">
            <div className="prose" style={{ maxWidth: "none" }}>
              {f.bio.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
            {posts.length > 0 && (
              <div>
                <h2>Writing</h2>
                <ul className="post-list">
                  {posts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/insights/${p.slug}`}>
                        <time dateTime={p.date}>{formatDate(p.date)}</time>
                        <div>
                          <h3>{p.title}</h3>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside className="aside">
            <div>
              <h2>Focus</h2>
              <ul className="chips">
                {f.focus.map((t) => (
                  <li key={t} className="tag is-plain">{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Elsewhere</h2>
              <ul className="ticks">
                <li><a href={f.linkedin} rel="noopener me">LinkedIn</a></li>
                {f.github && <li><a href={f.github} rel="noopener me">GitHub</a></li>}
              </ul>
            </div>
            {f.slug === "omoniyi-akinnusi" && (
              <div className="btn-row">
                <Link href="/skills" className="text-link">Full skills and tools</Link>
                <Link href="/contact?topic=hiring" className="btn btn-primary">Hire Omoniyi</Link>
              </div>
            )}
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
