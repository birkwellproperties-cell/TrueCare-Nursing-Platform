import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UploadCloud,
  UserCheck,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import SectionHeading from "../components/SectionHeading";

const benefits = [
  {
    icon: CalendarDays,
    title: "Flexible scheduling",
    text: "Explore opportunities that align with your availability, experience, and professional goals.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive opportunities",
    text: "Access per-diem, contract, and placement opportunities across multiple healthcare settings.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear onboarding",
    text: "Move through application, documentation, and credential review with defined next steps.",
  },
  {
    icon: HeartHandshake,
    title: "Responsive coordination",
    text: "Receive practical communication and assignment support from a team that values your time.",
  },
];

const roles = [
  {
    title: "Registered Nurses",
    abbreviation: "RN",
    text: "Clinical nursing opportunities for qualified professionals across a variety of care environments.",
  },
  {
    title: "Licensed Practical Nurses",
    abbreviation: "LPN",
    text: "Flexible nursing assignments supporting quality care, medication administration, and patient needs.",
  },
  {
    title: "Certified Nurse Aides",
    abbreviation: "CNA",
    text: "Direct-care opportunities centered on dignity, safety, comfort, and dependable daily support.",
  },
  {
    title: "Certified Medication Aides",
    abbreviation: "CMA",
    text: "Medication-support assignments for qualified professionals working within approved care settings.",
  },
];

const applicationSteps = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Explore opportunities",
    text: "Review available positions and identify roles that match your qualifications and schedule.",
  },
  {
    number: "02",
    icon: UploadCloud,
    title: "Submit your application",
    text: "Provide your contact information, work history, credentials, and required documentation.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Complete credential review",
    text: "Our team reviews your qualifications, documentation, and readiness for placement.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Begin your assignment",
    text: "Receive assignment information, expectations, and ongoing coordination from TrueCare.",
  },
];

const professionalStandards = [
  "Active credentials appropriate for the role",
  "Dependable attendance and professional communication",
  "Commitment to patient dignity, safety, and quality care",
  "Ability to meet facility-specific onboarding requirements",
];

