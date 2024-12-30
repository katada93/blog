import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  modulePaths: ["<rootDir>src"],
  rootDir: "../..",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/config/jest/svgMockComponent.tsx",
  },
};

export default config;
