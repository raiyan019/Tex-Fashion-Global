import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Reveal from "../ui/Reveal.jsx";
import Img from "../ui/Img.jsx";
import TextLink from "../ui/TextLink.jsx";
import { images } from "../../data/images.js";
import { productGroups } from "../../data/products.js";

function Capabilities() {
  return (
    <section id="capabilities" className="bg-charcoal text-ivory">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Capabilities</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.02] tracking-[-0.02em]">
                Clothing for kids, ladies{" "}
                <em className="text-mint">and men.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-ivory/70">
              From T-shirts and polo shirts to denims, padded jackets and
              uniforms, developed to the buyer’s requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-ivory/15 md:grid-cols-3">
          {productGroups.map((group, index) => (
            <Reveal
              as="article"
              key={group.id}
              id={group.id}
              delay={index * 120}
              className="group scroll-mt-28 bg-charcoal py-8 md:px-6 lg:px-8"
            >
              <Link to={`/products-capabilities#${group.id}`} className="block">
                <Img
                  image={images[group.image]}
                  decorative
                  imgClassName="transition-transform duration-[1400ms] ease-editorial group-hover:scale-105"
                />
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="font-display text-4xl font-light">
                    {group.label}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="text-ivory/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint"
                  />
                </div>
              </Link>
              <ul className="mt-6 divide-y divide-ivory/10 border-t border-ivory/10 text-sm text-ivory/80">
                {group.items.map((item) => (
                  <li key={item} className="py-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <TextLink to="/products-capabilities">View all capabilities</TextLink>
        </div>
      </Container>
    </section>
  );
}

export default Capabilities;
