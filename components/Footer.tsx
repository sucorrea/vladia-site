import Link from "next/link";
import { fullAddress, mapsLink, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  const local = site.city ? `${site.city}/${site.state}` : "";
  return (
    <footer className="border-t border-brand/10 bg-brand-soft/50">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 pt-10 pb-24 md:pb-10 text-sm text-muted sm:grid-cols-3">
        <div>
          <p className="font-semibold text-brand-dark">{site.brand}</p>
          <p className="mt-1">
            Nutricionista {site.name}
            {site.crn && ` · ${site.crn}`}
          </p>
          <p className="mt-1">Consultório{local && ` em ${local}`}, acompanhamento em casa e online</p>
          {site.streetAddress && (
            <address className="mt-3 not-italic">
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {fullAddress()}
              </a>
            </address>
          )}
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <Link href="/#sobre" className="hover:text-brand">Sobre a Vladia</Link>
          <Link href="/#servicos" className="hover:text-brand">Atendimentos</Link>
          <Link href="/#perguntas" className="hover:text-brand">Perguntas frequentes</Link>
        </nav>
        <div className="flex flex-col gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            WhatsApp {site.whatsappDisplay}
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            Instagram {site.instagramHandle}
          </a>
          <p className="mt-3 text-xs">© {site.brand}</p>
        </div>
      </div>
    </footer>
  );
}
