import { RouterProvider } from './providers/RouterProvider';
import { ErrorProvider } from "./providers/ErrorProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { App } from "./App";

export default () => (
  <RouterProvider>
    <ErrorProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorProvider>
  </RouterProvider>
);