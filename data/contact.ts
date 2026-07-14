/** Contact email parts — never store the assembled address as a single string. */
export const contactEmailParts = {
  user: "jake",
  domain: "blavenmedia.com",
} as const;

export function assembleContactEmail(
  user: string = contactEmailParts.user,
  domain: string = contactEmailParts.domain,
) {
  return `${user}@${domain}`;
}

export type ContactPageContent = {
  hero: {
    label: string;
    heading: string;
    body: string;
  };
  details: {
    linkedin: {
      label: string;
      value: string;
      href: string;
    };
    location: {
      label: string;
      value: string;
    };
  };
  form: {
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      organisation: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  directContact: {
    heading: string;
    body: string;
    linkedinLabel: string;
  };
  emailReveal: {
    revealLabel: string;
    copyLabel: string;
    copiedLabel: string;
  };
  footer: {
    tagline: string;
  };
};

/** Homepage Contact CTA — kept separate from the Contact page hero. */
export const contactCtaContent = {
  label: "Contact",
  heading: "Ready to build something people remember?",
  body: "Whether you're refining your brand, launching something new, or looking for a long-term communications partner, we'd love to hear what you're working on.",
  cta: {
    label: "Let's Talk",
    href: "/contact",
  },
} as const;

export const contactPageContent: ContactPageContent = {
  hero: {
    label: "Contact",
    heading: "Let's build something people remember.",
    body: "Whether you're refining your brand, launching something new, or looking for a long-term communications partner, tell us what you're working on.",
  },
  details: {
    linkedin: {
      label: "LinkedIn",
      value: "Blaven Media",
      href: "https://www.linkedin.com/company/blaven-media/",
    },
    location: {
      label: "Location",
      value: "London, UK",
    },
  },
  form: {
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name",
      },
      email: {
        label: "Email",
        placeholder: "you@organisation.com",
      },
      organisation: {
        label: "Organisation",
        placeholder: "Organisation name",
      },
      message: {
        label: "What are you working on?",
        placeholder: "Tell us briefly about your project or enquiry",
      },
    },
    submitLabel: "Start a Conversation",
    submittingLabel: "Sending…",
    successMessage:
      "[Placeholder success: thank you, we'll be in touch soon.]",
    errorMessage:
      "[Placeholder error: something went wrong. Please try again or use email.]",
  },
  directContact: {
    heading: "Prefer email?",
    body: "For direct enquiries, reveal the email address below or connect with Blaven Media on LinkedIn.",
    linkedinLabel: "LinkedIn",
  },
  emailReveal: {
    revealLabel: "Reveal email",
    copyLabel: "Copy",
    copiedLabel: "Copied",
  },
  footer: {
    tagline: "Built with care in London.",
  },
};
