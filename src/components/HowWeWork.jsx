import './HowWeWork.css';

const STEPS = [
  {
    number: '01',
    title: 'Visit Our Showroom',
    body: 'Walk into our BOC Road showroom in Palakkad and explore hundreds of furniture pieces on display. Our team will guide you through styles, materials, and finishes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Choose & Customise',
    body: "Pick from our catalogue or request a custom size, fabric, or finish. We'll give you an instant quote — no hidden charges, no haggling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Confirm & Pay',
    body: 'Confirm your order with a small advance. We accept cash, UPI, and bank transfers. Zero-interest EMI options available through select partners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Delivery & Installation',
    body: 'We deliver to your doorstep across all Kerala and Tamil Nadu. Our trained team assembles everything in place — you just relax.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="section-label" aria-hidden="true">Our Process</div>
      <h2 className="section-title" id="process-heading">How It Works — From Showroom to Your Home</h2>
      <p className="section-desc">
        Getting your dream furniture is simple. Here's what happens from the moment you walk in to the day we install it.
      </p>
      <ol className="process-steps" role="list">
        {STEPS.map((step, idx) => (
          <li className="process-step" key={step.number}>
            <div className="step-number" aria-hidden="true">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-body">{step.body}</p>
            {idx < STEPS.length - 1 && <div className="step-connector" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </section>
  );
}
