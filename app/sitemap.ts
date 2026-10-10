import type { MetadataRoute } from "next";
import { absoluteUrl, founders } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/work";
import { getAllPosts } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.8 },
    { path: "/skills", priority: 0.9 },
    { path: "/insights", priority: 0.8 },
    { path: "/tools", priority: 0.6 },
    { path: "/tools/cold-email-infrastructure-calculator", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ];

  return [
    ...fixed.map((f) => ({ url: absoluteUrl(f.path), lastModified: now, priority: f.priority })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, priority: 0.9 })),
    ...projects.map((p) => ({ url: absoluteUrl(`/work/${p.slug}`), lastModified: now, priority: 0.7 })),
    ...founders.map((f) => ({ url: absoluteUrl(`/about/${f.slug}`), lastModified: now, priority: 0.6 })),
    ...getAllPosts().map((p) => ({
      url: absoluteUrl(`/insights/${p.slug}`),
      lastModified: new Date(p.updated || p.date),
      priority: 0.8,
    })),
  ];
}
