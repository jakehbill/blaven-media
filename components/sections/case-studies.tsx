import { CaseStudiesClosing } from "@/components/sections/case-studies-page/case-studies-closing";
import { CaseStudiesIntro } from "@/components/sections/case-studies-page/case-studies-intro";
import { CaseStudyFeature } from "@/components/sections/case-studies-page/case-study-feature";
import {
  caseStudiesContent,
  caseStudySurfaces,
} from "@/data/case-studies";

function CaseStudies() {
  return (
    <>
      <CaseStudiesIntro />
      {caseStudiesContent.items.map((study, index) => (
        <CaseStudyFeature
          key={study.id}
          study={study}
          index={index}
          surface={caseStudySurfaces[index] ?? "light"}
        />
      ))}
      <CaseStudiesClosing />
    </>
  );
}

export { CaseStudies };
