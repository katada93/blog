import { RouterProvider } from "./providers/RouterProvider";
import { ErrorProvider } from "./providers/ErrorProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { App } from "./App";
import { StoreProvider } from "./providers/StoreProvider";

export default () => (
  <StoreProvider>
    <RouterProvider>
      <ErrorProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorProvider>
    </RouterProvider>
  </StoreProvider>
);
