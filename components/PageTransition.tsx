'use client';
import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export default function PageTransition({
  children,
}: Readonly<{ children: ReactNode }>) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.inOut' }
      );
    }
  }, [pathname]);

  return <main ref={containerRef}>{children}</main>;
}
