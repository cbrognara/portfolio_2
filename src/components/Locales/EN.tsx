
import { useTranslations } from 'next-intl';
 
import Link from 'next/link';
import Image from 'next/image';
import styles from './EN.module.css';
import { usePathname } from 'next/navigation';


export default function EN({ asLink = false }) {
  const t = useTranslations('Index');
  const pathname = usePathname()
  const path = pathname.includes('/pt') ? pathname.split('/pt')[1] : ''
  
  return (
    <>
      <Image
        src="/images/usa-flag.png"
        height={19}
        width={32.57}
        alt="United States of America flag representing english language"
      />
      
      {
        asLink ? (
          <Link href={`/en/${path}`} locale="en" className='w-full h-full'>
            <p className='ml-[8px] font-bold'>
                {t('locales.en')}
            </p>
          </Link>
        ) : <p className='ml-[8px] font-bold'>{t('locales.en')}</p>
      }
      
    </>
  )
}