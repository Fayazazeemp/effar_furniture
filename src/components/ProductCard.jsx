import './Catalogue.css';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// Unique SVG icons per category
const ICONS = {
  sofa: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* sofa body */}
      <rect x="8" y="30" width="48" height="18" rx="4" />
      {/* backrest */}
      <rect x="10" y="18" width="44" height="14" rx="4" />
      {/* left armrest */}
      <rect x="6" y="26" width="8" height="20" rx="3" />
      {/* right armrest */}
      <rect x="50" y="26" width="8" height="20" rx="3" />
      {/* legs */}
      <line x1="14" y1="48" x2="14" y2="54" />
      <line x1="50" y1="48" x2="50" y2="54" />
    </svg>
  ),
  bed: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* bed frame */}
      <rect x="8" y="36" width="48" height="16" rx="3" />
      {/* headboard */}
      <rect x="8" y="20" width="10" height="18" rx="2" />
      {/* mattress */}
      <rect x="18" y="26" width="38" height="12" rx="2" />
      {/* pillow */}
      <rect x="22" y="28" width="10" height="6" rx="2" />
      {/* legs */}
      <line x1="12" y1="52" x2="12" y2="58" />
      <line x1="52" y1="52" x2="52" y2="58" />
    </svg>
  ),
  dining: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* table top */}
      <rect x="8" y="26" width="48" height="6" rx="2" />
      {/* table legs */}
      <line x1="14" y1="32" x2="14" y2="52" />
      <line x1="50" y1="32" x2="50" y2="52" />
      {/* left chair */}
      <rect x="4" y="12" width="10" height="14" rx="2" />
      <line x1="6" y1="26" x2="6" y2="34" />
      <line x1="12" y1="26" x2="12" y2="34" />
      {/* right chair */}
      <rect x="50" y="12" width="10" height="14" rx="2" />
      <line x1="52" y1="26" x2="52" y2="34" />
      <line x1="58" y1="26" x2="58" y2="34" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* desk top */}
      <rect x="6" y="26" width="52" height="5" rx="2" />
      {/* desk legs */}
      <line x1="10" y1="31" x2="10" y2="52" />
      <line x1="54" y1="31" x2="54" y2="52" />
      {/* monitor */}
      <rect x="22" y="10" width="20" height="14" rx="2" />
      <line x1="32" y1="24" x2="32" y2="26" />
      <line x1="26" y1="26" x2="38" y2="26" />
      {/* chair back */}
      <rect x="26" y="32" width="12" height="10" rx="2" />
      {/* chair seat */}
      <rect x="24" y="42" width="16" height="5" rx="2" />
      {/* chair legs */}
      <line x1="27" y1="47" x2="25" y2="54" />
      <line x1="37" y1="47" x2="39" y2="54" />
    </svg>
  ),
  wardrobe: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* outer frame */}
      <rect x="10" y="8" width="44" height="50" rx="2" />
      {/* centre divider */}
      <line x1="32" y1="8" x2="32" y2="58" />
      {/* left handle */}
      <circle cx="28" cy="34" r="2" />
      {/* right handle */}
      <circle cx="36" cy="34" r="2" />
      {/* shelf line */}
      <line x1="10" y1="22" x2="32" y2="22" />
      {/* hanging bar */}
      <line x1="34" y1="18" x2="52" y2="18" />
      {/* hanger */}
      <path d="M40 18 Q43 14 46 18" />
    </svg>
  ),
  outdoor: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {/* chair seat */}
      <rect x="14" y="30" width="22" height="14" rx="3" />
      {/* backrest */}
      <rect x="14" y="14" width="22" height="18" rx="3" />
      {/* left leg */}
      <line x1="16" y1="44" x2="12" y2="56" />
      {/* right leg */}
      <line x1="34" y1="44" x2="38" y2="56" />
      {/* small side table */}
      <rect x="40" y="28" width="14" height="4" rx="1" />
      <line x1="44" y1="32" x2="44" y2="48" />
      <line x1="50" y1="32" x2="50" y2="48" />
      {/* potted plant */}
      <ellipse cx="47" cy="26" rx="5" ry="4" />
      <line x1="47" y1="22" x2="47" y2="16" />
      <path d="M47 16 Q50 12 52 14" />
      <path d="M47 18 Q44 14 42 16" />
    </svg>
  ),
};

export default function ProductCard({ name, description, tags = [], waText, icon }) {
  const href = `https://wa.me/919497717371?text=${encodeURIComponent(waText)}`;
  return (
    <article className="product-card">
      <div className="product-thumb">
        <div className="product-thumb-pattern" />
        {ICONS[icon] ?? ICONS.sofa}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div>{tags.map((t) => <span className="product-tag" key={t}>{t}</span>)}</div>
        <a href={href} className="product-enquire" target="_blank" rel="noopener noreferrer">
          Enquire Now <ArrowIcon />
        </a>
      </div>
    </article>
  );
}
