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
  { label: 'For Parents', id: 'how-it-works' },
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
    a: `We currently support ${CULTURE_COUNT_LABEL} culture paths across Africa, the Middle East, South Asia, East Asia, Southeast Asia, Europe, and the Americas. If we do not have a teacher for your background yet, we add you to our priority waitlist.`,
  },
  {
    q: 'Can my child have more than one teacher?',
    a: 'Yes. Families with multiple children can have separate matched teachers for each child, or one teacher across siblings if the fit is right.',
  },
  {
    q: "What if the match isn't right?",
    a: 'You tell us, and we rematch with no penalty and no awkward conversation. Teacher reassignment is part of how we operate.',
  },
  {
    q: 'Who can attend the sessions?',
    a: 'Parents are always welcome to observe. Sessions can be joined by any parent or guardian at any time. No unsupervised child access, ever.',
  },
  {
    q: 'How are teachers paid?',
    a: 'Teachers receive fair, dignified compensation, not a gig economy rate. Our pricing ensures teachers earn a living wage for their expertise and time.',
  },
  {
    q: "Is my child's data protected?",
    a: 'We collect minimal data, store it securely, and never share it with third parties. Our full data privacy policy is available before you sign up.',
  },
  {
    q: 'How long is each session, and what does it look like?',
    a: "Sessions run 50 minutes. Each class has a warm-up in your child's heritage language, a main activity, and a short recap. Your teacher sends a written report after every session.",
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
    a: 'Sessions are not recorded by default. Teachers write a session report so parents can see what was practiced, what to try at home, and what comes next.',
  },
  {
    q: 'How does pricing work for siblings?',
    a: 'Pricing is per child because each child has their own level and progress. Two children are usually about $80/month; larger families can ask for a custom plan.',
  },
  {
    q: 'What if my culture is not listed?',
    a: 'Apply anyway and tell us your country, region, language, culture, and optional faith preference. If we do not have a match yet, we add you to the priority waitlist.',
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
  { title: 'Fair teacher compensation', sub: 'Teachers earn a dignified living wage.' },
  { title: 'Zero tolerance for harm', sub: 'No exceptions, no second chances.' },
  { title: 'Minimal data collection', sub: 'We only collect what we need.' },
]
