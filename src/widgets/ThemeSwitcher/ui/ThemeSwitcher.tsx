import clsx from 'clsx';

import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';

import css from './ThemeSwitcher.module.css'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className={clsx(css.ThemeSwitcher, className)}
      theme='clear'
    >
      {theme === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  )
};
