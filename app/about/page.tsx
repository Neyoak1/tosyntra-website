import Link from "next/link";
import type { Metadata } from "next";
import { founders, site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "About Tosyntra: A Remote GTM Engineering Consultancy",
  description:
    "Tosyntra Growth Systems is a founder-led, remote GTM engineering consultancy serving B2B teams worldwide, started by Omoniyi Akinnusi and Oluwatosin Olufemi to combine sales, automation and analysis.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
          <h1>About Tosyntra</h1>
          <p className="lede">
            {site.name} is a founder-led, remote GTM engineering consultancy working with B2B teams worldwide. We bring together two things most
            automation shops keep apart: knowing how selling actually works, and knowing whether the numbers are telling
            the truth.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap split">
          <div className="stack-gap">
            <h2>Why we started</h2>
            <p className="lede">
              Sales teams everywhere are told to send more, call more and post more. Very few are given systems that tell
              them who to contact, when and why.
            </p>
          </div>
          <div className="stack-gap" style={{ color: "var(--ink-2)" }}>
            <p>
              GTM engineering is the discipline of building those systems: the data, enrichment, automation and AI that
              sit behind a modern sales team. Demand for it has grown fast, and most teams still cannot find or afford a
              full-time GTM engineer with both the sales instinct and the technical depth.
            </p>
            <p>
              We started Tosyntra to build these systems properly, for B2B teams in any market: capable, well-documented
              GTM engineering from a remote team that understands both the sales floor and the spreadsheet. We are based
              in Nigeria and work across US, UK, European and African time zones.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Founders</h2>
          </div>
          <div className="founders">
            {founders.map((f) => (
              <article key={f.slug} className="founder">
                <div className="monogram" aria-hidden="true">{f.givenName[0]}{f.familyName[0]}</div>
                <div>
                  <h3>{f.name}</h3>
                  <p className="role">{f.jobTitle}</p>
                </div>
                <p>{f.short}</p>
                <div className="founder-links">
                  <Link href={`/about/${f.slug}`} className="text-link">Read profile</Link>
                  <a href={f.linkedin} className="text-link" rel="noopener">LinkedIn</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>How we work</h2>
          </div>
          <dl className="def-list">
            <div>
              <dt>Honest about results</dt>
              <dd>We separate demo builds from client results and never publish a number we did not measure.</dd>
            </div>
            <div>
              <dt>People stay in control</dt>
              <dd>AI drafts and researches. A person approves anything that reaches a customer.</dd>
            </div>
            <div>
              <dt>Built to be handed over</dt>
              <dd>Your accounts, your data, full documentation. You should be able to run it without us.</dd>
            </div>
            <div>
              <dt>Measured from day one</dt>
              <dd>Every system ships with a definition of success and a way to check it.</dd>
            </div>
          </dl>
        </div>
      </section>
      <Cta />
    </>
  );
}
