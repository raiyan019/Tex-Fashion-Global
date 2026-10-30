import Container from "../ui/Container.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Reveal from "../ui/Reveal.jsx";
import Img from "../ui/Img.jsx";
import TextLink from "../ui/TextLink.jsx";
import { images } from "../../data/images.js";
import { qualityPrinciples } from "../../data/company.js";

function Quality() {
  return (
    <section className="bg-olive-deep text-ivory">
      <Container className="grid gap-14 py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
        <div className="lg:col-span-6 lg:pr-8">
          <Reveal>
            <Eyebrow>Quality assurance</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] font-light leading-[1.04] tracking-[-0.02em]">
              Production monitored at{" "}
              <em className="text-mint">every stage.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg leading-relaxed text-ivory/75">
              Our team follows production from start to finish, and inspections
              at various stages confirm that quality conforms to the
              requirement.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <dl className="mt-12 border-t border-ivory/25">
              {qualityPrinciples.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-2 border-b border-ivory/25 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
                >
                  <dt className="font-display text-xl">{item.title}</dt>
                  <dd className="leading-relaxed text-ivory/75">{item.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={300} className="mt-10">
            <TextLink to="/manufacturing-quality">
              See the production workflow
            </TextLink>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:mt-16">
          <Img image={images.qualityInspection} />
        </Reveal>
      </Container>
    </section>
  );
}

export default Quality;
