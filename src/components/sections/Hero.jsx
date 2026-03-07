import { scrollTo } from '../../utils/scroll'
import { IMG } from '../../data/constants'
import Img from '../ui/Img'
import { StarIcon } from '../ui/Icons'

export default function Hero({ T }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: T.dark
        ? `linear-gradient(150deg,${T.bg} 0%,${T.bgAlt} 60%,#2A1808 100%)`
        : 'linear-gradient(150deg,#FAF6F0 0%,#F5EDE0 55%,#EDD9BC 100%)',
      padding: '120px 5% 80px',
      position: 'relative',
      overflow: 'hidden',
      scrollMarginTop: 88,
    }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '8%', right: '3%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${T.accent}22,transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '-5%', width: 320, height: 320, borderRadius: '50%', background: `radial-gradient(circle,${T.accent}14,transparent 70%)`, pointerEvents: 'none' }} />

      <div className="grid-2" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        {/* Left: copy */}
        <div>
          <div className="anim-fade-up-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${T.accent}14`, border: `1px solid ${T.border}`, borderRadius: 50, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: T.accent, display: 'inline-block' }} />
            <span style={{ fontSize: '.77rem', color: T.accent, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Now accepting families — first session free</span>
          </div>

          <h1 className="sf anim-fade-up-1" style={{ fontSize: 'clamp(2.8rem,5.5vw,4.8rem)', fontWeight: 600, lineHeight: 1.1, color: T.text, marginBottom: 24 }}>
            Your child.<br />
            <em style={{ color: T.accent, fontStyle: 'italic' }}>Their roots.</em><br />
            Kept alive.
          </h1>

          <p className="anim-fade-up-2" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: T.muted, maxWidth: 480, marginBottom: 40 }}>
            Live 1-on-1 sessions with personally vetted teachers who share your child's culture, language, and values — from Hausa to Mandarin, Yoruba to Arabic, across 30+ traditions.
          </p>

          <div className="anim-fade-up-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
            <button onClick={() => scrollTo('apply')}
              style={{ padding: '15px 34px', borderRadius: 50, fontSize: '1rem', background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accentD; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.transform = 'translateY(0)' }}>
              Apply for a Free Session
            </button>
            <button onClick={() => scrollTo('how-it-works')}
              style={{ padding: '15px 26px', borderRadius: 50, fontSize: '1rem', background: 'transparent', color: T.accent, border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.accent }}>
              How It Works ↓
            </button>
          </div>

          <div className="anim-fade-up-3" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['🔍 Every teacher vetted', '🎁 First session free', '✓ Cancel anytime'].map(t => (
              <span key={t} style={{ fontSize: '.82rem', color: T.muted, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div className="anim-float" style={{ width: 420, height: 500, borderRadius: '42% 58% 50% 50%/48% 44% 56% 52%', overflow: 'hidden', boxShadow: `0 40px 100px ${T.accent}30`, border: `3px solid ${T.border}` }}>
            <Img src={IMG.hero} alt="Child learning online with parent" style={{ width: '100%', height: '100%' }} T={T} />
          </div>
          {/* Floating badges */}
          <div style={{ position: 'absolute', top: 24, right: -8, background: T.card, borderRadius: 16, padding: '12px 18px', boxShadow: `0 8px 30px ${T.accent}18`, border: `1px solid ${T.border}` }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>{[1, 2, 3, 4, 5].map(i => <StarIcon key={i} color={T.accent} />)}</div>
            <p style={{ fontSize: '.73rem', color: T.muted, fontWeight: 500 }}>Trusted by 200+ families</p>
          </div>
          <div style={{ position: 'absolute', bottom: 44, left: -20, background: T.card, borderRadius: 16, padding: '12px 18px', boxShadow: `0 8px 30px ${T.accent}18`, border: `1px solid ${T.border}` }}>
            <p style={{ fontSize: '.73rem', color: T.accent, fontWeight: 600, marginBottom: 2 }}>🌍 30+ Cultures</p>
            <p style={{ fontSize: '.7rem', color: T.muted }}>Africa · Asia · Arab · Europe</p>
          </div>
        </div>
      </div>
    </section>
  )
}
