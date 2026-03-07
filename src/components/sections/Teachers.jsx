import FadeIn from '../ui/FadeIn'
import Img from '../ui/Img'
import { scrollTo } from '../../utils/scroll'
import { TEACHERS, IMG } from '../../data/constants'

export default function Teachers({ T }) {
  return (
    <section id="teachers" style={{ background: T.bgAlt, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Meet the teachers</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 16, color: T.text }}>Experts in who your child is.</h2>
          <p style={{ fontSize: '.96rem', color: T.muted, maxWidth: 500, marginBottom: 68, lineHeight: 1.85 }}>
            Every teacher passed our vetting process, a background check, and a cultural assessment interview.
          </p>
        </FadeIn>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {TEACHERS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <div className="section-card-hover" style={{ background: T.card, borderRadius: 20, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <div style={{ height: 210, overflow: 'hidden' }}>
                  <Img src={IMG[t.img]} alt={t.name} style={{ width: '100%', height: '100%' }} T={T} />
                </div>
                <div style={{ padding: '22px 24px 26px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: '1rem', color: T.text }}>{t.name}</h3>
                      <p style={{ fontSize: '.78rem', color: T.accent, fontWeight: 500, marginTop: 2 }}>📍 {t.origin}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '.86rem', fontWeight: 700, color: T.text }}>⭐ {t.rating}</p>
                      <p style={{ fontSize: '.72rem', color: T.muted }}>{t.sessions} sessions</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 12 }}>
                    {t.subjects.map(s => <span key={s} style={{ background: `${T.accent}14`, color: T.accent, fontSize: '.71rem', padding: '3px 10px', borderRadius: 50 }}>{s}</span>)}
                  </div>
                  <button onClick={() => scrollTo('apply')}
                    style={{ width: '100%', marginTop: 16, padding: '9px', borderRadius: 10, fontSize: '.82rem', background: 'transparent', color: T.accent, border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.accent }}>
                    Request Similar Teacher
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p style={{ textAlign: 'center', marginTop: 32, fontSize: '.85rem', color: T.muted }}>
            Sample profiles — your matched teacher is selected specifically for your family.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
