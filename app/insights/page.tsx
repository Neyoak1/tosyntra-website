import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/insights";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Insights: GTM Engineering, Outbound & Automation Guides",
  description:
    "Practical guides from Tosyntra on GTM engineering, Clay, n8n, cold email infrastructure and AI automation for sales teams, written from systems we build.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />
          <h1>Insights</h1>
          <p className="lede">
            Practical guides on GTM engineering, outbound and automation. Written from what we build, including what
            did not work.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="wrap">
          <ul className="post-list">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/insights/${p.slug}`}>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <div>
                    <h2 style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", marginBottom: 8 }}>{p.title}</h2>
                    <p>{p.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
}
