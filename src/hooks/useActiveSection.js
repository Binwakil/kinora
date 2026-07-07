import { useState, useEffect } from 'react'

/**
 * Returns the id of the section currently in view.
 * rootMargin pushes the "active" window below the fixed nav and above mid-screen.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-15% 0px -75% 0px' }
    )

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, []) // ids are stable constants — no dep needed

  return active
}
