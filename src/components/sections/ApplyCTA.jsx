import FadeIn from '../ui/FadeIn'
import TreeIcon from '../ui/TreeIcon'
import { scrollTo } from '../../utils/scroll'

export default function ApplyCTA({ T }) {
  const handleApply = () => {
    // TODO: Replace with your real application form / Typeform / signup flow
    alert('Application form coming soon!')
  }

  return (
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
            <button onClick={handleApply}
              style={{ padding: '16px 38px', borderRadius: 50, fontSize: '1rem', background: '#F0E4D0', color: T.accentD, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all .25s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Apply for a Free Session
            </button>
            <button onClick={() => scrollTo('teachers')}
              style={{ padding: '16px 30px', borderRadius: 50, fontSize: '1rem', background: 'transparent', color: '#C8A080', border: `1.5px solid ${T.accent}`, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8A080' }}>
              I'm a Teacher →
            </button>
          </div>

          <p style={{ color: '#5A3A28', fontSize: '.77rem' }}>No credit card required · First session always free</p>
        </FadeIn>
      </div>
    </section>
  )
}
