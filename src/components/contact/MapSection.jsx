import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Reveal from "../ui/Reveal.jsx";
import { company } from "../../data/company.js";

const query = encodeURIComponent(`${company.address.join(", ")}`);
const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;
const openUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

function MapSection() {
  return (
    <section className="bg-paper">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Find us</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.02] tracking-[-0.02em]">
                In Mirpur, <em className="text-olive">Dhaka.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9">
            <address className="not-italic leading-relaxed text-charcoal/75">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              Open in Google Maps
              <span className="sr-only">(opens in a new tab)</span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-12">
          <div className="relative aspect-[4/3] bg-sand sm:aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              title={`Map showing the ${company.name} address in DOHS Mirpur, Dhaka`}
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default MapSection;
