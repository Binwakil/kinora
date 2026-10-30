import { PLATFORM } from '../../config'

export default function Pricing({ T }) {
  return (
    <section id="pricing" className="heritage-section" style={{ background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
      <div className="heritage-split">
        <div><p className="brand-eyebrow" style={{ color: T.accent }}>Before you commit</p><h2 className="sf" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.12, color: T.text }}>A clear plan.<br />In your currency.</h2></div>
        <div style={{ color: T.muted, lineHeight: 1.85 }}><p>We’re finalising lesson plans and pricing for our first families. Tell us your country, preferred language, and learning goals so we can check availability.</p><p style={{ marginTop: 16 }}>Before payment, you’ll see the price and currency, included lessons, lesson length, renewal date, and cancellation terms. Creating a family profile does not start a paid subscription.</p><a className="brand-text-button" href={PLATFORM.parentSignup} style={{ display: 'inline-block', color: T.accent, marginTop: 24 }}>Create your family profile <span aria-hidden="true">→</span></a></div>
      </div>
    </section>
  )
}
