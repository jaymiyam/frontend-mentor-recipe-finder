'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { usePathname } from 'next/navigation';
import PrimaryButton from './PrimaryButton';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <header className=" border-b border-neutral-300 px-8 lg:px-15 py-5">
      <div className="relative mx-auto flex justify-between items-center lg:grid lg:grid-cols-3  lg:justify-items-center">
        <Link href="/" className="cursor-pointer justify-self-start">
          <Image
            src={logo}
            width={260}
            height={40}
            alt="Health Recipe Finder"
          />
        </Link>
        {/* Desktop Nav and Button */}
        <nav className="hidden lg:block space-x-10">
          <Link
            href="/"
            className={`cursor-pointer font-heading font-semibold text-lg hover:border-b-3 hover:border-orange-500 ${
              path === '/' ? 'border-b-3 border-orange-500' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`cursor-pointer font-heading font-semibold text-lg hover:border-b-3 hover:border-orange-500 ${
              path === '/about' ? 'border-b-3 border-orange-500' : ''
            } `}
          >
            About
          </Link>
          <Link
            href="/recipes"
            className={`cursor-pointer font-heading font-semibold text-lg hover:border-b-3 hover:border-orange-500 ${
              path === '/recipes' ? 'border-b-3 border-orange-500' : ''
            }`}
          >
            Recipes
          </Link>
        </nav>
        <PrimaryButton
          text="Browse Recipes"
          classes="justify-self-end px-4 py-3"
          hiddenOnMobile
          path="/recipes"
        />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="block lg:hidden relative cursor-pointer bg-neutral-200 p-3 rounded-sm"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              fill="#163A34"
              fillRule="evenodd"
              d="M17 16H1a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2ZM17 2H1a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2ZM17 9H1a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Mobile Nav and Button */}
        {isMobileMenuOpen && (
          <div className="absolute z-99 w-full top-[150%] left-0 p-2 bg-white border border-neutral-300 rounded-lg shadow-md">
            <nav className=" flex flex-col">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer px-2 py-3 font-heading font-semibold text-lg`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer px-2 py-3 font-heading font-semibold text-lg `}
              >
                About
              </Link>
              <Link
                href="/recipes"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer px-2 py-3 font-heading font-semibold text-lg `}
              >
                Recipes
              </Link>
            </nav>
            <Link
              href="/recipes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-center text-white font-heading font-bold text-xl rounded-xl"
            >
              Browser recipes
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
