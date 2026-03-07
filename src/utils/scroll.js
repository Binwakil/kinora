/**
 * Smooth-scrolls to a section by its DOM id.
 * Usage: scrollTo('how-it-works')
 */
export const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
