import { scrollTo } from '../../utils/scroll'
import TreeIcon from '../ui/TreeIcon'
import { PLATFORM } from '../../config'

const FOOTER_LINKS = [
  {
    title: 'Platform',
    links: [
      { label: 'For Parents',   id: 'how-it-works' },
      { label: 'For Teachers',  id: 'teachers'     },
      { label: 'How It Works',  id: 'how-it-works' },
      { label: 'Browse Cultures', id: 'cultures'   },
      { label: 'Pricing',       id: 'pricing'      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',   id: 'trust'  },
      { label: 'Our Mission',id: 'trust'  },
      { label: 'Careers',    id: null     },
      { label: 'Press',      id: null     },
      { label: 'Blog',       id: null     },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ',              id: 'faq'  },
      { label: 'Contact Us',       id: null   },
      { label: 'Privacy Policy',   href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Data Policy',      id: null   },
    ],
  },
]

export default function Footer({ T }) {
  return (
    <footer style={{ background: T.footerBg, padding: '60px 5% 34px', borderTop: `1px solid ${T.accent}22` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 52, marginBottom: 52 }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
              <TreeIcon size={28} color={T.accentL} />
              <span className="sf" style={{ fontSize: '1.3rem', color: T.accentL, fontWeight: 600, letterSpacing: '.06em' }}>KINORA</span>
            </div>
            <p style={{ fontSize: '.83rem', color: T.footerText, lineHeight: 1.9, maxWidth: 260 }}>
              A trust-first platform connecting migrant families with culturally aligned teachers. Identity, kept alive.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              {[
                { char: '𝕏',  href: 'https://twitter.com/kinoralearn',         label: 'X (Twitter)'  },
                { char: 'in', href: 'https://linkedin.com/company/kinora',      label: 'LinkedIn'     },
                { char: 'f',  href: 'https://facebook.com/kinoralearn',         label: 'Facebook'     },
                { char: '▶',  href: 'https://youtube.com/@kinora',              label: 'YouTube'      },
              ].map(({ char, href, label }) => (
                <a key={char} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${T.footerDim}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.footerText, fontSize: '.77rem', transition: 'all .2s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.accentL; e.currentTarget.style.color = T.accentL }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.footerDim; e.currentTarget.style.color = T.footerText }}>
                  {char}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <p style={{ fontSize: '.74rem', color: T.accentL, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>{title}</p>
              {links.map(({ label, id, href }) => (
                <p key={label} style={{ marginBottom: 8 }}>
                  {href ? (
                    <a href={href}
                      style={{ fontSize: '.82rem', color: T.footerText, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0, transition: 'color .2s', textAlign: 'left', textDecoration: 'none' }}
                      onMouseEnter={e => { e.currentTarget.style.color = T.accentL }}
                      onMouseLeave={e => e.currentTarget.style.color = T.footerText}>
                      {label}
                    </a>
                  ) : (
                    <button onClick={() => id && scrollTo(id)}
                      style={{ fontSize: '.82rem', color: T.footerText, background: 'none', border: 'none', cursor: id ? 'pointer' : 'default', fontFamily: 'inherit', padding: 0, transition: 'color .2s', textAlign: 'left' }}
                      onMouseEnter={e => { if (id) e.currentTarget.style.color = T.accentL }}
                      onMouseLeave={e => e.currentTarget.style.color = T.footerText}>
                      {label}
                    </button>
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: `1px solid ${T.footerDim}`, paddingTop: 22, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: '.77rem', color: T.footerText }}>© 2026 Kinora Inc. All rights reserved. · Registered in Maryland, USA</p>
          <p style={{ fontSize: '.77rem', color: T.footerText }}>
            Built with trust 🌿 · Identity, kept alive.
            {' · '}
            <a href={`${PLATFORM.base}/login/admin`}
              style={{ color: T.footerDim, textDecoration: 'none', fontSize: '.72rem' }}>
              Staff login
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
