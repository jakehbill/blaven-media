export type FaqItem = {
  question: string;
  answer: string;
};

export const faqContent = {
  label: "FAQ",
  heading: "[Placeholder FAQ Heading]",
  introduction:
    "[Placeholder introduction — concise answers to common questions before starting a conversation.]",
  items: [
    {
      question: "How do projects typically begin?",
      answer:
        "[Placeholder answer — how an initial conversation leads into discovery, scoping and the first phase of work.]",
    },
    {
      question: "Do you work on one-off projects or retainers?",
      answer:
        "[Placeholder answer — both project-based engagements and ongoing retainers, depending on the need.]",
    },
    {
      question: "Can you work alongside an internal marketing team?",
      answer:
        "[Placeholder answer — how we collaborate with in-house teams, stakeholders and existing processes.]",
    },
    {
      question: "Do you only work with founders?",
      answer:
        "[Placeholder answer — the kinds of founders, experts and organisations we partner with.]",
    },
    {
      question:
        "Can you help with websites and branding as well as content?",
      answer:
        "[Placeholder answer — brand, digital and content sit within one connected communications practice.]",
    },
    {
      question: "How involved is the process?",
      answer:
        "[Placeholder answer — the level of collaboration expected and how decisions are made along the way.]",
    },
  ] as const satisfies readonly FaqItem[],
} as const;
