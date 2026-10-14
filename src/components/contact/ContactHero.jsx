import { MapPin, Phone, Mail } from "lucide-react";
import Container from "../ui/Container.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Reveal from "../ui/Reveal.jsx";
import { company } from "../../data/company.js";

const linkClass = "transition-colors hover:text-clay-soft";

function ContactHero() {
  return (
    <section className="bg-olive-deep text-ivory">
      <Container className="pt-16 lg:pt-24">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] tracking-tight">
            Let’s talk about{" "}
            <em className="text-clay-soft">your next order.</em>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/75">
            Tell us what you are developing. Our whole team will work on your
            query, and if you have a development sample to share, we will give
            it our best support.
          </p>
        </Reveal>
      </Container>

      <Container>
        <Reveal delay={300}>
          <dl className="mt-16 grid divide-y divide-ivory/20 border-t border-ivory/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-8 md:pr-8">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ivory/60">
                <MapPin size={14} aria-hidden="true" />
                Visit
              </dt>
              <dd className="mt-4 font-display text-xl leading-snug">
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>

            <div className="py-8 md:px-8">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ivory/60">
                <Phone size={14} aria-hidden="true" />
                Call
              </dt>
              <dd className="mt-4 font-display text-xl leading-snug">
                <a href={company.phone.href} className={linkClass}>
                  {company.phone.display}
                </a>
                <span className="mt-1 block text-base text-ivory/60">
                  Fax {company.fax}
                </span>
              </dd>
            </div>

            <div className="py-8 md:pl-8">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ivory/60">
                <Mail size={14} aria-hidden="true" />
                Email
              </dt>
              <dd className="mt-4 wrap-break-word font-display text-xl leading-snug">
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

export default ContactHero;
