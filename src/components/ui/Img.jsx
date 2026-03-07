import { useState } from 'react'
import TreeIcon from './TreeIcon'

/**
 * Img — image component with graceful fallback.
 * Shows TreeIcon on load failure (useful while using placeholder Unsplash images).
 * Replace src values in constants.js with your real images.
 */
export default function Img({ src, alt, style = {}, T }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div style={{ background: T.bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
        <TreeIcon size={36} color={T.accentD} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      style={{ objectFit: 'cover', ...style }}
    />
  )
}
