import { ExternalLink, FileText } from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const resources = [
  "Employee timesheet",
  "Employee handbook",
  "Training and in-service materials",
  "Benefits documents",
  "Retirement resources",
  "Paystub and employee portal",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Employee resources</span>
          <h1>Important documents in one organized place.</h1>
          <p>The production resource center will provide controlled access to current forms, policies, and portals.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Resource center"
            title="Employee forms, training, and portals"
          />
          <div className="resource-list">
            {resources.map((resource) => (
              <button type="button" key={resource}>
                <span><FileText /> {resource}</span>
                <ExternalLink size={18} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
