import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

import css from './PageError.module.css';


export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={css.ErrorPage}>
      <p>{t('somethingWentWrong')}</p>
      <Button onClick={reloadPage} className={css.reloadBtn}>
        {t('reboot')}
      </Button>
    </div>
  );
};