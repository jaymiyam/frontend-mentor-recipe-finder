'use client';
import { ReactNode } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FadeInTransition({
  children,
}: Readonly<{ children: ReactNode }>) {
  const fadeContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        fadeContainerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: fadeContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: fadeContainerRef }
  );

  return <div ref={fadeContainerRef}>{children}</div>;
}
