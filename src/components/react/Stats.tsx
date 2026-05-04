import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { stats } from '../../lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = root.current?.querySelectorAll('.stat');
      if (!items) return;

      gsap.from(items, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          once: true,
        },
      });

      // Counter animation for numeric values
      const numberEls = root.current?.querySelectorAll<HTMLElement>(
        '.stat-num[data-count]'
      );
      numberEls?.forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.v) + suffix;
          },
        });
      });
    },
    { scope: root }
  );

  const parseStat = (value: string) => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return { num: null, suffix: value };
    return { num: Number(match[1]), suffix: match[2] };
  };

  return (
    <div ref={root} className="stats container">
      {stats.map((s, i) => {
        const { num, suffix } = parseStat(s.value);
        return (
          <div key={i} className="stat">
            <span className="stat-index">№ 0{i + 1}</span>
            <span
              className="stat-num display"
              {...(num !== null
                ? { 'data-count': num, 'data-suffix': suffix }
                : {})}
            >
              {num !== null ? '0' + suffix : s.value}
            </span>
            <span className="stat-label">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}
