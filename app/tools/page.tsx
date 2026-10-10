import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Free GTM Tools & Calculators",
  description: "Free tools from Tosyntra for sales and GTM teams, starting with a cold email infrastructure calculator for domains and mailboxes.",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    href: "/tools/cold-email-infrastructure-calculator",
    name: "Cold email infrastructure calculator",
    body: "How many sending domains and mailboxes you need for your outbound volume, with safe daily limits.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} />
          <h1>Free tools</h1>
          <p className="lede">Small, free tools for the planning work that comes before a GTM system. More are on the way.</p>
        </div>
      </header>
      <section className="section">
        <div className="wrap">
          <ul className="service-rows">
            {tools.map((t) => (
              <li key={t.href} className="service-row">
                <Link href={t.href}>
                  <h2 style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)" }}>{t.name}</h2>
                  <p>{t.body}</p>
                  <span className="go">Open tool</span>
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
