import { PATHS } from "./navigation";

export const STEPS = ["upload", "options", "review", "result"];

export const STEP_PATHS: { [key in Steper]: string } = {
  upload: PATHS.UPLOAD,
  options: PATHS.OPTION,
  review: PATHS.REVIEW,
  result: PATHS.RESULT,
};

export type Steper = (typeof STEPS)[number];
