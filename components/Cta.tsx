import Link from "next/link";

export function Cta({
  title = "Have a sales process that still runs on copy and paste?",
  body = "Tell us how leads reach your team today. We will map it, show you what to automate first and what it would take to build.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="wrap section-tight">
      <div className="cta">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btn-row">
          <Link href="/contact" className="btn btn-primary">Book a discovery call</Link>
        </div>
      </div>
    </section>
  );
}
