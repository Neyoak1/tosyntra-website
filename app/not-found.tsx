import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap center-404">
      <h1>This page does not exist</h1>
      <p className="lede">The link may be old or mistyped. These are the places most people are looking for.</p>
      <div className="btn-row">
        <Link href="/" className="btn btn-primary">Go to the home page</Link>
        <Link href="/work" className="btn btn-ghost">See our work</Link>
        <Link href="/insights" className="btn btn-ghost">Read insights</Link>
      </div>
    </section>
  );
}
