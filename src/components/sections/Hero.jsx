import { scrollTo } from '../../utils/scroll'
import { CULTURE_COUNT_LABEL, IMG } from '../../data/constants'
import { PLATFORM } from '../../config'
import Img from '../ui/Img'
import { StarIcon } from '../ui/Icons'

function ScrollIndicator({ T }) {
  return (
    <button
      onClick={() => scrollTo('stats')}
      className="anim-bounce hero-scroll"
      style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.42 }}
    >
      <span style={{ fontSize: '.65rem', color: T.muted, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>Discover</span>
      <svg width="16" height="9" viewBox="0 0 16 9" fill="none" aria-hidden="true">
        <path d="M1 1L8 8L15 1" stroke={T.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default function Hero({ T }) {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: T.dark ? T.bg : 'linear-gradient(150deg,#FAF6F0 0%,#F5EDE0 58%,#EDD9BC 100%)', padding: '118px 5% 96px', position: 'relative', overflow: 'hidden', scrollMarginTop: 88 }}
    >
      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <div className="anim-fade-up-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${T.accent}14`, border: `1px solid ${T.border}`, borderRadius: 50, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: T.accent, display: 'inline-block' }} />
            <span style={{ fontSize: '.77rem', color: T.accent, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>Now accepting families - first session free</span>
          </div>

          <h1 className="sf anim-fade-up-1" style={{ fontSize: 'clamp(2.55rem,5.5vw,4.8rem)', fontWeight: 600, lineHeight: 1.08, color: T.text, marginBottom: 24 }}>
            Your child.<br />
            <em style={{ color: T.accent, fontStyle: 'italic' }}>Their roots.</em><br />
            Kept alive.
          </h1>

          <p className="anim-fade-up-2" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: T.muted, maxWidth: 520, marginBottom: 34 }}>
            Live 1-on-1 heritage lessons with personally vetted teachers who understand your child's language, region, culture, ethnicity, and values.
          </p>

          <div className="anim-fade-up-3 hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 34 }}>
            <a
              href={PLATFORM.parentSignup}
              style={{ padding: '15px 34px', borderRadius: 50, fontSize: '1rem', background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 700, transition: 'all .25s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accentD; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Start free trial
            </a>
            <button
              onClick={() => scrollTo('how-it-works')}
              style={{ padding: '15px 26px', borderRadius: 50, fontSize: '1rem', background: 'transparent', color: T.accent, border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 700, transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.accent }}
            >
              How it works
            </button>
          </div>

          <div className="anim-fade-up-3 hero-proof" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            {['Background-checked teachers', 'Parent can join any session', 'Free rematch if fit is wrong'].map(t => (
              <span key={t} style={{ fontSize: '.82rem', color: T.muted, fontWeight: 700, border: `1px solid ${T.border}`, background: T.card, borderRadius: 50, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M12 3l7 3v5c0 4.2-2.9 7-7 8-4.1-1-7-3.8-7-8V6z" stroke={T.accent} strokeWidth="2" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke={T.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
            <button
              onClick={() => scrollTo('trust')}
              style={{ fontSize: '.82rem', color: T.accent, fontWeight: 700, border: 'none', background: 'transparent', padding: '7px 2px', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              How we protect children
            </button>
          </div>
        </div>

        <div className="hero-media" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 'min(430px,100%)', aspectRatio: '0.84', borderRadius: 28, overflow: 'hidden', boxShadow: `0 34px 90px ${T.accent}24`, border: `3px solid ${T.border}` }}>
            <Img src={IMG.hero} alt="Child learning online with parent" style={{ width: '100%', height: '100%' }} T={T} />
          </div>
          <div className="hero-float-card hero-rating" style={{ position: 'absolute', top: 24, right: -8, background: T.card, borderRadius: 16, padding: '12px 18px', boxShadow: `0 8px 30px ${T.accent}18`, border: `1px solid ${T.border}` }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>{[1, 2, 3, 4, 5].map(i => <StarIcon key={i} color={T.accent} />)}</div>
            <p style={{ fontSize: '.73rem', color: T.muted, fontWeight: 700 }}>Trusted by diaspora families</p>
          </div>
          <div className="hero-float-card hero-cultures" style={{ position: 'absolute', bottom: 34, left: -20, background: T.card, borderRadius: 16, padding: '12px 18px', boxShadow: `0 8px 30px ${T.accent}18`, border: `1px solid ${T.border}` }}>
            <p style={{ fontSize: '.73rem', color: T.accent, fontWeight: 800, marginBottom: 2 }}>{CULTURE_COUNT_LABEL} culture paths</p>
            <p style={{ fontSize: '.7rem', color: T.muted }}>Africa - Asia - MENA - Americas</p>
          </div>
        </div>
      </div>

      <ScrollIndicator T={T} />
    </section>
  )
}
