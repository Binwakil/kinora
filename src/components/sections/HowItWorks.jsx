import FadeIn from '../ui/FadeIn'
import { scrollTo } from '../../utils/scroll'
import { PLATFORM } from '../../config'

const STEPS = [
  { n: '01', title: 'Apply as a Family',        desc: 'Tell us about your child — age, cultural background, language level, and what matters most to you.' },
  { n: '02', title: 'We Match You Personally',  desc: 'No algorithm. A real person reads your application and hand-picks 2–3 teachers for you to review.' },
  { n: '03', title: 'First Session Free',        desc: "Your child meets their teacher. You observe. If it doesn't feel right, we rematch — no questions asked." },
  { n: '04', title: 'Subscribe Monthly',         desc: '~$40–45/month · one live session per week · structured report after every class.' },
]

export default function HowItWorks({ T }) {
  return (
    <section id="how-it-works" style={{ background: T.bgAlt, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <p style={{ textAlign: 'center', fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Simple by design</p>
          <h2 className="sf" style={{ textAlign: 'center', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 80, color: T.text }}>
            From application to first session in under a week.
          </h2>
        </FadeIn>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
          {STEPS.map(({ n, title, desc }, i) => (
            <FadeIn key={n} delay={i * 0.12}>
              <div style={{ position: 'relative', padding: '30px 18px' }}>
                <span className="sf" style={{ position: 'absolute', top: -16, left: -8, fontSize: '5rem', fontWeight: 300, color: `${T.accent}22`, lineHeight: 1, userSelect: 'none' }}>{n}</span>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 38, height: 3, background: T.accent, marginBottom: 20, borderRadius: 2 }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 12, color: T.text }}>{title}</h3>
                  <p style={{ fontSize: '.87rem', color: T.muted, lineHeight: 1.85 }}>{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <a href={PLATFORM.parentSignup}
              style={{ padding: '15px 36px', borderRadius: 50, fontSize: '1rem', background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accentD; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.transform = 'translateY(0)' }}>
              Start free trial
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
