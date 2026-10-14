import Container from '../ui/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'
import TextLink from '../ui/TextLink.jsx'
import { images } from '../../data/images.js'

function Intro() {
  return (
    <section>
      <Container className="grid gap-16 py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>The company</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-light leading-[1.2] tracking-[-0.01em]">
              Tex Fashion Global is a 100% export-oriented garments manufacturer and exporter in Dhaka,{' '}
              <em className="text-olive">the capital of Bangladesh.</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-charcoal/75">
              <p>
                Over the years we have built successful relationships with foreign buyers, committed to
                meeting the interests of both parties. A team of dedicated professionals gives each buyer
                the exact service their requirements call for.
              </p>
              <p>
                Our mission is to execute every order with dedication and perfection, towards quality and
                timely delivery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300} className="mt-10">
            <TextLink to="/about-us">Read about the company</TextLink>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal className="w-[68%]">
            <Img image={images.introFabric} />
          </Reveal>
          <Reveal delay={150} className="-mt-24 ml-auto w-[52%] sm:-mt-32">
            <Img image={images.introHands} className="border-[6px] border-ivory" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Intro
