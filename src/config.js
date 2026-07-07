/**
 * Runtime configuration pulled from Vite env vars.
 * Set VITE_PLATFORM_URL in .env.local for dev or in your hosting provider for production.
 */
const base = import.meta.env.VITE_PLATFORM_URL ?? 'http://localhost:5175'

export const PLATFORM = {
  base,
  parentSignup:  `${base}/signup/parent`,
  parentLogin:   `${base}/login/parent`,
  teacherSignup: `${base}/signup/teacher`,
  teacherLogin:  `${base}/login/teacher`,
}

// Kinora backend API -- used by the application form to file real intake applications.
export const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8090'
