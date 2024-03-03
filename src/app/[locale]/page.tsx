import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="flex px-[15vw] justify-center">
      <div className="w-full flex flex-row justify-between items-center my-[124px]">
        <div>
          <p className="text-[1.5rem] font-semibold max-w-[440px]">
            {t('helloI')}{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-[#FFA5A3]">
              {t('softwareDeveloper')}
            </span>{' '}
            {t('helloII')}
          </p>

          <div className="flex flex-col gap-1 my-[24px]">
            <p className="flex flex-row items-center gap-2">
              {t('softwareDeveloperat')}
              <Link href="" className="flex flex-row items-start gap-1">
                IBFC{' '}
                <Image
                  src="/icons/diagonal-arrow-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </Link>
            </p>
            <p className="flex flex-row items-center gap-2">
              {t('previouslyWorked')}
              <Link href="" className="flex flex-row items-start gap-1">
                Americas Tech{' '}
                <Image
                  src="/icons/diagonal-arrow-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </Link>
              <Link href="" className="flex flex-row items-start gap-1">
                IntoDesign{' '}
                <Image
                  src="/icons/diagonal-arrow-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </Link>
              {t('and')}
              <Link href="" className="flex flex-row items-start gap-1">
                Brokerse{' '}
                <Image
                  src="/icons/diagonal-arrow-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </Link>
            </p>
            <p className="flex flex-row items-center gap-2">
              {t('graduated')}
              <Link href="" className="flex flex-row items-start gap-1">
                Descomplica{' '}
                <Image
                  src="/icons/diagonal-arrow-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </Link>
              <Link href="" className="flex flex-row items-start gap-1">
                Cruzeiro do Sul{' '}
                <Image
                  src="/icons/diagonal-arrow-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </Link>
            </p>
          </div>
        </div>
        <Image
          src="/images/profile-photo.jpg"
          width={382}
          height={360}
          quality={100}
          alt={t('profilePhotoAlt')}
          className="max-md:w-[340px] max-md:h-[226x]"
        />
      </div>

      <div>
        <h2></h2>
      </div>
    </main>
  );
}
