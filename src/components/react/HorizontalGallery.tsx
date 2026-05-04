import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { gallery } from '../../lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HorizontalGallery() {
  const wrapper = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trackEl = track.current;
      const wrapEl = wrapper.current;
      if (!trackEl || !wrapEl) return;

      const getDistance = () =>
        Math.max(0, trackEl.scrollWidth - window.innerWidth);

      gsap.to(trackEl, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapEl,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Subtle parallax on each plate
      const plates = trackEl.querySelectorAll('.plate-img');
      plates.forEach((plate) => {
        gsap.to(plate, {
          xPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: plate,
            containerAnimation: gsap.getTweensOf(trackEl)[0],
            start: 'left right',
            end: 'right left',
            scrub: true,
          },
        });
      });
    },
    { scope: wrapper }
  );

  return (
    <div ref={wrapper} className="gallery-wrap">
      <div className="gallery-overlay-top">
        <span className="eyebrow">
          <span className="gold-rule" />Chapter III · Plates
        </span>
        <span className="gallery-hint">Scroll →</span>
      </div>

      <div ref={track} className="gallery-track">
        <div className="plate plate-intro" aria-hidden>
          <div className="intro-card">
            <h2 className="display gallery-title">
              A <em className="gold-italic">decade</em><br/>of nights,<br/>frame by frame.
            </h2>
            <span className="intro-meta">Vol. IV · MMXXVI</span>
          </div>
        </div>
        {gallery.map((g, i) => (
          <figure key={i} className="plate">
            <div className="plate-frame">
              <img src={g.src} alt={g.caption} className="plate-img" loading="lazy" />
            </div>
            <figcaption>
              <span className="plate-num">№ {String(i + 1).padStart(2, '0')}</span>
              <span className="plate-caption">{g.caption}</span>
            </figcaption>
          </figure>
        ))}
        <div className="plate plate-end" aria-hidden>
          <div className="end-card">
            <span className="eyebrow">— end of plates —</span>
            <p>The rest is best witnessed live.</p>
            <a href="#contact" className="end-cta">Reserve a Date</a>
          </div>
        </div>
      </div>
    </div>
  );
}
