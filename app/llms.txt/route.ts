// /llms.txt: resumo do site em Markdown para assistentes de IA (convenção https://llmstxt.org).
import { absoluteUrl, faqs, services, site } from "@/lib/site";

export function GET() {
  const local = site.city ? ` em ${site.city}/${site.state}` : "";
  const body = `# ${site.brand}

> ${site.name} é nutricionista e responsável pela ${site.brand}${local}. Atua com nutrição clínica e esportiva, reeducação alimentar e emagrecimento saudável, com atendimento presencial e online.

## Fatos principais

- Nome da clínica: ${site.brand} (Nutrição Clínica)
- Nutricionista: ${site.name}${site.crn ? ` (${site.crn})` : ""}
- Endereço do consultório: ${site.streetAddress}, ${site.neighborhood}, ${site.city}/${site.state}, CEP ${site.postalCode}
- Atendimento: consultório${local}, acompanhamento em casa, Personal Diet e online
- Agendamento: WhatsApp ${site.whatsappDisplay} (${absoluteUrl("/#contato")})
- Instagram: ${site.instagramHandle} (${site.instagram})
- Diferencial: a Vladia é corredora de rua amadora e atende quem pratica esporte
- Abordagem: plano alimentar individual, sem culpa e sem proibições, com comida de verdade

## Serviços

${services.map((s) => `- ${s.title}: ${s.text}`).join("\n")}

## Perguntas frequentes

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Páginas

- [Página inicial](${absoluteUrl("/")}): sobre a Vladia, serviços, perguntas frequentes e contato
`;
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
