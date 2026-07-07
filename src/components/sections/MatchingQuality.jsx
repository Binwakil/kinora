import FadeIn from '../ui/FadeIn'

const SIGNALS = [
  { label: 'Country and region', detail: 'Country, region, and diaspora context are kept separate so families can be specific.' },
  { label: 'Culture and ethnicity', detail: 'Parents can name the culture or community they want reflected in lessons.' },
  { label: 'Language depth', detail: 'Conversation, reading, writing, stories, religion, and heritage identity are matched differently.' },
  { label: 'Teacher readiness', detail: 'Verified skills, availability, notes, and trial outcomes guide every match.' },
]

export default function MatchingQuality({ T }) {
  return (
    <section style={{ background: T.bgAlt, padding: '110px 5%' }}>
      <div className="matching-grid" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>Beyond a search filter</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.4vw,3.1rem)', lineHeight: 1.08, fontWeight: 600, color: T.text, marginBottom: 18 }}>
            Matching that understands heritage is layered.
          </h2>
          <p style={{ fontSize: '.97rem', lineHeight: 1.85, color: T.muted, maxWidth: 520 }}>
            A Nigerian family from Arewa looking for Hausa and Islamic heritage is not the same as a Yoruba culture request, even when both families live in the same city abroad. Kinora keeps those details visible from signup through matching.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ border: `1px solid ${T.border}`, background: T.card, borderRadius: 24, padding: 24, boxShadow: `0 20px 70px ${T.accent}12` }}>
            <div style={{ display: 'grid', gap: 14 }}>
              {SIGNALS.map((item, index) => (
                <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '42px 1fr', gap: 14, alignItems: 'start', padding: 18, border: `1px solid ${T.border}`, background: index % 2 === 0 ? T.bg : T.bgAlt, borderRadius: 18 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${T.accent}16`, color: T.accent, fontWeight: 800, fontSize: '.82rem' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{ color: T.text, fontSize: '1rem', fontWeight: 700, marginBottom: 5 }}>{item.label}</h3>
                    <p style={{ color: T.muted, fontSize: '.86rem', lineHeight: 1.65 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
