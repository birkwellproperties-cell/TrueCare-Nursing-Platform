import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock3,
  HeartHandshake,
  Hospital,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";

const staffing = [
  {
    icon: Clock3,
    title: "Per-diem staffing",
    text: "Flexible clinical coverage for open shifts, call-offs, and changing census needs.",
  },
  {
    icon: CalendarCheck,
    title: "Contract staffing",
    text: "Consistent professionals for extended assignments and continuity of care.",
  },
  {
    icon: Hospital,
    title: "Facility workforce support",
    text: "Responsive staffing solutions tailored to your setting, schedule, and standards.",
  },
  {
    icon: UserRoundCheck,
    title: "Direct-hire placement",
    text: "Focused recruiting support for permanent additions to your healthcare team.",
  },
];

const roles = ["Registered Nurses", "Licensed Practical Nurses", "Certified Nurse Aides", "Certified Medication Aides"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">
              Healthcare staffing with heart
            </span>
            <h1>
              Reliable professionals.
              <span>Better continuity of care.</span>
            </h1>
            <p>
              TrueCare Nursing Services connects qualified healthcare professionals
              with facilities that need dependable, responsive clinical support.
            </p>
            <div className="hero__actions">
              <Link className="button button--white" to="/jobs">
                Find a job <ArrowRight size={18} />
              </Link>
              <Link className="button button--outline-light" to="/facilities">
                Request staff
              </Link>
            </div>
            <div className="hero__trust">
              <span><ShieldCheck size={18} /> Credential-focused</span>
              <span><Clock3 size={18} /> Available 24/7</span>
              <span><MapPin size={18} /> Serving Kansas</span>
            </div>
          </div>

          <div className="hero__visual" aria-label="TrueCare healthcare staffing">
            <div className="hero__cross" />
            <div className="hero__portrait-card">
              <div className="portrait-placeholder">
                <Stethoscope size={70} />
                <strong>Care starts with the right team.</strong>
              </div>
            </div>
            <div className="floating-card floating-card--top">
              <BadgeCheck size={24} />
              <div>
                <strong>Qualified talent</strong>
                <span>Matched to your needs</span>
              </div>
            </div>
            <div className="floating-card floating-card--bottom">
              <HeartHandshake size={24} />
              <div>
                <strong>People-first support</strong>
                <span>From request to placement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip">
        <div className="container audience-strip__grid">
          <div>
            <span>Healthcare professionals</span>
            <strong>Build a schedule and career that work for you.</strong>
            <Link to="/professionals">Explore opportunities <ArrowRight size={17} /></Link>
          </div>
          <div>
            <span>Healthcare facilities</span>
            <strong>Get dependable support for planned and urgent needs.</strong>
            <Link to="/facilities">Explore staffing solutions <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Staffing solutions"
            title="Support built around your workforce needs"
            text="From one open shift to an extended assignment, TrueCare provides a responsive path to qualified clinical support."
            centered
          />
          <div className="card-grid card-grid--four">
            {staffing.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <span className="icon-box"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to="/facilities">Learn more <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Professionals we place"
              title="Skilled people for the moments that matter"
              text="We support healthcare organizations with professionals across essential nursing and direct-care roles."
            />
            <div className="check-list">
              {roles.map((role) => (
                <span key={role}><BadgeCheck size={20} /> {role}</span>
              ))}
            </div>
            <Link className="button button--primary" to="/jobs">
              View current openings
            </Link>
          </div>
          <div className="feature-panel">
            <span className="feature-panel__icon"><Stethoscope /></span>
            <h3>For healthcare professionals</h3>
            <p>
              Find flexible work, diverse clinical settings, responsive
              coordination, and opportunities aligned with your availability.
            </p>
            <Link to="/professionals">Why work with TrueCare <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container trust-grid">
          <div>
            <SectionHeading
              eyebrow="Why TrueCare"
              title="A staffing relationship centered on responsiveness"
              text="We take time to understand each facility and professional so every placement begins with clearer expectations and stronger support."
            />
          </div>
          <div className="trust-items">
            <article>
              <ShieldCheck />
              <div><h3>Quality-minded</h3><p>Credential and readiness requirements are considered throughout the placement process.</p></div>
            </article>
            <article>
              <Clock3 />
              <div><h3>Responsive coordination</h3><p>Support is available around the clock for urgent and scheduled staffing needs.</p></div>
            </article>
            <article>
              <HeartHandshake />
              <div><h3>Personalized service</h3><p>Staffing solutions are tailored to the facility, role, shift, and assignment.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-section__inner">
          <div>
            <span className="eyebrow eyebrow--light">Ready for the next step?</span>
            <h2>Let’s strengthen care together.</h2>
            <p>Choose the path that best matches what you need today.</p>
          </div>
          <div className="cta-section__actions">
            <Link className="button button--white" to="/jobs">Explore jobs</Link>
            <Link className="button button--outline-light" to="/facilities">Request staff</Link>
          </div>
        </div>
      </section>
    </>
  );
}
