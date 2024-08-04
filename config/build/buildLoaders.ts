import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const cssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: false,
          modules: {
            exportLocalsConvention: 'as-is',
            namedExport: false,
            auto: (resPath: string) => resPath.endsWith('.module.css'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
    ]
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [tsLoader, cssLoader];
}
