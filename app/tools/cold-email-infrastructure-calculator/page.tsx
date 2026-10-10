import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ColdEmailCalculator } from "@/components/ColdEmailCalculator";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, orgId } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

const path = "/tools/cold-email-infrastructure-calculator";

export const metadata: Metadata = {
  title: "Cold Email Infrastructure Calculator: Domains & Mailboxes",
  description:
    "Free calculator: work out how many sending domains and mailboxes you need for cold email, based on your monthly prospects, follow-ups and safe daily sending limits.",
  alternates: { canonical: path },
};

const faqs = [
  { q: "How many cold emails can one mailbox send per day?", a: "Many senders keep each mailbox to roughly 30 to 50 cold emails per day, including follow-ups, and spread volume across more mailboxes rather than pushing one hard. New mailboxes should be warmed up first." },
  { q: "How many mailboxes should each domain have?", a: "Two or three mailboxes per sending domain is a common setup. It limits how much volume any single domain carries, so one problem does not affect your whole operation." },
  { q: "Why do I need separate domains for cold email?", a: "Cold email always generates some bounces and complaints. Sending from secondary domains protects the reputation of your main domain, which your team relies on for everyday email." },
  { q: "How long does warm-up take?", a: "Plan on around two to four weeks before sending at full volume from a new mailbox, and keep warm-up running at a low level afterwards." },
];

export default function CalculatorPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cold Email Infrastructure Calculator",
    url: absoluteUrl(path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": orgId },
  };

  return (
    <>
      <JsonLd data={[appLd, faqSchema(faqs)]} />
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Tools", path: "/tools" }, { name: "Cold email calculator", path }]} />
          <h1>Cold email infrastructure calculator</h1>
          <p className="lede">
            Work out how many sending domains and mailboxes you need for your outbound volume, without overloading any
            of them. Change the numbers and the results update as you type.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="wrap">
          <ColdEmailCalculator />
          <p className="muted" style={{ marginTop: 18, fontSize: "0.95rem", maxWidth: "44em" }}>
            These are planning estimates based on common practice, not guarantees of deliverability. Inbox placement also
            depends on list quality, content, authentication and how recipients respond.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="stack-gap">
            <h2>How the numbers work</h2>
            <p className="lede">
              Monthly emails are your prospects multiplied by the emails in your sequence. Divide by sending days for
              daily volume, then by the safe limit per mailbox. Spare capacity lets you rest a mailbox whose numbers dip.
            </p>
            <p>
              For the full setup, including DNS records and warm-up, read our{" "}
              <Link href="/insights/cold-email-infrastructure-setup-guide" className="text-link">cold email infrastructure guide</Link>.
            </p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Cta title="Want it set up for you?" body="We register the domains, configure authentication, warm up the mailboxes and connect them to your prospect data." />
    </>
  );
}
