import { useEffect, useMemo, useState, useCallback } from 'react';
import { archive, archiveCategories, type ArchiveCategory } from '../../lib/data';

export default function ArchiveGrid() {
  const [filter, setFilter] = useState<ArchiveCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'all' ? archive : archive.filter((p) => p.cat === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: archive.length };
    for (const p of archive) c[p.cat] = (c[p.cat] || 0) + 1;
    return c;
  }, []);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, next, prev]);

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <div className="archive-filters" role="tablist" aria-label="Filter archive">
        {archiveCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={filter === c.id}
            className={`archive-chip ${filter === c.id ? 'is-active' : ''}`}
            onClick={() => setFilter(c.id)}
          >
            <span>{c.label}</span>
            <span className="archive-chip-count">{counts[c.id] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className="archive-grid">
        {filtered.map((p, i) => (
          <button
            key={p.src}
            className="archive-tile"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open ${p.caption}`}
          >
            <img src={p.src} alt={p.caption} loading="lazy" />
            <span className="archive-caption">
              <span className="archive-caption-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="archive-caption-text">{p.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="archive-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={close}
        >
          <button
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <figure
            className="lb-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.caption} />
            <figcaption>
              <span className="lb-num">
                Plate {String((lightboxIndex ?? 0) + 1).padStart(2, '0')} /{' '}
                {String(filtered.length).padStart(2, '0')}
              </span>
              <span className="lb-caption">{active.caption}</span>
            </figcaption>
          </figure>
          <button
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            ›
          </button>
          <button className="lb-close" onClick={close} aria-label="Close">
            ×
          </button>
        </div>
      )}
    </>
  );
}
