import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og";

export const alt = "Tosyntra: GTM engineering and AI automation consultancy";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgCard kicker="GTM engineering consultancy" title="We build the systems behind your pipeline." />, size);
}
