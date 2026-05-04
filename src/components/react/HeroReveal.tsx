import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function HeroReveal() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.set('.hero-line-inner', { yPercent: 110 })
        .set('.hero-fade', { opacity: 0, y: 16 })
        .set('.hero-portrait', { scale: 1.15, opacity: 0 })
        .set('.hero-rule', { scaleX: 0, transformOrigin: 'left center' })
        .set('.hero-meta-row', { opacity: 0, x: -10 });

      tl.to('.hero-eyebrow .hero-line-inner', {
        yPercent: 0,
        duration: 1.2,
        delay: 0.2,
      })
        .to(
          '.hero-rule',
          { scaleX: 1, duration: 1.4, ease: 'power3.out' },
          '<0.1'
        )
        .to(
          '.hero-headline .hero-line-inner',
          { yPercent: 0, duration: 1.4, stagger: 0.08 },
          '<0.05'
        )
        .to(
          '.hero-portrait',
          { scale: 1, opacity: 1, duration: 1.8, ease: 'power3.out' },
          '<0.2'
        )
        .to(
          '.hero-meta-row',
          { opacity: 1, x: 0, duration: 0.9, stagger: 0.08 },
          '<0.4'
        )
        .to(
          '.hero-fade',
          { opacity: 1, y: 0, duration: 1, stagger: 0.06 },
          '<0.1'
        );

      // Subtle floating motion on the portrait
      gsap.to('.hero-portrait', {
        y: -16,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Marquee for the location strip
      const strip = root.current?.querySelector('.hero-strip-track');
      if (strip) {
        gsap.to(strip, {
          xPercent: -50,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }
    },
    { scope: root }
  );

  return <div ref={root} className="hero-anim-root" />;
}
