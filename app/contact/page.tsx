import type { Metadata } from "next";
import { founders, site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact: Book a GTM Engineering Discovery Call",
  description:
    "Talk to Tosyntra about a GTM engineering, automation, outbound or analytics project. Book a discovery call, email us or message us on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
          <h1>Let us look at how you sell</h1>
          <p className="lede">
            Tell us a little about your team and where leads get stuck. We reply within one working day with honest
            thoughts on what to build first, even if that is nothing.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="wrap contact-grid">
          <ContactForm />
          <div>
            <div className="contact-ways">
              <a href={`https://wa.me/${site.whatsapp}`} rel="noopener">
                <strong>WhatsApp</strong>
                <span>{site.whatsappDisplay}, fastest for a quick question</span>
              </a>
              <a href={`mailto:${site.email}`}>
                <strong>Email</strong>
                <span>{site.email}</span>
              </a>
              {founders.map((f) => (
                <a key={f.slug} href={f.linkedin} rel="noopener">
                  <strong>{f.name} on LinkedIn</strong>
                  <span>{f.jobTitle}</span>
                </a>
              ))}
            </div>
            <p className="muted" style={{ marginTop: 20, fontSize: "0.95rem" }}>
              We work remotely with teams worldwide, including the US, UK, Europe, the Middle East and Africa, and keep a few hours of
              overlap with your working day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
