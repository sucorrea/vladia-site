import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Robôs de buscadores e de assistentes de IA (GEO) liberados explicitamente,
// para que o site possa aparecer e ser citado no Google, Bing, ChatGPT, Claude, Perplexity e Gemini.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
