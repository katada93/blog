import { ProgressPlugin } from "webpack";
import type { WebpackPluginInstance } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
};
