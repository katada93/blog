import type { Preview } from "@storybook/react";
import type { ThemeConfig } from "storybook-addon-data-theme-switcher";

import "../../src/app/styles/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const initialGlobals = {
  dataThemes: {
    list: [
      { name: "light", dataTheme: "light", color: "#ffffff" },
      { name: "dark", dataTheme: "dark", color: "#000000" },
    ],
    dataAttribute: "data-theme",
    clearable: true,
    toolbar: {
      title: "Change data-theme attribute",
      icon: "PaintBrushIcon",
    },
  } satisfies ThemeConfig,
};

export default preview;
