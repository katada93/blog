import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";

import i18nForTesting from "shared/config/i18n/i18nForTesting";
import { MemoryRouter } from "react-router-dom";

export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <MemoryRouter>
      <I18nextProvider i18n={i18nForTesting}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
