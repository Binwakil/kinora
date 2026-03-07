/** Kinora brand tree/roots/generations mark */
export default function TreeIcon({ size = 44, color = '#7C4A1E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="14" r="6"  stroke={color} strokeWidth="2.5"/>
      <circle cx="22" cy="28" r="5"  stroke={color} strokeWidth="2.5"/>
      <circle cx="58" cy="28" r="5"  stroke={color} strokeWidth="2.5"/>
      <line x1="40" y1="20" x2="40" y2="62" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="30" x2="27" y2="28" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="30" x2="53" y2="28" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M28 62 Q40 55 52 62" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <line x1="34" y1="62" x2="30" y2="70" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="40" y1="62" x2="40" y2="72" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="46" y1="62" x2="50" y2="70" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
