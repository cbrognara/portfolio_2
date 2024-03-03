import { useTranslations } from 'next-intl';

export function SelectedProjects() {
    const t = useTranslations('Index')

    return (
        <div className='flex justify-start'>
        <h2 className='text-[1.5rem] font-semibold'>{t('selectedProjects')}</h2>
      </div>
    )
}