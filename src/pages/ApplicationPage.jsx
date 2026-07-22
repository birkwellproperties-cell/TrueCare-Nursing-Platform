import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getPublishedJob, submitJobApplication } from "../services/publicWebsiteService";

export default function ApplicationPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    getPublishedJob(jobId)
      .then((record) => active && setJob(record))
      .catch((loadError) => active && setError(loadError.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [jobId]);

  async function submit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      await submitJobApplication({
        job,
        resume: data.get("resume")?.size ? data.get("resume") : null,
        formData: {
          firstName: data.get("firstName"), lastName: data.get("lastName"), email: data.get("email"), phone: data.get("phone"),
          city: data.get("city"), state: data.get("state"), professionalRole: data.get("professionalRole"),
          licenseNumber: data.get("licenseNumber"), experienceRange: data.get("experienceRange"),
          preferredShift: data.get("preferredShift"), availability: data.get("availability"),
        },
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <section className="section"><div className="container empty-state"><h2>Loading application…</h2></div></section>;
  if (!job && !error) return <Navigate to="/jobs" replace />;

  return (
    <>
      <section className="page-hero page-hero--compact"><div className="container"><span className="eyebrow eyebrow--light">Online application</span><h1>Apply for {job?.title ?? "this position"}</h1>{job && <p>{job.location} · {job.type}</p>}</div></section>
      <section className="section section--tint"><div className="container application-wrap">
        {submitted ? <div className="application-success"><h2>Application submitted</h2><p>Thank you. TrueCare recruiting will review your qualifications and availability.</p></div> :
        <form className="application-form" onSubmit={submit}>
          <div className="form-section"><h2>Contact information</h2><div className="form-grid">
            <label>First name<input required name="firstName" autoComplete="given-name"/></label><label>Last name<input required name="lastName" autoComplete="family-name"/></label>
            <label>Email<input required type="email" name="email" autoComplete="email"/></label><label>Phone<input required name="phone" autoComplete="tel"/></label>
            <label>City<input required name="city" autoComplete="address-level2"/></label><label>State<input required name="state" defaultValue="KS" autoComplete="address-level1"/></label>
          </div></div>
          <div className="form-section"><h2>Professional details</h2><div className="form-grid">
            <label>Professional role<select name="professionalRole" required defaultValue=""><option value="" disabled>Select role</option><option>RN</option><option>LPN/LVN</option><option>CNA</option><option>CMA</option><option>Other</option></select></label>
            <label>License or certification number<input required name="licenseNumber"/></label>
            <label>Years of experience<select name="experienceRange" required defaultValue=""><option value="" disabled>Select experience</option><option>Less than 1 year</option><option>1–2 years</option><option>3–5 years</option><option>6–10 years</option><option>10+ years</option></select></label>
            <label>Preferred shift<select name="preferredShift" required defaultValue=""><option value="" disabled>Select shift</option><option>Days</option><option>Evenings</option><option>Nights</option><option>Flexible</option></select></label>
          </div><label>Availability and additional information<textarea required rows="5" name="availability"/></label></div>
          <div className="form-section"><h2>Résumé</h2><label>Upload résumé<input name="resume" type="file" accept=".pdf,.doc,.docx"/></label><p className="form-note">PDF, DOC, or DOCX. Maximum 10 MB.</p></div>
          <label className="consent-row"><input type="checkbox" required/> I certify that the information provided is accurate and authorize TrueCare to contact me about employment opportunities.</label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button--primary" type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Submit application"}</button>
        </form>}
      </div></section>
    </>
  );
}
