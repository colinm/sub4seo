interface VideoObject {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  embedUrl: string
}

interface VideoSchemaProps {
  videos: VideoObject[]
}

export default function VideoSchema({ videos }: VideoSchemaProps) {
  const schemas = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    embedUrl: video.embedUrl,
    publisher: {
      "@type": "Organization",
      name: "Suburban Construction",
      url: "https://www.suburbanconstruction.com",
    },
  }))

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          suppressHydrationWarning
        />
      ))}
    </>
  )
}
