import { lazy } from "react";

export const MainPage = lazy(() =>
  import("./ui/Main").then(({ Main }) => ({ default: Main }))
);