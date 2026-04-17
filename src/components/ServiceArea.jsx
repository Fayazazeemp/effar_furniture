import './ServiceArea.css';

const LD_SERVICE_AREA = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'Effar Furniture',
  areaServed: [
    'Palakkad', 'Thrissur', 'Malappuram', 'Coimbatore', 'Pollachi',
    'Ottapalam', 'Mannarkkad', 'Shornur', 'Pattambi', 'Alathur',
  ].map((name) => ({ '@type': 'City', name })),
};

const AREAS = [
  { city: 'Palakkad', note: 'Main showroom & same-day options' },
  { city: 'Thrissur', note: 'Regular delivery routes' },
  { city: 'Malappuram', note: 'Scheduled delivery' },
  { city: 'Coimbatore', note: 'Cross-border delivery' },
  { city: 'Pollachi', note: 'Scheduled delivery' },
  { city: 'Ottapalam', note: 'Regular delivery routes' },
  { city: 'Mannarkkad', note: 'Regular delivery routes' },
  { city: 'Shornur', note: 'Regular delivery routes' },
  { city: 'Pattambi', note: 'Regular delivery routes' },
  { city: 'Alathur', note: 'Regular delivery routes' },
];

export default function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="area-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_SERVICE_AREA) }} />
      <div className="area-inner">
        <div className="area-text">
          <div className="section-label" aria-hidden="true">We Deliver To</div>
          <h2 className="section-title" id="area-heading">Furniture Delivery Across Palakkad & Beyond</h2>
          <p className="section-desc">
            Based on BOC Road, Palakkad — we deliver and install furniture across the district and to neighboring towns in Kerala and Tamil Nadu.
          </p>
          <a
            href="https://wa.me/919497717371?text=Hi!%20I'd%20like%20to%20check%20delivery%20to%20my%20area."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="check-delivery-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Check Delivery to Your Area
          </a>
        </div>

        <div className="area-map-col">
          <div className="area-chips" role="list" aria-label="Cities we deliver to">
            {AREAS.map((a) => (
              <div className="area-chip" key={a.city} role="listitem" itemScope itemType="https://schema.org/City">
                <span className="area-dot" aria-hidden="true" />
                <div>
                  <strong itemProp="name">{a.city}</strong>
                  <span className="area-note">{a.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps embed */}
          <div className="map-wrapper">
            <iframe
              id="google-map-effar"
              title="Effar Furniture location on BOC Road, Palakkad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.461282241096!2d76.64733587518337!3d10.775938859202405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86df67102998d%3A0x3a39abfb3bfaeb4f!2sEffar%20Trading!5e0!3m2!1sen!2sin!4v1776452017499!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
