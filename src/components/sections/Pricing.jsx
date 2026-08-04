import FadeIn from '../ui/FadeIn'
import { CheckIcon } from '../ui/Icons'
import { PRICING_FEATURES } from '../../data/constants'
import { PLATFORM } from '../../config'

const PLANS = [
  ['1 child', '$40-45/mo', 'One live session per week'],
  ['2 children', 'about $80/mo', 'Separate or shared teacher fit'],
  ['3+ children', 'custom family plan', 'Match team confirms the best setup'],
]

export default function Pricing({ T }) {
  return (
    <section id="pricing" style={{ background: T.bgAlt, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Transparent pricing</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 18, color: T.text }}>Simple. Fair. Worth it.</h2>
          <p style={{ fontSize: '.96rem', color: T.muted, marginBottom: 32, lineHeight: 1.85 }}>Per child, per month. One live session per week. Cancel anytime.</p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: `${T.accent}10`, border: `1px solid ${T.accent}26`, borderRadius: 50, padding: '8px 22px', marginBottom: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '.82rem', color: T.muted }}>Private tutors: <span style={{ textDecoration: 'line-through' }}>$60-$100/hr</span></span>
            <span style={{ color: T.accent, fontWeight: 700, fontSize: '1rem' }}>→</span>
            <span style={{ fontSize: '.82rem', color: T.accent, fontWeight: 700 }}>Kinora: about $10/session</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: T.bgDeep, borderRadius: 28, padding: '52px 48px', position: 'relative', overflow: 'hidden', boxShadow: `0 30px 80px ${T.accent}33` }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-block', background: `${T.accent}44`, borderRadius: 50, padding: '5px 18px', marginBottom: 22 }}>
                <span style={{ color: '#F0E4D0', fontSize: '.77rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Monthly subscription</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                <span className="sf" style={{ fontSize: '4.5rem', fontWeight: 600, color: '#F0E4D0', lineHeight: 1 }}>$40</span>
                <span style={{ color: '#C8B09A', fontSize: '1rem' }}>- $45 / month</span>
              </div>
              <p style={{ color: '#C8B09A', fontSize: '.85rem', marginBottom: 28 }}>per child · monthly · cancel anytime · first session free</p>

              <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 34 }}>
                {PLANS.map(([name, price, detail]) => (
                  <div key={name} style={{ border: '1px solid rgba(240,228,208,0.18)', borderRadius: 14, padding: 14, textAlign: 'left' }}>
                    <p style={{ color: '#F0E4D0', fontWeight: 800, fontSize: '.86rem' }}>{name}</p>
                    <p style={{ color: '#C8A080', fontWeight: 800, marginTop: 4 }}>{price}</p>
                    <p style={{ color: '#C8B09A', fontSize: '.72rem', lineHeight: 1.5, marginTop: 6 }}>{detail}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, textAlign: 'left', marginBottom: 40 }} className="grid-2">
                {PRICING_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ marginTop: 1, flexShrink: 0 }}><CheckIcon color="#C8B09A" /></div>
                    <span style={{ fontSize: '.83rem', color: '#C8B09A', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={PLATFORM.parentSignup}
                style={{ display: 'block', width: '100%', padding: '16px', borderRadius: 14, fontSize: '1rem', background: '#F0E4D0', color: T.accentD, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all .25s', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px #00000030' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                Start free trial
              </a>
              <p style={{ color: '#C8B09A', fontSize: '.75rem', marginTop: 10 }}>No credit card required for your first session</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
