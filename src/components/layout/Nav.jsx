import { useState, useEffect } from 'react'
import { useScrolled } from '../../hooks/useScrolled'
import { scrollTo } from '../../utils/scroll'
import { NAV_LINKS } from '../../data/constants'
import TreeIcon from '../ui/TreeIcon'
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '../ui/Icons'
import Button from '../ui/Button'

export default function Nav({ T, onToggleDark, dark }) {
  const scrolled = useScrolled(40)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileOpen) return
    const close = () => setMobileOpen(false)
    window.addEventListener('scroll', close, { once: true })
    return () => window.removeEventListener('scroll', close)
  }, [mobileOpen])

  const handleNav = (id) => {
    scrollTo(id)
    setMobileOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
      background: scrolled || mobileOpen ? T.navBg : 'transparent',
      backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
      borderBottom: scrolled || mobileOpen ? `1px solid ${T.border}` : 'none',
      transition: 'all .35s',
    }}>
      {/* ── Main bar ─────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
          <TreeIcon size={32} color={T.accent} />
          <span className="sf" style={{ fontSize: '1.5rem', fontWeight: 600, color: T.accentD, letterSpacing: '.06em' }}>KINORA</span>
        </div>

        {/* Desktop links */}
        <div className="d-hide" style={{ display: 'flex', gap: 32 }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="nav-link" style={{ color: T.text }} onClick={() => handleNav(id)}>
              {label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>

          {/* Dark mode toggle */}
          <button className="dm-toggle" onClick={onToggleDark}
            style={{ width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.bgAlt, border: `1px solid ${T.border}`, color: T.muted, cursor: 'pointer' }}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button className="d-hide nav-link" style={{ fontSize: '.85rem', color: T.muted }}>Log in</button>

          <Button variant="primary" T={T} onClick={() => scrollTo('apply')}
            style={{ padding: '10px 22px', borderRadius: 50, fontSize: '.85rem' }}>
            Apply Free
          </Button>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(o => !o)}
            style={{ display: 'none', width: 38, height: 38, borderRadius: 10, alignItems: 'center', justifyContent: 'center', background: T.bgAlt, border: `1px solid ${T.border}`, color: T.text, cursor: 'pointer' }}
            className="mob-menu-btn">
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ───────────────────────────────── */}
      <div style={{
        maxHeight: mobileOpen ? 360 : 0,
        overflow: 'hidden',
        transition: 'max-height .4s cubic-bezier(.4,0,.2,1)',
        background: T.navBg,
        borderTop: mobileOpen ? `1px solid ${T.border}` : 'none',
      }}>
        <div style={{ padding: '20px 5% 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => handleNav(id)}
              style={{ textAlign: 'left', padding: '13px 16px', borderRadius: 10, background: 'none', border: 'none', fontFamily: "'DM Sans',sans-serif", fontSize: '1rem', fontWeight: 500, color: T.text, cursor: 'pointer', transition: 'background .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = T.bgAlt}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}>
              {label}
            </button>
          ))}
          <Button variant="primary" T={T} onClick={() => handleNav('apply')}
            style={{ marginTop: 8, padding: '13px 16px', borderRadius: 10, fontSize: '1rem', textAlign: 'left' }}>
            Apply for a Free Session
          </Button>
        </div>
      </div>

      {/* Show hamburger on mobile */}
      <style>{`@media(max-width:900px){.mob-menu-btn{display:flex !important}}`}</style>
    </nav>
  )
}
