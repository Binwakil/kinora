import FadeIn from '../ui/FadeIn'

const REASONS = [
  { icon: '🤝', title: 'Personal Matching, Not an Algorithm', desc: 'Every family matched by hand. We read your story, understand your needs, and choose a teacher who fits — not just a filter result.' },
  { icon: '🔍', title: 'Every Teacher is Vetted',             desc: 'Reference checked, interview verified, and culturally assessed before they ever meet a child.' },
  { icon: '👁️', title: 'Full Parental Visibility',            desc: "Observe any session. Structured report after every class. Nothing happens with your child that you don't know about." },
]

export default function WhyKinora({ T }) {
  return (
    <section style={{ background: T.bg, padding: '120px 5%', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Why Kinora</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 18, maxWidth: 560, color: T.text }}>
            We're not a tutoring marketplace.<br />We're a trust-first platform.
          </h2>
          <p style={{ fontSize: '.96rem', color: T.muted, maxWidth: 520, marginBottom: 72, lineHeight: 1.88 }}>
            Every decision was made with one question: would we trust this with our own child?
          </p>
        </FadeIn>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {REASONS.map(({ icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.15}>
              <div className="section-card-hover" style={{ background: T.card, borderRadius: 20, padding: '36px 30px', border: `1px solid ${T.border}`, height: '100%' }}>
                <div style={{ fontSize: '2.1rem', marginBottom: 18 }}>{icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 12, color: T.text }}>{title}</h3>
                <p style={{ fontSize: '.87rem', color: T.muted, lineHeight: 1.88 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
