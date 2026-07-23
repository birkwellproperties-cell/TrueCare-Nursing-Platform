import {
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  siteConfig,
} from "../config/site";

import Brand from "./Brand";
import RouteSeo from "./RouteSeo";

const links = [
  ["Find Jobs", "/jobs"],
  ["Professionals", "/professionals"],
  ["Facilities", "/facilities"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <RouteSeo />
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__status">
            <Clock3 size={14} />
            {siteConfig.hours}
          </span>

          <div className="topbar__contact">
            <a href={`mailto:${siteConfig.primaryEmail}`}>
              <Mail size={14} />
              {siteConfig.primaryEmail}
            </a>

            <a href={siteConfig.phoneHref}>
              <Phone size={14} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Brand />

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            className="button button--primary desktop-cta"
            to="/facilities"
          >
            Request Staff
          </NavLink>

          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav container"
            aria-label="Mobile navigation"
          >
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
              >
                {label}
              </NavLink>
            ))}

            <NavLink
              className="button button--primary"
              to="/facilities"
            >
              Request Staff
            </NavLink>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand-column">
            <Brand />

            <p>
              Compassionate staffing support built around people,
              responsiveness, and quality care.
            </p>

            <div className="footer__contact-summary">
              <a href={siteConfig.phoneHref}>
                <Phone size={16} />
                {siteConfig.phoneDisplay}
              </a>

              <a href={`mailto:${siteConfig.primaryEmail}`}>
                <Mail size={16} />
                {siteConfig.primaryEmail}
              </a>

              <span>
                <MapPin size={16} />
                {siteConfig.addressLine1}, {siteConfig.addressLine2}
              </span>
            </div>
          </div>

          <div>
            <h3>For Professionals</h3>
            <NavLink to="/jobs">Find jobs</NavLink>
            <NavLink to="/professionals">Why TrueCare</NavLink>
            <NavLink to="/resources">Employee resources</NavLink>
          </div>

          <div>
            <h3>For Facilities</h3>
            <NavLink to="/facilities">Request staff</NavLink>
            <NavLink to="/facilities#solutions">
              Staffing solutions
            </NavLink>
            <NavLink to="/contact">
              Contact a coordinator
            </NavLink>
          </div>

          <div>
            <h3>Company</h3>
            <NavLink to="/about">About TrueCare</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </div>
        </div>

        <div className="container footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}.
            All rights reserved.
          </span>

          <span>
            Equal opportunity employer.
          </span>
        </div>
      </footer>
    </div>
  );
}
