export const STEPS = ["upload", "options", "review", "result"];

export type Steper = (typeof STEPS)[number];
