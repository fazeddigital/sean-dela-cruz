import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  children: ReactNode;
  selector?: string;
  stagger?: number;
  y?: number;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  selector = '[data-reveal]',
  stagger = 0.1,
  y = 40,
  delay = 0,
}: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = root.current?.querySelectorAll(selector);
      if (!items?.length) return;

      gsap.set(items, { opacity: 0, y });

      ScrollTrigger.batch(items, {
        start: 'top 80%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'expo.out',
            stagger,
            delay,
            overwrite: true,
          });
        },
      });
    },
    { scope: root }
  );

  return <div ref={root}>{children}</div>;
}
