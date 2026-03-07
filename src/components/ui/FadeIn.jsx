import { useInView } from '../../hooks/useInView'

/**
 * FadeIn — wraps children in a scroll-triggered fade-up animation.
 * Usage: <FadeIn delay={0.2}><YourContent /></FadeIn>
 */
export default function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
