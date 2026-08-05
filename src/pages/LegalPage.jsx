import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

const CONTENT = {
  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: August 2026',
    intro: 'These terms explain the basic rules for using Kinora while we operate our early-access family and teacher platform.',
    sections: [
      ['Accounts', 'Parents, teachers, and staff are responsible for keeping account access secure and using the platform only for its intended education, scheduling, communication, and trust workflows.'],
      ['Family and teacher matching', 'Kinora may review family preferences, teacher availability, safety information, and learning goals to recommend or adjust a match. A match is not guaranteed until confirmed by the Kinora team.'],
      ['Sessions and conduct', 'Families and teachers agree to respectful, child-safe conduct. Parents may join sessions, and Kinora may review session metadata, reports, messages, and concerns to operate the service and protect users.'],
      ['Payments', 'Paid plans, invoices, refunds, and marketplace payments are governed by the payment terms shown at checkout or in the parent portal. Trial sessions may be limited by availability and eligibility.'],
      ['Changes', 'Kinora may update these terms as the product matures. Material changes will be reflected on this page and, where appropriate, communicated in-product.'],
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: August 2026',
    intro: 'Kinora is built for families and children, so we collect only the information needed to match, teach, support, and protect users.',
    sections: [
      ['Information we collect', 'We collect account details, family and child learning preferences, teacher profile and verification details, scheduling information, messages, session notes, feedback, billing status, and trust or support records.'],
      ['How we use information', 'We use information to provide the service, match families with teachers, run sessions, improve learning reports, process support and safety issues, prevent misuse, and maintain operational records.'],
      ['Children and safety', 'Child-related information is handled with extra care and is used only for education, matching, scheduling, reporting, support, and safety workflows. Parents can contact Kinora to ask about their family data.'],
      ['Sharing', 'We do not sell family data. We share information only with service providers needed to operate Kinora, with teachers or families as required for sessions, or when necessary for safety, legal, or compliance reasons.'],
      ['Security and retention', 'We use access controls, HTTPS, role-based permissions, and operational safeguards. We keep records only as long as needed for service, trust, legal, and accounting purposes.'],
    ],
  },
}

export default function LegalPage({ T, dark, type, onToggleDark }) {
  const page = CONTENT[type]

  return (
    <div style={{ background: T.bg, color: T.text, minHeight: '100vh' }}>
      <Nav T={T} dark={dark} onToggleDark={onToggleDark} />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '140px 5% 80px' }}>
        <a href="/" style={{ color: T.accent, fontWeight: 700, textDecoration: 'none' }}>Back to Kinora</a>
        <p style={{ color: T.accent, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '.76rem', fontWeight: 700, marginTop: 34 }}>
          Legal
        </p>
        <h1 className="sf" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.05, margin: '12px 0 14px', fontWeight: 600 }}>
          {page.title}
        </h1>
        <p style={{ color: T.muted, fontSize: '.92rem', marginBottom: 28 }}>{page.updated}</p>
        <p style={{ color: T.muted, fontSize: '1.08rem', lineHeight: 1.85, maxWidth: 760 }}>{page.intro}</p>

        <div style={{ display: 'grid', gap: 18, marginTop: 42 }}>
          {page.sections.map(([title, body]) => (
            <section key={title} style={{ border: `1px solid ${T.border}`, background: T.card, borderRadius: 18, padding: 24 }}>
              <h2 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{title}</h2>
              <p style={{ color: T.muted, lineHeight: 1.75, fontSize: '.95rem' }}>{body}</p>
            </section>
          ))}
        </div>

        <p style={{ color: T.muted, lineHeight: 1.75, fontSize: '.9rem', marginTop: 34 }}>
          Questions about these policies? Email support@mykinora.com.
        </p>
      </main>
      <Footer T={T} />
    </div>
  )
}
