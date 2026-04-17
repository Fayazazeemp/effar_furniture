import { Helmet } from 'react-helmet-async';

const LD_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'Effar Furniture',
  image: 'https://www.effarfurniture.com/og-image.jpg',
  description:
    "Palakkad's premier furniture wholesaler offering sofas, bedroom sets, dining tables, office furniture and outdoor furniture at wholesale prices.",
  url: 'https://www.effarfurniture.com/',
  telephone: ['+919497717371', '+918089671959'],
  email: 'amtrading.m@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'BOC Road',
    addressLocality: 'Palakkad',
    addressRegion: 'Kerala',
    postalCode: '678001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 10.775, longitude: 76.65 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 10.775, longitude: 76.65 },
    geoRadius: '50000',
  },
  sameAs: ['https://www.facebook.com', 'https://www.instagram.com'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Furniture Catalogue',
    itemListElement: [
      'Sofas & Lounges', 'Bedroom Sets', 'Dining Sets',
      'Office Furniture', 'Storage & Wardrobes', 'Outdoor & Garden Furniture',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name } })),
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '120' },
};

const LD_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Effar Furniture located in Palakkad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Effar Furniture is located on BOC Road, Palakkad, Kerala, India. Call +91 94977 17371 for directions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Effar Furniture offer home delivery in Palakkad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we deliver and install furniture across Palakkad district and nearby areas. Contact us for delivery details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Effar Furniture have wholesale pricing for bulk orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer special wholesale rates for hotels, offices, builders and interior designers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of furniture does Effar Furniture sell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We sell sofas, bedroom sets, dining tables, office furniture, wardrobes, storage units, and outdoor garden furniture — all at wholesale prices.',
      },
    },
  ],
};

export default function Seo() {
  return (
    <Helmet>
      <title>Effar Furniture | Premium Furniture Store & Wholesaler in Palakkad, Kerala</title>
      <meta
        name="description"
        content="Effar Furniture — Palakkad's premier furniture wholesaler on BOC Road. Shop sofas, bedroom sets, dining tables, office furniture & more at wholesale prices. Visit our showroom or WhatsApp +91 94977 17371."
      />
      <meta
        name="keywords"
        content="furniture shop Palakkad, furniture wholesaler Palakkad, sofa Palakkad, bedroom furniture Palakkad, dining table Palakkad, office furniture Palakkad, furniture BOC Road Palakkad, Effar Furniture, furniture Kerala, wooden furniture Palakkad"
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.effarfurniture.com/" />

      {/* Geo */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Palakkad, Kerala, India" />
      <meta name="geo.position" content="10.7750;76.6500" />
      <meta name="ICBM" content="10.7750, 76.6500" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Effar Furniture" />
      <meta property="og:title" content="Effar Furniture | Premium Furniture Wholesaler in Palakkad, Kerala" />
      <meta property="og:description" content="Wholesale-priced sofas, bedroom sets, dining tables, office & outdoor furniture. Visit BOC Road showroom or WhatsApp for a quick quote!" />
      <meta property="og:url" content="https://www.effarfurniture.com/" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Effar Furniture | Premium Furniture Wholesaler in Palakkad" />
      <meta name="twitter:description" content="Wholesale-priced sofas, bedroom sets, dining tables, office & outdoor furniture in Palakkad, Kerala. WhatsApp +91 94977 17371." />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(LD_LOCAL_BUSINESS)}</script>
      <script type="application/ld+json">{JSON.stringify(LD_FAQ)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'Effar Furniture Product Gallery — Palakkad',
        description: 'Showroom photos of sofas, bedroom sets, dining tables, office furniture, wardrobes and outdoor furniture by Effar Furniture, BOC Road, Palakkad.',
        url: 'https://www.effarfurniture.com/#gallery',
        image: [
          { '@type': 'ImageObject', contentUrl: 'https://www.effarfurniture.com/gallery_sofa.jpg', name: 'Sofas & Lounges — Effar Furniture Palakkad', description: 'L-shaped fabric sofa set in a Kerala living room' },
          { '@type': 'ImageObject', contentUrl: 'https://www.effarfurniture.com/gallery_bedroom.jpg', name: 'Bedroom Sets — Effar Furniture Palakkad', description: 'Solid teak king-size bedroom set with wardrobe' },
          { '@type': 'ImageObject', contentUrl: 'https://www.effarfurniture.com/gallery_dining.jpg', name: 'Dining Sets — Effar Furniture Palakkad', description: '8-seater glass-top dining with tufted chairs' },
          { '@type': 'ImageObject', contentUrl: 'https://www.effarfurniture.com/gallery_office.jpg', name: 'Office Furniture — Effar Furniture Palakkad', description: 'Executive desk, leather chair & modular shelving' },
          { '@type': 'ImageObject', contentUrl: 'https://www.effarfurniture.com/gallery_wardrobe.jpg', name: 'Storage & Wardrobes — Effar Furniture Palakkad', description: 'High-gloss sliding wardrobe with walk-in configuration' },
          { '@type': 'ImageObject', contentUrl: 'https://www.effarfurniture.com/gallery_outdoor.jpg', name: 'Outdoor & Garden — Effar Furniture Palakkad', description: 'Weather-proof teak dining set for Kerala gardens' },
        ],
      })}</script>
    </Helmet>
  );
}
