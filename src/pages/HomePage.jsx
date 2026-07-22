import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Hospital,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import SectionHeading from "../components/SectionHeading";

const staffingSolutions = [
  {
    icon: Clock3,
    title: "Per-diem staffing",
    text: "Flexible clinical coverage for call-offs, open shifts, and changing census needs.",
  },
  {
    icon: CalendarCheck,
    title: "Contract staffing",
    text: "Dependable professionals for extended assignments and continuity of care.",
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

const professionalRoles = [
  "Registered Nurses",
  "Licensed Practical Nurses",
  "Certified Nurse Aides",
  "Certified Medication Aides",
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Credential-focused",
    text: "Qualifications, readiness, and facility requirements remain central throughout the placement process.",
  },
  {
    icon: Clock3,
    title: "Responsive coordination",
    text: "Our team supports urgent and planned staffing needs with dependable communication.",
  },
  {
    icon: HeartHandshake,
    title: "People-first service",
    text: "Every professional and facility receives personalized support from request through placement.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div
          className="home-hero__shape home-hero__shape--pink"
          aria-hidden="true"
        />

        <div
          className="home-hero__shape home-hero__shape--teal"
          aria-hidden="true"
        />

        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="eyebrow">
              Compassionate care. Trusted professionals.
            </span>

            <h1>
              Reliable healthcare staffing
              <span>centered on people.</span>
            </h1>

            <p>
              TrueCare Nursing Services connects qualified healthcare
              professionals with facilities that need dependable,
              responsive clinical support.
            </p>

            <div className="home-hero__actions">
              <Link
                className="button button--primary"
                to="/jobs"
              >
                Find a job
                <ArrowRight size={18} />
              </Link>

              <Link
                className="button button--teal"
                to="/facilities"
              >
                Request staff
              </Link>
            </div>

            <div className="home-hero__trust">
              <span>
                <ShieldCheck size={18} />
                Credential-focused
              </span>

              <span>
                <Clock3 size={18} />
                Available 24/7
              </span>

              <span>
                <MapPin size={18} />
                Serving Kansas
              </span>
            </div>
          </div>

          <div
            className="home-hero__visual"
            aria-label="TrueCare healthcare staffing support"
          >
            <div className="care-visual">
              <div className="care-visual__halo" />

              <div className="care-visual__panel">
                <span className="care-visual__icon">
                  <Stethoscope size={56} />
                </span>

                <span className="care-visual__eyebrow">
                  TrueCare Nursing Services
                </span>

                <strong>
                  The right professionals make stronger care possible.
                </strong>

                <div className="care-visual__people">
                  <span>
                    <UsersRound size={19} />
                    Qualified professionals
                  </span>

                  <span>
                    <Hospital size={19} />
                    Facility support
                  </span>
                </div>
              </div>

              <div className="care-card care-card--top">
                <span className="care-card__icon">
                  <BadgeCheck size={22} />
                </span>

                <div>
                  <strong>Qualified talent</strong>
                  <small>Matched to your needs</small>
                </div>
              </div>

              <div className="care-card care-card--bottom">
                <span className="care-card__icon care-card__icon--pink">
                  <HeartHandshake size={22} />
                </span>

                <div>
                  <strong>People-first support</strong>
                  <small>From request to placement</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-pathways">
        <div className="container home-pathways__grid">
          <article>
            <span className="home-pathways__icon">
              <Stethoscope size={24} />
            </span>

            <div>
              <small>Healthcare professionals</small>

              <h2>
                Build a schedule and career that work for you.
              </h2>

              <Link to="/professionals">
                Explore opportunities
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>

          <article>
            <span className="home-pathways__icon home-pathways__icon--teal">
              <Hospital size={24} />
            </span>

            <div>
              <small>Healthcare facilities</small>

              <h2>
                Get dependable support for planned and urgent needs.
              </h2>

              <Link to="/facilities">
                Explore staffing solutions
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section home-solutions">
        <div className="container">
          <SectionHeading
            eyebrow="Staffing solutions"
            title="Support designed around your workforce needs"
            text="From one open shift to an extended assignment, TrueCare provides a responsive path to qualified clinical support."
            centered
          />

          <div className="card-grid card-grid--four">
            {staffingSolutions.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="service-card home-service-card"
                key={title}
              >
                <span className="icon-box">
                  <Icon />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>

                <Link to="/facilities">
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-professionals">
        <div className="container home-professionals__grid">
          <div>
            <SectionHeading
              eyebrow="Professionals we place"
              title="Skilled people for the moments that matter"
              text="We support healthcare organizations with professionals across essential nursing and direct-care roles."
            />

            <div className="home-role-list">
              {professionalRoles.map((role) => (
                <span key={role}>
                  <CheckCircle2 size={20} />
                  {role}
                </span>
              ))}
            </div>

            <Link
              className="button button--primary"
              to="/jobs"
            >
              View current openings
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="professional-feature">
            <div className="professional-feature__pattern" />

            <span className="professional-feature__icon">
              <Sparkles size={29} />
            </span>

            <span className="professional-feature__label">
              Careers with TrueCare
            </span>

            <h3>
              Work that respects your skills, availability, and goals.
            </h3>

            <p>
              Explore flexible opportunities, diverse care settings,
              responsive coordination, and assignments aligned with
              your experience.
            </p>

            <Link to="/professionals">
              Why work with TrueCare
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-trust">
        <div className="container">
          <SectionHeading
            eyebrow="Why TrueCare"
            title="A staffing relationship built on responsiveness and trust"
            text="We take time to understand each facility and professional so every placement begins with clearer expectations and stronger support."
            centered
          />

          <div className="home-trust__grid">
            {trustPoints.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article key={title}>
                <span>
                  <Icon size={27} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div
          className="home-cta__accent"
          aria-hidden="true"
        />

        <div className="container home-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">
              Ready for the next step?
            </span>

            <h2>
              Let&apos;s strengthen care together.
            </h2>

            <p>
              Choose the path that best matches what you need today.
            </p>
          </div>

          <div className="home-cta__actions">
            <Link
              className="button button--white"
              to="/jobs"
            >
              Explore jobs
            </Link>

            <Link
              className="button button--outline-light"
              to="/facilities"
            >
              Request staff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
