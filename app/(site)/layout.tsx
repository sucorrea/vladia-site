import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

// Layout das páginas do site (com cabeçalho, rodapé e botão flutuante).
// A página /links (link da bio do Instagram) fica fora deste grupo e tem visual próprio.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
