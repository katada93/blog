import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildENV, BuildPaths } from "./config/build/types/config";

export default (env: BuildENV) => {
  const PATHS: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const MODE = env.mode || "development";
  const PORT = env.port || 3000;
  const IS_DEV_MODE = MODE === "development";

  const config = buildWebpackConfig({
    mode: MODE,
    paths: PATHS,
    isDevMode: IS_DEV_MODE,
    port: PORT,
  });

  return config;
};
