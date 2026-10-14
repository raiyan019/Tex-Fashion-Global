import Container from '../ui/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'
import { strengths } from '../../data/company.js'

function Strengths() {
  return (
    <section>
      <Container className="py-24 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Company strengths</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.02] tracking-[-0.02em]">
              What working with us <em className="text-olive">looks like.</em>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 3) * 100}
              className="border-t border-charcoal/20 pb-12 pt-6"
            >
              <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-charcoal/75">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Strengths
