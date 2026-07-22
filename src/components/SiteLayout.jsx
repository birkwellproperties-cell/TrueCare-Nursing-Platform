import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { siteConfig } from "../config/site";
import Brand from "./Brand";

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

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar__inner">
          <span>{siteConfig.hours}</span>
          <a href={siteConfig.phoneHref}>
            <Phone size={15} /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Brand />

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <NavLink className="button button--primary desktop-cta" to="/facilities">
            Request Staff
          </NavLink>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="mobile-nav container" aria-label="Mobile navigation">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <NavLink
              className="button button--primary"
              to="/facilities"
              onClick={() => setOpen(false)}
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
          <div>
            <Brand />
            <p>
              Dependable healthcare staffing built around people, responsiveness,
              and quality care.
            </p>
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
            <NavLink to="/facilities#solutions">Staffing solutions</NavLink>
            <NavLink to="/contact">Contact a coordinator</NavLink>
          </div>

          <div>
            <h3>Contact</h3>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.primaryEmail}`}>
              {siteConfig.primaryEmail}
            </a>
            <span>{siteConfig.addressLine1}</span>
            <span>{siteConfig.addressLine2}</span>
          </div>
        </div>

        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.businessName}.</span>
          <span>Equal opportunity employer.</span>
        </div>
      </footer>
    </div>
  );
}
