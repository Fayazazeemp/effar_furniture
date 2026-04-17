import './Hero.css';

const WA_LINK =
  'https://wa.me/919497717371?text=Hello%20Effar%20Furniture!%20I%27d%20like%20to%20enquire%20about%20your%20furniture%20products.';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero – Effar Furniture Palakkad">
      <div className="hero-left">
        <div className="hero-badge">Palakkad's Premier Furniture Wholesaler</div>
        <h1 className="hero-h1">
          Crafting Spaces<br />Worth <em>Living In</em>
        </h1>
        <p className="hero-desc">
          Premium furniture for homes, offices, and commercial spaces — sourced from the finest
          materials, built to last generations. Wholesale prices, retail quality.
        </p>
        <div className="hero-actions">
          <a href={WA_LINK} className="btn-primary btn-whatsapp" target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp Effar Furniture for a furniture quote">
            <WhatsAppIcon /> WhatsApp Us
          </a>
          <a href="#catalogue" className="btn-secondary" aria-label="Browse Effar Furniture product catalogue">
            View Catalogue
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-wood-pattern" />
        <div className="big-letter" aria-hidden="true">EFFAR</div>
        <div className="hero-visual">
          <p className="hero-tagline">"Where every piece<br />tells a story"</p>
          <div className="hero-icons">
            {[
              {
                label: 'Living',
                svg: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="8" y="28" width="48" height="18" rx="3" />
                    <rect x="4" y="22" width="10" height="24" rx="3" />
                    <rect x="50" y="22" width="10" height="24" rx="3" />
                    <line x1="14" y1="46" x2="14" y2="54" />
                    <line x1="50" y1="46" x2="50" y2="54" />
                  </svg>
                ),
              },
              {
                label: 'Bedroom',
                svg: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="32" width="52" height="16" rx="2" />
                    <rect x="6" y="20" width="24" height="14" rx="2" />
                    <line x1="6" y1="48" x2="6" y2="56" />
                    <line x1="58" y1="48" x2="58" y2="56" />
                  </svg>
                ),
              },
              {
                label: 'Office',
                svg: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="14" y="14" width="36" height="24" rx="3" />
                    <rect x="10" y="38" width="44" height="8" rx="2" />
                    <line x1="16" y1="46" x2="16" y2="58" />
                    <line x1="48" y1="46" x2="48" y2="58" />
                    <line x1="10" y1="22" x2="4" y2="52" />
                    <line x1="54" y1="22" x2="60" y2="52" />
                  </svg>
                ),
              },
            ].map(({ label, svg }) => (
              <div className="icon-item" key={label}>
                {svg}
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
