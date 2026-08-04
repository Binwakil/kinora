import FadeIn from '../ui/FadeIn'
import { PLATFORM } from '../../config'

const PAGES = [
  ['Yoruba teachers for kids abroad', 'US, UK, Canada families looking for language, stories, proverbs, and family conversation.'],
  ['Urdu heritage lessons for children', 'Reading, poetry, family vocabulary, and values for Pakistani and Indian diaspora families.'],
  ['Tamil culture classes for children', 'Language, festivals, classical arts, and regional identity for families outside South Asia.'],
]

export default function StorySeo({ T }) {
  return (
    <section style={{ background: T.bg, padding: '96px 5%', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 36, alignItems: 'start' }} className="story-grid">
        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>Our mission</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.4vw,3rem)', color: T.text, lineHeight: 1.12, fontWeight: 600, marginBottom: 18 }}>
            Kinora is for families raising children between worlds.
          </h2>
          <p style={{ color: T.muted, fontSize: '.96rem', lineHeight: 1.85 }}>
            The product is intentionally human: a match team, vetted teachers, parent-visible notes, and rematch support when the fit is not right.
          </p>
        </FadeIn>
        <div style={{ display: 'grid', gap: 14 }}>
          {PAGES.map(([title, body], index) => (
            <FadeIn key={title} delay={index * 0.06}>
              <div style={{ border: `1px solid ${T.border}`, background: T.card, borderRadius: 16, padding: 20 }}>
                <h3 style={{ color: T.text, fontSize: '.98rem', fontWeight: 800, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: T.muted, fontSize: '.86rem', lineHeight: 1.7 }}>{body}</p>
                <a href={PLATFORM.parentSignup} style={{ display: 'inline-block', marginTop: 12, color: T.accent, fontSize: '.84rem', fontWeight: 700, textDecoration: 'none' }}>
                  Request match
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
