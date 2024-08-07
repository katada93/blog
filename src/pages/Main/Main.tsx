import { useTranslation } from 'react-i18next'

function Main() {
  const { t } = useTranslation('main');

  return (
    <div>{t('main')}</div>
  )
}

export default Main