import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";

export default function FacilitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Healthcare facilities</span>
          <h1>Dependable staffing when care cannot wait.</h1>
          <p>Tell us what your team needs and a TrueCare coordinator will follow up.</p>
        </div>
      </section>
      <section className="section" id="solutions">
        <div className="container split split--form">
          <div>
            <SectionHeading
              eyebrow="Request staff"
              title="Start a staffing conversation"
              text="Use this secure intake preview for routine or urgent workforce needs. Production requests will enter the internal staffing queue."
            />
            <div className="info-panel">
              <h3>Staffing options</h3>
              <p>Per diem • Contract • Travel • Temporary • Direct hire</p>
              <h3>Common roles</h3>
              <p>RN • LPN/LVN • CNA • CMA • Additional healthcare professionals</p>
            </div>
          </div>
          <ContactForm type="facility" />
        </div>
      </section>
    </>
  );
}
