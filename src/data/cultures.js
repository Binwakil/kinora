/**
 * Kinora Culture & Language Data
 * Each entry represents a supported teaching background.
 * Teachers count is illustrative for MVP — update from your DB.
 */

export const CULTURES = [
  { name: 'Hausa',              region: 'West Africa',             cat: 'africa', emoji: '🇳🇬', teachers: 8,  subjects: ['Language', 'Culture', 'Islamic Heritage'] },
  { name: 'Yoruba',             region: 'West Africa',             cat: 'africa', emoji: '🇳🇬', teachers: 12, subjects: ['Language', 'Oral Traditions', 'History'] },
  { name: 'Igbo',               region: 'West Africa',             cat: 'africa', emoji: '🇳🇬', teachers: 7,  subjects: ['Language', 'Culture', 'Folklore'] },
  { name: 'Twi / Akan',         region: 'Ghana',                   cat: 'africa', emoji: '🇬🇭', teachers: 5,  subjects: ['Language', 'Proverbs', 'Heritage'] },
  { name: 'Swahili',            region: 'East Africa',             cat: 'africa', emoji: '🇰🇪', teachers: 9,  subjects: ['Language', 'Culture', 'History'] },
  { name: 'Amharic',            region: 'Ethiopia',                cat: 'africa', emoji: '🇪🇹', teachers: 6,  subjects: ['Language', 'Orthodox Heritage', 'Culture'] },
  { name: 'Somali',             region: 'Horn of Africa',          cat: 'africa', emoji: '🇸🇴', teachers: 4,  subjects: ['Language', 'Islamic Culture', 'Poetry'] },
  { name: 'Wolof',              region: 'Senegal',                 cat: 'africa', emoji: '🇸🇳', teachers: 3,  subjects: ['Language', 'Culture', 'Griots'] },
  { name: 'Zulu',               region: 'South Africa',            cat: 'africa', emoji: '🇿🇦', teachers: 4,  subjects: ['Language', 'Traditions', 'Heritage'] },
  { name: 'Fulani',             region: 'Sahel Region',            cat: 'africa', emoji: '🌍',  teachers: 3,  subjects: ['Language', 'Pastoral Culture', 'History'] },
  { name: 'Arabic (Egyptian)',  region: 'Egypt',                   cat: 'arab',   emoji: '🇪🇬', teachers: 14, subjects: ['Language', 'Islamic Studies', 'Culture'] },
  { name: 'Arabic (Moroccan)',  region: 'Morocco',                 cat: 'arab',   emoji: '🇲🇦', teachers: 10, subjects: ['Darija', 'Quran', 'Heritage'] },
  { name: 'Arabic (Levantine)', region: 'Syria / Lebanon',         cat: 'arab',   emoji: '🇱🇧', teachers: 8,  subjects: ['Language', 'History', 'Traditions'] },
  { name: 'Arabic (Gulf)',      region: 'Gulf States',             cat: 'arab',   emoji: '🇸🇦', teachers: 6,  subjects: ['Language', 'Islamic Studies', 'Culture'] },
  { name: 'Persian / Farsi',   region: 'Iran',                    cat: 'arab',   emoji: '🇮🇷', teachers: 5,  subjects: ['Language', 'Poetry', 'Heritage'] },
  { name: 'Turkish',            region: 'Turkey',                  cat: 'arab',   emoji: '🇹🇷', teachers: 7,  subjects: ['Language', 'Culture', 'Ottoman History'] },
  { name: 'Urdu',               region: 'Pakistan',                cat: 'arab',   emoji: '🇵🇰', teachers: 11, subjects: ['Language', 'Islamic Culture', 'Literature'] },
  { name: 'Hindi',              region: 'India',                   cat: 'asia',   emoji: '🇮🇳', teachers: 15, subjects: ['Language', 'Hindu Heritage', 'Culture'] },
  { name: 'Tamil',              region: 'South India / Sri Lanka', cat: 'asia',   emoji: '🇮🇳', teachers: 8,  subjects: ['Language', 'Classical Arts', 'Culture'] },
  { name: 'Bengali',            region: 'Bangladesh / India',      cat: 'asia',   emoji: '🇧🇩', teachers: 7,  subjects: ['Language', 'Literature', 'Heritage'] },
  { name: 'Punjabi',            region: 'Punjab',                  cat: 'asia',   emoji: '🇮🇳', teachers: 6,  subjects: ['Language', 'Sikh Heritage', 'Music'] },
  { name: 'Mandarin',           region: 'China',                   cat: 'asia',   emoji: '🇨🇳', teachers: 13, subjects: ['Language', 'Culture', 'Calligraphy'] },
  { name: 'Cantonese',          region: 'Guangdong / HK',          cat: 'asia',   emoji: '🇭🇰', teachers: 6,  subjects: ['Language', 'Culture', 'History'] },
  { name: 'Japanese',           region: 'Japan',                   cat: 'asia',   emoji: '🇯🇵', teachers: 9,  subjects: ['Language', 'Culture', 'Arts'] },
  { name: 'Korean',             region: 'South Korea',             cat: 'asia',   emoji: '🇰🇷', teachers: 7,  subjects: ['Language', 'Heritage', 'Culture'] },
  { name: 'Filipino / Tagalog', region: 'Philippines',             cat: 'asia',   emoji: '🇵🇭', teachers: 5,  subjects: ['Language', 'Culture', 'Heritage'] },
  { name: 'Vietnamese',         region: 'Vietnam',                 cat: 'asia',   emoji: '🇻🇳', teachers: 5,  subjects: ['Language', 'History', 'Traditions'] },
  { name: 'Indonesian',         region: 'Indonesia',               cat: 'asia',   emoji: '🇮🇩', teachers: 4,  subjects: ['Language', 'Islamic Culture', 'Arts'] },
  { name: 'Ukrainian',          region: 'Ukraine',                 cat: 'europe', emoji: '🇺🇦', teachers: 8,  subjects: ['Language', 'History', 'Folk Arts'] },
  { name: 'Polish',             region: 'Poland',                  cat: 'europe', emoji: '🇵🇱', teachers: 6,  subjects: ['Language', 'Catholic Heritage', 'Culture'] },
  { name: 'Romanian',           region: 'Romania',                 cat: 'europe', emoji: '🇷🇴', teachers: 4,  subjects: ['Language', 'Orthodox Heritage', 'Folklore'] },
  { name: 'Albanian',           region: 'Albania / Kosovo',        cat: 'europe', emoji: '🇦🇱', teachers: 5,  subjects: ['Language', 'Culture', 'Heritage'] },
  { name: 'Greek',              region: 'Greece',                  cat: 'europe', emoji: '🇬🇷', teachers: 4,  subjects: ['Language', 'Orthodox Heritage', 'History'] },
]

export const CULTURE_TABS = [
  { key: 'all',    label: 'All',             emoji: '🌐' },
  { key: 'africa', label: 'Africa',          emoji: '🌍' },
  { key: 'arab',   label: 'Arab & Mid East', emoji: '🕌' },
  { key: 'asia',   label: 'Asia',            emoji: '🌏' },
  { key: 'europe', label: 'Europe',          emoji: '🏛️' },
]
