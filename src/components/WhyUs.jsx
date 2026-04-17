import './WhyUs.css';

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Wholesale Pricing',
    body: "As a direct wholesaler we cut out the middleman, passing the savings to you. Best prices in Palakkad, guaranteed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Quality Assured',
    body: 'Every piece goes through stringent quality checks. We source only from trusted manufacturers known for durability and finish.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Home Delivery',
    body: 'We deliver and install furniture across Palakkad district and nearby areas. Call us for delivery details and schedules.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Bulk & Trade Orders',
    body: 'Special rates for hotels, offices, builders and interior designers. Contact us for custom bulk pricing and project quotes.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-heading">
      <div className="section-label" aria-hidden="true">Why Choose Effar</div>
      <h2 className="section-title" id="why-heading">Why Choose Effar Furniture in Palakkad?</h2>
      <p className="section-desc">
        We're not just a furniture store — we're partners in building the spaces you love, right here in Palakkad.
      </p>
      <div className="why-grid">
        {ITEMS.map(({ icon, title, body }) => (
          <div className="why-item" key={title}>
            <div className="icon">{icon}</div>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
