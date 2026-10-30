import FadeIn from '../ui/FadeIn'
import { PLATFORM } from '../../config'

const STEPS = [
  { n: '01', when: 'Day 0', title: 'Apply as a family', desc: 'Tell us about your child, cultural background, language level, schedule, and what matters most.' },
  { n: '02', when: 'Availability review', title: 'Find the right teacher', desc: 'Our team reviews your language, learning goals, country, and schedule against screened teacher availability.' },
  { n: '03', when: 'After consent & confirmation', title: 'Meet in a trial lesson', desc: 'When a teacher is available, agree a time and meet before deciding whether to continue.' },
  { n: '04', when: 'Your decision', title: 'Choose your lesson plan', desc: 'Review the price, currency, lesson dates, and terms before starting a paid plan. A trial does not automatically become a subscription.' },
]

export default function HowItWorks({ T }) {
  return (
    <section id="how-it-works" style={{ background: T.bgAlt, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <p style={{ textAlign: 'center', fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Simple by design</p>
          <h2 className="sf" style={{ textAlign: 'center', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 80, color: T.text }}>
            From your family’s story to a shared plan.
          </h2>
        </FadeIn>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
          {STEPS.map(({ n, when, title, desc }, i) => (
            <FadeIn key={n} delay={i * 0.12}>
              <div style={{ position: 'relative', padding: '30px 18px' }}>
                <span className="sf" style={{ position: 'absolute', top: -16, left: -8, fontSize: '5rem', fontWeight: 300, color: `${T.accent}28`, lineHeight: 1, userSelect: 'none' }}>{n}</span>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 38, height: 3, background: T.accent, marginBottom: 18, borderRadius: 2 }} />
                  <p style={{ display: 'inline-flex', border: `1px solid ${T.border}`, background: T.card, color: T.accent, borderRadius: 999, padding: '3px 9px', fontSize: '.7rem', fontWeight: 800, marginBottom: 12 }}>{when}</p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12, color: T.text }}>{title}</h3>
                  <p style={{ fontSize: '.87rem', color: T.muted, lineHeight: 1.85 }}>{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <a href={PLATFORM.parentSignup}
              style={{ padding: '15px 36px', borderRadius: 50, fontSize: '1rem', background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 700, transition: 'all .25s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accentD; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.transform = 'translateY(0)' }}>
              Create your family profile
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
