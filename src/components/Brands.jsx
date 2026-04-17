import './Brands.css';

const BRANDS = [
  { name: 'Century Ply', category: 'Plywood & Boards' },
  { name: 'Greenlam', category: 'Laminates' },
  { name: 'Sleepwell', category: 'Mattresses' },
  { name: 'Durian', category: 'Furniture Grade MDF' },
  { name: 'Merino', category: 'Surface Finishes' },
  { name: 'Hettich', category: 'Hardware & Fittings' },
  { name: 'Ebco', category: 'Sliding Systems' },
  { name: 'Godrej Interio', category: 'Steel & Office' },
];

const MATERIALS = [
  {
    name: 'Solid Teak & Rosewood',
    desc: 'Premium hardwoods sourced responsibly for durability and rich grain finish.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.5A1 1 0 005 21C7 21 10 19 12 18c1 0 2 1 4 1 3 0 5-2 5-5 0-4-4-7-4-7z" />
        <path d="M6 21c0-4.97 5-9 5-9" />
      </svg>
    ),
  },
  {
    name: 'Engineered Wood (MDF/HDF)',
    desc: 'Dimensionally stable, moisture-resistant boards used for modular furniture.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="3" rx="1" />
        <rect x="2" y="12" width="20" height="3" rx="1" />
        <rect x="2" y="17" width="20" height="3" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Stainless Steel Hardware',
    desc: "Grade-304 fittings and hinges for corrosion resistance in Kerala's humid climate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'High-Gloss & Matte Laminates',
    desc: 'Premium scratch-resistant surface finishes available in 200+ colours and textures.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Brands() {
  return (
    <section id="brands" aria-labelledby="brands-heading">
      <div className="section-label" aria-hidden="true">Quality Assurance</div>
      <h2 className="section-title" id="brands-heading">Trusted Brands &amp; Premium Materials</h2>
      <p className="section-desc">
        We source only from reputed manufacturers and use proven materials — so every piece of furniture you buy from Effar is built to last Kerala's climate and daily use.
      </p>

      <div className="brands-scroll" aria-label="Brands we use" role="list">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <div className="brand-pill" key={`${b.name}-${i}`} role="listitem">
            <span className="brand-name">{b.name}</span>
            <span className="brand-cat">{b.category}</span>
          </div>
        ))}
      </div>

      <div className="materials-grid" role="list" aria-label="Materials we use">
        {MATERIALS.map((m) => (
          <div className="material-card" key={m.name} role="listitem">
            <div className="material-icon">{m.icon}</div>
            <h3 className="material-name">{m.name}</h3>
            <p className="material-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
