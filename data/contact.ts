import contactJson from "@/data/contact.json";

export type ContactDetail = {
  label: string;
  value: string;
  href: string | null;
};

export type ContactContent = {
  label: string;
  heading: string;
  introduction: string;
  details: ContactDetail[];
  form: {
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submitLabel: string;
    privacyNote: string;
    successMessage: string;
    errorMessage: string;
  };
  social: {
    linkedin: {
      label: string;
      href: string;
    };
  };
  footer: {
    tagline: string;
  };
};

export const contactContent = contactJson as ContactContent;
