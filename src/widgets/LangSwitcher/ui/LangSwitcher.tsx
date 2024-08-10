import i18n from 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      onClick={toggleLang}
      className={className}
      theme='clear'
    >
      {t('lang')}
    </Button>
  );
};
