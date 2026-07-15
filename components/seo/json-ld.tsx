import { contactPageContent } from "@/data/contact";
import { faqContent } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

type JsonLdGraph = Record<string, unknown> | Record<string, unknown>[];

function JsonLdScript({ data }: { data: JsonLdGraph }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Sitewide Organization + WebSite graph. */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.name,
        url: SITE_URL,
        description: siteConfig.description,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${siteConfig.logo.src}`,
          caption: siteConfig.logo.alt,
        },
        image: `${SITE_URL}${siteConfig.logo.src}`,
        founder: {
          "@type": "Person",
          name: "Jake Bill",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: contactPageContent.details.location.value,
          addressCountry: "GB",
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        sameAs: [contactPageContent.details.linkedin.href],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: `${SITE_URL}/contact`,
          availableLanguage: ["English"],
        },
        knowsAbout: [
          "Strategic communications",
          "Thought leadership",
          "Brand strategy",
          "Executive communications",
          "Digital experiences",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-GB",
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

/** FAQPage schema — homepage only, mirrors visible FAQ content. */
function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };

  return <JsonLdScript data={data} />;
}

/** BreadcrumbList for interior pages. */
function BreadcrumbJsonLd({
  items,
}: {
  items: readonly { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };

  return <JsonLdScript data={data} />;
}

export { JsonLd, FaqJsonLd, BreadcrumbJsonLd };
