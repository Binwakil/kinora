/**
 * Kinora Design Tokens
 * Two complete theme objects — swap by passing T={theme} to components.
 *
 * Brand palette: warm brown earth tones derived from the Kinora logo.
 * Usage:  import { LIGHT, DARK } from '../theme'
 *         const T = dark ? DARK : LIGHT
 */

export const LIGHT = {
  bg:          '#FAF6F0',
  bgAlt:       '#F0E8DB',
  bgDark:      '#4A2C10',
  bgDeep:      '#120D06',
  card:        '#FFFFFF',
  cardAlt:     '#F0E8DB',
  border:      '#E8D5BA',
  text:        '#1C1208',
  muted:       '#8A7560',
  accent:      '#7C4A1E',
  accentL:     '#A0622A',
  accentD:     '#4A2C10',
  sand:        '#E8D5BA',
  cream:       '#FAF6F0',
  invertText:  '#FAF6F0',
  navBg:       'rgba(250,246,240,0.97)',
  statBg:      '#3A1E08',
  footerBg:    '#120D06',
  footerText:  '#8A7060',
  footerDim:   '#4A3828',
  inputBg:     '#FFFFFF',
  dark:        false,
}

export const DARK = {
  bg:          '#16100A',
  bgAlt:       '#1E140C',
  bgDark:      '#4A2C10',
  bgDeep:      '#0E0906',
  card:        '#231810',
  cardAlt:     '#2A1E14',
  border:      '#3D2818',
  text:        '#F0E4D0',
  muted:       '#9A8470',
  accent:      '#C07840',
  accentL:     '#D48F58',
  accentD:     '#9A5C28',
  sand:        '#4A3020',
  cream:       '#F0E4D0',
  invertText:  '#16100A',
  navBg:       'rgba(22,16,10,0.97)',
  statBg:      '#0E0906',
  footerBg:    '#0A0704',
  footerText:  '#6A5848',
  footerDim:   '#3A2818',
  inputBg:     '#2A1E14',
  dark:        true,
}
