import Nav          from '../components/layout/Nav'
import Footer        from '../components/layout/Footer'
import MobileStickyCTA from '../components/layout/MobileStickyCTA'
import MobileJumpNav from '../components/layout/MobileJumpNav'
import Hero          from '../components/sections/Hero'
import Stats         from '../components/sections/Stats'
import Problem       from '../components/sections/Problem'
import VideoSection  from '../components/sections/Video'
import ParentProof   from '../components/sections/ParentProof'
import CultureSearch from '../components/sections/CultureSearch'
import HowItWorks    from '../components/sections/HowItWorks'
import Comparison    from '../components/sections/Comparison'
import MatchingQuality from '../components/sections/MatchingQuality'
import LearningLoop   from '../components/sections/LearningLoop'
import WhyKinora     from '../components/sections/WhyKinora'
import Teachers      from '../components/sections/Teachers'
import Testimonials  from '../components/sections/Testimonials'
import Pricing       from '../components/sections/Pricing'
import Trust         from '../components/sections/Trust'
import FAQ           from '../components/sections/FAQ'
import StorySeo      from '../components/sections/StorySeo'
import ApplyCTA      from '../components/sections/ApplyCTA'

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
      <Stats         T={T} />
      <MobileJumpNav T={T} />
      <Problem       T={T} />
      <VideoSection  T={T} />
      <ParentProof   T={T} />
      <HowItWorks    T={T} />
      <Pricing       T={T} />
      <CultureSearch T={T} />
      <Comparison    T={T} />
      <MatchingQuality T={T} />
      <LearningLoop   T={T} />
      <WhyKinora     T={T} />
      <Teachers      T={T} />
      <Testimonials  T={T} />
      <Trust         T={T} />
      <FAQ           T={T} />
      <StorySeo      T={T} />
      <ApplyCTA      T={T} />

      <Footer        T={T} />
    </div>
  )
}
