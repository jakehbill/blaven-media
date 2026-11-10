import { EditorialHero } from "@/components/sections/editorial/hero";
import { EditorialOffer } from "@/components/sections/editorial/offer";
import { EditorialServices } from "@/components/sections/editorial/services";
import { EditorialStudio } from "@/components/sections/editorial/studio";
import { EditorialWork } from "@/components/sections/editorial/work";

function EditorialHome() {
  return (
    <>
      <EditorialHero />
      <EditorialOffer />
      <EditorialWork />
      <EditorialServices />
      <EditorialStudio />
    </>
  );
}

export { EditorialHome };
