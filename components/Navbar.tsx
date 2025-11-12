'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { usePathname } from 'next/navigation';
import PrimaryButton from './PrimaryButton';
import profileDefault from '@/assets/images/profile.png';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { ClientSafeProvider } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);
  const path = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

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
        <div className="flex gap-4">
          {/* Menu before sign in */}
          {!session && (
            <div className="justify-self-end">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => signIn(provider.id)}
                    className={`cursor-pointer  px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-heading font-bold text-xl rounded-xl`}
                  >
                    Sign in
                  </button>
                ))}
            </div>
          )}
          {/* Menu after signed in */}
          {session && (
            <div className="justify-self-end flex gap-4">
              <PrimaryButton
                text="Share recipe"
                path="/recipes/add"
                classes="px-4 py-3"
                hiddenOnMobile
              />
              <button
                type="button"
                className="cursor-pointer relative flex justify-center items-center text-sm shrink-0"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-10 w-10 rounded-full"
                  src={profileImage || profileDefault}
                  alt=""
                  width={40}
                  height={40}
                />
              </button>
              {/* <!-- Profile dropdown --> */}
              {isProfileMenuOpen && (
                <div
                  id="user-menu"
                  className="absolute top-full right-0 mt-2 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-neutral-900"
                    role="menuitem"
                    id="user-menu-item-0"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                    }}
                  >
                    Your recipes
                  </Link>
                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      signOut({ callbackUrl: '/' });
                    }}
                    className="cursor-pointer block px-4 py-2 text-sm text-neutral-900"
                    role="menuitem"
                    id="user-menu-item-2"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
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
        </div>

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
              href="/recipes/add"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`cursor-pointer px-2 py-3 block w-full text-center bg-neutral-900 hover:bg-neutral-800 text-white font-heading font-bold text-xl rounded-xl `}
            >
              Share recipe
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
