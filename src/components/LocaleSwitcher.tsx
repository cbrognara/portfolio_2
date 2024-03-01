'use client'
import { useState } from 'react'
 
import { useTranslations } from 'next-intl';
 
import Image from 'next/image';
import classnames from 'classnames';
import { useLocale } from 'next-intl';

import LocalePT from './Locales/PT'
import LocaleEN from './Locales/EN'

export default function LocaleSwitcher() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const t = useTranslations('Index');
  const locale = useLocale();


  function handleDropdown() {
    setIsOpenDropdown(!isOpenDropdown)
  }

  return (
    <div className='relative cursor-pointer'>
      <div className='flex justify-center items-center border-1 border-color-[#EC4392] py-[4px] px-[8px]' onClick={handleDropdown}>
        {locale === 'en' ? <LocaleEN /> : <LocalePT />}
        <Image
          src="/icons/dropdown.svg"
          height={4.97}
          width={10}
          alt={t('localesDropdownAltImage')}
          className='mt-[4px] ml-[7.5px]'
        />
      </div>

      <ul className={classnames('absolute w-full min-w-min p-[8px] rounded-md', isOpenDropdown ? '' : 'hidden')}>
        <li className='flex items-center'>
          {locale === 'en' ? <LocalePT asLink /> : <LocaleEN asLink />}
        </li>
      </ul>
    </div>
  );
}