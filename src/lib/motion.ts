// Framer Motion mirror of the motion tokens in globals.css (seconds, not ms).

export const easeOutSoft: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const easeInOutSoft: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const duration = {
  fast: 0.15, // icon swaps, hover/press affordances
  base: 0.25, // small panels, staggered list items, fades
  slow: 0.35, // scroll reveals and other larger travel
} as const;

// Overdamped so the drawer settles without overshooting.
export const drawerSpring = {
  type: "spring",
  stiffness: 420,
  damping: 40,
  mass: 0.9,
} as const;
