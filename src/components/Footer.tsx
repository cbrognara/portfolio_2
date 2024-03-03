'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Socials from './Socials';

export function Footer() {
  const t = useTranslations('Index');

  return (
    <footer className="flex justify-between text-[14px] font-[500] items-end px-[15vw] py-[50px] bg-footer">
      <div className="flex flex-col">
        <div className="my-[24px] text-[1.2rem] font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-[#FFA5A3]">
          {t('footer.niceToSee')}
        </div>

        <Link
          target="_blank"
          href={`https://wa.me/5511946001066?text=${t('whatsappMessage')}`}
        >
          <p>WhatsApp (11) 94600-1066</p>
        </Link>

        <Link target="_blank" href="mailto:csbrognara@gmail.com">
          <p>csbrognara@gmail.com</p>
        </Link>

        <span>{t('footer.bestViewed')}</span>
        <span>{t('footer.madeWithLove')}</span>
      </div>

      <Socials />
    </footer>
  );
}
