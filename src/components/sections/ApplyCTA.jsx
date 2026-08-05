import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import TreeIcon from '../ui/TreeIcon'
import { scrollTo } from '../../utils/scroll'
import { API_BASE, PLATFORM } from '../../config'

function ApplicationModal({ T, onClose }) {
  const [step, setStep] = useState('form')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', childAge: '', culture: '', note: '' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/v1/public/parent-applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'We could not submit your application right now. Please try again in a moment.')
      }
      setStep('thanks')
    } catch (err) {
      setError(err instanceof Error && err.message.length < 200
        ? err.message
        : 'We could not submit your application right now. Please try again in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  // Carry what they already typed into the account-creation form.
  const signupUrl = `${PLATFORM.parentSignup}?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}`

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
              We'll review your application and reach out within 48 hours
              with your teacher matches.
            </p>
            <p style={{ fontSize: '.82rem', color: T.accent, fontWeight: 600, marginBottom: 28 }}>
              Watch for our email at {form.email}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={signupUrl}
                style={{ display: 'block', padding: '13px 32px', borderRadius: 50, background: T.accent, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '.9rem', textAlign: 'center', textDecoration: 'none', transition: 'all .2s' }}
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
              Start free trial
            </h3>
            <p style={{ fontSize: '.84rem', color: T.muted, marginBottom: 28, lineHeight: 1.75 }}>
              No credit card. We'll personally match your child with the right teacher.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={lbl}>Your Name *</label>
                <input required value={form.name} onChange={set('name')} placeholder="e.g. Amara Johnson" style={inp}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <div>
                <label style={lbl}>Email Address *</label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" style={inp}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={lbl}>Child's Age *</label>
                  <select required value={form.childAge} onChange={set('childAge')}
                    style={{ ...inp, cursor: 'pointer' }}>
                    <option value="">Select…</option>
                    {['4–6', '7–9', '10–12', '13–15', '16+'].map(a => <option key={a} value={a}>{a} yrs</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Cultural Background *</label>
                  <input required value={form.culture} onChange={set('culture')} placeholder="e.g. Yoruba, Tamil…" style={inp}
                    onFocus={e => e.target.style.borderColor = T.accent}
                    onBlur={e => e.target.style.borderColor = T.border} />
                </div>
              </div>
              <div>
                <label style={{ ...lbl, textTransform: 'none', letterSpacing: 0, fontSize: '.82rem' }}>
                  What matters most to you?{' '}
                  <span style={{ fontWeight: 400, color: T.muted, opacity: 0.75 }}>(optional)</span>
                </label>
                <textarea value={form.note} onChange={set('note')} rows={3}
                  placeholder="Language fluency, cultural traditions, connecting with grandparents…"
                  style={{ ...inp, resize: 'vertical', minHeight: 82 }}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              {error && (
                <div style={{
                  padding: '11px 14px', borderRadius: 10, fontSize: '.83rem', lineHeight: 1.6,
                  background: 'rgba(168,58,58,0.09)', color: '#A83A3A',
                  border: '1px solid rgba(168,58,58,0.25)',
                }}>
                  {error}
                </div>
              )}
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
                We respond within 48 hours · First session always free
              </p>
              <p style={{ fontSize: '.7rem', color: T.muted, textAlign: 'center', lineHeight: 1.6, opacity: 0.85 }}>
                By applying you agree to our{' '}
                <a href="/terms" target="_blank" rel="noreferrer" style={{ color: T.accent, textDecoration: 'underline' }}>Terms</a>
                {' '}and{' '}
                <a href="/privacy" target="_blank" rel="noreferrer" style={{ color: T.accent, textDecoration: 'underline' }}>Privacy Policy</a>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function ApplyCTA({ T }) {
  const [showModal, setShowModal] = useState(false)
  const open = () => setShowModal(true)
  const close = () => setShowModal(false)

  return (
    <>
      {showModal && <ApplicationModal T={T} onClose={close} />}

      <section id="apply" style={{ background: T.bgDeep, padding: '130px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden', scrollMarginTop: 88 }}>
        {/* Radial glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle,${T.accent}33,transparent 65%)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 660, margin: '0 auto' }}>
          <FadeIn>
            <TreeIcon size={64} color="#C8A080" />
            <h2 className="sf" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 600, color: '#F0E4D0', marginTop: 28, marginBottom: 22, lineHeight: 1.2 }}>
              Identity doesn't disappear<br />
              <em style={{ color: '#C8A080' }}>with distance.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: '#C8B09A', lineHeight: 1.9, maxWidth: 460, margin: '0 auto 44px' }}>
              It just needs a little help. Apply today and we'll personally match your child with a teacher who truly understands where they come from.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
              <button onClick={open}
                style={{ padding: '16px 38px', borderRadius: 50, fontSize: '1rem', background: '#F0E4D0', color: T.accentD, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all .25s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Start free trial
              </button>
              <a href={PLATFORM.teacherSignup}
                style={{ padding: '16px 30px', borderRadius: 50, fontSize: '1rem', background: 'transparent', color: '#C8A080', border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s', textDecoration: 'none', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8A080' }}>
                I'm a Teacher →
              </a>
            </div>

            <p style={{ color: '#5A3A28', fontSize: '.77rem' }}>No credit card required · First session always free</p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
