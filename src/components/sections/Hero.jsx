import { scrollTo } from '../../utils/scroll'
import { PLATFORM } from '../../config'

export default function Hero({ T }) {
  return (
    <section id="hero" className="heritage-hero" style={{ background: T.bg, color: T.text }}>
      <div className="heritage-hero-grid">
        <div>
          <p className="brand-eyebrow" style={{ color: T.accent }}>Language. Culture. Connection.</p>
          <h1 className="sf heritage-headline">A little closer<br />to <em style={{ color: T.accent }}>home.</em></h1>
          <p className="heritage-intro" style={{ color: T.muted }}>Help your child find their own connection to your language, stories, and traditions—with a teacher who understands what you want to pass on.</p>
          <p className="heritage-audience" style={{ color: T.muted }}>For immigrant families across Western countries. Every community belongs here.</p>
          <div className="heritage-actions">
            <a className="brand-button" href={PLATFORM.parentSignup} style={{ background: T.accent, color: '#fff' }}>Apply for the Hausa pilot <span aria-hidden="true">→</span></a>
            <a className="brand-button" href={PLATFORM.waitlist} style={{ color: T.accent, border: `1px solid ${T.accent}` }}>Join the heritage waitlist</a>
          </div>
          <p className="heritage-caption" style={{ color: T.muted }}>Hausa pilot: ages 6–12, with optional Quran learning. Apply to register your family’s interest; places are confirmed after review. For other languages, cultures and traditions, join the free waitlist.</p>
          <button className="brand-text-button" onClick={() => scrollTo('cultures')} style={{ color: T.text, marginTop: 12 }}>Explore languages & cultures <span aria-hidden="true">↗</span></button>
        </div>
        <div className="lesson-paper" style={{ background: T.card, borderColor: T.border }}>
          <div className="lesson-paper-top" style={{ borderColor: T.border }}><span className="brand-eyebrow" style={{ color: T.accent }}>A glimpse of a lesson</span><span style={{ color: T.muted }}>Illustrative example</span></div>
          <p className="sf lesson-paper-title">Small conversations.<br />Lasting connections.</p>
          <div className="lesson-line" style={{ borderColor: T.border }}><span style={{ color: T.accent }}>01</span><div><h2>Start with a story</h2><p style={{ color: T.muted }}>A family celebration. A favourite food. A place that feels like home.</p></div></div>
          <div className="lesson-line" style={{ borderColor: T.border }}><span style={{ color: T.accent }}>02</span><div><h2>Find the words together</h2><p style={{ color: T.muted }}>Practice at your child’s pace, with room for questions and laughter.</p></div></div>
          <div className="lesson-line" style={{ borderColor: T.border }}><span style={{ color: T.accent }}>03</span><div><h2>Bring it into everyday life</h2><p style={{ color: T.muted }}>Try one new phrase with a relative. Keep the conversation going.</p></div></div>
          <p className="lesson-paper-note" style={{ color: T.accent }}>Your family’s heritage. Your child’s way of discovering it.</p>
        </div>
      </div>
    </section>
  )
}
