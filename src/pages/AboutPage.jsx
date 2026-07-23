import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  HeartPulse,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import SectionHeading from "../components/SectionHeading";

const values = [
  {
    icon: MessageSquareText,
    title: "Responsiveness",
    text: "We communicate clearly and respond thoughtfully when workforce needs, assignment details, or professional priorities change.",
  },
  {
    icon: ShieldCheck,
    title: "Professionalism",
    text: "We promote dependable service, accountable coordination, and respectful interactions throughout every staffing relationship.",
  },
  {
    icon: HeartPulse,
    title: "Compassion",
    text: "Healthcare is human work. Patients, residents, professionals, and care teams remain central to our decisions.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    text: "We work to understand the goals of both healthcare organizations and professionals before helping coordinate the next step.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Listen first",
    text: "We begin by understanding the role, care environment, schedule, urgency, expectations, and desired outcome.",
  },
  {
    number: "02",
    title: "Coordinate clearly",
    text: "Our team communicates the information needed to support informed decisions and realistic next steps.",
  },
  {
    number: "03",
    title: "Match thoughtfully",
    text: "Professionals and assignments are considered based on qualifications, availability, requirements, and alignment.",
  },
  {
    number: "04",
    title: "Support the relationship",
    text: "We remain available as the staffing or employment relationship moves forward.",
  },
];

