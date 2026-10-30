import { LEGAL_OPERATOR, PLATFORM } from '../../config'
import TreeIcon from '../ui/TreeIcon'

export default function Footer({ T }) {
  return (
    <footer style={{ background: T.footerBg, color: '#C8B9A9', padding: '52px 6% 28px' }}>
      <div style={{ maxWidth: 1100, margin: 'auto' }}>
        <div className="heritage-split" style={{ gap: 28 }}>
          <div><a href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#F0E4D0' }}><TreeIcon size={32} color="#C8B9A9" /><span className="sf" style={{ fontSize: 24, letterSpacing: '.06em' }}>KINORA</span></a><p style={{ maxWidth: 340, lineHeight: 1.8, fontSize: '.85rem', marginTop: 16 }}>Language, culture, and connection for immigrant families across Western countries.</p></div>
          <nav aria-label="Footer" style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'start', gap: '20px 28px', fontSize: '.85rem' }}>
            {[[PLATFORM.parentSignup, 'For families'], [PLATFORM.teacherSignup, 'Apply to teach'], ['/privacy', 'Privacy'], ['/terms', 'Terms'], ['mailto:support@mykinora.com', 'Contact us']].map(([href, text]) => <a key={text} href={href} style={{ color: 'inherit', textUnderlineOffset: 4 }}>{text}</a>)}
          </nav>
        </div>
        <div style={{ marginTop: 40, borderTop: '1px solid #4A3828', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, fontSize: '.73rem' }}><span>© {new Date().getFullYear()} {LEGAL_OPERATOR.name}. KINORA is a product of {LEGAL_OPERATOR.name}.</span><a href={PLATFORM.teacherLogin.replace('/teacher', '/admin')} style={{ color: 'inherit' }}>Staff sign-in</a></div>
      </div>
    </footer>
  )
}
