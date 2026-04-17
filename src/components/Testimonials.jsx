import './Testimonials.css';

const REVIEWS = [
  {
    name: 'Rahul Menon',
    location: 'Palakkad',
    rating: 5,
    date: '2024-11-10',
    text: 'Got our entire bedroom set from Effar — the quality is outstanding and the price was far better than anything else we found in Palakkad. Delivery and installation were smooth.',
  },
  {
    name: 'Priya Krishnan',
    location: 'Thrissur',
    rating: 5,
    date: '2024-10-22',
    text: 'Ordered a custom L-shaped sofa and a dining set for our new home. Everything arrived on time and looks exactly like the showroom sample. Highly recommend!',
  },
  {
    name: 'Arun Nair',
    location: 'Coimbatore',
    rating: 5,
    date: '2024-09-15',
    text: "We furnished our office with Effar's modular systems. Great bulk pricing for trade orders and the team was very professional. Will be ordering again for our next project.",
  },
  {
    name: 'Lakshmi Suresh',
    location: 'Palakkad',
    rating: 5,
    date: '2024-08-30',
    text: "The wardrobe quality is superb — solid construction and the laminates are gorgeous. Staff were very helpful in guiding us through options. Couldn't be happier.",
  },
];

const Stars = ({ count }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const LD_REVIEWS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Effar Furniture',
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    datePublished: r.date,
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
};

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_REVIEWS) }} />
      <div className="section-label" aria-hidden="true">Customer Stories</div>
      <h2 className="section-title" id="testimonials-heading">What Our Customers Say</h2>
      <p className="section-desc">
        Hundreds of happy homes and offices across Palakkad and Kerala. Here's what a few of them had to share.
      </p>
      <div className="reviews-grid">
        {REVIEWS.map((r) => (
          <article className="review-card" key={r.name} itemScope itemType="https://schema.org/Review">
            <Stars count={r.rating} />
            <blockquote className="review-text" itemProp="reviewBody">"{r.text}"</blockquote>
            <footer className="review-author">
              <div className="review-avatar" aria-hidden="true">{r.name[0]}</div>
              <div>
                <span className="review-name" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{r.name}</span>
                </span>
                <span className="review-loc">{r.location}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
