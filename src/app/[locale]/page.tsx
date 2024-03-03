import { Presentation } from '@/components/Presentation';
import { SelectedProjects } from '@/components/SelectedProjects';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col px-[15vw]">
      <Presentation />
      <SelectedProjects />
    </div>
  );
}
