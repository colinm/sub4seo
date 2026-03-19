'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// Explicit 6-col × 4-row grid (24 cells, 18 images, zero gaps).
//
//   Col:  1     2     3     4     5     6
//   R 1:  [img0 wide ] [img1] [img2] [img3 wide ]
//   R 2:  [img4 tall] [img5] [img6] [img7 wide ] [img8 tall]
//   R 3:  [img4 tall] [img9] [img10] [img11] [img12] [img8 tall]
//   R 4:  [img13 wide] [img14] [img15] [img16] [img17]
//
// Every cell is covered — no dense-pack guesswork needed.

// Tiny 1×1 gray GIF — used as an instant blur placeholder while tiles load
const BLUR_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

const images: { src: string; alt: string; col: string; row: string; span?: number }[] = [
  { src: '/showroom/image1.jpg',  alt: 'Suburban Construction showroom — full-scale home exterior display', col: '1 / span 2', row: '1',          span: 2 },
  { src: '/showroom/image3.jpg',  alt: 'Entry door displays with glass and hardware options',               col: '3',          row: '1'                   },
  { src: '/showroom/image4.jpg',  alt: 'Showroom window display corridor',                                 col: '4',          row: '1'                   },
  { src: '/showroom/image5.jpg',  alt: 'Energy-efficient window comparison display',                       col: '5 / span 2', row: '1',          span: 2 },
  { src: '/showroom/image6.jpg',  alt: 'Patio door selection and glass options',                           col: '1',          row: '2 / span 2'           },
  { src: '/showroom/image7.jpg',  alt: 'Siding color and texture wall displays',                           col: '2',          row: '2'                   },
  { src: '/showroom/image8.jpg',  alt: 'Showroom interior overview',                                       col: '3',          row: '2'                   },
  { src: '/showroom/image9.jpg',  alt: 'Window grid patterns and frame styles',                            col: '4 / span 2', row: '2',          span: 2 },
  { src: '/showroom/image11.jpg', alt: 'Door hardware, finish, and wood tone options',                     col: '6',          row: '2 / span 2'           },
  { src: '/showroom/image13.jpg', alt: 'Stone accent and siding color combinations',                       col: '2',          row: '3'                   },
  { src: '/showroom/image14.jpg', alt: 'Bay and bow window display',                                       col: '3',          row: '3'                   },
  { src: '/showroom/image15.jpg', alt: 'Full wall siding section with coordinated trim',                   col: '4',          row: '3'                   },
  { src: '/showroom/image16.jpg', alt: 'Exterior vignette display',                                        col: '5',          row: '3'                   },
  { src: '/showroom/image18.jpg', alt: 'Patio and lifestyle-inspired display space',                       col: '1 / span 2', row: '4',          span: 2 },
  { src: '/showroom/image19.jpg', alt: 'Casement and awning window comparison',                            col: '3',          row: '4'                   },
  { src: '/showroom/image20.jpg', alt: 'Decorative door glass and grid patterns',                          col: '4',          row: '4'                   },
  { src: '/showroom/image24.jpg', alt: 'Showroom display corridor — windows and siding',                   col: '5',          row: '4'                   },
  { src: '/showroom/image29.jpg', alt: 'Suburban Construction showroom — product overview',                col: '6',          row: '4'                   },
]

function Tile({ img, index, onClick }: { img: typeof images[0]; index: number; onClick: () => void }) {
  // Wide (2-col) tiles are ~33vw on desktop; single tiles are ~17vw (container max-w-5xl / 6 cols)
  const desktopSize = img.span === 2 ? '33vw' : '17vw'
  return (
    <button
      onClick={onClick}
      aria-label={`View: ${img.alt}`}
      className="relative w-full h-full overflow-hidden rounded-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={`(max-width: 768px) 33vw, ${desktopSize}`}
        quality={65}
        priority={index < 4}
        loading={index < 4 ? undefined : 'lazy'}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        className="object-cover transition-opacity duration-200 group-hover:opacity-85"
      />
    </button>
  )
}

export default function ShowroomGallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const prev  = useCallback(() => setActive(i => i === null ? null : (i - 1 + images.length) % images.length), [])
  const next  = useCallback(() => setActive(i => i === null ? null : (i + 1) % images.length), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  // Prefetch adjacent full-res images so the next/prev click feels instant
  useEffect(() => {
    if (active === null) return
    const adjacentSrcs = [
      images[(active + 1) % images.length].src,
      images[(active - 1 + images.length) % images.length].src,
    ]
    adjacentSrcs.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [active])

  return (
    <>
      {/* ── Desktop: explicit 6×4 grid, perfect rectangle ── */}
      <div
        className="hidden md:grid grid-cols-6 gap-1.5"
        style={{ gridTemplateRows: 'repeat(4, clamp(80px, 9vw, 120px))' }}
      >
        {images.map((img, i) => (
          <div key={img.src} className="min-h-0" style={{ gridColumn: img.col, gridRow: img.row }}>
            <Tile img={img} index={i} onClick={() => setActive(i)} />
          </div>
        ))}
      </div>

      {/* ── Mobile: simple 3-col auto-flow ── */}
      <div className="grid grid-cols-3 gap-1.5 md:hidden">
        {images.map((img, i) => (
          <button
            key={img.src + '-mob'}
            onClick={() => setActive(i)}
            aria-label={`View: ${img.alt}`}
            className="relative overflow-hidden rounded-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="33vw"
              quality={60}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover transition-opacity duration-200 group-hover:opacity-85"
            />
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
        >
          <button onClick={close} aria-label="Close" className="absolute top-5 right-5 p-2 text-white/60 hover:text-white transition-colors">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl mx-16 md:mx-24"
            style={{ aspectRatio: '16 / 10' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="90vw"
              quality={82}
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
            <p className="text-white/70 text-sm text-center max-w-sm px-4 leading-snug">
              {images[active].alt}
            </p>
            <span className="text-white/40 text-xs tracking-widest">
              {active + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
