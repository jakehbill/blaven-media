import testimonialsJson from "@/data/testimonials.json";

export type Testimonial = {
  id: string;
  logo: {
    src: string;
    alt: string;
  };
  /** External company site. Null when the organisation no longer exists or has no URL. */
  companyHref: string | null;
  clientName: string;
  jobTitle: string;
  companyName: string;
  quote: string;
  services: string[];
  rating: number | null;
  caseStudyHref: string | null;
};

export type TestimonialsContent = {
  label: string;
  heading: string;
  introduction: string | string[];
  items: Testimonial[];
};

export const testimonialsContent =
  testimonialsJson as TestimonialsContent;
