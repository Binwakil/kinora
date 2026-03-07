import { STATS } from '../../data/constants'

export default function Stats({ T }) {
  return (
    <div style={{ background: T.statBg, padding: '38px 5%', borderTop: `1px solid ${T.accent}22` }}>
      <div className="grid-4" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {STATS.map(({ value, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <p className="sf" style={{ fontSize: '2.1rem', fontWeight: 600, color: T.cream, lineHeight: 1 }}>{value}</p>
            <p style={{ fontSize: '.8rem', color: '#A08570', marginTop: 6 }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
