import type { Preview } from "@storybook/react";
// import type { ThemeConfig } from "storybook-addon-data-theme-switcher";
import i18n from "../../src/shared/config/i18n/i18n";

import "../../src/app/styles/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
  },
  initialGlobals: {
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
    },
    locale: "ru",
    locales: {
      en: "English",
      ru: "Russian",
    },
  },
};

// export const initialGlobals = {
//   dataThemes: {
//     list: [
//       { name: "light", dataTheme: "light", color: "#ffffff" },
//       { name: "dark", dataTheme: "dark", color: "#000000" },
//     ],
//     dataAttribute: "data-theme",
//     clearable: true,
//     toolbar: {
//       title: "Change data-theme attribute",
//       icon: "PaintBrushIcon",
//     },
//   } satisfies ThemeConfig,
// };

export default preview;
