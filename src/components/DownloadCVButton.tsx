
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { useTranslations, useLocale } from 'next-intl';

const DownloadCVButton: React.FC = () => {
  const t = useTranslations('Index')
  const locale = useLocale();

  return (
    <Link
      target="_blank"
      href={`/documents/curriculo-camilabrognara-frontend${locale === 'en' ? '-english' : ''}.pdf`}
      download="curriculo-camilabrognara-frontend"
      className='flex items-center justify-center py-[6px] px-[16px] bg-[#EC4392] rounded-2xl'
    >
      <Image
        src={`/icons/download.svg`}
        height={14.82}
        width={18}
        alt={t('downloadCVIconAlt')}
      />
      <span className='nowrap ml-[4px]'>
        {t('downloadCV')}
      </span>
    </Link>
  );
}

export default DownloadCVButton;