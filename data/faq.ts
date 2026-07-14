export type FaqItem = {
  question: string;
  answer: string;
};

export const faqContent = {
  label: "Before we talk",
  heading: "A few questions we often hear.",
  items: [
    {
      question: "Who do you work with?",
      answer:
        "We work with founders, leadership teams, startups, scale-ups, nonprofits, and established organisations. Whether you're launching something new or leading a recognised brand, we help communicate what makes your work worth paying attention to.",
    },
    {
      question: "What exactly does Blaven Media do?",
      answer:
        "We're a communications and authority partner. That means we help organisations build trust through strategic communications, thought leadership, video, branding, websites, newsletters, and content systems. Every engagement is tailored, but the goal is always the same: helping meaningful ideas reach the right people.",
    },
    {
      question: "How are you different from a traditional marketing agency?",
      answer:
        "Most agencies focus on campaigns, channels, or outputs. We focus on recognition. We believe the strongest brands aren't simply the loudest: they're the ones people remember and trust. Every piece of work we create is designed to strengthen that reputation over time.",
    },
    {
      question: "Do you only work with founders?",
      answer:
        "Not at all. While we enjoy working closely with founders, many of our clients are established organisations and leadership teams looking for an external perspective. Sometimes the most valuable thing isn't another pair of hands: it's a fresh way of looking at how your organisation communicates.",
    },
    {
      question: "Can you work alongside our internal marketing team?",
      answer:
        "Absolutely. We're just as comfortable supporting in-house teams as we are leading projects independently. Whether you need strategic direction, creative execution, or specialist expertise, we integrate seamlessly with the people already driving your communications.",
    },
    {
      question: "Do you offer one-off projects or ongoing partnerships?",
      answer:
        "Both. Some clients come to us for a focused project, such as a website or thought leadership campaign. Others work with us over several months as an ongoing communications partner. We'll always recommend the approach that makes the most sense for your goals, rather than trying to fit every client into the same model.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;
