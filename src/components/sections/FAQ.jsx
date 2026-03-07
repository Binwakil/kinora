import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import { FAQ as FAQ_DATA } from '../../data/constants'

export default function FAQ({ T }) {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: T.bgAlt, padding: '120px 5%', borderTop: `1px solid ${T.border}`, scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <FadeIn>
          <p style={{ fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16, textAlign: 'center' }}>Questions</p>
          <h2 className="sf" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, marginBottom: 56, textAlign: 'center', color: T.text }}>
            Everything you need to know.
          </h2>
        </FadeIn>

        {FAQ_DATA.map(({ q, a }, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div style={{ borderBottom: `1px solid ${T.border}`, paddingTop: 24, paddingBottom: 24 }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 18, padding: 0 }}>
                <span style={{ fontWeight: 600, fontSize: '.97rem', color: T.text, lineHeight: 1.5 }}>{q}</span>
                <span style={{ width: 27, height: 27, borderRadius: '50%', border: `1.5px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem', color: T.accent, fontWeight: 300, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s' }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 240 : 0, overflow: 'hidden', transition: 'max-height .4s ease' }}>
                <p style={{ fontSize: '.89rem', color: T.muted, lineHeight: 1.9, paddingTop: 13, paddingRight: 40 }}>{a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
