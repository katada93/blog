import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = ({ port }: BuildOptions): Configuration => {
  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  }
}