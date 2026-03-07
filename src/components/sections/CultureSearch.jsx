import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import { scrollTo } from '../../utils/scroll'
import { CULTURES, CULTURE_TABS } from '../../data/cultures'

export default function CultureSearch({ T }) {
  const [tab, setTab]               = useState('all')
  const [search, setSearch]         = useState('')
  const [showAll, setShowAll]       = useState(false)

  const filtered = CULTURES.filter(c => {
    const matchTab = tab === 'all' || c.cat === tab
    const q = search.toLowerCase()
    return matchTab && (!q || c.name.toLowerCase().includes(q) || c.region.toLowerCase().includes(q) || c.subjects.some(s => s.toLowerCase().includes(q)))
  })

  const preview = search ? filtered : filtered.slice(0, 6)
  const overflow = filtered.length - 6

  return (
    <section id="cultures" style={{ background: T.bg, padding: '120px 5%', scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>We speak your language</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 16, color: T.text }}>Find your culture and language.</h2>
          <p style={{ fontSize: '.97rem', color: T.muted, maxWidth: 580, marginBottom: 48, lineHeight: 1.85 }}>
            From Hausa to Mandarin, Yoruba to Ukrainian — 30+ cultures across Africa, Asia, the Arab world, and Europe.
          </p>
        </FadeIn>

        {/* Search */}
        <FadeIn delay={0.08}>
          <div style={{ position: 'relative', maxWidth: 500, marginBottom: 32 }}>
            <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', fontSize: '1rem', pointerEvents: 'none' }}>🔍</span>
            <input value={search}
              onChange={e => { setSearch(e.target.value); setShowAll(true) }}
              placeholder="Search language, culture or region…"
              style={{ width: '100%', padding: '14px 18px 14px 48px', borderRadius: 50, border: `1.5px solid ${T.border}`, background: T.inputBg, fontFamily: "'DM Sans',sans-serif", fontSize: '.93rem', color: T.text, outline: 'none', transition: 'border-color .25s,box-shadow .25s' }}
              onFocus={e => { e.target.style.borderColor = T.accent; e.target.style.boxShadow = `0 0 0 3px ${T.accent}20` }}
              onBlur={e => { e.target.style.borderColor = T.border; e.target.style.boxShadow = 'none' }}
            />
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.12}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {CULTURE_TABS.map(({ key, label, emoji }) => (
              <button key={key}
                onClick={() => { setTab(key); setShowAll(false); setSearch('') }}
                style={{ padding: '9px 18px', borderRadius: 50, fontSize: '.82rem', fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all .2s', border: `1.5px solid ${tab === key ? T.accent : T.border}`, background: tab === key ? T.accent : 'transparent', color: tab === key ? '#fff' : T.text }}>
                {emoji} {label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Preview grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18, marginBottom: 24 }}>
          {preview.map((c, i) => (
            <FadeIn key={c.name} delay={Math.min(i * 0.05, 0.3)}>
              <div className="card-hover" style={{ background: T.card, borderRadius: 18, padding: '22px 22px 18px', border: `1.5px solid ${T.border}`, height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: '1.9rem', lineHeight: 1 }}>{c.emoji}</span>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: T.text, marginBottom: 2 }}>{c.name}</h3>
                      <p style={{ fontSize: '.74rem', color: T.accent, fontWeight: 500 }}>{c.region}</p>
                    </div>
                  </div>
                  <div style={{ background: T.bgAlt, borderRadius: 50, padding: '4px 12px', flexShrink: 0 }}>
                    <p style={{ fontSize: '.73rem', fontWeight: 600, color: T.accentD, whiteSpace: 'nowrap' }}>{c.teachers} teachers</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
                  {c.subjects.map(s => <span key={s} style={{ background: `${T.accent}14`, color: T.accent, fontSize: '.7rem', padding: '3px 10px', borderRadius: 50 }}>{s}</span>)}
                </div>
                <button onClick={() => scrollTo('apply')}
                  style={{ width: '100%', padding: '9px', borderRadius: 10, fontSize: '.8rem', background: 'transparent', color: T.accent, border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.accent }}>
                  Request a Teacher →
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 20px', background: T.bgAlt, borderRadius: 20, border: `1px solid ${T.border}` }}>
            <p style={{ fontSize: '1.6rem', marginBottom: 10 }}>🔍</p>
            <p style={{ fontSize: '.96rem', color: T.muted }}>No results for "<strong style={{ color: T.text }}>{search}</strong>"</p>
            <p style={{ fontSize: '.84rem', color: T.muted, marginTop: 8 }}>
              Don't see yours?{' '}
              <button onClick={() => scrollTo('apply')} style={{ color: T.accent, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: '.84rem' }}>
                Apply and tell us
              </button>{' '}— we'll find a teacher.
            </p>
          </div>
        )}

        {/* Show all toggle */}
        {!search && overflow > 0 && (
          <>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setShowAll(v => !v)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 30px', borderRadius: 50, fontSize: '.88rem', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", background: T.bgAlt, color: T.text, border: `1.5px solid ${T.border}`, transition: 'all .25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text }}>
                <span>{showAll ? 'Hide cultures' : `View all ${filtered.length} cultures`}</span>
                <span style={{ transition: 'transform .3s', transform: showAll ? 'rotate(180deg)' : 'rotate(0)', display: 'inline-block' }}>↓</span>
              </button>
            </div>

            <div style={{ maxHeight: showAll ? '700px' : '0px', overflow: 'hidden', transition: 'max-height .55s cubic-bezier(.4,0,.2,1)', marginTop: showAll ? 24 : 0 }}>
              <div style={{ maxHeight: 680, overflowY: 'auto', border: `1.5px solid ${T.border}`, borderRadius: 20, background: T.bgAlt, padding: '24px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <p style={{ fontSize: '.8rem', color: T.muted }}>{filtered.length} cultures · scroll to explore</p>
                  <button onClick={() => setShowAll(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.muted, fontSize: '.82rem', fontFamily: 'inherit', fontWeight: 500 }}>✕ Close</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
                  {filtered.map(c => (
                    <div key={c.name} className="card-hover" style={{ background: T.card, borderRadius: 14, padding: '16px 16px 14px', border: `1.5px solid ${T.border}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: '1.5rem' }}>{c.emoji}</span>
                          <div>
                            <p style={{ fontSize: '.9rem', fontWeight: 600, color: T.text }}>{c.name}</p>
                            <p style={{ fontSize: '.7rem', color: T.accent }}>{c.region}</p>
                          </div>
                        </div>
                        <span style={{ fontSize: '.7rem', fontWeight: 600, color: T.accentD, background: T.bg, borderRadius: 50, padding: '3px 9px' }}>{c.teachers}</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {c.subjects.map(s => <span key={s} style={{ background: `${T.accent}12`, color: T.accent, fontSize: '.67rem', padding: '2px 8px', borderRadius: 50 }}>{s}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Request banner */}
        <FadeIn delay={0.2}>
          <div style={{ background: T.bgAlt, borderRadius: 20, padding: '26px 34px', marginTop: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, border: `1px solid ${T.border}` }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: '.97rem', color: T.text, marginBottom: 4 }}>Don't see your language?</p>
              <p style={{ fontSize: '.85rem', color: T.muted }}>We're adding teachers every week. Tell us your background.</p>
            </div>
            <button onClick={() => scrollTo('apply')}
              style={{ padding: '12px 26px', borderRadius: 50, fontSize: '.88rem', background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, flexShrink: 0, transition: 'all .25s' }}
              onMouseEnter={e => e.currentTarget.style.background = T.accentD}
              onMouseLeave={e => e.currentTarget.style.background = T.accent}>
              Request Your Culture
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
