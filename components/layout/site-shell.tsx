import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SkipToContent } from "@/components/layout/skip-to-content";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SkipToContent />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
