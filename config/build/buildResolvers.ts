import webpack from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolvers = ({ paths }: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {}
  };
};