import FadeIn from '../ui/FadeIn'
import Img from '../ui/Img'
import { StarIcon } from '../ui/Icons'
import { TESTIMONIALS, IMG } from '../../data/constants'

export default function Testimonials({ T }) {
  return (
    <section style={{ background: T.bg, padding: '120px 5%', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>From our families</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 72, color: T.text }}>The moments that matter most.</h2>
        </FadeIn>

        {/* 2×2 grid of testimonial cards */}
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ background: T.card, borderRadius: 20, overflow: 'hidden', border: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 170, overflow: 'hidden' }}>
                  <Img src={IMG[t.img]} alt={t.name} style={{ width: '100%', height: '100%' }} T={T} />
                </div>
                <div style={{ padding: '26px 26px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                    {[1, 2, 3, 4, 5].map(n => <StarIcon key={n} color={T.accent} />)}
                  </div>
                  <p className="sf" style={{ fontSize: '1.06rem', color: T.text, lineHeight: 1.78, fontStyle: 'italic', fontWeight: 400, flex: 1, marginBottom: 20 }}>
                    "{t.quote}"
                  </p>
                  <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 16 }}>
                    <p style={{ fontWeight: 600, fontSize: '.87rem', color: T.text }}>{t.name}</p>
                    <p style={{ fontSize: '.76rem', color: T.muted, marginTop: 2 }}>{t.location} · {t.child}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
