import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import Img from '../ui/Img'
import { PlayIcon } from '../ui/Icons'
import { IMG, VIDEO } from '../../data/constants'

export default function VideoSection({ T }) {
  const [playing, setPlaying] = useState(false)

  return (
    <section style={{ background: T.bgAlt, padding: '100px 5%', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <FadeIn>
          <p style={{ textAlign: 'center', fontSize: '.8rem', color: T.accent, letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Why this matters</p>
          <h2 className="sf" style={{ textAlign: 'center', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 600, marginBottom: 16, color: T.text }}>
            Why cultural identity matters.
          </h2>
          <p style={{ textAlign: 'center', fontSize: '.95rem', color: T.muted, lineHeight: 1.8, maxWidth: 580, margin: '0 auto 48px' }}>
            This is exactly why Kinora exists. Watch from the 7-minute mark — it captures what migrant families carry, and what's at stake when culture is left behind.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: `0 30px 80px ${T.accent}22`, border: `1px solid ${T.border}` }}>
            {!playing ? (
              <div style={{ position: 'relative', paddingBottom: '56.25%', background: T.bgDeep, cursor: 'pointer' }} onClick={() => setPlaying(true)}>
                <Img src={IMG.video} alt="Video thumbnail" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .5 }} T={T} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(250,246,240,.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 40px #00000044', transition: 'transform .2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                    <PlayIcon color="#7C4A1E" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p className="sf" style={{ color: '#F0E4D0', fontSize: '1.4rem', fontWeight: 500 }}>{VIDEO.title}</p>
                    <p style={{ color: '#C8B09A', fontSize: '.85rem', marginTop: 4 }}>{VIDEO.subtitle}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                <iframe
                  src={VIDEO.embedUrl}
                  title={VIDEO.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
