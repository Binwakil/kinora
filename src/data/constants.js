import { CULTURES } from './cultures'

export const CULTURE_COUNT_LABEL = `${CULTURES.length}+`

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&h=700&fit=crop&q=80',
  teacherA: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=460&fit=crop&crop=top&q=80',
  teacherF: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=460&fit=crop&crop=top&q=80',
  teacherP: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=460&fit=crop&crop=top&q=80',
  familyA: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=380&fit=crop&q=80',
  familyB: 'https://images.unsplash.com/photo-1598978483098-cf821e3e38c7?w=600&h=380&fit=crop&q=80',
  familyC: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=380&fit=crop&q=80',
  video: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=600&fit=crop&q=80',
}

export const NAV_LINKS = [
  { label: 'Hausa pilot', id: 'pilot' },
  { label: 'For Teachers', id: 'teachers' },
  { label: 'Cultures', id: 'cultures' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Safety', id: 'trust' },
]

export const STATS = [
  { value: '200+', label: 'Families enrolled' },
  { value: CULTURE_COUNT_LABEL, label: 'Culture paths' },
  { value: '95%', label: 'Trial-to-paid rate' },
  { value: '4.9★', label: 'Avg teacher rating' },
]

export const TEACHERS = [
  {
    name: 'Amara N.',
    origin: 'Lagos, Nigeria',
    subjects: ['Yoruba', 'Cultural Heritage', 'Oral Traditions'],
    sessions: '240+',
    rating: '4.98',
    img: 'teacherA',
  },
  {
    name: 'Fatima K.',
    origin: 'Rabat, Morocco',
    subjects: ['Arabic', 'Islamic Studies', 'N. African Culture'],
    sessions: '310+',
    rating: '5.0',
    img: 'teacherF',
  },
  {
    name: 'Priya M.',
    origin: 'Chennai, India',
    subjects: ['Tamil', 'Hindu Heritage', 'Classical Arts'],
    sessions: '180+',
    rating: '4.95',
    img: 'teacherP',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'My daughter used to feel embarrassed speaking Yoruba. After three months with her Kinora teacher, she calls her grandparents in Lagos every Sunday. I cried the first time I heard them laugh together.',
    name: 'Tosin A.',
    location: 'Maryland, USA',
    child: 'Daughter, 9',
    img: 'familyA',
  },
  {
    quote: 'I was skeptical about another online platform. But Kinora actually called me before matching us. They asked questions no app ever asks. That phone call alone told me these people are serious.',
    name: 'Rania M.',
    location: 'London, UK',
    child: 'Son, 11',
    img: 'familyB',
  },
  {
    quote: "The report after every session is something I didn't know I needed. I know exactly what my son is learning, what he struggled with, and what to practice together at home.",
    name: 'Kwame O.',
    location: 'Toronto, CA',
    child: 'Son, 13',
    img: 'familyC',
  },
  {
    quote: 'We tried two other platforms first. They felt transactional. Kinora felt like someone actually cared where my children came from. Within a week we had a Tamil teacher who grew up in the same district as my parents.',
    name: 'Priya S.',
    location: 'Melbourne, AU',
    child: 'Two children, 7 & 10',
    img: 'familyA',
  },
]

export const FAQ = [
  {
    q: 'What cultures and languages does Kinora support?',
    a: `Explore ${CULTURE_COUNT_LABEL} community and language interests across Africa, the Middle East, Asia, Europe, and the Americas. This is a discovery catalog, not a count of available teachers. We confirm your language, country, and teacher availability before booking.`,
  },
  {
    q: 'Can my child have more than one teacher?',
    a: 'Yes. Families with multiple children can have separate matched teachers for each child, or one teacher across siblings if the fit is right.',
  },
  {
    q: "What if the match isn't right?",
    a: 'Tell our team about the concern. We review teacher availability and your agreed lesson terms before proposing a change.',
  },
  {
    q: 'Who can attend the sessions?',
    a: 'We arrange parent visibility and supervision before lessons begin. Access is restricted to authorised participants, with the actual class arrangements confirmed in advance.',
  },
  {
    q: 'How are teachers paid?',
    a: 'Teacher compensation, preparation expectations, cancellation rules, and payment timing are agreed in writing before teaching begins. We are finalising these arrangements for our first teachers.',
  },
  {
    q: "Is my child's data protected?",
    a: 'Our privacy notice explains the data used for accounts, matching, payments, and lessons, including service providers. Parents manage their child profiles and consent. Read the notice before signing up.',
  },
  {
    q: 'How long is each session, and what does it look like?',
    a: 'The lesson length and included sessions will be shown in your offer before booking. Lessons can include conversation, stories, and an activity matched to your child’s level. Ask about the planned format when reviewing your teacher match.',
  },
  {
    q: 'What if my child already speaks the language fluently?',
    a: "Fluency is just the beginning. Our teachers go deeper into cultural context, oral traditions, writing systems, proverbs, family vocabulary, and heritage identity.",
  },
  {
    q: 'What if my child is shy or reluctant?',
    a: 'That is normal. The first session is low-pressure, parents can stay nearby, and teachers start with stories, games, or family topics before asking for performance.',
  },
  {
    q: 'Do parents need to stay for the whole session?',
    a: 'Parents can join, observe, or stay nearby at any time. Younger children often benefit from a parent in the room for the first few sessions.',
  },
  {
    q: 'Are sessions recorded?',
    a: 'Recording and transcription are disabled for launch. Teacher notes help parents follow what was practised and what to try at home.',
  },
  {
    q: 'How does pricing work for siblings?',
    a: 'Each child has their own learning needs and teacher match. Your family offer will state which children are included, the total price and currency, and the lessons for each child before payment.',
  },
  {
    q: 'What if my culture is not listed?',
    a: 'Join the heritage waitlist for any language, culture or tradition. Share your child’s age range, preferred start month and schedule. Our team reviews possible teachers and compatible groups, then emails you when there is a match to discuss. A place is confirmed separately.',
  },
]

export const VIDEO = {
  youtubeId: '-1dFU4ktNfg',
  startSeconds: 431,
  title: 'Why Cultural Identity Matters',
  subtitle: 'Starts at 7:11 · Click to play',
  embedUrl: 'https://www.youtube.com/embed/-1dFU4ktNfg?autoplay=1&start=431',
}

export const PRICING_FEATURES = [
  '1 live session / week',
  'Personal teacher matching',
  'First session free',
  'Post-session reports',
  'Parent observation access',
  'Free rematch if needed',
  'Multi-child accounts',
  'No cancellation fees',
]

export const TRUST_COMMITMENTS = [
  { title: 'Parental consent', sub: 'Required for every session, every time.' },
  { title: 'Cultural self-selection', sub: 'You choose the values taught.' },
  { title: 'Clear teacher terms', sub: 'Compensation and responsibilities agreed before teaching.' },
  { title: 'Zero tolerance for harm', sub: 'No exceptions, no second chances.' },
  { title: 'Minimal data collection', sub: 'We only collect what we need.' },
]
