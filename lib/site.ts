// Dados centrais do site. Itens marcados com "REVISAR" precisam ser confirmados pela Vladia.
export const site = {
  name: "Vladia Mori",
  brand: "Clínica Vladia Nutri",
  title: "Nutricionista em Ourinhos | Clínica Vladia Nutri – Vladia Mori",
  slogan: "Comer bem precisa fazer sentido para você",
  tagline: "Nutrir corretamente o corpo é o segredo",
  description:
    "Nutricionista Vladia Mori, da Clínica Vladia Nutri em Ourinhos/SP: atendimento no consultório, acompanhamento em casa, Personal Diet e consultas online. Plano alimentar individual que respeita sua rotina, seu bolso e seus gostos.",
  // Endereço do consultório (usado no site, nos dados estruturados e na busca local).
  city: "Ourinhos",
  state: "SP",
  streetAddress: "Rua Paulo Sá, 720",
  neighborhood: "Vila Moraes",
  postalCode: "19900-221",
  instagram: "https://www.instagram.com/vladianutri/",
  instagramHandle: "@vladianutri",
  whatsappNumber: "5514998548211",
  whatsappDisplay: "(14) 99854-8211",
  whatsappMessage: "Olá, Vladia! Vim pelo seu site e gostaria de agendar uma consulta.",
  crn: "", // REVISAR: preencher com o número do CRN (ex.: "CRN-3 00000"). Se vazio, não aparece no site.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vladiamori.com.br", // REVISAR: domínio final
};

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://api.whatsapp.com/send?phone=${site.whatsappNumber}&text=${encodeURIComponent(message)}`;
}

// Os pilares do atendimento (da postagem "O que faz uma nutricionista?").
export const pillars = [
  { icon: "calendar", title: "Respeita sua rotina", text: "O plano se encaixa nos seus horários, no trabalho, nos treinos e na vida em família." },
  { icon: "coins", title: "Considera sua condição socioeconômica", text: "Nada de lista de compras cara: as escolhas cabem no seu orçamento." },
  { icon: "apple", title: "Atende suas necessidades nutricionais", text: "Quantidades e combinações certas para a sua saúde e os seus objetivos." },
  { icon: "heart", title: "Valoriza seus gostos e preferências", text: "Você continua comendo o que gosta, com mais equilíbrio e sem culpa." },
] as const;

export const approach =
  "O objetivo não é aumentar os gastos da sua despensa, mas organizar melhor as escolhas, aproveitar o que você já tem e adaptar hábitos que podem ser melhorados.";

export const services = [
  {
    icon: "stethoscope",
    title: "Atendimento no consultório",
    text: "Avaliação dos seus hábitos e orientações nutricionais individualizadas, com plano alimentar feito para você.",
  },
  {
    icon: "house",
    title: "Acompanhamento em casa",
    // REVISAR: confirmar com a Vladia como funciona (visita em casa ou acompanhamento à distância).
    text: "Organização da rotina alimentar na sua realidade, no dia a dia da sua casa e da sua cozinha.",
  },
  {
    icon: "cart",
    title: "Personal Diet",
    text: "Desde a lista de compras até o preparo das refeições, com quantidades adequadas e acompanhamento contínuo.",
  },
  {
    icon: "laptop",
    title: "Consulta online",
    text: "Consultas e retornos à distância, com suporte pelo WhatsApp para tirar dúvidas ao longo do processo.",
  },
  {
    icon: "footprints",
    title: "Nutrição esportiva",
    text: "Alimentação para treinar melhor e se recuperar bem, com quem corre e entende o dia a dia do esporte.",
  },
  {
    icon: "scale",
    title: "Reeducação alimentar e emagrecimento",
    text: "Perda de peso saudável e sem dietas malucas, respeitando seu corpo, suas preferências e seu ritmo.",
  },
] as const;

export const steps = [
  { n: "1", title: "Conversa inicial", text: "Você me conta sua rotina, seus objetivos, seu histórico de saúde e o que gosta de comer." },
  { n: "2", title: "Plano individual", text: "Monto um plano alimentar possível para a sua realidade, sem copiar e colar." },
  { n: "3", title: "Acompanhamento", text: "Retornos para ajustar o plano, tirar dúvidas e comemorar cada conquista." },
];

// Perguntas frequentes: aparecem na página inicial e nos dados estruturados (FAQPage).
// Respostas diretas ajudam buscadores e assistentes de IA a citar o site.
export const faqs = [
  {
    q: "Como agendar uma consulta com a nutricionista Vladia Mori?",
    a: `O agendamento é feito pelo WhatsApp ${site.whatsappDisplay}. Basta enviar uma mensagem com seu nome, o tipo de atendimento que procura e o melhor horário para você.`,
  },
  {
    q: "Onde fica o consultório da nutricionista Vladia Mori?",
    a: `O consultório da Clínica Vladia Nutri fica na ${site.streetAddress}, ${site.neighborhood}, em ${site.city}/${site.state} (CEP ${site.postalCode}). Também há atendimento online para quem mora em outras cidades.`,
  },
  {
    q: "Quais tipos de atendimento a Clínica Vladia Nutri oferece?",
    a: `Atendimento no consultório (${site.streetAddress}, ${site.neighborhood}, ${site.city}/${site.state}), acompanhamento em casa, Personal Diet e consulta online. Em todos os formatos você recebe um plano alimentar individual.`,
  },
  {
    q: "O que é o Personal Diet?",
    a: "É um acompanhamento mais próximo, que vai da lista de compras ao preparo das refeições, com quantidades adequadas e acompanhamento contínuo da nutricionista.",
  },
  {
    q: "Como funciona o acompanhamento em casa?",
    a: "É a organização da sua rotina alimentar dentro da sua realidade: a Vladia ajuda a planejar as refeições do dia a dia em casa, aproveitando o que você já tem na despensa.",
  },
  {
    q: "Vou gastar mais com comida seguindo o plano alimentar?",
    a: "Não é esse o objetivo. A ideia é organizar melhor as escolhas, aproveitar o que você já tem e adaptar hábitos, respeitando sua condição socioeconômica.",
  },
  {
    q: "Vou precisar fazer uma dieta restritiva?",
    a: "Não. O acompanhamento é sem culpa e sem proibições, com comida de verdade e respeito aos seus gostos e preferências.",
  },
  {
    q: "A Vladia atende corredores e praticantes de esporte?",
    a: "Sim. Além de nutricionista, a Vladia é corredora de rua amadora e oferece nutrição esportiva: alimentação para treinar melhor, ter energia nas provas e se recuperar bem.",
  },
  {
    q: "Como funciona a consulta online?",
    a: "As consultas e os retornos acontecem à distância, e você conta com suporte pelo WhatsApp para tirar dúvidas ao longo do processo.",
  },
];

export function fullAddress() {
  return `${site.streetAddress} – ${site.neighborhood}, ${site.city}/${site.state}, CEP ${site.postalCode}`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.brand}, ${site.streetAddress}, ${site.neighborhood}, ${site.city} - ${site.state}, ${site.postalCode}`,
  )}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
