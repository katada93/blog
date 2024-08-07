import clsx from 'clsx';

import { Button } from 'shared/ui/Button/Button';

import css from './LangSwitcher.module.css';
import i18n from 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation()

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      onClick={toggleLang}
      className={clsx(css.LangSwitcher, className)}
      theme='clear'
    >
      {t('lang')}
    </Button>
  )
}
