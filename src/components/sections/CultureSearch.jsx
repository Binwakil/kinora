import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import { PLATFORM } from '../../config'
import { CULTURES, CULTURE_TABS } from '../../data/cultures'
import { CULTURE_COUNT_LABEL } from '../../data/constants'

export default function CultureSearch({ T }) {
  const [tab, setTab] = useState('all')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filtered = CULTURES.filter(c => {
    const q = search.toLowerCase()
    const matchTab = tab === 'all' || c.cat === tab
    return matchTab && (!q || c.name.toLowerCase().includes(q) || c.region.toLowerCase().includes(q) || c.subjects.some(s => s.toLowerCase().includes(q)))
  })

  const preview = search || showAll ? filtered : filtered.slice(0, 6)
  const hiddenCount = Math.max(filtered.length - 6, 0)

  return (
    <section id="cultures" style={{ background: T.bg, padding: '120px 5%', scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 42 }}>
            <div>
              <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>We speak your language</p>
              <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 16, color: T.text }}>Find your culture and language.</h2>
              <p style={{ fontSize: '.97rem', color: T.muted, maxWidth: 650, lineHeight: 1.85 }}>
                From Hausa to Mandarin, Yoruba to Ukrainian, Tamil to Haitian Creole. Explore community interests across Africa, the Middle East, Asia, Europe, and the Americas. Teacher availability is confirmed separately.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(100px,1fr))', gap: 10, minWidth: 240 }}>
              <CultureStat value={CULTURE_COUNT_LABEL} label="Culture paths" T={T} />
              <CultureStat value="8" label="Regions" T={T} />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ position: 'relative', maxWidth: 540, marginBottom: 28 }}>
            <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', fontSize: '.72rem', fontWeight: 800, color: T.accent, pointerEvents: 'none', letterSpacing: '.06em', textTransform: 'uppercase' }}>Search</span>
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setShowAll(true) }}
              placeholder="Language, culture, country, region..."
              style={{ width: '100%', padding: '14px 18px 14px 86px', borderRadius: 50, border: `1.5px solid ${T.border}`, background: T.inputBg, fontFamily: "'DM Sans',sans-serif", fontSize: '.93rem', color: T.text, outline: 'none', transition: 'border-color .25s,box-shadow .25s' }}
              onFocus={e => { e.target.style.borderColor = T.accent; e.target.style.boxShadow = `0 0 0 3px ${T.accent}20` }}
              onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow = 'none' }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="culture-tabs" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 34 }}>
            {CULTURE_TABS.map(({ key, label, emoji }) => (
              <button
                key={key}
                onClick={() => { setTab(key); setShowAll(false); setSearch('') }}
                style={{ padding: '9px 16px', borderRadius: 50, fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all .2s', border: `1.5px solid ${tab === key ? T.accent : T.border}`, background: tab === key ? T.accent : 'transparent', color: tab === key ? '#fff' : T.text }}
              >
                <span style={{ fontSize: '.66rem', opacity: .75, marginRight: 6 }}>{emoji}</span>{label}
              </button>
            ))}
          </div>
        </FadeIn>

        {filtered.length === 0 ? (
          <EmptyCultureSearch T={T} search={search} />
        ) : (
          <div className="culture-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 18, marginBottom: 24 }}>
            {preview.map((c, i) => (
              <FadeIn key={c.name} delay={Math.min(i * 0.035, 0.25)}>
                <CultureCard T={T} culture={c} />
              </FadeIn>
            ))}
          </div>
        )}

        {!search && hiddenCount > 0 && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowAll(v => !v)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 30px', borderRadius: 50, fontSize: '.88rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", background: T.bgAlt, color: T.text, border: `1.5px solid ${T.border}`, transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text }}
            >
              {showAll ? 'Show fewer cultures' : `View all ${filtered.length} cultures`}
              <span style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .25s' }}>v</span>
            </button>
          </div>
        )}

        <FadeIn delay={0.2}>
          <div className="culture-request" style={{ background: T.bgAlt, borderRadius: 20, padding: '26px 34px', marginTop: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, border: `1px solid ${T.border}` }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: '.97rem', color: T.text, marginBottom: 4 }}>Do not see your exact community?</p>
              <p style={{ fontSize: '.85rem', color: T.muted }}>Join the waitlist for any language, culture or tradition. Tell us when your family would like to start.</p>
            </div>
            <button
              onClick={() => window.location.assign(PLATFORM.waitlist)}
              style={{ padding: '12px 26px', borderRadius: 50, fontSize: '.88rem', background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, flexShrink: 0, transition: 'all .25s' }}
              onMouseEnter={e => e.currentTarget.style.background = T.accentD}
              onMouseLeave={e => e.currentTarget.style.background = T.accent}
            >
              Join the waitlist
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function CultureStat({ value, label, T }) {
  return (
    <div style={{ border: `1px solid ${T.border}`, background: T.card, borderRadius: 16, padding: '16px 18px' }}>
      <p className="sf" style={{ fontSize: '1.8rem', color: T.accent, lineHeight: 1, fontWeight: 600 }}>{value}</p>
      <p style={{ fontSize: '.74rem', color: T.muted, marginTop: 6, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</p>
    </div>
  )
}

function CultureCard({ culture: c, T }) {
  const availability = ['Register interest', 'gray']
  const availabilityStyle = {
    green: { background: '#E7F1E8', color: '#4E7A52' },
    amber: { background: '#F6E9D2', color: '#8A5A18' },
    gray: { background: T.bgAlt, color: T.muted },
  }[availability[1]]
  return (
    <div className="card-hover" style={{ background: T.card, borderRadius: 18, padding: '22px 22px 18px', border: `1.5px solid ${T.border}`, height: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
          <span style={{ minWidth: 38, height: 38, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: `${T.accent}14`, color: T.accent, fontSize: '.72rem', fontWeight: 800, lineHeight: 1 }}>{c.emoji}</span>
          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: T.text, marginBottom: 2 }}>{c.name}</h3>
            <p style={{ fontSize: '.74rem', color: T.accent, fontWeight: 600 }}>{c.region}</p>
          </div>
        </div>
        <div style={{ borderRadius: 50, padding: '4px 12px', flexShrink: 0, ...availabilityStyle }}>
          <p style={{ fontSize: '.73rem', fontWeight: 800, whiteSpace: 'nowrap' }}>{availability[0]}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
        {c.subjects.map(s => <span key={s} style={{ background: `${T.accent}14`, color: T.accent, fontSize: '.7rem', padding: '3px 10px', borderRadius: 50 }}>{s}</span>)}
      </div>
      <button
        onClick={() => window.location.assign(PLATFORM.parentSignup)}
        style={{ width: '100%', padding: '9px', borderRadius: 10, fontSize: '.8rem', background: 'transparent', color: T.accent, border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, transition: 'all .25s' }}
        onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.accent }}
      >
        Request {c.name}
      </button>
    </div>
  )
}

function EmptyCultureSearch({ T, search }) {
  return (
    <div style={{ textAlign: 'center', padding: '48px 20px', background: T.bgAlt, borderRadius: 20, border: `1px solid ${T.border}` }}>
      <p style={{ fontSize: '.96rem', color: T.muted }}>No results for "<strong style={{ color: T.text }}>{search}</strong>"</p>
      <p style={{ fontSize: '.84rem', color: T.muted, marginTop: 8 }}>
        Do not see yours?{' '}
        <button onClick={() => window.location.assign(PLATFORM.parentSignup)} style={{ color: T.accent, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: '.84rem' }}>
          Apply and tell us
        </button>{' '}and we will look for a teacher.
      </p>
    </div>
  )
}
