import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "GTM Engineering, Automation & Outbound Services",
  description:
    "Tosyntra's services: GTM engineering with Clay, n8n and AI automation, cold email infrastructure, AI voice and WhatsApp agents, and GTM analytics for B2B teams.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
          <h1>Services</h1>
          <p className="lede">
            Five ways we help sales teams do more with the people they have. Most clients start with one focused build
            and add to it once it is working.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="wrap">
          <ul className="service-rows">
            {services.map((s) => (
              <li key={s.slug} className="service-row">
                <Link href={`/services/${s.slug}`}>
                  <h2 style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)" }}>{s.name}</h2>
                  <p>{s.summary}</p>
                  <span className="go">Details</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta title="Not sure where to start?" body="Most teams get the fastest return from fixing how leads are found and routed. Book a call and we will tell you honestly what we would build first." />
    </>
  );
}
