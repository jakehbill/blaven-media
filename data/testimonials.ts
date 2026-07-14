import testimonialsJson from "@/data/testimonials.json";

export type Testimonial = {
  id: string;
  logo: {
    src: string;
    alt: string;
  };
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
