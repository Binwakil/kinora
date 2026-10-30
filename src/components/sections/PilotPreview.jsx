import { PLATFORM } from '../../config'

export default function PilotPreview({ T }) {
  const tracks = [
    { title: 'Hausa only', description: 'A planned weekly 45-minute language class, with conversation, stories and activities.' },
    { title: 'Hausa + Quran', description: 'The planned Hausa class plus two weekly 45-minute Quran sessions, when your family chooses this track.' },
  ]
  return (
    <section id="pilot" style={{ background: T.bgAlt, padding: '72px 24px', borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p className="brand-eyebrow" style={{ color: T.accent }}>KINORA Pilot Launch · In preparation</p>
        <h2 className="sf" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.18, margin: '18px 0' }}>Starting with Hausa.<br />Quran when your family chooses it.</h2>
        <p style={{ color: T.muted, maxWidth: 760, lineHeight: 1.8 }}>Our first planned cohort is for children aged 6–12, in small groups matched by age, level and time zone. KINORA’s wider mission includes heritage languages across immigrant communities.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 20, margin: '30px 0' }}>
          {tracks.map(track => <div key={track.title} style={{ padding: 28, border: `1px solid ${T.border}`, borderRadius: 16, background: T.card }}>
            <h3 className="sf" style={{ fontSize: '1.6rem', marginBottom: 12 }}>{track.title}</h3>
            <p style={{ color: T.muted, lineHeight: 1.8 }}>{track.description}</p>
          </div>)}
        </div>
        <p style={{ color: T.muted, maxWidth: 800, lineHeight: 1.8, marginBottom: 22 }}>Paid enrollment is not open. Group classes, term payments and teacher availability are still being prepared. We will confirm the actual dates, price, country coverage and full terms before offering a place.</p>
        <a className="brand-button" href={PLATFORM.parentSignup} style={{ display: 'inline-flex', background: T.accent, color: '#fff' }}>Apply for the Hausa pilot</a>
        <p style={{ color: T.muted, fontSize: '.85rem', lineHeight: 1.8, marginTop: 14 }}>Create your parent account and complete your family profile to register interest. Our team will review your child’s needs before confirming a place. No payment is due at this stage.</p>
      </div>
    </section>
  )
}
