import Link from "next/link";
import Logo from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "/#servicos", label: "Atendimentos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#perguntas", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <nav
          aria-label="Principal"
          className="flex w-full items-center justify-between gap-x-2 text-[13px] sm:w-auto sm:justify-end sm:gap-7 sm:text-sm"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1 font-medium text-foreground/80 transition hover:text-brand">
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-semibold text-white transition hover:bg-brand-dark md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
