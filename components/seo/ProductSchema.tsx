interface ServiceArea {
  city: string;
  state: string;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  serviceAreas: ServiceArea[];
  image?: string;
  url: string;
  ratingValue?: number;
  reviewCount?: number;
}

export default function ProductSchema({
  name,
  description,
  serviceAreas,
  image = "/main.jpg",
  url,
  ratingValue = 5,
  reviewCount = 53,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://www.suburbanconstruction.com${image}`,
    url: `https://www.suburbanconstruction.com${url}`,
    brand: {
      "@type": "Brand",
      name: "Suburban Construction",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city + ", " + area.state,
    })),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
