import { PLATFORM } from '../../config'

export default function Waitlist({ T }) {
  return <section id="waitlist" style={{ background: T.bgAlt, padding: '80px 24px', scrollMarginTop: 80, borderBlock: `1px solid ${T.border}` }}>
    <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', alignItems: 'center' }}>
      <div><p className="brand-eyebrow" style={{ color: T.accent }}>Beyond our first pilot</p><h2 className="sf" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.15, margin: '18px 0' }}>Your language.<br />Your traditions.<br />A place to begin.</h2><p style={{ color: T.muted, lineHeight: 1.9, maxWidth: 540 }}>Our first pilot begins with Hausa. Our wider community includes every heritage. Join the free waitlist for any language, culture or tradition you would like your child to explore.</p></div>
      <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28 }}><ol style={{ paddingLeft: 22, color: T.text, lineHeight: 1.8 }}><li style={{ paddingBottom: 14 }}>Tell us each child’s age range, interest and preferred start month.</li><li style={{ paddingBottom: 14 }}>Share the time zone and days that work for your family.</li><li>Our team reviews demand and possible teachers, then emails you when there is a match to discuss.</li></ol><p style={{ color: T.muted, fontSize: '.85rem', lineHeight: 1.8, margin: '20px 0' }}>Groups depend on compatible interests and teacher readiness. Joining is free; a place, start date and price are confirmed separately. You can withdraw at any time.</p><a className="brand-button" href={PLATFORM.waitlist} style={{ display: 'inline-flex', background: T.accent, color: '#fff' }}>Join the heritage waitlist</a></div>
    </div>
  </section>
}
