/**
 * Button — Kinora primary and outline variants.
 *
 * Usage:
 *   <Button variant="primary" T={T} onClick={...}>Apply Free</Button>
 *   <Button variant="outline" T={T} onClick={...}>How It Works</Button>
 */
export default function Button({ variant = 'primary', T, children, onClick, style = {}, full = false }) {
  const base = {
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    letterSpacing: '.03em',
    transition: 'all .25s',
    border: 'none',
    width: full ? '100%' : undefined,
    ...style,
  }

  const primary = {
    ...base,
    background: T.accent,
    color: '#fff',
  }

  const outline = {
    ...base,
    background: 'transparent',
    color: T.accent,
    border: `1.5px solid ${T.accent}`,
  }

  return (
    <button
      style={variant === 'primary' ? primary : outline}
      onClick={onClick}
      onMouseEnter={e => {
        if (variant === 'primary') {
          e.currentTarget.style.background = T.accentD
          e.currentTarget.style.transform = 'translateY(-1px)'
          e.currentTarget.style.boxShadow = `0 8px 28px ${T.accent}44`
        } else {
          e.currentTarget.style.background = T.accent
          e.currentTarget.style.color = '#fff'
        }
      }}
      onMouseLeave={e => {
        if (variant === 'primary') {
          e.currentTarget.style.background = T.accent
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        } else {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = T.accent
        }
      }}
    >
      {children}
    </button>
  )
}
