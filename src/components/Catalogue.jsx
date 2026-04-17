import ProductCard from './ProductCard';
import './Catalogue.css';

const PRODUCTS = [
  {
    name: 'Sofas & Lounges',
    icon: 'sofa',
    description: 'Sectionals, L-shapes, recliners and sofa sets in fabric and leatherette. Customizable in size and colour.',
    tags: ['Fabric', 'Leatherette', 'Custom'],
    waText: "Hi! I'm interested in sofas and lounges.",
  },
  {
    name: 'Bedroom Sets',
    icon: 'bed',
    description: 'Complete bedroom collections including beds, wardrobes, dressing tables and bedside units in solid wood and engineered wood.',
    tags: ['Solid Wood', 'MDF', 'King/Queen'],
    waText: "Hi! I'm interested in bedroom furniture.",
  },
  {
    name: 'Dining Sets',
    icon: 'dining',
    description: '4, 6 and 8-seater dining tables with matching chairs. Available in glass top, solid wood, and marble finish.',
    tags: ['Glass Top', 'Solid Wood', 'Marble'],
    waText: "Hi! I'm interested in dining furniture.",
  },
  {
    name: 'Office Furniture',
    icon: 'office',
    description: 'Executive desks, ergonomic chairs, conference tables, file cabinets and modular office systems for all work environments.',
    tags: ['Ergonomic', 'Executive', 'Modular'],
    waText: "Hi! I'm interested in office furniture.",
  },
  {
    name: 'Storage & Wardrobes',
    icon: 'wardrobe',
    description: 'Sliding and hinged wardrobes, bookshelves, TV units, and custom storage solutions for every room and size.',
    tags: ['Sliding', 'Custom Size', 'Laminates'],
    waText: "Hi! I'm interested in wardrobes and storage.",
  },
  {
    name: 'Outdoor & Garden',
    icon: 'outdoor',
    description: 'Weather-resistant outdoor seating, garden tables, balcony chairs, and patio furniture sets built for the Kerala climate.',
    tags: ['Weather-Proof', 'Teak', 'Rattan'],
    waText: "Hi! I'm interested in outdoor furniture.",
  },
];

export default function Catalogue() {
  return (
    <section id="catalogue" aria-labelledby="catalogue-heading">
      <div className="section-label" aria-hidden="true">Our Collection</div>
      <h2 className="section-title" id="catalogue-heading">Furniture Catalogue – Palakkad</h2>
      <p className="section-desc">
        From cozy living rooms to productive offices — we stock a wide range of premium furniture
        for every space and budget in Palakkad and across Kerala.
      </p>
      <div className="catalogue-grid">
        {PRODUCTS.map((p) => <ProductCard key={p.name} {...p} />)}
      </div>
    </section>
  );
}
