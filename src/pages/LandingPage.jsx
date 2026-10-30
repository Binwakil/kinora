import Nav          from '../components/layout/Nav'
import Footer        from '../components/layout/Footer'
import MobileStickyCTA from '../components/layout/MobileStickyCTA'
import MobileJumpNav from '../components/layout/MobileJumpNav'
import Hero          from '../components/sections/Hero'
import CultureSearch from '../components/sections/CultureSearch'
import HowItWorks    from '../components/sections/HowItWorks'
import LearningLoop   from '../components/sections/LearningLoop'
import Teachers      from '../components/sections/Teachers'
import Pricing       from '../components/sections/Pricing'
import Trust         from '../components/sections/Trust'
import FAQ           from '../components/sections/FAQ'
import PilotPreview  from '../components/sections/PilotPreview'
import Waitlist from '../components/sections/Waitlist'

/**
 * LandingPage — composes all sections top-to-bottom.
 * Each section is a standalone component in src/components/sections/.
 * Pass the theme object T down as a prop to every component.
 */
export default function LandingPage({ T, dark, onToggleDark }) {
  return (
    <div style={{ background: T.bg, color: T.text, overflowX: 'hidden', transition: 'background .4s, color .4s' }}>
      <Nav T={T} dark={dark} onToggleDark={onToggleDark} />
      <MobileStickyCTA T={T} />

      <Hero          T={T} />
      <PilotPreview  T={T} />
      <MobileJumpNav T={T} />
      <CultureSearch T={T} />
      <Waitlist      T={T} />
      <HowItWorks    T={T} />
      <Pricing       T={T} />
      <LearningLoop   T={T} />
      <Teachers      T={T} />
      <Trust         T={T} />
      <FAQ           T={T} />

      <Footer        T={T} />
    </div>
  )
}
