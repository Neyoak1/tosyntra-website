import Link from "next/link";
import { founders, site } from "@/lib/site";
import { services } from "@/lib/services";
import { LogoMark } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <LogoMark />
              {site.shortName}
            </Link>
            <p className="footer-note">
              A remote GTM engineering consultancy building outbound, enrichment and AI automation systems for B2B
              teams worldwide.
            </p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/tools/cold-email-infrastructure-calculator">Cold email calculator</Link></li>
              <li><Link href="/about">About</Link></li>
              {founders.map((f) => (
                <li key={f.slug}><Link href={`/about/${f.slug}`}>{f.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`https://wa.me/${site.whatsapp}`} rel="noopener">WhatsApp {site.whatsappDisplay}</a></li>
              <li><a href={site.github} rel="noopener me">GitHub</a></li>
              {founders.map((f) => (
                <li key={f.slug}><a href={f.linkedin} rel="noopener">LinkedIn: {f.givenName}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {year} {site.name}</span>
          <span>GTM engineering for B2B teams worldwide</span>
        </div>
      </div>
    </footer>
  );
}
