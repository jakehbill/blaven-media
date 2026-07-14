import { AboutClosing } from "@/components/sections/about-page/about-closing";
import { AboutHero } from "@/components/sections/about-page/about-hero";
import { HowWeThink } from "@/components/sections/about-page/how-we-think";
import { HowWeWork } from "@/components/sections/about-page/how-we-work";
import { SelectedExperience } from "@/components/sections/about-page/selected-experience";
import { WhyBlaven } from "@/components/sections/about-page/why-blaven";

function About() {
  return (
    <>
      <AboutHero />
      <WhyBlaven />
      <HowWeThink />
      <HowWeWork />
      <SelectedExperience />
      <AboutClosing />
    </>
  );
}

export { About };
