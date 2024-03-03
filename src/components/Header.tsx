"use client"

import DownloadCVButton from "./DownloadCVButton";
import LocaleSwitcher from "./LocaleSwitcher";

import { useTranslations } from 'next-intl';


export function Header() {
    const t = useTranslations('Index')

    return (
        <header className="flex items-center w-full justify-between pt-[52px] px-[122px] pb-[18px]">
            <h1 className="text-[22px] font-semibold">Camila Brognara</h1>
            <ul className="flex items-center gap-10 cursor-pointer">
                <li>{t('header.work')}</li>
                <li>{t('header.play')}</li>
                <li>{t('header.about')}</li>
                <DownloadCVButton />
                <LocaleSwitcher />
            </ul>
        </header>
    )
}