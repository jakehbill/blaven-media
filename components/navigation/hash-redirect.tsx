"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type HashRedirectProps = {
  /** Path with hash, e.g. `/#about`. */
  to: string;
};

/**
 * Client redirect that preserves hash fragments (server redirects drop them).
 */
function HashRedirect({ to }: HashRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <p className="p-8 text-sm text-ink-muted">
      Redirecting…
    </p>
  );
}

export { HashRedirect };
