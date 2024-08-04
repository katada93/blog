import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Routing } from 'pages';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import { RouterProvider } from './providers/RouterProvider';

import './styles/styles.css';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <Routing />
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