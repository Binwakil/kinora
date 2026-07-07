import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import Img from '../ui/Img'
import TreeIcon from '../ui/TreeIcon'
import { scrollTo } from '../../utils/scroll'
import { TEACHERS, IMG } from '../../data/constants'
import { PLATFORM } from '../../config'

function TeacherModal({ T, onClose }) {
  const [step, setStep] = useState('form')
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', cultures: '', experience: '', note: '' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    // TODO: wire to real form endpoint — e.g. /api/v1/teacher-applications or Formspree
    await new Promise(r => setTimeout(r, 700))
    setStep('thanks')
    setSubmitting(false)
  }

  const inp = {
    width: '100%', padding: '12px 16px', borderRadius: 10,
    border: `1.5px solid ${T.border}`, fontSize: '.9rem',
    fontFamily: "'DM Sans',sans-serif", background: T.bgAlt,
    color: T.text, outline: 'none', transition: 'border-color .2s',
  }
  const lbl = {
    fontSize: '.75rem', fontWeight: 600, color: T.muted,
    letterSpacing: '.07em', textTransform: 'uppercase',
    display: 'block', marginBottom: 6,
  }

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,5,2,0.72)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
    >
      <div style={{
        background: T.card, borderRadius: 24, padding: '44px 40px',
        maxWidth: 500, width: '100%', position: 'relative',
        boxShadow: '0 40px 120px rgba(0,0,0,0.38)',
        border: `1px solid ${T.border}`,
        maxHeight: '92vh', overflowY: 'auto',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: T.bgAlt, border: `1px solid ${T.border}`,
          borderRadius: '50%', width: 32, height: 32,
          cursor: 'pointer', color: T.muted, fontSize: '1.2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'inherit', lineHeight: 1, transition: 'all .2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.muted }}>
          ×
        </button>

        {step === 'thanks' ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <TreeIcon size={52} color={T.accent} />
            <h3 className="sf" style={{ fontSize: '2rem', fontWeight: 600, color: T.text, marginTop: 20, marginBottom: 14 }}>
              Application received.
            </h3>
            <p style={{ fontSize: '.92rem', color: T.muted, lineHeight: 1.88, marginBottom: 20 }}>
              Thank you, <strong style={{ color: T.text }}>{form.name.split(' ')[0]}</strong>.
              Our team will review your application and reach out within 5 business days.
            </p>
            <p style={{ fontSize: '.82rem', color: T.accent, fontWeight: 600, marginBottom: 28 }}>
              Watch for our email at {form.email}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={PLATFORM.teacherSignup}
                style={{ display: 'block', padding: '13px 32px', borderRadius: 50, background: T.accent, color: '#fff', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '.9rem', textAlign: 'center', textDecoration: 'none', transition: 'all .2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                Continue to Create Account →
              </a>
              <button onClick={onClose}
                style={{ padding: '10px', borderRadius: 50, background: 'transparent', color: T.muted, border: `1px solid ${T.border}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: '.85rem', transition: 'all .2s' }}>
                I'll do this later
              </button>
            </div>
          </div>
        ) : (
          <>
            <TreeIcon size={34} color={T.accent} />
            <h3 className="sf" style={{ fontSize: '1.85rem', fontWeight: 600, color: T.text, marginTop: 16, marginBottom: 6 }}>
              Apply to Teach
            </h3>
            <p style={{ fontSize: '.84rem', color: T.muted, marginBottom: 28, lineHeight: 1.75 }}>
              Share your culture. Earn a fair income. We review every application personally.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={lbl}>Your Name *</label>
                <input required value={form.name} onChange={set('name')} placeholder="e.g. Amara Diallo" style={inp}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <div>
                <label style={lbl}>Email Address *</label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" style={inp}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <div>
                <label style={lbl}>Cultures & languages you teach *</label>
                <input required value={form.cultures} onChange={set('cultures')} placeholder="e.g. Yoruba, Hausa, Swahili…" style={inp}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <div>
                <label style={lbl}>Teaching or tutoring experience *</label>
                <input required value={form.experience} onChange={set('experience')} placeholder="e.g. 3 years private tutoring, classroom teacher…" style={inp}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <div>
                <label style={{ ...lbl, textTransform: 'none', letterSpacing: 0, fontSize: '.82rem' }}>
                  Why Kinora?{' '}
                  <span style={{ fontWeight: 400, color: T.muted, opacity: 0.75 }}>(optional)</span>
                </label>
                <textarea value={form.note} onChange={set('note')} rows={3}
                  placeholder="What draws you to teaching diaspora children about their heritage?"
                  style={{ ...inp, resize: 'vertical', minHeight: 82 }}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <button type="submit" disabled={submitting}
                style={{
                  padding: '14px', borderRadius: 12, fontSize: '1rem',
                  background: T.accent, color: '#fff', fontWeight: 600,
                  border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                  fontFamily: "'DM Sans',sans-serif",
                  opacity: submitting ? 0.72 : 1, transition: 'all .25s', marginTop: 4,
                }}
                onMouseEnter={e => !submitting && (e.currentTarget.style.transform = 'translateY(-1px)')}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                {submitting ? 'Submitting…' : 'Submit Application'}
              </button>
              <p style={{ fontSize: '.73rem', color: T.muted, textAlign: 'center', lineHeight: 1.6 }}>
                We review every application · Response within 5 business days
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function Teachers({ T }) {
  const [showTeacherModal, setShowTeacherModal] = useState(false)

  return (
    <>
      {showTeacherModal && <TeacherModal T={T} onClose={() => setShowTeacherModal(false)} />}

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

          {/* Teacher application banner */}
          <FadeIn delay={0.25}>
            <div style={{
              marginTop: 56, background: T.bgDeep, borderRadius: 20,
              padding: '36px 44px', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
              border: `1px solid ${T.accent}28`,
            }}>
              <div style={{ flex: 1, minWidth: 260 }}>
                <p style={{ fontSize: '.76rem', color: '#C8A080', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 10 }}>Teach with Kinora</p>
                <h3 className="sf" style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 600, color: '#F0E4D0', marginBottom: 10, lineHeight: 1.25 }}>
                  Share your culture.<br />Earn a fair income.
                </h3>
                <p style={{ fontSize: '.88rem', color: '#C8B09A', lineHeight: 1.8, maxWidth: 420 }}>
                  We're building a community of teachers who live and breathe their heritage.
                  We provide students, scheduling, and steady support — you bring the knowledge.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                <a href={PLATFORM.teacherSignup}
                  style={{ padding: '14px 30px', borderRadius: 50, background: '#F0E4D0', color: '#3A1A08', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontSize: '.95rem', textDecoration: 'none', textAlign: 'center', display: 'block', transition: 'all .25s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  Create Teacher Account →
                </a>
                <button onClick={() => setShowTeacherModal(true)}
                  style={{ padding: '10px 24px', borderRadius: 50, background: 'transparent', color: '#C8A080', border: '1px solid #C8A08055', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontSize: '.83rem', fontWeight: 500, transition: 'all .25s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8A080'; e.currentTarget.style.color = '#F0E4D0' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#C8A08055'; e.currentTarget.style.color = '#C8A080' }}>
                  Send us a message first
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
