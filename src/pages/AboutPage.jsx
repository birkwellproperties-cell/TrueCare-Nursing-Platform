import SectionHeading from "../components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">About TrueCare</span>
          <h1>Staffing relationships built around real needs.</h1>
          <p>Our approach begins with listening, clear expectations, and responsive coordination.</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Our story"
            title="A comprehensive approach to healthcare staffing"
            text="TrueCare Nursing Services works with healthcare facilities to understand their workforce needs and identify professionals suited to each assignment. Our staffing coordinators focus on practical solutions for the changing demands of healthcare."
          />
          <div className="values-grid">
            {[
              ["Responsiveness", "We understand that staffing needs can change quickly."],
              ["Professionalism", "We promote clear communication and accountable service."],
              ["Compassion", "Healthcare is human work, and people remain central to our decisions."],
              ["Partnership", "We work to support both professionals and facility teams."],
            ].map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
