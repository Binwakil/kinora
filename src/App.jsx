import { useState } from 'react'
import { LIGHT, DARK } from './theme'
import LandingPage from './pages/LandingPage'

/**
 * App — root component.
 * Owns dark mode state and passes the active theme (T) down.
 * Add React Router here when you build additional pages.
 */
export default function App() {
  const [dark, setDark] = useState(false)
  const T = dark ? DARK : LIGHT

  return (
    <LandingPage
      T={T}
      dark={dark}
      onToggleDark={() => setDark(d => !d)}
    />
  )
}
