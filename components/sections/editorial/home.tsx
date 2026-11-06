import { EditorialApproach } from "@/components/sections/editorial/approach";
import { EditorialCta } from "@/components/sections/editorial/cta";
import { EditorialHero } from "@/components/sections/editorial/hero";
import { EditorialInAction } from "@/components/sections/editorial/in-action";
import { EditorialServices } from "@/components/sections/editorial/services";
import { EditorialWork } from "@/components/sections/editorial/work";

function EditorialHome() {
  return (
    <>
      <EditorialHero />
      <EditorialApproach />
      <EditorialInAction />
      <EditorialWork />
      <EditorialServices />
      <EditorialCta />
    </>
  );
}

export { EditorialHome };
