import { PLATFORM } from '../../config'

export default function MobileStickyCTA({ T }) {
  return (
    <div className="mobile-sticky-cta" style={{ background: T.card, borderTop: `1px solid ${T.border}` }}>
      <a href={PLATFORM.parentSignup} style={{ display: 'block', width: '100%', borderRadius: 999, background: T.accent, color: '#fff', padding: '13px 18px', textAlign: 'center', textDecoration: 'none', fontWeight: 800 }}>
        Start free trial
      </a>
    </div>
  )
}
