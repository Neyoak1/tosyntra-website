import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/lib/work";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Work: AI Agents, Automation & GTM Systems We've Built",
  description:
    "Case studies of systems built by Tosyntra: AI outbound call agents, WhatsApp and Telegram assistants, a WhatsApp CRM for schools and a signal-based outbound engine.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Work", path: "/work" }]} />
          <h1>Work</h1>
          <p className="lede">
            Systems we have built, with the workflows published on{" "}
            <a href={site.github} className="text-link" rel="noopener">GitHub</a>. Each page explains the problem, how
            the system works and what we would add next. Builds marked in development are still being tested.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="wrap work-grid">
          {projects.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="work-card">
              <div className={`work-shot${p.image ? "" : " is-blank"}`}>
                {p.image ? (
                  <Image src={p.image} alt={`${p.name} workflow`} width={960} height={540} sizes="(max-width: 760px) 100vw, 380px" />
                ) : (
                  p.name
                )}
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <span className="tag">{p.kind}</span>
                  {p.status !== "Built" && <span className="tag is-progress">{p.status}</span>}
                </div>
                <h2 style={{ fontSize: "1.3rem", letterSpacing: "-0.01em" }}>{p.name}</h2>
                <p>{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Cta title="Want something like this for your team?" body="Tell us what your team does by hand today. We will tell you what we would build and what it would cost to run." />
    </>
  );
}
