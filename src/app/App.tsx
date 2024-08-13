import clsx from 'clsx';

import { Routing } from 'pages';
import { RouterProvider } from './providers/RouterProvider';
import { ErrorProvider } from './providers/ErrorProvider';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';

import './styles/styles.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <div className="page-wrapper">
          <Routing />
        </div>
      </div>
    </div >
  );
};

export default () => (
  <RouterProvider>
    <ErrorProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorProvider>
  </RouterProvider>
);