import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleHelp, Globe, House, Laptop, MapPin, ShoppingCart, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { mapsLink, site, whatsappLink } from "@/lib/site";
import fotoVladia from "@/public/vladia-mori.webp";

// Página para o "link na bio" do Instagram: https://<site>/links
// As mensagens do WhatsApp dizem "Vim pelo Instagram", assim a Vladia sabe a origem do contato.
// Os links internos levam utm_source=instagram para quando houver métricas no site.

export const metadata: Metadata = {
  title: "Links",
  description: `Agende sua consulta com a nutricionista ${site.name} (${site.brand}, ${site.city}/${site.state}): WhatsApp, atendimentos, Personal Diet e como chegar.`,
  alternates: { canonical: "/links" },
  // Página de atalhos: não precisa aparecer no Google (a página principal já tem todo o conteúdo).
  robots: { index: false, follow: true },
};

const utm = "utm_source=instagram&utm_medium=social&utm_campaign=link_na_bio";
const fromInstagram = (assunto: string) => whatsappLink(`Olá, Vladia! Vim pelo Instagram e ${assunto}`);

type Item = { label: string; hint?: string; href: string; icon: LucideIcon; external?: boolean };

const items: Item[] = [
  {
    label: "Conheça os atendimentos",
    hint: "Consultório, em casa e online",
    href: `/?${utm}#servicos`,
    icon: Stethoscope,
  },
  {
    label: "Personal Diet",
    hint: "Das compras ao preparo das refeições",
    href: fromInstagram("quero saber mais sobre o Personal Diet."),
    icon: ShoppingCart,
    external: true,
  },
  {
    label: "Acompanhamento em casa",
    hint: "Rotina alimentar na sua realidade",
    href: fromInstagram("quero saber mais sobre o acompanhamento em casa."),
    icon: House,
    external: true,
  },
  {
    label: "Consulta online",
    hint: "Para quem mora em outra cidade",
    href: fromInstagram("quero saber mais sobre a consulta online."),
    icon: Laptop,
    external: true,
  },
  {
    label: "Dúvidas frequentes",
    href: `/?${utm}#perguntas`,
    icon: CircleHelp,
  },
  {
    label: "Como chegar ao consultório",
    hint: `${site.streetAddress}, ${site.neighborhood}`,
    href: mapsLink(),
    icon: MapPin,
    external: true,
  },
  {
    label: "Visitar o site completo",
    href: `/?${utm}`,
    icon: Globe,
  },
];

function ItemLink({ item }: { item: Item }) {
  const Icon = item.icon;
  const className =
    "group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-brand/10 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/30";
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-brand-dark">{item.label}</span>
        {item.hint && <span className="block text-sm leading-5 text-muted">{item.hint}</span>}
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-brand/60 transition group-hover:text-brand" aria-hidden="true" />
    </>
  );
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

export default function LinksPage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sage/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-64 h-72 w-72 rounded-full bg-peach/60 blur-3xl" />

      <div className="relative mx-auto flex max-w-md flex-col items-center px-5 pt-10 pb-12">
        <div className="h-32 w-32 overflow-hidden rounded-full bg-linear-to-b from-sage to-brand-soft shadow-lg ring-4 ring-white">
          <Image
            src={fotoVladia}
            alt="Nutricionista Vladia Mori"
            sizes="128px"
            preload
            className="h-full w-full object-cover object-top"
          />
        </div>

        <Image
          src="/brand/logo-texto.png"
          alt={`${site.brand} – Nutrição Clínica`}
          width={716}
          height={220}
          sizes="220px"
          className="mt-5 h-14 w-auto"
        />
        <h1 className="mt-3 text-center text-sm font-medium text-muted">
          Nutricionista {site.name} · {site.city}/{site.state}
        </h1>
        <p className="mt-3 text-center font-serif text-xl italic text-brand-dark">
          {site.slogan}
        </p>

        <a
          href={fromInstagram("gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-whatsapp px-5 py-4 text-lg font-semibold text-white shadow-lg shadow-whatsapp/25 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Agendar consulta
        </a>
        <p className="mt-2 text-sm text-muted">Pelo WhatsApp {site.whatsappDisplay}</p>

        <nav aria-label="Links" className="mt-8 flex w-full flex-col gap-3">
          {items.map((item) => (
            <ItemLink key={item.label} item={item} />
          ))}
        </nav>

        <footer className="mt-10 text-center text-xs text-muted">
          <p>
            {site.brand}
            {site.crn && ` · ${site.crn}`}
          </p>
          <p className="mt-1">
            {site.streetAddress} – {site.neighborhood}, {site.city}/{site.state}
          </p>
        </footer>
      </div>
    </main>
  );
}
