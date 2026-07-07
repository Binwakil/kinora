import Nav          from '../components/layout/Nav'
import Footer        from '../components/layout/Footer'
import Hero          from '../components/sections/Hero'
import Stats         from '../components/sections/Stats'
import Problem       from '../components/sections/Problem'
import VideoSection  from '../components/sections/Video'
import CultureSearch from '../components/sections/CultureSearch'
import HowItWorks    from '../components/sections/HowItWorks'
import MatchingQuality from '../components/sections/MatchingQuality'
import LearningLoop   from '../components/sections/LearningLoop'
import WhyKinora     from '../components/sections/WhyKinora'
import Teachers      from '../components/sections/Teachers'
import Testimonials  from '../components/sections/Testimonials'
import Pricing       from '../components/sections/Pricing'
import Trust         from '../components/sections/Trust'
import FAQ           from '../components/sections/FAQ'
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

      <Hero          T={T} />
      <Stats         T={T} />
      <Problem       T={T} />
      <VideoSection  T={T} />
      <CultureSearch T={T} />
      <HowItWorks    T={T} />
      <MatchingQuality T={T} />
      <LearningLoop   T={T} />
      <WhyKinora     T={T} />
      <Teachers      T={T} />
      <Testimonials  T={T} />
      <Pricing       T={T} />
      <Trust         T={T} />
      <FAQ           T={T} />
      <ApplyCTA      T={T} />

      <Footer        T={T} />
    </div>
  )
}
