import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol>
        {all.map((it, i) =>
          i === all.length - 1 ? (
            <li key={it.path} aria-current="page">{it.name}</li>
          ) : (
            <li key={it.path}>
              <Link href={it.path}>{it.name}</Link>
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}
