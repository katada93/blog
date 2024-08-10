import { useTranslation } from "react-i18next";

import css from './NotFound.module.css';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className={css.NotFoundPage}>{t('notFoundPage')}</div>
  );
}

export default NotFoundPage;