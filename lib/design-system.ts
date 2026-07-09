/** Layout and rhythm constants for use in components and sections. */

export const containerMaxWidth = 1240;

export const readingWidths = {
  narrow: "36rem",
  default: "42rem",
  wide: "52rem",
} as const;

export const sectionSpacing = {
  sm: "clamp(3.5rem, 8vw, 5rem)",
  md: "clamp(5rem, 12vw, 7.5rem)",
  lg: "clamp(6rem, 14vw, 9rem)",
} as const;

export const motionDuration = {
  fast: 0.35,
  base: 0.55,
  slow: 0.75,
} as const;
