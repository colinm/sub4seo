import { unstable_cache } from 'next/cache'

const GOOGLE_REVIEW_URL = 'https://share.google/ip6i7EtVr91x3aR2O'
export const FALLBACK_REVIEW_COUNT = 111

async function fetchReviewCount(): Promise<number> {
  try {
    const res = await fetch(GOOGLE_REVIEW_URL, {
      redirect: 'follow',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml',
      },
    })

    if (!res.ok) return FALLBACK_REVIEW_COUNT

    const html = await res.text()

    // Try various patterns Google uses in its HTML/structured data
    const patterns = [
      /(\d{2,4})\s+Google reviews/i,
      /(\d{2,4})\s+reviews/i,
      /"reviewCount":\s*"?(\d+)"?/,
      /"user_ratings_total":\s*(\d+)/,
      /ratingCount['":\s]+(\d+)/i,
    ]

    for (const pattern of patterns) {
      const match = html.match(pattern)
      if (match) {
        const count = parseInt(match[1], 10)
        if (count > 0 && count < 10000) return count
      }
    }
  } catch {
    // Fall through to fallback
  }

  return FALLBACK_REVIEW_COUNT
}

// Cache for 1 week (604800 seconds)
export const getGoogleReviewCount = unstable_cache(
  fetchReviewCount,
  ['google-review-count'],
  { revalidate: 604800 }
)
