"use client"

import DownloadCVButton from "./DownloadCVButton";
import LocaleSwitcher from "./LocaleSwitcher";

export function Header() {

    return (
        <header className="flex items-center w-full justify-between pt-[52px] px-[152px] pb-[18px]">
            <div className="text-[22px] font-semibold">Camila Brognara</div>
            <ul className="flex items-center gap-10">
                <li>Work</li>
                <li>Play</li>
                <li>About</li>
                <li>Resume</li>
                {/* <DownloadCVButton /> */}
                {/* <LocaleSwitcher /> */}
            </ul>
        </header>
    )
}