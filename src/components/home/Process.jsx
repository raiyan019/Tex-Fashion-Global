import Container from '../ui/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'
import TextLink from '../ui/TextLink.jsx'
import { images } from '../../data/images.js'
import { processSteps } from '../../data/process.js'

function Process() {
  return (
    <section className="bg-paper">
      <Container className="grid gap-14 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-light leading-[1.04] tracking-[-0.02em]">
              From sample <em className="text-olive">to shipment.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md leading-relaxed text-charcoal/75">
              Every order moves through the same five stages, with our team following up at each one.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 hidden max-w-sm lg:block">
            <Img image={images.processFloor} />
          </Reveal>
          <Reveal delay={350} className="mt-10">
            <TextLink to="/manufacturing-quality">Manufacturing &amp; quality</TextLink>
          </Reveal>
        </div>

        <ol className="lg:col-span-7">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={(index % 2) * 80}
              className="group border-t border-charcoal/20 py-8 last:border-b"
            >
              <h3 className="font-display text-2xl tracking-tight transition-colors duration-300 group-hover:text-olive sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-charcoal/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default Process
