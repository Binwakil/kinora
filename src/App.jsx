import { useState, useEffect } from 'react'
import { LIGHT, DARK } from './theme'
import LandingPage from './pages/LandingPage'
import LegalPage from './pages/LegalPage'

const STORAGE_KEY = 'kinora_dark'

export default function App() {
  const [dark, setDark] = useState(() => {
    // Honour OS preference on first visit; respect saved choice after that
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, dark)
    document.body.style.background = dark ? DARK.bg : LIGHT.bg
  }, [dark])

  const T = dark ? DARK : LIGHT
  const path = window.location.pathname.toLowerCase()

  if (path === '/terms' || path === '/privacy') {
    return (
      <LegalPage
        T={T}
        dark={dark}
        type={path === '/terms' ? 'terms' : 'privacy'}
        onToggleDark={() => setDark(d => !d)}
      />
    )
  }

  return (
    <LandingPage
      T={T}
      dark={dark}
      onToggleDark={() => setDark(d => !d)}
    />
  )
}
