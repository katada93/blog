export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

type BuildMode = 'development' | 'production'

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}