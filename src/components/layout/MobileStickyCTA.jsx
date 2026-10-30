import { PLATFORM } from '../../config'

export default function MobileStickyCTA({ T }) {
  return (
    <div className="mobile-sticky-cta" style={{ background: T.card, borderTop: `1px solid ${T.border}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <a href={PLATFORM.parentSignup} style={{ display: 'block', borderRadius: 999, background: T.accent, color: '#fff', padding: '13px 8px', textAlign: 'center', textDecoration: 'none', fontWeight: 700, fontSize: '.82rem' }}>Apply for pilot</a>
        <a href={PLATFORM.waitlist} style={{ display: 'block', borderRadius: 999, border: `1px solid ${T.accent}`, color: T.accent, padding: '12px 8px', textAlign: 'center', textDecoration: 'none', fontWeight: 700, fontSize: '.82rem' }}>Join waitlist</a>
      </div>
    </div>
  )
}
