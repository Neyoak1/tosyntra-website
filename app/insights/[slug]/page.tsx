import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/insights";
import { founders, ogBase } from "@/lib/site";
import { absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { orgId, personId } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  const author = founders.find((f) => f.slug === p.author);
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    authors: author ? [{ name: author.name, url: `/about/${author.slug}` }] : undefined,
    alternates: { canonical: `/insights/${p.slug}` },
    openGraph: {
      siteName: ogBase.siteName,
      locale: ogBase.locale,
      type: "article",
      title: p.title,
      description: p.description,
      url: `/insights/${p.slug}`,
      publishedTime: p.date,
      modifiedTime: p.updated || p.date,
      authors: author ? [absoluteUrl(`/about/${author.slug}`)] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const author = founders.find((f) => f.slug === p.author) || founders[0];
  const more = getAllPosts().filter((x) => x.slug !== p.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated || p.date,
    url: absoluteUrl(`/insights/${p.slug}`),
    mainEntityOfPage: absoluteUrl(`/insights/${p.slug}`),
    image: absoluteUrl(`/insights/${p.slug}/opengraph-image`),
    author: { "@id": personId(author.slug), name: author.name, url: absoluteUrl(`/about/${author.slug}`) },
    publisher: { "@id": orgId },
    keywords: p.keywords.join(", "),
    inLanguage: "en",
  };

  return (
    <>
      <JsonLd data={ld} />
      <article>
        <header className="page-head">
          <div className="wrap">
            <Breadcrumbs items={[{ name: "Insights", path: "/insights" }, { name: p.title, path: `/insights/${p.slug}` }]} />
            <h1 style={{ maxWidth: "22ch" }}>{p.title}</h1>
            <p className="lede">{p.description}</p>
            <div className="article-meta">
              <span>
                By <Link href={`/about/${author.slug}`}>{author.name}</Link>
              </span>
              <time dateTime={p.date}>{formatDate(p.date)}</time>
              {p.updated && <span>Updated {formatDate(p.updated)}</span>}
              <span>{p.readingMinutes} min read</span>
            </div>
          </div>
        </header>
        <div className="wrap section">
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
          <aside className="author-box">
            <div className="monogram" aria-hidden="true">{author.givenName[0]}{author.familyName[0]}</div>
            <div>
              <p><strong><Link href={`/about/${author.slug}`}>{author.name}</Link></strong>, {author.jobTitle} at Tosyntra</p>
              <p className="muted" style={{ marginTop: 4 }}>{author.short}</p>
            </div>
          </aside>
        </div>
      </article>
      {more.length > 0 && (
        <section className="wrap section-tight">
          <h2 style={{ marginBottom: 24 }}>Keep reading</h2>
          <ul className="post-list">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/insights/${m.slug}`}>
                  <time dateTime={m.date}>{formatDate(m.date)}</time>
                  <div>
                    <h3>{m.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <Cta />
    </>
  );
}
