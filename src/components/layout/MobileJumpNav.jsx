const items = [
  ['Trust', '#trust'],
  ['Pricing', '#pricing'],
  ['Cultures', '#cultures'],
  ['FAQ', '#faq'],
]

export default function MobileJumpNav({ T }) {
  return (
    <nav className="mobile-jump-nav" aria-label="Quick section links" style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
      {items.map(([label, href]) => (
        <a key={label} href={href} style={{ color: T.text, border: `1px solid ${T.border}`, background: T.card }}>
          {label}
        </a>
      ))}
    </nav>
  )
}
