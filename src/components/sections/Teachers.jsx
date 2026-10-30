import { PLATFORM } from '../../config'

export default function Teachers({ T }) {
  return (
    <section id="teachers" className="heritage-section" style={{ background: T.bg, borderTop: `1px solid ${T.border}` }}>
      <div className="heritage-split">
        <div><p className="brand-eyebrow" style={{ color: T.accent }}>Teach with KINORA</p><h2 className="sf" style={{ color: T.text, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.12 }}>There’s a world<br />in what you know.</h2></div>
        <div style={{ color: T.muted, lineHeight: 1.85 }}><p>Language, family stories, music, customs: help children build a connection to the heritage you share. We’re recruiting teachers across communities for our first lessons.</p><p style={{ marginTop: 16 }}>Applications go through identity and reference review, an interview, a teaching demonstration, and child-safety screening before approval. Applying does not guarantee approval or bookings.</p><a className="brand-button" href={PLATFORM.teacherSignup} style={{ display: 'inline-flex', background: T.accent, color: '#fff', marginTop: 24 }}>Apply to teach <span aria-hidden="true">→</span></a></div>
      </div>
    </section>
  )
}
