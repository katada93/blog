import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Routing } from 'pages';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import { RouterProvider } from './providers/RouterProvider';

import './styles/styles.css';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme()

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
  )
};

export default () => (
  <RouterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </RouterProvider>
);