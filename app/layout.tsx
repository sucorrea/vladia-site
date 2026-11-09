import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { siteGraph } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

// next/font gera uma fonte reserva com as mesmas medidas, evitando que o layout "pule"
// quando a fonte carrega (CLS), e pré-carrega os arquivos.
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: "Arial",
});

const fraunces = localFont({
  src: "../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.brand}` },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.name, url: site.instagram }],
  creator: site.name,
  publisher: site.brand,
  keywords: [
    "nutricionista",
    "Vladia Mori",
    "Vladia Nutri",
    "Clínica Vladia Nutri",
    "nutrição clínica",
    "nutrição esportiva",
    "reeducação alimentar",
    "emagrecimento saudável",
    "nutricionista online",
    "nutricionista para corredores",
    "nutricionista em Ourinhos",
    "nutricionista Ourinhos SP",
    "clínica de nutrição Ourinhos",
    "Personal Diet",
    "nutricionista em casa",
    "nutricionista domiciliar",
    "plano alimentar individual",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    type: "website",
    locale: "pt_BR",
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  formatDetection: { telephone: true },
  // REVISAR: depois de cadastrar o site no Google Search Console / Bing Webmaster Tools,
  // cole aqui os códigos de verificação, ex.: verification: { google: "xxxx", other: { "msvalidate.01": "yyyy" } },
};

export const viewport: Viewport = {
  themeColor: "#faf7f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteGraph()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <aside aria-label="Contato rápido">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Vladia no WhatsApp"
            className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 md:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar
          </a>
        </aside>
      </body>
    </html>
  );
}
