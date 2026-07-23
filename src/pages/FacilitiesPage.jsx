import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Handshake,
  HeartPulse,
  Hospital,
  MessageSquareText,
  ShieldCheck,
  Stethoscope,
  Users,
  UserSearch,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";

const staffingSolutions = [
  {
    icon: Clock3,
    title: "Per diem staffing",
    text: "Flexible shift coverage for call-outs, census changes, scheduling gaps, and routine workforce needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Contract staffing",
    text: "Qualified professionals for defined assignments, seasonal demand, and longer-term coverage requirements.",
  },
  {
    icon: Stethoscope,
    title: "Travel assignments",
    text: "Support for organizations that need experienced healthcare professionals beyond their local workforce.",
  },
  {
    icon: UserSearch,
    title: "Direct hire",
    text: "Recruitment support for permanent roles requiring dependable clinical experience and organizational alignment.",
  },
  {
    icon: Users,
    title: "Workforce reinforcement",
    text: "Additional personnel to strengthen internal teams during expansion, high census, or operational transitions.",
  },
  {
    icon: HeartPulse,
    title: "Priority staffing support",
    text: "Responsive coordination for urgent staffing needs where continuity of care cannot wait.",
  },
];

const partnershipBenefits = [
  {
    icon: BadgeCheck,
    title: "Credential-focused screening",
    text: "Candidate readiness is supported through defined application and credential-review processes.",
  },
  {
    icon: Clock3,
    title: "Responsive coordination",
    text: "Clear communication helps your team understand request status, candidate availability, and next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-minded placement",
    text: "We focus on professionals prepared to support safe, respectful, and dependable care delivery.",
  },
  {
    icon: MessageSquareText,
    title: "Practical communication",
    text: "Your facility receives direct coordination before placement and throughout the staffing relationship.",
  },
  {
    icon: Users,
    title: "Workforce flexibility",
    text: "Staffing options can support individual shifts, contract periods, or broader hiring priorities.",
  },
  {
    icon: Handshake,
    title: "Partnership approach",
    text: "TrueCare works to understand your environment, expectations, and workforce challenges.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit your request",
    text: "Tell us the role, timeline, facility, and coverage details.",
  },
  {
    number: "02",
    title: "Staffing consultation",
    text: "A TrueCare coordinator reviews your needs and clarifies priorities.",
  },
  {
    number: "03",
    title: "Professional matching",
    text: "Available professionals are evaluated against the assignment requirements.",
  },
  {
    number: "04",
    title: "Credential review",
    text: "Required qualifications and placement documentation are reviewed.",
  },
  {
    number: "05",
    title: "Placement coordination",
    text: "Assignment details, expectations, and start information are confirmed.",
  },
  {
    number: "06",
    title: "Ongoing support",
    text: "Our team remains available for communication and assignment coordination.",
  },
];

