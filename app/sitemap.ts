import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Atualize esta data quando o conteúdo do site mudar.
const lastModified = new Date("2026-11-09");

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified, changeFrequency: "monthly", priority: 1 }];
}
