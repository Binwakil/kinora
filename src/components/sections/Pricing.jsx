import FadeIn from '../ui/FadeIn'
import { CheckIcon } from '../ui/Icons'
import { scrollTo } from '../../utils/scroll'
import { PRICING_FEATURES } from '../../data/constants'
import { PLATFORM } from '../../config'

export default function Pricing({ T }) {
  return (
    <section id="pricing" style={{ background: T.bgAlt, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>

        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Transparent pricing</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 18, color: T.text }}>Simple. Fair. Worth it.</h2>
          <p style={{ fontSize: '.96rem', color: T.muted, marginBottom: 32, lineHeight: 1.85 }}>One plan. One live session per week. No hidden fees.</p>

          {/* Value anchor */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: `${T.accent}10`, border: `1px solid ${T.accent}26`, borderRadius: 50, padding: '8px 22px', marginBottom: 48 }}>
            <span style={{ fontSize: '.82rem', color: T.muted }}>
              Private tutors: <span style={{ textDecoration: 'line-through', color: T.muted }}>$60–$100/hr</span>
            </span>
            <span style={{ color: T.accent, fontWeight: 700, fontSize: '1rem' }}>→</span>
            <span style={{ fontSize: '.82rem', color: T.accent, fontWeight: 700 }}>Kinora: ~$10/session</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: T.bgDeep, borderRadius: 28, padding: '52px 48px', position: 'relative', overflow: 'hidden', boxShadow: `0 30px 80px ${T.accent}33` }}>
            {/* Glow orbs */}
            <div style={{ position: 'absolute', top: -70, right: -70, width: 260, height: 260, borderRadius: '50%', background: `${T.accent}33`, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: `${T.accent}22`, pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-block', background: `${T.accent}44`, borderRadius: 50, padding: '5px 18px', marginBottom: 22 }}>
                <span style={{ color: '#F0E4D0', fontSize: '.77rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Monthly Subscription</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                <span className="sf" style={{ fontSize: '4.5rem', fontWeight: 600, color: '#F0E4D0', lineHeight: 1 }}>$40</span>
                <span style={{ color: '#C8B09A', fontSize: '1rem' }}>– $45 / month</span>
              </div>
              <p style={{ color: '#C8B09A', fontSize: '.85rem', marginBottom: 40 }}>per child · monthly · cancel anytime</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, textAlign: 'left', marginBottom: 40 }}>
                {PRICING_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ marginTop: 1, flexShrink: 0 }}><CheckIcon color="#C8B09A" /></div>
                    <span style={{ fontSize: '.83rem', color: '#C8B09A', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={PLATFORM.parentSignup}
                style={{ display: 'block', width: '100%', padding: '16px', borderRadius: 14, fontSize: '1rem', background: '#F0E4D0', color: T.accentD, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all .25s', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px #00000030' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                Apply for a Free Trial Session
              </a>
              <p style={{ color: '#6A5040', fontSize: '.75rem', marginTop: 10 }}>No credit card required for your first session</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
