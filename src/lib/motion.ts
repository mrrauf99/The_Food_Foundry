/**
 * One motion vocabulary for the whole site.
 *
 * These are the Framer Motion halves of the `--ease-*` / `--duration-*` tokens in
 * globals.css — same curves, same timings, so JS-driven and CSS-driven animation
 * can't drift apart. Values here are in seconds (what Framer expects); the CSS
 * tokens are the same numbers in milliseconds.
 *
 * Durations scale with how far a thing travels: a hover affordance is fast, a
 * full-height drawer is slower. Nothing should exceed ~0.4s in response to input.
 */

/** Fast start, long settle. The default for anything entering or reacting to input. */
export const easeOutSoft: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Symmetric curve for motion that moves on its own rather than on a user action. */
export const easeInOutSoft: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const duration = {
  fast: 0.15, // icon swaps, hover/press affordances
  base: 0.25, // small panels, staggered list items, fades
  slow: 0.35, // scroll reveals and other larger travel
} as const;

/**
 * Tactile spring for edge-anchored surfaces (the nav drawer). Overdamped on
 * purpose — it should feel physical without visibly bouncing past its stop.
 */
export const drawerSpring = {
  type: "spring",
  stiffness: 420,
  damping: 40,
  mass: 0.9,
} as const;
