import { useState, useEffect } from 'react'

/**
 * useScrolled — returns true when page has scrolled past `offset` pixels.
 * Used by Nav to trigger the frosted-glass background.
 */
export const useScrolled = (offset = 40) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [offset])

  return scrolled
}
