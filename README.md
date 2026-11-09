# Site institucional — Vladia Mori (Nutricionista)

Next.js (App Router) + TypeScript + Tailwind. Página única (landing page) com: início, abordagem, atendimentos, como funciona, sobre, perguntas frequentes e contato com WhatsApp e endereço.

## Rodar localmente

```bash
npm install
npm run dev
```

## O que a Vladia precisa revisar

Tudo fica em dois arquivos:

- `lib/site.ts`: nome, telefone/WhatsApp, Instagram, **CRN** (`crn`, vazio por padrão), **cidade e endereço** (`city`, `streetAddress`, `postalCode`, vazios por padrão), serviços, etapas, perguntas frequentes (`faqs`) e domínio (`url`).

A foto da Vladia está em `public/vladia-mori.webp` (fundo removido). Para trocar, substitua o arquivo mantendo o nome.

## Publicar na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em vercel.com, **Add New → Project**, escolha o repositório e clique em **Deploy** (sem configuração extra).
3. Para usar domínio próprio: **Settings → Domains**. Depois defina a variável `NEXT_PUBLIC_SITE_URL` (ex.: `https://seudominio.com.br`) para o sitemap e as URLs ficarem corretos.

## SEO e GEO (buscadores e assistentes de IA)

Já configurado:

- Título, descrição, URL canônica e imagem de compartilhamento (`app/opengraph-image.jpg`) em todas as páginas.
- Dados estruturados (JSON-LD, em `lib/schema.ts`): clínica (`MedicalClinic`), nutricionista (`Person`), site, perguntas frequentes (`FAQPage`) e endereço do consultório.
- `sitemap.xml`, `robots.txt` (libera Google, Bing e robôs de IA como GPTBot, ClaudeBot e PerplexityBot), `manifest.webmanifest` e `/llms.txt` (resumo do site para IAs).

Depois de publicar:

1. Quando houver domínio próprio, definir `NEXT_PUBLIC_SITE_URL` na Vercel (hoje o site usa https://vladia-nutricionista.vercel.app automaticamente).
2. Cadastrar o site no Google Search Console e no Bing Webmaster Tools, enviar o `sitemap.xml` e colar os códigos de verificação em `verification`, no `app/layout.tsx`.
3. Criar ou atualizar o Perfil da Empresa no Google com o mesmo nome, telefone e endereço do site.
4. Validar os dados estruturados em https://search.google.com/test/rich-results.
5. Atualizar a data `lastModified` em `app/sitemap.ts` quando o conteúdo mudar.
