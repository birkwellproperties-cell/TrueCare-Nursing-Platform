import { useState } from "react";
import {
  submitContactInquiry,
  submitFacilityRequest,
} from "../services/publicWebsiteService";

export default function ContactForm({ type = "general" }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);

    try {
      if (type === "facility") {
        await submitFacilityRequest({
          contact_name: data.get("name")?.trim(),
          phone: data.get("phone")?.trim(),
          email: data.get("email")?.trim().toLowerCase(),
          facility_name: data.get("organization")?.trim(),
          position_needed: data.get("position"),
          start_date: data.get("startDate") || null,
          message: data.get("message")?.trim(),
          source: "website",
        });
      } else {
        await submitContactInquiry({
          full_name: data.get("name")?.trim(),
          phone: data.get("phone")?.trim(),
          email: data.get("email")?.trim().toLowerCase(),
          subject: data.get("organization")?.trim(),
          message: data.get("message")?.trim(),
          source: "website",
        });
      }
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <strong>Thank you.</strong>
        <p>
          {type === "facility"
            ? "Your staffing request has been submitted. A TrueCare coordinator will follow up."
            : "Your message has been submitted to TrueCare Nursing Services."}
        </p>
        <button className="button button--secondary" onClick={() => setSubmitted(false)}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Phone
          <input name="phone" required autoComplete="tel" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          {type === "facility" ? "Facility or organization" : "Reason for contacting"}
          <input name="organization" required />
        </label>
        {type === "facility" && (
          <>
            <label>
              Position needed
              <select name="position" required defaultValue="">
                <option value="" disabled>Select a role</option>
                <option>Registered Nurse (RN)</option>
                <option>Licensed Practical Nurse (LPN/LVN)</option>
                <option>Certified Nurse Aide (CNA)</option>
                <option>Certified Medication Aide (CMA)</option>
                <option>Other healthcare professional</option>
              </select>
            </label>
            <label>
              Start date
              <input name="startDate" type="date" />
            </label>
          </>
        )}
      </div>
      <label>
        How can we help?
        <textarea name="message" rows="5" required />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button--primary" type="submit" disabled={submitting}>
        {submitting
          ? "Submitting…"
          : type === "facility"
            ? "Submit staffing request"
            : "Send message"}
      </button>
      <p className="form-note">
        Do not submit patient information or protected health information through
        this public form.
      </p>
    </form>
  );
}
