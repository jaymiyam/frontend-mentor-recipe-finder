import '@/app/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Healthy Recipe Finder',
  description: 'Discover quick, whole food recipes that you can cook tonight.',
};

export const nunito = localFont({
  src: [
    {
      path: '../public/fonts/Nunito-VariableFont.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nunito-Italic-VariableFont.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-nunito',
});

export const nunitoSans = localFont({
  src: [
    {
      path: '../public/fonts/NunitoSans-VariableFont.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/NunitoSans-Italic-VariableFont.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-nunito-sans',
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="font-body bg-neutral-100 text-neutral-800 text-xl">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
