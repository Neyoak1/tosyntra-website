import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SignalFlow } from "@/components/SignalFlow";
import { Cta } from "@/components/Cta";
import { services } from "@/lib/services";
import { projects } from "@/lib/work";
import { founders } from "@/lib/site";
import { getAllPosts, formatDate } from "@/lib/insights";
import { topSkills } from "@/lib/skills";

export const metadata: Metadata = {
  title: { absolute: "Tosyntra | GTM Engineering & AI Automation Consultancy" },
  description:
    "Tosyntra is a GTM engineering consultancy for B2B teams worldwide. We build Clay enrichment, signal-based outbound, n8n and AI automation, and revenue dashboards, delivered remotely.",
  alternates: { canonical: "/" },
};

const stack = ["Clay", "n8n", "HubSpot", "OpenAI", "Gemini", "ElevenLabs", "Twilio", "WhatsApp", "Supabase", "Instantly"];

export default function Home() {
  const featured = projects.filter((p) => p.status === "Built").slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>We build the systems behind your pipeline.</h1>
            <p className="lede">
              Tosyntra is a GTM engineering consultancy. We turn the manual parts of selling, such as finding accounts,
              researching them, following up and reporting, into systems that run every day and show you what works.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Book a discovery call</Link>
              <Link href="/work" className="btn btn-ghost">See what we have built</Link>
            </div>
            <p className="hero-where">Remote-first. Working with B2B teams in the US, UK, Europe, the Middle East and Africa.</p>
          </div>
          <SignalFlow />
        </div>
      </section>

      <div className="proof">
        <div className="wrap proof-inner">
          <span className="proof-label">Tools we build with</span>
          <ul className="proof-list">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>What we build</h2>
            <p className="lede">
              Each engagement starts with how your team sells today and ends with a working system in your own accounts,
              documented so you are never dependent on us.
            </p>
          </div>
          <ul className="service-rows">
            {services.map((s) => (
              <li key={s.slug} className="service-row">
                <Link href={`/services/${s.slug}`}>
                  <h3>{s.name}</h3>
                  <p>{s.summary}</p>
                  <span className="go">Learn more</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band">
        <div className="wrap band-grid">
          <div className="stack-gap">
            <h2>Why GTM engineering, and why us</h2>
            <p className="lede">
              A sales team with good systems does not need more people to grow. It needs fewer manual steps, better
              timing and numbers it can trust. That is the job of a GTM engineer.
            </p>
          </div>
          <dl className="band-points">
            <div>
              <dt>We come from sales</dt>
              <dd>We have prospected and followed up by hand. We build for the rep who has to use the system every day.</dd>
            </div>
            <div>
              <dt>Analysis is built in</dt>
              <dd>Every system ships with metrics and a way to see which signals, segments and messages produce meetings.</dd>
            </div>
            <div>
              <dt>WhatsApp and voice, not just email</dt>
              <dd>In many markets buyers answer WhatsApp and calls before email. We build for the channels your buyers actually use, wherever they are.</dd>
            </div>
            <div>
              <dt>You own everything</dt>
              <dd>Systems run in your accounts and come with documentation and a recorded walkthrough.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Recent builds</h2>
            <p className="lede">Working systems with the workflows published on GitHub, so you can see exactly how they are put together.</p>
          </div>
          <div className="work-grid">
            {featured.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="work-card">
                <div className={`work-shot${p.image ? "" : " is-blank"}`}>
                  {p.image ? (
                    <Image src={p.image} alt={`${p.name} workflow in n8n`} width={960} height={540} sizes="(max-width: 760px) 100vw, 380px" />
                  ) : (
                    p.name
                  )}
                </div>
                <div className="work-body">
                  <div className="work-meta">
                    <span className="tag">{p.kind}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link href="/work" className="text-link">All work and case studies</Link>
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>GTM engineering skills</h2>
            <p className="lede">
              Hiring a GTM engineer or looking for one to build with? These are the skills we work with every day.
            </p>
          </div>
          <ul className="skill-cloud">
            {topSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link href="/skills" className="btn btn-ghost">See all skills and tools</Link>
            <Link href="/contact?topic=hiring" className="btn btn-primary">Hire a GTM engineer</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>How an engagement runs</h2>
          </div>
          <ol className="process">
            <li>
              <h3>Map</h3>
              <p>We walk through how leads reach your team today and find where time and deals are lost.</p>
            </li>
            <li>
              <h3>Design</h3>
              <p>We agree the system, the data it needs, the cost per account and how success will be measured.</p>
            </li>
            <li>
              <h3>Build</h3>
              <p>We build in your accounts, test with real records and keep a person in the loop where it matters.</p>
            </li>
            <li>
              <h3>Measure</h3>
              <p>We hand over with documentation and a dashboard, then review results together and improve.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>The people behind Tosyntra</h2>
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
                  <Link href={`/about/${f.slug}`} className="text-link">Profile</Link>
                  <a href={f.linkedin} className="text-link" rel="noopener">LinkedIn</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <h2>From our notes</h2>
              <p className="lede">Practical guides on GTM engineering, outbound and automation, written from what we build.</p>
            </div>
            <ul className="post-list">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/insights/${p.slug}`}>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Cta />
    </>
  );
}
