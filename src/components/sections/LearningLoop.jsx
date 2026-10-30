import FadeIn from '../ui/FadeIn'
import { PLATFORM } from '../../config'

const STEPS = [
  ['1', 'Family intake', 'Share each child, heritage background, learning focus, availability, and matching notes.'],
  ['2', 'Human match review', 'Kinora checks the details and proposes teachers with the best cultural and schedule fit.'],
  ['3', 'Trial session', 'Families meet the teacher, test learning style, and approve before moving forward.'],
  ['4', 'Ongoing visibility', 'Keep sessions, teacher notes, messages, and support in one place.'],
]

export default function LearningLoop({ T }) {
  return (
    <section style={{ background: T.bg, padding: '110px 5%' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ maxWidth: 680, marginBottom: 42 }}>
            <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>A calmer parent experience</p>
            <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.4vw,3.1rem)', lineHeight: 1.08, fontWeight: 600, color: T.text, marginBottom: 18 }}>
              The full learning loop stays visible.
            </h2>
            <p style={{ fontSize: '.97rem', lineHeight: 1.85, color: T.muted }}>
              Your family profile, teacher match, lesson schedule, and feedback belong together. Here’s the experience we’re preparing for our first families.
            </p>
          </div>
        </FadeIn>

        <div className="learning-loop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {STEPS.map(([num, title, detail], index) => (
            <FadeIn key={title} delay={index * 0.06}>
              <div className="section-card-hover" style={{ height: '100%', border: `1px solid ${T.border}`, background: T.card, borderRadius: 20, padding: 22 }}>
                <div style={{ width: 42, height: 42, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${T.accent}14`, color: T.accent, fontWeight: 800, marginBottom: 18 }}>
                  {num}
                </div>
                <h3 style={{ color: T.text, fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: T.muted, fontSize: '.86rem', lineHeight: 1.7 }}>{detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.18}>
          <div style={{ marginTop: 26, border: `1px solid ${T.border}`, background: T.bgAlt, borderRadius: 22, padding: '24px 28px', display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '.98rem', color: T.text, fontWeight: 700, marginBottom: 4 }}>Ready to try the full flow?</p>
              <p style={{ fontSize: '.86rem', color: T.muted }}>Start with a family intake, then Kinora handles the matching queue.</p>
            </div>
            <a href={PLATFORM.parentSignup} style={{ textDecoration: 'none', padding: '12px 24px', borderRadius: 50, background: T.accent, color: '#fff', fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 700 }}>
              Create your family profile
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
