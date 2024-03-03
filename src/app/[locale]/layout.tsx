import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { ReactNode } from 'react';

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Camila | Portfólio',
  description: 'Com 3 anos de experiência em desenvolvimento Front End e pós-graduação em Análise e Desenvolvimento de Sistemas, com foco em ReactJS, NextJS e React Native.',
  openGraph: {
    title: 'Camila | Portfólio',
    images: '/images/ogimage.png',
    description: 'Com 3 anos de experiência em desenvolvimento Front End e pós-graduação em Análise e Desenvolvimento de Sistemas, com foco em ReactJS, NextJS e React Native.',
    type: 'website',
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={poppins.className}>
      {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <Header />
        {children}
        <Footer/>
        {/* </NextIntlClientProvider> */}
        </body>
    </html>
  );
}
