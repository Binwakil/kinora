import FadeIn from '../ui/FadeIn'

const PROBLEMS = [
  { icon: '💬', hl: false, title: 'Language fades',            desc: "Your child starts answering in English. Then stops asking for translations. One day they can't speak to their grandparents without you translating." },
  { icon: '🏛️', hl: true,  title: 'Traditions grow distant',   desc: "Celebrations happen but the meaning becomes harder to explain. Children participate without truly understanding what they're celebrating." },
  { icon: '🪞', hl: false, title: 'Identity becomes uncertain', desc: "Neither fully from here, nor fully from there. Without roots, confidence cracks. They don't know who they are — or who they're allowed to be." },
]

export default function Problem({ T }) {
  return (
    <section style={{ background: T.bgDeep, padding: '100px 5% 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 0%,${T.accent}18 0%,transparent 65%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <FadeIn>
          <p className="sf" style={{ textAlign: 'center', fontSize: '.82rem', color: T.accentL, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 20 }}>The real cost of distance</p>
          <h2 className="sf" style={{ textAlign: 'center', fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#F0E4D0', fontWeight: 500, lineHeight: 1.25, marginBottom: 64 }}>
            Something quiet happens when a family moves abroad.
          </h2>
        </FadeIn>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {PROBLEMS.map(({ icon, hl, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.15}>
              <div style={{ background: hl ? T.accent : 'transparent', border: `1px solid ${T.accent}44`, borderRadius: 4, padding: '48px 36px', height: '100%' }}>
                <div style={{ fontSize: '2.3rem', marginBottom: 18 }}>{icon}</div>
                <h3 className="sf" style={{ fontSize: '1.5rem', color: '#F0E4D0', marginBottom: 14, fontWeight: 500 }}>{title}</h3>
                <p style={{ fontSize: '.9rem', color: '#C8B09A', lineHeight: 1.88 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="sf" style={{ textAlign: 'center', fontSize: 'clamp(1.2rem,2.2vw,1.8rem)', color: '#C8B09A', marginTop: 72, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6 }}>
            "You didn't cross borders so your children would forget where they came from.<br />You did it so they could carry both worlds with them."
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
