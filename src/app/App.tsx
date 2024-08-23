import clsx from 'clsx';

import { Routing } from 'pages';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';

import './styles/styles.css';

export const App = () => {
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