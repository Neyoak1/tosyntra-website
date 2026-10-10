import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og";
import { getAllPosts, getPost } from "@/lib/insights";

export const alt = "Tosyntra insights article";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return new ImageResponse(<OgCard kicker="Insights" title={p?.title || "Tosyntra insights"} />, size);
}
