'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="border-b border-neutral-300 px-15 py-5">
      <div className="mx-auto grid grid-cols-3 items-center justify-items-center">
        <Link href="/" className="justify-self-start">
          <Image
            src={logo}
            width={260}
            height={40}
            alt="Health Recipe Finder"
          />
        </Link>
        <nav className="space-x-10">
          <Link
            href="/"
            className={`font-heading font-semibold text-lg  ${
              path === '/' ? 'border-b-3 border-orange-500' : ''
            }`}
          >
            Home
          </Link>
          <Link href="/about" className={`font-heading font-semibold text-lg `}>
            About
          </Link>
          <Link
            href="/recipes"
            className={`font-heading font-semibold text-lg `}
          >
            Recipes
          </Link>
        </nav>
        <button className="px-4 py-3 bg-neutral-900 text-white font-heading font-bold text-xl rounded-xl justify-self-end">
          Browser recipes
        </button>
      </div>
    </header>
  );
}
