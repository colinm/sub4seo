export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Suburban Construction',
    url: 'https://www.suburbanconstruction.com',
    logo: 'https://www.suburbanconstruction.com/logo.png',
    image: 'https://www.suburbanconstruction.com/main.jpg',
    description:
      "Suburban Construction is the Quad Cities' trusted home improvement contractor since 1985. Replacement windows, siding, doors, gutters, and patio enclosures.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3602 North Harrison',
      addressLocality: 'Davenport',
      addressRegion: 'IA',
      postalCode: '52806',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5623,
      longitude: -90.6029,
    },
    telephone: ['+15633914000', '+18007173066'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '16:30',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Davenport', containedIn: { '@type': 'State', name: 'Iowa' } },
      { '@type': 'City', name: 'Bettendorf', containedIn: { '@type': 'State', name: 'Iowa' } },
      { '@type': 'City', name: 'Moline', containedIn: { '@type': 'State', name: 'Illinois' } },
      { '@type': 'City', name: 'Rock Island', containedIn: { '@type': 'State', name: 'Illinois' } },
      { '@type': 'City', name: 'East Moline', containedIn: { '@type': 'State', name: 'Illinois' } },
      { '@type': 'City', name: 'Sterling', containedIn: { '@type': 'State', name: 'Illinois' } },
      { '@type': 'City', name: 'Rock Falls', containedIn: { '@type': 'State', name: 'Illinois' } },
      { '@type': 'City', name: 'Muscatine', containedIn: { '@type': 'State', name: 'Iowa' } },
      { '@type': 'City', name: 'Clinton', containedIn: { '@type': 'State', name: 'Iowa' } },
      { '@type': 'City', name: 'DeWitt', containedIn: { '@type': 'State', name: 'Iowa' } },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '53',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/SuburbanConstructionInc/',
      'https://www.instagram.com/suburbanconstructioninc/',
      'https://www.youtube.com/channel/UC-DSC5JfQoiXHf-nLXz0GWQ',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Improvement Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Replacement Windows' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Siding Installation' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Door Installation' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Gutter Installation' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Patio Enclosures & Awnings' },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
