// Dados estruturados (schema.org / JSON-LD) usados por Google, Bing e assistentes de IA
// para entender quem é a clínica, o que ela oferece e o conteúdo de cada página.
import { absoluteUrl, faqs, mapsLink, services, site } from "@/lib/site";

const ids = {
  website: absoluteUrl("/#website"),
  clinic: absoluteUrl("/#clinica"),
  person: absoluteUrl("/#vladia"),
};

function address() {
  if (!site.city) return undefined;
  return {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
    ...(site.streetAddress && {
      streetAddress: site.neighborhood ? `${site.streetAddress} - ${site.neighborhood}` : site.streetAddress,
    }),
    ...(site.postalCode && { postalCode: site.postalCode }),
  };
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: site.brand,
        alternateName: [site.name, "Vladia Nutri"],
        description: site.description,
        inLanguage: "pt-BR",
        publisher: { "@id": ids.clinic },
      },
      {
        "@type": "MedicalClinic",
        "@id": ids.clinic,
        name: site.brand,
        alternateName: "Vladia Nutri",
        description: site.description,
        url: site.url,
        logo: absoluteUrl("/brand/logo-completo.png"),
        image: absoluteUrl("/opengraph-image.jpg"),
        telephone: `+${site.whatsappNumber}`,
        medicalSpecialty: "Nutrition",
        priceRange: "$$",
        address: address(),
        ...(site.streetAddress && { hasMap: mapsLink() }),
        areaServed: site.city
          ? [{ "@type": "City", name: `${site.city}, ${site.state}` }, { "@type": "Country", name: "Brasil" }]
          : "Brasil",
        availableService: services.map((s) => ({
          "@type": "MedicalTherapy",
          name: s.title,
          description: s.text,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${site.whatsappNumber}`,
          contactType: "Agendamento de consultas (WhatsApp)",
          availableLanguage: "Portuguese",
        },
        founder: { "@id": ids.person },
        employee: { "@id": ids.person },
        sameAs: [site.instagram],
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: site.name,
        jobTitle: "Nutricionista",
        description:
          "Nutricionista e corredora de rua amadora, responsável pela Clínica Vladia Nutri. Atua com nutrição clínica e esportiva, reeducação alimentar e emagrecimento saudável.",
        worksFor: { "@id": ids.clinic },
        knowsAbout: [
          "Nutrição clínica",
          "Nutrição esportiva",
          "Reeducação alimentar",
          "Emagrecimento saudável",
          "Alimentação para corredores",
        ],
        ...(site.crn && {
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Registro profissional",
            name: site.crn,
          },
        }),
        url: absoluteUrl("/#sobre"),
        sameAs: [site.instagram],
      },
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
