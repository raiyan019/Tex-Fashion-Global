import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import Container from "./ui/Container.jsx";
import ButtonLink from "./ui/ButtonLink.jsx";
import Logo from "./Logo.jsx";
import { logoSrc } from "../data/images.js";
import { navLinks } from "../data/navigation.js";
import { company } from "../data/company.js";

const primaryLinks = navLinks.filter((link) => link.primary);
const mobileLinks = navLinks.filter(
  (link) => link.primary || link.path === "/contact",
);

const desktopLinkClass = ({ isActive }) =>
  `relative py-2 text-sm font-medium tracking-wide after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-charcoal after:transition-transform after:duration-500 after:ease-editorial hover:after:scale-x-100 ${
    isActive ? "after:scale-x-100" : "after:scale-x-0"
  }`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // While the mobile menu is open: Esc closes it, page scroll is locked,
  // and it closes automatically if the viewport grows to desktop width.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Utility bar (desktop only) */}
      <div className="hidden bg-charcoal text-xs text-ivory/80 lg:block">
        <Container className="flex h-9 items-center justify-between">
          <p className="tracking-wide">
            100% export-oriented garments manufacturer · {company.city},{" "}
            {company.country}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={company.phone.href}
              className="flex items-center gap-2 transition-colors hover:text-ivory"
            >
              <Phone size={13} aria-hidden="true" />
              {company.phone.display}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-ivory"
            >
              <Mail size={13} aria-hidden="true" />
              {company.email}
            </a>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <Link
            to="/"
            onClick={close}
            aria-label={`${company.name} — home`}
            className="flex items-center"
          >
            <Logo src={logoSrc} tagline priority />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex xl:gap-10"
          >
            {primaryLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={desktopLinkClass}
              >
                {link.navLabel ?? link.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact" size="sm" className="ml-2">
              Contact
            </ButtonLink>
          </nav>

          <button
            type="button"
            className="-mr-2 p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={26} aria-hidden="true" />
            ) : (
              <Menu size={26} aria-hidden="true" />
            )}
          </button>
        </Container>
      </header>

      {/* Mobile menu: rendered outside <header> because backdrop-blur would trap `fixed` children */}
      {open && (
        <div
          id="mobile-menu"
          className="menu-in fixed inset-0 z-40 overflow-y-auto bg-ivory px-5 pb-10 pt-[88px] sm:px-8 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="border-t border-charcoal/15">
              {mobileLinks.map((link) => (
                <li key={link.path} className="border-b border-charcoal/15">
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={close}
                    className={({ isActive }) =>
                      `block py-4 font-display text-3xl tracking-tight ${
                        isActive ? "text-olive" : ""
                      }`
                    }
                  >
                    {link.navLabel ?? link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-5 text-sm text-charcoal/75">
            <address className="not-italic leading-relaxed">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p>
              <a
                href={company.phone.href}
                className="underline underline-offset-4"
              >
                {company.phone.display}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${company.email}`}
                className="break-words underline underline-offset-4"
              >
                {company.email}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