export default function ProfessionalsPage() {
  return (
    <>
      <section className="professionals-hero">
        <div
          className="professionals-hero__orb professionals-hero__orb--pink"
          aria-hidden="true"
        />

        <div
          className="professionals-hero__orb professionals-hero__orb--teal"
          aria-hidden="true"
        />

        <div className="container professionals-hero__grid">
          <div className="professionals-hero__content">
            <span className="eyebrow">
              Healthcare professionals
            </span>

            <h1>
              Your skills deserve
              <span>opportunities that fit.</span>
            </h1>

            <p>
              Join a responsive healthcare staffing team that values
              qualified professionals, clear communication, flexible
              opportunities, and meaningful patient care.
            </p>

            <div className="professionals-hero__actions">
              <Link
                className="button button--primary"
                to="/jobs"
              >
                View open positions
                <ArrowRight size={18} />
              </Link>

              <Link
                className="button button--secondary"
                to="/contact"
              >
                Contact recruiting
              </Link>
            </div>

            <div className="professionals-hero__highlights">
              <span>
                <CheckCircle2 size={18} />
                Flexible opportunities
              </span>

              <span>
                <CheckCircle2 size={18} />
                Clear onboarding
              </span>

              <span>
                <CheckCircle2 size={18} />
                Responsive support
              </span>
            </div>
          </div>

          <div className="professionals-hero__visual">
            <div className="professionals-profile-card">
              <div className="professionals-profile-card__top">
                <span className="professionals-profile-card__icon">
                  <Stethoscope size={40} />
                </span>

                <span className="professionals-profile-card__label">
                  Careers with TrueCare
                </span>

                <h2>
                  Professional support from application through assignment.
                </h2>
              </div>

              <div className="professionals-profile-card__items">
                <article>
                  <span>
                    <CalendarDays size={21} />
                  </span>

                  <div>
                    <strong>Flexible scheduling</strong>
                    <small>
                      Opportunities aligned with your availability
                    </small>
                  </div>
                </article>

                <article>
                  <span>
                    <MessageCircle size={21} />
                  </span>

                  <div>
                    <strong>Clear communication</strong>
                    <small>
                      Practical updates throughout the process
                    </small>
                  </div>
                </article>

                <article>
                  <span>
                    <GraduationCap size={21} />
                  </span>

                  <div>
                    <strong>Professional growth</strong>
                    <small>
                      Experience across diverse care settings
                    </small>
                  </div>
                </article>
              </div>
            </div>

            <div className="professionals-floating-card professionals-floating-card--top">
              <span>
                <Sparkles size={21} />
              </span>

              <div>
                <strong>Meaningful work</strong>
                <small>Care that makes a difference</small>
              </div>
            </div>

            <div className="professionals-floating-card professionals-floating-card--bottom">
              <span>
                <HeartHandshake size={21} />
              </span>

              <div>
                <strong>People-first support</strong>
                <small>You are more than a placement</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section professionals-benefits">
        <div className="container">
          <SectionHeading
            eyebrow="Why TrueCare"
            title="Professional opportunities with flexibility and support"
            text="We aim to make every stage of the staffing experience clear, responsive, and respectful of your professional goals."
            centered
          />

          <div className="card-grid card-grid--four">
            {benefits.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="service-card professionals-benefit-card"
                key={title}
              >
                <span className="icon-box">
                  <Icon />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section professionals-roles">
        <div className="container">
          <SectionHeading
            eyebrow="Roles we support"
            title="Opportunities across essential healthcare positions"
            text="TrueCare supports qualified professionals serving patients, residents, care teams, and healthcare organizations."
          />

          <div className="professionals-roles__grid">
            {roles.map((role) => (
              <article
                className="professional-role-card"
                key={role.abbreviation}
              >
                <span className="professional-role-card__badge">
                  {role.abbreviation}
                </span>

                <div>
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>

                  <Link to="/jobs">
                    View opportunities
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section professionals-process">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="A clear path from application to assignment"
            text="Our process is designed to help qualified professionals understand what comes next at every stage."
            centered
          />

          <div className="professionals-process__grid">
            {applicationSteps.map(({
              number,
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="professionals-process-card"
                key={number}
              >
                <span className="professionals-process-card__number">
                  {number}
                </span>

                <span className="professionals-process-card__icon">
                  <Icon size={25} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="center-actions">
            <Link
              className="button button--primary"
              to="/jobs"
            >
              Start with open positions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section professionals-expectations">
        <div className="container professionals-expectations__grid">
          <div>
            <SectionHeading
              eyebrow="Professional standards"
              title="Quality care begins with dependable professionals"
              text="TrueCare seeks professionals who combine clinical readiness with compassion, communication, and respect for every person they serve."
            />

            <div className="professionals-standards-list">
              {professionalStandards.map((standard) => (
                <span key={standard}>
                  <CheckCircle2 size={20} />
                  {standard}
                </span>
              ))}
            </div>
          </div>

          <aside className="professionals-support-panel">
            <span className="professionals-support-panel__icon">
              <HeartHandshake size={31} />
            </span>

            <span className="professionals-support-panel__eyebrow">
              Support when you need it
            </span>

            <h3>
              Questions about applying or preparing your credentials?
            </h3>

            <p>
              Contact the TrueCare recruiting team for guidance about
              current roles, documentation, onboarding, or the
              application process.
            </p>

            <Link
              className="button button--white"
              to="/contact"
            >
              Contact recruiting
              <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="professionals-final-cta">
        <div
          className="professionals-final-cta__shape"
          aria-hidden="true"
        />

        <div className="container professionals-final-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">
              Your next opportunity
            </span>

            <h2>
              Bring your experience to a team that values it.
            </h2>

            <p>
              Explore current openings and take the next step with
              TrueCare Nursing Services.
            </p>
          </div>

          <div className="professionals-final-cta__actions">
            <Link
              className="button button--white"
              to="/jobs"
            >
              Find open positions
            </Link>

            <Link
              className="button button--outline-light"
              to="/contact"
            >
              Speak with recruiting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
