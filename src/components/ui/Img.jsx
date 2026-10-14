import { useState } from 'react'

// Image with a fixed aspect ratio. Falls back to a neutral placeholder if the file is missing,
// so a missing asset never shows as a broken image.
// Pass `decorative` when the image sits inside a link/heading that already names it.
function Img({ image, ratio, priority = false, decorative = false, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-paper ${className}`}
      style={{ aspectRatio: ratio ?? image.ratio }}
    >
      {failed ? (
        <div
          className="img-placeholder absolute inset-0"
          {...(decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': image.alt })}
        >
          {import.meta.env.DEV && (
            <span className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] bg-ivory/90 px-2 py-1 font-mono text-[10px] leading-tight text-charcoal">
              Add image: public{image.src}
            </span>
          )}
        </div>
      ) : (
        <img
          src={image.src}
          alt={decorative ? '' : image.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}

export default Img
