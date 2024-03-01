'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
 
import Link from 'next/link';
import Image from 'next/image';

export default function PT({ asLink = false}) {
  const t = useTranslations('Index');
  const pathname = usePathname()
  const path = pathname.includes('/en') ? pathname.split('/en')[1] : ''
  
  return (
    <>
      <Image
        src="/images/brazil-flag.png"
        height={19}
        width={32.57}
        alt="Brazil flag representing portuguese language"
      />
      {
        asLink ? (
          <Link href={`/pt/${path}`} locale="pt" className='w-full h-full'>
            <p className='ml-[8px] font-bold'>
                {t('locales.pt')}
            </p>
          </Link>
        ) : <p className='ml-[8px] font-bold'>{t('locales.pt')}</p>
      }
    </>
  )
}