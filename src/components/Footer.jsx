import { Link } from "react-router";
import Container from "./ui/Container.jsx";
import ButtonLink from "./ui/ButtonLink.jsx";
import Logo from "./Logo.jsx";
import { logoSrc } from "../data/images.js";
import { navLinks } from "../data/navigation.js";
import { productGroups } from "../data/products.js";
import { company } from "../data/company.js";

const linkClass = "transition-colors hover:text-ivory";

function FooterColumn({ title, className = "", children }) {
  return (
    <div className={className}>
      <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-ivory/50">
        {title}
      </h2>
      <div className="mt-5 space-y-3 text-sm text-ivory/75">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-soot text-ivory">
      <Container className="pb-8 pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-block bg-ivory px-5 py-4 text-charcoal">
              <Logo
                src={logoSrc}
                imgClassName="h-12 w-auto"
                textClassName="text-3xl font-medium"
              />
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-ivory/70">
              {company.descriptor}, based in {company.city}, {company.country}.
            </p>
            <ButtonLink to="/contact" variant="clay" className="mt-8">
              Contact us
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-8">
            <FooterColumn title="Explore">
              {navLinks.map((link) => (
                <p key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.navLabel ?? link.label}
                  </Link>
                </p>
              ))}
            </FooterColumn>

            <FooterColumn title="Product lines">
              {productGroups.map((group) => (
                <p key={group.id}>
                  <Link
                    to={`/products-capabilities#${group.id}`}
                    className={linkClass}
                  >
                    {group.label}
                  </Link>
                </p>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact" className="col-span-2 sm:col-span-1">
              <address className="not-italic leading-relaxed">
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p>
                <a href={company.phone.href} className={linkClass}>
                  {company.phone.display}
                </a>
              </p>
              <p>Fax {company.fax}</p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className={`${linkClass} break-words`}
                >
                  {company.email}
                </a>
              </p>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="self-start transition-colors hover:text-ivory sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
