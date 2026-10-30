import FadeIn from '../ui/FadeIn'
import { CheckIcon, ShieldIcon } from '../ui/Icons'
import TreeIcon from '../ui/TreeIcon'
import { TRUST_COMMITMENTS } from '../../data/constants'

const SAFEGUARDS = [
  { t: 'Verified identity & references', d: 'Every teacher submits government ID and provides professional references we personally check before approval.' },
  { t: 'No unsupervised child access',           d: 'Parents may join any session at any time. No session proceeds without parental confirmation.' },
  { t: 'Session logging & traceability',         d: 'Every session is timestamped and logged. Any concern triggers immediate human review.' },
  { t: 'Incident reporting & escalation',        d: 'Report a concern privately through the parent portal. Support coverage and escalation contacts must be confirmed before lessons open.' },
]

export default function Trust({ T }) {
  return (
    <section id="trust" style={{ background: T.bg, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'center' }}>

          {/* Left: safeguards */}
          <FadeIn>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <ShieldIcon color={T.accent} />
                <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600 }}>Child safety</p>
              </div>
              <h2 className="sf" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, marginBottom: 18, lineHeight: 1.25, color: T.text }}>
                How we protect every child on our platform.
              </h2>
              <p style={{ fontSize: '.9rem', color: T.muted, lineHeight: 1.9, marginBottom: 40 }}>
                Trust is not a marketing word for us — it is an operational commitment.
              </p>
              {SAFEGUARDS.map(({ t, d }) => (
                <div key={t} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${T.accent}16`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <CheckIcon color={T.accent} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '.9rem', color: T.text, marginBottom: 3 }}>{t}</p>
                    <p style={{ fontSize: '.84rem', color: T.muted, lineHeight: 1.78 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: commitment card */}
          <FadeIn delay={0.2}>
            <div style={{ background: T.card, borderRadius: 24, padding: '44px 38px', boxShadow: `0 20px 60px ${T.accent}10`, border: `1px solid ${T.border}` }}>
              <div style={{ textAlign: 'center', marginBottom: 30 }}>
                <TreeIcon size={54} color={T.accent} />
                <h3 className="sf" style={{ fontSize: '1.6rem', fontWeight: 600, marginTop: 16, marginBottom: 10, color: T.text }}>Our Commitment</h3>
                <p style={{ fontSize: '.85rem', color: T.muted, lineHeight: 1.7 }}>Every principle in plain language.</p>
              </div>
              {TRUST_COMMITMENTS.map(({ title, sub }) => (
                <div key={title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 0', borderBottom: `1px solid ${T.border}` }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '.85rem', color: T.text }}>{title}</p>
                    <p style={{ fontSize: '.77rem', color: T.muted, marginTop: 2 }}>{sub}</p>
                  </div>
                  <CheckIcon color={T.accent} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
