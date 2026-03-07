/**
 * Kinora Static Content
 * Centralise all copy here so it's easy to edit without touching component logic.
 * Replace Unsplash URLs with your own photography when ready.
 */

// ─── Images ────────────────────────────────────────────────
// Replace each URL with your own images.
// Naming convention: replace with /images/hero.jpg etc once you have real photos.
export const IMG = {
  hero:     'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&h=700&fit=crop&q=80',
  teacherA: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=460&fit=crop&crop=top&q=80',
  teacherF: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=460&fit=crop&crop=top&q=80',
  teacherP: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=460&fit=crop&crop=top&q=80',
  familyA:  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=380&fit=crop&q=80',
  familyB:  'https://images.unsplash.com/photo-1598978483098-cf821e3e38c7?w=600&h=380&fit=crop&q=80',
  familyC:  'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=380&fit=crop&q=80',
  video:    'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=600&fit=crop&q=80',
}

// ─── Nav Links ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'For Parents',  id: 'how-it-works' },
  { label: 'For Teachers', id: 'teachers'     },
  { label: 'Cultures',     id: 'cultures'     },
  { label: 'Pricing',      id: 'pricing'      },
  { label: 'Safety',       id: 'trust'        },
]

// ─── Stats bar ─────────────────────────────────────────────
export const STATS = [
  { value: '200+', label: 'Families enrolled'      },
  { value: '30+',  label: 'Cultures & languages'   },
  { value: '95%',  label: 'Trial-to-paid rate'     },
  { value: '4.9★', label: 'Avg teacher rating'     },
]

// ─── Sample teachers (swap with real DB data) ──────────────
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

// ─── Testimonials ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: "My daughter used to feel embarrassed speaking Yoruba. After three months with her Kinora teacher, she calls her grandparents in Lagos every Sunday. I cried the first time I heard them laugh together.",
    name: 'Tosin A.',
    location: 'Maryland, USA',
    child: 'Daughter, 9',
    img: 'familyA',
  },
  {
    quote: "I was skeptical about another online platform. But Kinora actually called me before matching us. They asked questions no app ever asks. That phone call alone told me these people are serious.",
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
]

// ─── FAQ ───────────────────────────────────────────────────
export const FAQ = [
  {
    q: 'What cultures and languages does Kinora support?',
    a: "We currently support 30+ cultures across Africa, the Arab world, Asia, and parts of Europe. If we don't have a teacher for your background yet, we'll add you to our priority waitlist.",
  },
  {
    q: 'Can my child have more than one teacher?',
    a: 'Yes. Families with multiple children can have separate matched teachers for each child, or one teacher across siblings if the fit is right.',
  },
  {
    q: "What if the match isn't right?",
    a: "You tell us, and we rematch — no penalty, no awkward conversations. Teacher reassignment is part of how we operate.",
  },
  {
    q: 'Who can attend the sessions?',
    a: 'Parents are always welcome to observe. Sessions run on Zoom and can be joined by any parent or guardian at any time. No unsupervised child access, ever.',
  },
  {
    q: 'How are teachers paid?',
    a: "Teachers receive fair, dignified compensation — not a gig economy rate. Our pricing ensures teachers earn a living wage for their expertise and time.",
  },
  {
    q: "Is my child's data protected?",
    a: "We collect minimal data, store it securely, and never share it with third parties. Our full data privacy policy is available before you sign up.",
  },
]

// ─── YouTube Video ─────────────────────────────────────────
export const VIDEO = {
  youtubeId: '-1dFU4ktNfg',
  startSeconds: 431,           // 7:11
  title: 'Why Cultural Identity Matters',
  subtitle: 'Starts at 7:11 · Click to play',
  embedUrl: 'https://www.youtube.com/embed/-1dFU4ktNfg?autoplay=1&start=431',
}

// ─── Pricing features ──────────────────────────────────────
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

// ─── Trust commitments ─────────────────────────────────────
export const TRUST_COMMITMENTS = [
  { title: 'Parental consent',          sub: 'Required for every session, every time.'    },
  { title: 'Cultural self-selection',   sub: 'You choose the values taught.'               },
  { title: 'Fair teacher compensation', sub: 'Teachers earn a dignified living wage.'      },
  { title: 'Zero tolerance for harm',   sub: 'No exceptions, no second chances.'           },
  { title: 'Minimal data collection',   sub: 'We only collect what we need.'               },
]
