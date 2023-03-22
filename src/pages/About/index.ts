import { lazy } from "react";

export const AboutPage = lazy(() =>
  import("./ui/About").then(({ About }) => ({ default: About }))
);
