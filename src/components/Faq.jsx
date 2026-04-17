import './Faq.css';

const QUESTIONS = [
  {
    q: 'Where is Effar Furniture located in Palakkad?',
    a: (
      <>
        Effar Furniture is located on BOC Road, Palakkad, Kerala, India. Call{' '}
        <a href="tel:+919497717371">+91 94977 17371</a> for directions or visit our showroom.
      </>
    ),
  },
  {
    q: 'Does Effar Furniture offer home delivery in Palakkad?',
    a: 'Yes! We deliver and install furniture across Palakkad district and nearby areas. Contact us for delivery schedules and charges.',
  },
  {
    q: 'Do you offer wholesale / bulk pricing?',
    a: 'Absolutely. We offer special wholesale rates for hotels, offices, builders and interior designers. WhatsApp us for custom bulk pricing and project quotes.',
  },
  {
    q: 'What types of furniture do you sell?',
    a: 'We carry sofas & lounges, bedroom sets, dining sets, office furniture, wardrobes & storage, and outdoor/garden furniture — all at wholesale prices.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="section-label" aria-hidden="true">FAQ</div>
      <h2 className="section-title" id="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {QUESTIONS.map(({ q, a }) => (
          <details className="faq-item" key={q}>
            <summary className="faq-q">{q}</summary>
            <p className="faq-a">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
