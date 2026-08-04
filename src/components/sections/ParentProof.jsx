import FadeIn from '../ui/FadeIn'
import { TESTIMONIALS } from '../../data/constants'

export default function ParentProof({ T }) {
  const proof = TESTIMONIALS[0]
  return (
    <section style={{ background: T.bg, padding: '72px 5%', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ border: `1px solid ${T.border}`, background: T.card, borderRadius: 22, padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }} className="proof-card">
            <div>
              <p style={{ fontSize: '.76rem', color: T.accent, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>Parent proof</p>
              <p className="sf" style={{ fontSize: 'clamp(1.35rem,2.7vw,2rem)', lineHeight: 1.35, color: T.text, fontStyle: 'italic' }}>
                "{proof.quote}"
              </p>
              <p style={{ marginTop: 14, fontSize: '.86rem', color: T.muted, fontWeight: 600 }}>
                {proof.name} · {proof.location} · {proof.child}
              </p>
            </div>
            <div style={{ minWidth: 170, borderLeft: `1px solid ${T.border}`, paddingLeft: 24 }}>
              <p style={{ fontSize: '2rem', lineHeight: 1, color: T.accent, fontWeight: 800 }}>4.9/5</p>
              <p style={{ marginTop: 8, fontSize: '.8rem', color: T.muted, lineHeight: 1.6 }}>Based on first-party session ratings from Kinora families.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
