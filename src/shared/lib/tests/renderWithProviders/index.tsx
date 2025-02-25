import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";

import i18nForTesting from "shared/config/i18n/i18nForTesting";
import { StoreProvider } from "app/providers/StoreProvider";
import { RootState } from "app/providers/StoreProvider/config/store";

export interface componentRenderOptions {
  route?: string;
  initialState?: Partial<RootState>;
}

export const renderWithProviders = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = "/", initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTesting}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
