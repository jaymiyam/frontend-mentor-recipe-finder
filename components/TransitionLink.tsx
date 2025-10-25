'use client';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { MouseEvent } from 'react';

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // stop instant navigation

    const container = document.querySelector('main');
    if (!container) return router.push(href);

    // Fade out current page
    gsap.to(container, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push(href); // navigate after fade-out completes
      },
    });
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