const careSettings = [
  "Hospitals and health systems",
  "Skilled nursing facilities",
  "Long-term care communities",
  "Assisted living communities",
  "Rehabilitation centers",
  "Behavioral health facilities",
  "Hospice and palliative care",
  "Home and community-based care",
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="facilities-hero">
        <div
          className="facilities-hero__orb facilities-hero__orb--pink"
          aria-hidden="true"
        />

        <div
          className="facilities-hero__orb facilities-hero__orb--teal"
          aria-hidden="true"
        />

        <div className="container facilities-hero__grid">
          <div className="facilities-hero__content">
            <span className="eyebrow">
              Healthcare workforce solutions
            </span>

            <h1>
              Dependable staffing when
              <span>care cannot wait.</span>
            </h1>

            <p>
              TrueCare helps healthcare organizations address routine,
              urgent, temporary, and long-term staffing needs with
              responsive coordination and qualified professionals.
            </p>

            <div className="facilities-hero__actions">
              <a
                className="button button--primary"
                href="#request-staff"
              >
                Request staff
                <ArrowRight size={18} />
              </a>

              <Link
                className="button button--secondary"
                to="/contact"
              >
                Speak with TrueCare
              </Link>
            </div>

            <div className="facilities-hero__trust">
              <span>
                <CheckCircle2 size={18} />
                Flexible staffing models
              </span>

              <span>
                <CheckCircle2 size={18} />
                Credential-focused process
              </span>

              <span>
                <CheckCircle2 size={18} />
                Responsive coordination
              </span>
            </div>
          </div>

          <div className="facilities-hero__visual">
            <div className="facilities-command-card">
              <div className="facilities-command-card__header">
                <span className="facilities-command-card__icon">
                  <Hospital size={38} />
                </span>

                <span className="facilities-command-card__eyebrow">
                  TrueCare staffing support
                </span>

                <h2>
                  Workforce solutions designed around your care environment.
                </h2>
              </div>

              <div className="facilities-command-card__metrics">
                <article>
                  <span>
                    <Clock3 size={22} />
                  </span>

                  <div>
                    <strong>Timely response</strong>
                    <small>Clear follow-up on staffing requests</small>
                  </div>
                </article>

                <article>
                  <span>
                    <BadgeCheck size={22} />
                  </span>

                  <div>
                    <strong>Qualified professionals</strong>
                    <small>Role-aligned clinical staffing support</small>
                  </div>
                </article>

                <article>
                  <span>
                    <Handshake size={22} />
                  </span>

                  <div>
                    <strong>Ongoing coordination</strong>
                    <small>Support before and during assignments</small>
                  </div>
                </article>
              </div>
            </div>

            <div className="facilities-floating-card facilities-floating-card--top">
              <span>
                <Users size={21} />
              </span>

              <div>
                <strong>Flexible coverage</strong>
                <small>Routine or urgent staffing needs</small>
              </div>
            </div>

            <div className="facilities-floating-card facilities-floating-card--bottom">
              <span>
                <ShieldCheck size={21} />
              </span>

              <div>
                <strong>Care-focused standards</strong>
                <small>Professional readiness matters</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section facilities-solutions"
        id="solutions"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Staffing solutions"
            title="Flexible workforce support for changing care demands"
            text="Whether your organization needs one professional, recurring shift coverage, contract support, or help filling a permanent role, TrueCare can begin the staffing conversation."
            centered
          />

          <div className="facilities-solutions__grid">
            {staffingSolutions.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="facilities-solution-card"
                key={title}
              >
                <span className="facilities-solution-card__icon">
                  <Icon size={25} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section facilities-partnership">
        <div className="container facilities-partnership__grid">
          <div className="facilities-partnership__intro">
            <SectionHeading
              eyebrow="Why TrueCare"
              title="A staffing partner focused on reliability, communication, and care"
              text="Healthcare staffing is not only about filling a schedule. It is about supporting safe operations, protecting continuity of care, and helping clinical teams serve patients and residents."
            />

            <div className="facilities-partnership__highlight">
              <span>
                <Building2 size={26} />
              </span>

              <div>
                <strong>Built around your organization</strong>
                <p>
                  We begin by understanding your setting, role requirements,
                  urgency, schedule, and operational expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="facilities-benefits__grid">
            {partnershipBenefits.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="facilities-benefit-card"
                key={title}
              >
                <span>
                  <Icon size={22} />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section facilities-process">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="A clear process from staffing request to placement"
            text="Our workflow keeps your organization informed while the request moves through consultation, matching, review, and placement."
            centered
          />

          <div className="facilities-process__grid">
            {processSteps.map((step) => (
              <article
                className="facilities-process-card"
                key={step.number}
              >
                <span className="facilities-process-card__number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section facilities-settings">
        <div className="container facilities-settings__grid">
          <div>
            <SectionHeading
              eyebrow="Care environments"
              title="Supporting organizations across the care continuum"
              text="TrueCare staffing conversations may support a variety of healthcare and residential care environments based on role availability and assignment requirements."
            />

            <div className="facilities-settings__list">
              {careSettings.map((setting) => (
                <span key={setting}>
                  <CheckCircle2 size={20} />
                  {setting}
                </span>
              ))}
            </div>
          </div>

          <aside className="facilities-settings__panel">
            <span className="facilities-settings__panel-icon">
              <HeartPulse size={32} />
            </span>

            <span className="facilities-settings__panel-eyebrow">
              Continuity of care
            </span>

            <h3>
              The right staffing support helps your care team stay focused.
            </h3>

            <p>
              TrueCare works to reduce the burden of workforce gaps by
              coordinating qualified professionals for defined care and
              operational needs.
            </p>

            <a
              className="button button--white"
              href="#request-staff"
            >
              Start a staffing request
              <ArrowRight size={18} />
            </a>
          </aside>
        </div>
      </section>

      <section
        className="section facilities-request"
        id="request-staff"
      >
        <div className="container facilities-request__grid">
          <div className="facilities-request__content">
            <SectionHeading
              eyebrow="Request staff"
              title="Tell us what your organization needs"
              text="Submit the details below for routine or urgent staffing support. A TrueCare coordinator will review the request and follow up."
            />

            <div className="facilities-request__details">
              <article>
                <span>
                  <Clock3 size={21} />
                </span>

                <div>
                  <h3>Staffing options</h3>
                  <p>
                    Per diem, contract, travel, temporary, workforce
                    reinforcement, and direct hire.
                  </p>
                </div>
              </article>

              <article>
                <span>
                  <Stethoscope size={21} />
                </span>

                <div>
                  <h3>Common roles</h3>
                  <p>
                    RN, LPN/LVN, CNA, CMA, and additional healthcare
                    professionals.
                  </p>
                </div>
              </article>

              <article>
                <span>
                  <MessageSquareText size={21} />
                </span>

                <div>
                  <h3>What happens next</h3>
                  <p>
                    A staffing coordinator will review your request and
                    contact you regarding availability and next steps.
                  </p>
                </div>
              </article>
            </div>

            <div className="facilities-request__notice">
              <ShieldCheck size={21} />

              <p>
                Do not include patient names, medical records, protected
                health information, or other sensitive clinical data.
              </p>
            </div>
          </div>

          <div className="facilities-request__form">
            <div className="facilities-request__form-heading">
              <span>Facility staffing inquiry</span>
              <h2>Start your request</h2>
              <p>
                Complete the form and our team will follow up using the
                contact information provided.
              </p>
            </div>

            <ContactForm type="facility" />
          </div>
        </div>
      </section>

      <section className="facilities-final-cta">
        <div
          className="facilities-final-cta__shape"
          aria-hidden="true"
        />

        <div className="container facilities-final-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">
              Workforce partnership
            </span>

            <h2>
              Build a more dependable staffing plan with TrueCare.
            </h2>

            <p>
              Begin with your current workforce need and let our team help
              coordinate the next step.
            </p>
          </div>

          <div className="facilities-final-cta__actions">
            <a
              className="button button--white"
              href="#request-staff"
            >
              Request staff
            </a>

            <Link
              className="button button--outline-light"
              to="/contact"
            >
              Contact TrueCare
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
