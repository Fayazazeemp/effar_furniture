import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const ITEMS = [
  {
    src: '/gallery_sofa.jpg',
    thumb: '/gallery_sofa.jpg',
    alt: 'L-shaped fabric sofa set in a Kerala living room — Effar Furniture Palakkad',
    label: 'Sofas & Lounges',
    desc: 'Sectional & L-shape sofa sets in fabric and leatherette',
    span: 'wide',
  },
  {
    src: '/gallery_bedroom.jpg',
    thumb: '/gallery_bedroom.jpg',
    alt: 'Solid teak king-size bedroom set with wardrobe — Effar Furniture Palakkad',
    label: 'Bedroom Sets',
    desc: 'Solid teak bed, wardrobe & dressing table collection',
    span: 'tall',
  },
  {
    src: '/gallery_dining.jpg',
    thumb: '/gallery_dining.jpg',
    alt: '8-seater glass-top dining table with cushioned chairs — Effar Furniture Palakkad',
    label: 'Dining Sets',
    desc: '8-seater glass-top dining with tufted chairs',
    span: 'normal',
  },
  {
    src: '/gallery_office.jpg',
    thumb: '/gallery_office.jpg',
    alt: 'Executive office desk and ergonomic chair in Palakkad showroom — Effar Furniture',
    label: 'Office Furniture',
    desc: 'Executive desk, leather chair & modular shelving unit',
    span: 'normal',
  },
  {
    src: '/gallery_wardrobe.jpg',
    thumb: '/gallery_wardrobe.jpg',
    alt: 'High-gloss sliding wardrobe with wooden handles — Effar Furniture Palakkad',
    label: 'Storage & Wardrobes',
    desc: 'High-gloss sliding wardrobe with walk-in configuration',
    span: 'normal',
  },
  {
    src: '/gallery_outdoor.jpg',
    thumb: '/gallery_outdoor.jpg',
    alt: 'Teak outdoor patio dining set in Kerala garden — Effar Furniture Palakkad',
    label: 'Outdoor & Garden',
    desc: 'Weather-proof teak dining set for Kerala gardens',
    span: 'wide',
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  const prev = useCallback(() => {
    setActive((i) => (i === 0 ? ITEMS.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i === ITEMS.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  const item = active !== null ? ITEMS[active] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-heading">
      <div className="section-label" aria-hidden="true">Our Showroom</div>
      <h2 className="section-title" id="gallery-heading">Product Gallery — Effar Furniture Palakkad</h2>
      <p className="section-desc">
        A glimpse of what you'll find at our BOC Road showroom. Click any photo to explore up close.
      </p>

      <div className="gallery-grid" role="list" aria-label="Furniture gallery">
        {ITEMS.map((it, idx) => (
          <button
            key={it.label}
            className={`gallery-item gallery-item--${it.span}`}
            onClick={() => setActive(idx)}
            aria-label={`View full image: ${it.label}`}
            role="listitem"
          >
            <img
              src={it.thumb}
              alt={it.alt}
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
            <div className="gallery-overlay">
              <div className="gallery-item-label">{it.label}</div>
              <div className="gallery-item-desc">{it.desc}</div>
              <div className="gallery-zoom-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {item && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${item.label}`}
          onClick={close}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={close} aria-label="Close image viewer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="lb-img-wrap">
              <img
                src={item.src}
                alt={item.alt}
                className="lb-img"
              />
            </div>

            <button className="lb-nav lb-next" onClick={next} aria-label="Next image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="lb-caption">
              <span className="lb-label">{item.label}</span>
              <span className="lb-desc">{item.desc}</span>
              <span className="lb-counter">{active + 1} / {ITEMS.length}</span>
            </div>
          </div>

          {/* Filmstrip */}
          <div className="lb-filmstrip" role="list" aria-label="Image thumbnails">
            {ITEMS.map((it, idx) => (
              <button
                key={it.label}
                className={`lb-thumb${idx === active ? ' lb-thumb--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActive(idx); }}
                aria-label={it.label}
                aria-current={idx === active}
                role="listitem"
              >
                <img src={it.thumb} alt="" aria-hidden="true" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
