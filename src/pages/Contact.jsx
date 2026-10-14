import ContactHero from "../components/contact/ContactHero.jsx";
import InquiryForm from "../components/contact/InquiryForm.jsx";
import MapSection from "../components/contact/MapSection.jsx";
import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { company } from "../data/company.js";

const helpfulDetails = [
  "The product line and styles you have in mind",
  "Approximate quantity",
  "Your target delivery timeline",
  "Any reference sample or images",
];

function Contact() {
  return (
    <>
      <ContactHero />

      <section>
        <Container className="grid gap-16 py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Inquiry</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Send us <em className="text-olive">your requirements.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-sm leading-relaxed text-charcoal/75">
                The more you tell us, the more useful our reply will be. It
                helps to include:
              </p>
              <ul className="mt-6 divide-y divide-charcoal/15 border-y border-charcoal/15 text-sm">
                {helpfulDetails.map((item) => (
                  <li key={item} className="py-3 text-charcoal/80">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/60">
                Contact
              </p>
              <p className="mt-2 font-display text-xl">
                {company.proprietor.name}
              </p>
              <p className="text-sm text-charcoal/70">
                {company.proprietor.role}
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
            <InquiryForm />
          </Reveal>
        </Container>
      </section>

      <MapSection />
    </>
  );
}

export default Contact;
