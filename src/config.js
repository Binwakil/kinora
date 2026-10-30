/**
 * Runtime configuration pulled from Vite env vars.
 * Set VITE_PLATFORM_URL / VITE_API_URL in .env.local for dev or in your hosting provider.
 */
const trimTrailingSlash = (value) => value.replace(/\/$/, '')
const isLocalUrl = (value) => /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/.test(value)
const envOrDefault = (value, fallback) => {
  const normalized = (value ?? '').trim()
  if (!normalized) return fallback
  if (import.meta.env.PROD && isLocalUrl(normalized)) return fallback
  return normalized
}

const base = trimTrailingSlash(envOrDefault(import.meta.env.VITE_PLATFORM_URL, 'https://app.mykinora.com'))

export const PLATFORM = {
  base,
  waitlist:      `${base}/waitlist`,
  parentSignup:  `${base}/signup/parent`,
  parentLogin:   `${base}/login/parent`,
  teacherSignup: `${base}/signup/teacher`,
  teacherLogin:  `${base}/login/teacher`,
}

export const LEGAL_OPERATOR = {
  name: 'MANAR GLOBAL SOLUTIONS, LLC',
  businessAddress: '6800 Wisconsin Ave, Bethesda, MD 20815, United States',
  contacts: ['Muhammad Harper', 'Haruna Muhd Inuwa'],
}

// Kinora backend API -- used by the application form to file real intake applications.
export const API_BASE = trimTrailingSlash(
  envOrDefault(
    import.meta.env.VITE_API_URL,
    'https://kinora-backend.mangorock-bef5a05b.eastus2.azurecontainerapps.io',
  ),
)
