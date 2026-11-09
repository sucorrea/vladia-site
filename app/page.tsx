import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Leaf, MapPin, Sparkles } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { iconMap, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { faqSchema } from "@/lib/schema";
import { approach, faqs, fullAddress, mapsLink, pillars, services, site, steps, whatsappLink } from "@/lib/site";
import fotoVladia from "@/public/vladia-mori.webp";

const pillarColors = ["bg-peach", "bg-sage", "bg-sand", "bg-brand-soft"];

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Início */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-sage/60 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-peach/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-16 md:grid-cols-[1.25fr_1fr] md:pt-20 md:pb-24">
          <div>
            <h1>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-dark shadow-sm ring-1 ring-brand/10">
                <Leaf className="h-4 w-4 text-brand" aria-hidden="true" />
                Nutricionista Vladia Mori · {site.brand}
                {site.city && ` em ${site.city}`}
              </span>
              <span className="mt-6 block font-serif text-4xl font-semibold leading-[1.1] text-brand-dark sm:text-6xl">
                Comer bem precisa <em className="font-medium text-brand">fazer sentido</em> para você
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Plano alimentar individual, possível e adequado à sua realidade: respeita sua rotina, seu
              bolso e seus gostos. Atendimento no consultório em {site.city}, em casa e online.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-6 py-4 font-semibold text-white shadow-lg shadow-whatsapp/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <Link
                href="/#servicos"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-brand/25 bg-white/70 px-6 py-4 font-semibold text-brand-dark transition hover:bg-white"
              >
                Conhecer os atendimentos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {["Sem dietas restritivas", "Cabe no seu orçamento", "Suporte pelo WhatsApp"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div aria-hidden="true" className="absolute inset-x-4 bottom-0 top-10 rounded-[3rem] bg-linear-to-b from-sage to-brand-soft" />
            <Image
              src={fotoVladia}
              alt="Nutricionista Vladia Mori, sorrindo, de jaleco branco"
              sizes="(min-width: 768px) 448px, 384px"
              preload
              className="relative w-full rounded-b-[3rem]"
            />
            <div className="float-slow absolute -left-2 bottom-10 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-brand/10 sm:-left-8">
              <p className="text-xs text-muted">Atendimento</p>
              <p className="font-semibold text-brand-dark">Consultório · Casa · Online</p>
            </div>
            <div className="absolute -right-1 top-16 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-brand/10 sm:-right-6">
              <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="text-sm font-semibold text-brand-dark">Plano 100% individual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section id="abordagem" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionTitle
            eyebrow="O que faz uma nutricionista?"
            title="Orienta, educa e mostra caminhos para uma alimentação possível"
            intro="Uma alimentação mais saudável, possível e adequada à realidade de cada pessoa. Por isso, o seu plano:"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <li key={p.title} className="reveal rounded-3xl border border-brand/10 bg-background p-6">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${pillarColors[i]} text-brand-dark`}>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-brand-dark">{p.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{p.text}</p>
                </li>
              );
            })}
          </ul>

          <div className="reveal mt-10 flex flex-col gap-5 rounded-3xl bg-brand-dark p-8 text-white sm:flex-row sm:items-center sm:p-10">
            <Leaf className="h-10 w-10 shrink-0 text-sand" aria-hidden="true" />
            <p className="text-lg leading-8 text-white/90 sm:text-xl">{approach}</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Atendimentos"
            title="Escolha o acompanhamento que combina com você"
            intro="Do consultório à sua cozinha: formatos diferentes, o mesmo cuidado individual."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <article
                  key={s.title}
                  className="reveal group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-brand-dark">{s.title}</h3>
                  <p className="mt-2 flex-1 leading-7 text-muted">{s.text}</p>
                  <a
                    href={whatsappLink(`Olá, Vladia! Vim pelo site e quero saber mais sobre: ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark"
                  >
                    Quero saber mais
                    <span className="sr-only"> sobre {s.title}</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-brand-soft/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionTitle eyebrow="Como funciona" title="Três passos para começar" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="reveal relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand/10">
                <span aria-hidden="true" className="font-serif text-5xl font-semibold text-brand/25">{s.n}</span>
                <p className="mt-2 font-serif text-xl font-semibold text-brand-dark">{s.title}</p>
                <p className="mt-2 leading-7 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white transition hover:bg-brand-dark"
            >
              Começar pela conversa inicial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <figure className="reveal relative rounded-[2.5rem] bg-sand/70 p-10 sm:p-12">
            <span aria-hidden="true" className="font-serif text-8xl leading-none text-brand/30">“</span>
            <blockquote className="-mt-6 font-serif text-3xl font-medium italic leading-snug text-brand-dark">
              {site.tagline}.
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Vladia Mori
            </figcaption>
          </figure>
          <div>
            <SectionTitle eyebrow="Sobre mim" title="Prazer, eu sou a Vladia" />
            <p className="mt-6 leading-8 text-muted">
              Sou Vladia Mori, nutricionista responsável pela {site.brand}
              {site.crn && ` (${site.crn})`}, e corredora de rua amadora. Vivo na prática o que oriento:
              a boa alimentação é parte do desempenho, da disposição e da qualidade de vida, seja para
              quem corre uma prova, seja para quem só quer se sentir melhor no dia a dia.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Acredito em um cuidado sem culpa e sem proibições, com comida de verdade e um plano que
              você consegue seguir. No Instagram, compartilho dicas, receitas e vídeos de orientação.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3 font-semibold text-brand-dark transition hover:bg-brand-soft"
            >
              <InstagramIcon />
              Seguir {site.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section id="perguntas">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand/10 open:shadow-md sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-dark">
                  <h3>{f.q}</h3>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-lg text-brand transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <JsonLd data={faqSchema()} />

      {/* Contato */}
      <section id="contato" className="px-5 pb-20 sm:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-dark px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="relative font-serif text-3xl font-semibold sm:text-5xl">Vamos conversar?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg leading-8 text-white/85">
            Chame no WhatsApp para tirar dúvidas e agendar sua consulta. Atendimento no consultório, em
            casa e online.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-dark shadow-lg transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
            {site.whatsappDisplay}
          </a>
          <a
            href={mapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-auto mt-8 flex max-w-md items-start justify-center gap-2 text-white/90 hover:text-white"
          >
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sand" aria-hidden="true" />
            <span>
              <span className="font-semibold">Consultório:</span> {fullAddress()}
              <span className="block text-sm underline">Ver no mapa e como chegar</span>
            </span>
          </a>
          <p className="relative mt-6 text-sm text-white/80">
            ou pelo Instagram{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              {site.instagramHandle}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
