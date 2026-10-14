import Container from '../ui/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import TextLink from '../ui/TextLink.jsx'
import { images } from '../../data/images.js'

const facts = [
  { label: 'Orientation', value: '100% export oriented' },
  { label: 'In the trade', value: 'Since 1998' },
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
]

function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="grid gap-14 pb-14 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7 lg:pt-8 xl:pt-14">
          <Reveal>
            <Eyebrow>Garments manufacturer &amp; exporter</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,7.2vw,6.25rem)] font-light leading-[0.96] tracking-[-0.025em]">
              Export garments, <em className="font-normal text-olive">made with care</em> in Dhaka.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/75">
              A 100% export-oriented garments manufacturer and exporter in Dhaka, Bangladesh, working
              with international buyers since 1998.
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <ButtonLink to="/contact">Contact us</ButtonLink>
            <TextLink to="/products-capabilities">Explore capabilities</TextLink>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative pb-10 lg:col-span-5">
          <Img image={images.heroMain} priority className="lg:ml-auto lg:max-w-[30rem]" />
          <Img
            image={images.heroDetail}
            className="absolute -bottom-0 left-3 w-36 border-[6px] border-ivory sm:w-48 lg:-left-6 xl:-left-12"
          />
          <p className="mt-4 hidden text-xs uppercase tracking-[0.2em] text-charcoal/60 lg:block lg:text-right">
            Apparel for kids, ladies &amp; men
          </p>
        </Reveal>
      </Container>

      <Container>
        <dl className="grid divide-y divide-charcoal/15 border-y border-charcoal/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.map((fact) => (
            <div key={fact.label} className="py-5 sm:px-6 sm:first:pl-0">
              <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/60">{fact.label}</dt>
              <dd className="mt-1 font-display text-xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export default Hero