const commitments = [
  "Clear communication throughout the staffing process",
  "Respect for professionals, facilities, patients, and residents",
  "Credential-focused candidate and assignment coordination",
  "Practical solutions for routine and changing workforce needs",
  "Responsible handling of submitted information",
  "A service experience centered on trust and professionalism",
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div
          className="about-hero__orb about-hero__orb--pink"
          aria-hidden="true"
        />

        <div
          className="about-hero__orb about-hero__orb--teal"
          aria-hidden="true"
        />

        <div className="container about-hero__grid">
          <div className="about-hero__content">
            <span className="eyebrow">
              About TrueCare
            </span>

            <h1>
              Healthcare staffing relationships built around
              <span>real people and real needs.</span>
            </h1>

            <p>
              TrueCare Nursing Services connects healthcare organizations
              and professionals through responsive coordination, practical
              communication, and a commitment to dependable care support.
            </p>

            <div className="about-hero__actions">
              <Link
                className="button button--primary"
                to="/facilities"
              >
                Request staffing support
                <ArrowRight size={18} />
              </Link>

              <Link
                className="button button--secondary"
                to="/professionals"
              >
                Explore professional opportunities
              </Link>
            </div>

            <div className="about-hero__trust">
              <span>
                <CheckCircle2 size={18} />
                People-centered coordination
              </span>

              <span>
                <CheckCircle2 size={18} />
                Professional standards
              </span>

              <span>
                <CheckCircle2 size={18} />
                Responsive communication
              </span>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-purpose-card">
              <span className="about-purpose-card__icon">
                <HeartHandshake size={38} />
              </span>

              <span className="about-purpose-card__eyebrow">
                Our purpose
              </span>

              <h2>
                Help care teams and healthcare professionals move forward
                with confidence.
              </h2>

              <p>
                We bring structure, communication, and human understanding
                to the staffing process.
              </p>

              <div className="about-purpose-card__points">
                <span>
                  <BadgeCheck size={20} />
                  Quality-minded coordination
                </span>

                <span>
                  <Users size={20} />
                  Support for both sides of staffing
                </span>

                <span>
                  <Stethoscope size={20} />
                  Focused on healthcare environments
                </span>
              </div>
            </div>

            <div className="about-floating-card about-floating-card--top">
              <span>
                <Building2 size={21} />
              </span>

              <div>
                <strong>Facility support</strong>
                <small>Workforce solutions for care organizations</small>
              </div>
            </div>

            <div className="about-floating-card about-floating-card--bottom">
              <span>
                <Sparkles size={21} />
              </span>

              <div>
                <strong>Professional opportunity</strong>
                <small>Career connections with clear next steps</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__content">
            <SectionHeading
              eyebrow="Our story"
              title="A practical and human approach to healthcare staffing"
              text="Healthcare organizations need dependable people. Healthcare professionals need meaningful opportunities, clear expectations, and respectful communication. TrueCare exists to help bring those needs together."
            />

            <p>
              Our approach begins with listening. We work to understand the
              care environment, role expectations, schedule, qualifications,
              and operational needs behind each request.
            </p>

            <p>
              We also recognize that every professional brings individual
              experience, goals, availability, and responsibilities. By
              considering both perspectives, we aim to support stronger and
              more sustainable staffing relationships.
            </p>

            <div className="about-story__statement">
              <HeartPulse size={26} />

              <p>
                The best staffing outcomes begin with clear expectations,
                thoughtful coordination, and respect for everyone involved.
              </p>
            </div>
          </div>

          <aside className="about-story__panel">
            <span className="about-story__panel-icon">
              <ClipboardCheck size={32} />
            </span>

            <span className="about-story__panel-eyebrow">
              What guides our work
            </span>

            <h3>
              Supporting continuity of care through dependable workforce
              relationships.
            </h3>

            <p>
              Staffing affects clinical teams, operations, patient
              experiences, resident well-being, and professional careers.
              That responsibility shapes how we communicate and coordinate.
            </p>

            <Link
              className="button button--white"
              to="/contact"
            >
              Start a conversation
              <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            title="Principles that shape every TrueCare relationship"
            text="Our values define how we communicate, make decisions, and support healthcare organizations and professionals."
            centered
          />

          <div className="about-values__grid">
            {values.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="about-value-card"
                key={title}
              >
                <span className="about-value-card__icon">
                  <Icon size={25} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-approach">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title="A clear path from conversation to connection"
            text="TrueCare uses a straightforward process designed to reduce uncertainty and keep each participant informed."
            centered
          />

          <div className="about-approach__grid">
            {approachSteps.map((step) => (
              <article
                className="about-approach-card"
                key={step.number}
              >
                <span className="about-approach-card__number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-commitment">
        <div className="container about-commitment__grid">
          <div>
            <SectionHeading
              eyebrow="Our commitment"
              title="Professional service grounded in trust"
              text="We aim to make every interaction clear, respectful, and useful, whether someone is requesting staff, exploring employment, or seeking information."
            />

            <div className="about-commitment__list">
              {commitments.map((commitment) => (
                <span key={commitment}>
                  <CheckCircle2 size={20} />
                  {commitment}
                </span>
              ))}
            </div>
          </div>

          <aside className="about-commitment__card">
            <span className="about-commitment__card-icon">
              <ShieldCheck size={34} />
            </span>

            <span className="about-commitment__card-eyebrow">
              TrueCare standard
            </span>

            <h3>
              People deserve clarity, dignity, and professionalism at every
              stage of the staffing journey.
            </h3>

            <p>
              We work to create an experience in which healthcare
              organizations and professionals understand what is needed,
              what comes next, and who to contact.
            </p>
          </aside>
        </div>
      </section>

      <section className="about-pathways">
        <div className="container">
          <SectionHeading
            eyebrow="How we can help"
            title="Choose the path that fits your needs"
            text="TrueCare supports healthcare organizations seeking workforce assistance and professionals exploring their next opportunity."
            centered
          />

          <div className="about-pathways__grid">
            <article className="about-pathway-card">
              <span className="about-pathway-card__icon">
                <Building2 size={30} />
              </span>

              <span className="about-pathway-card__eyebrow">
                For healthcare organizations
              </span>

              <h3>
                Find staffing support for changing workforce demands.
              </h3>

              <p>
                Share your care setting, role requirements, schedule, and
                timeline with our staffing team.
              </p>

              <Link
                className="button button--primary"
                to="/facilities"
              >
                Explore facility solutions
                <ArrowRight size={18} />
              </Link>
            </article>

            <article className="about-pathway-card about-pathway-card--teal">
              <span className="about-pathway-card__icon">
                <Stethoscope size={30} />
              </span>

              <span className="about-pathway-card__eyebrow">
                For healthcare professionals
              </span>

              <h3>
                Explore roles aligned with your experience and goals.
              </h3>

              <p>
                Learn about the TrueCare application process, professional
                expectations, and available opportunities.
              </p>

              <Link
                className="button button--primary"
                to="/professionals"
              >
                Explore professional opportunities
                <ArrowRight size={18} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="about-final-cta">
        <div
          className="about-final-cta__shape"
          aria-hidden="true"
        />

        <div className="container about-final-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">
              Connect with TrueCare
            </span>

            <h2>
              Let us learn more about what you need.
            </h2>

            <p>
              Start a conversation with our team about staffing support,
              professional opportunities, or general questions.
            </p>
          </div>

          <div className="about-final-cta__actions">
            <Link
              className="button button--white"
              to="/contact"
            >
              Contact TrueCare
            </Link>

            <Link
              className="button button--outline-light"
              to="/jobs"
            >
              View open positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
