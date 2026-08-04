import FadeIn from '../ui/FadeIn'

const OPTIONS = [
  ['Language apps', 'Vocab drills without family context.'],
  ['Marketplace tutors', 'Transactional search, uneven vetting.'],
  ['Saturday school', 'Warm community, rigid schedules.'],
  ['Kinora', 'Matched heritage teacher, parent-visible progress, trust support.'],
]

export default function Comparison({ T }) {
  return (
    <section style={{ background: T.bgAlt, padding: '96px 5%', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <FadeIn>
          <p style={{ textAlign: 'center', fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>Why Kinora</p>
          <h2 className="sf" style={{ textAlign: 'center', fontSize: 'clamp(2rem,3.5vw,3rem)', color: T.text, fontWeight: 600, marginBottom: 42 }}>
            Built for heritage, not just homework.
          </h2>
        </FadeIn>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {OPTIONS.map(([name, detail], index) => (
            <FadeIn key={name} delay={index * 0.06}>
              <div style={{ height: '100%', border: `1px solid ${name === 'Kinora' ? T.accent : T.border}`, background: name === 'Kinora' ? `${T.accent}10` : T.card, borderRadius: 18, padding: 22 }}>
                <h3 style={{ color: T.text, fontSize: '1rem', fontWeight: 800, marginBottom: 10 }}>{name}</h3>
                <p style={{ color: T.muted, fontSize: '.86rem', lineHeight: 1.75 }}>{detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
