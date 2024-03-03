'use client'

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
      className='flex items-center justify-center'
    >
      <span className='nowrap ml-[4px] pr-1'>
        {t('header.resume')}
      </span>
      <Image
        src={`/icons/download.svg`}
        height={14.82}
        width={18}
        alt={t('downloadCVIconAlt')}
      />
    </Link>
  );
}

export default DownloadCVButton;