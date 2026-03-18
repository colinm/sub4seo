interface Term {
  term: string
  definition: string
}

interface DefinedTermSchemaProps {
  terms: Term[]
  setName: string
  setDescription: string
}

export default function DefinedTermSchema({ terms, setName, setDescription }: DefinedTermSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: setName,
    description: setDescription,
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: setName,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
