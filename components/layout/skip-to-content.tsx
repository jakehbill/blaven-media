"use client";

function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-sm focus-visible:bg-background focus-visible:px-4 focus-visible:py-2 focus-visible:text-foreground focus-visible:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={(event) => {
        const main = document.getElementById("main-content");
        if (!main) return;

        event.preventDefault();
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        main.focus({ preventScroll: true });
        main.scrollIntoView({
          block: "start",
          behavior: reduced ? "auto" : "smooth",
        });
        window.history.replaceState(null, "", "#main-content");
      }}
    >
      Skip to main content
    </a>
  );
}

export { SkipToContent };
