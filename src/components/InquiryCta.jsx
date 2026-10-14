import Container from './ui/Container.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Reveal from './ui/Reveal.jsx'
import ButtonLink from './ui/ButtonLink.jsx'
import { company } from '../data/company.js'

// Closing call to action. Reused at the bottom of several pages.
function InquiryCta() {
  const rows = [
    { label: 'Email', content: <a href={`mailto:${company.email}`}>{company.email}</a> },
    { label: 'Phone', content: <a href={company.phone.href}>{company.phone.display}</a> },
    { label: 'Fax', content: company.fax },
    { label: 'Address', content: company.address.join(', ') },
  ]

  return (
    <section className="bg-charcoal text-ivory">
      <Container className="grid gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Start an inquiry</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] tracking-[-0.025em]">
              Tell us what you are <em className="text-clay-soft">developing.</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/contact" variant="clay">
              Contact us
            </ButtonLink>
            <ButtonLink href={company.phone.href} variant="outlineLight" icon={false}>
              Call {company.phone.display}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 lg:pt-6">
          <dl className="divide-y divide-ivory/15 border-y border-ivory/15 text-sm">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[5rem_1fr] gap-4 py-4">
                <dt className="pt-0.5 text-xs uppercase tracking-[0.18em] text-ivory/50">{row.label}</dt>
                <dd className="break-words text-ivory/85">{row.content}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}

export default InquiryCta
