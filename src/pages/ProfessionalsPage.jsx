import { BadgeDollarSign, CalendarDays, ClipboardCheck, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";

export default function ProfessionalsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Healthcare professionals</span>
          <h1>Your skills. Your schedule. Meaningful care.</h1>
          <p>Join a responsive staffing team that values qualified professionals and clear communication.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why TrueCare"
            title="Professional opportunities with flexibility and support"
            centered
          />
          <div className="card-grid card-grid--four">
            {[
              [CalendarDays, "Flexible scheduling", "Choose opportunities aligned with your availability and goals."],
              [BadgeDollarSign, "Competitive opportunities", "Access a range of per-diem and contract assignments."],
              [ClipboardCheck, "Clear onboarding", "Move through application and credential review with defined steps."],
              [HeartHandshake, "Responsive coordination", "Work with a team focused on communication before and during assignments."],
            ].map(([Icon, title, text]) => (
              <article className="service-card" key={title}>
                <span className="icon-box"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="center-actions">
            <Link className="button button--primary" to="/jobs">View open positions</Link>
            <Link className="button button--secondary" to="/contact">Contact recruiting</Link>
          </div>
        </div>
      </section>
    </>
  );
}

