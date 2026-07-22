import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
  useParams,
} from "react-router-dom";

import {
  getPublishedJob,
  submitJobApplication,
} from "../services/publicWebsiteService";

const PROFESSIONAL_ROLES = [
  "Registered Nurse (RN)",
  "Licensed Practical Nurse (LPN)",
  "Certified Nursing Assistant (CNA)",
  "Certified Medication Aide (CMA)",
  "Medication Aide",
  "Behavioral Health Technician",
  "Medical Assistant",
  "Phlebotomist",
  "Respiratory Therapist",
  "Physical Therapist",
  "Occupational Therapist",
  "Speech Therapist",
  "Social Worker",
  "Housekeeping",
  "Dietary",
  "Administrative",
  "Other",
];

const EMPLOYMENT_PREFERENCES = [
  "Per Diem",
  "Contract",
  "Per Diem + Contract",
  "Full-Time",
  "Part-Time",
  "PRN",
  "Weekend Only",
  "Any Available",
];

const EXPERIENCE_RANGES = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

const SHIFT_PREFERENCES = [
  "Days",
  "Evenings",
  "Nights",
  "Flexible",
];

function formatEmploymentType(value) {
  return String(value ?? "")
    .replace(/\s*\/\s*/g, " • ")
    .trim();
}

export default function ApplicationPage() {
  const {
    jobId,
  } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getPublishedJob(jobId)
      .then((record) => {
        if (active) {
          setJob(record);
        }
      })
      .catch((loadError) => {
        if (active) {
          setError(
            loadError?.message ||
              "Unable to load this application.",
          );
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [jobId]);

  async function submit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");

    setSubmitting(true);
    setError("");

    try {
      await submitJobApplication({
        job,
        resume:
          resume instanceof File &&
          resume.size > 0
            ? resume
            : null,
        formData: {
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          city: data.get("city"),
          state: data.get("state"),
          professionalRole:
            data.get("professionalRole"),
          employmentPreference:
            data.get("employmentPreference"),
          licenseNumber:
            data.get("licenseNumber"),
          experienceRange:
            data.get("experienceRange"),
          preferredShift:
            data.get("preferredShift"),
          availability:
            data.get("availability"),
        },
      });

      form.reset();
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (submissionError) {
      setError(
        submissionError?.message ||
          "Unable to submit your application.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <section className="section">
        <div className="container empty-state">
          <h2>Loading application…</h2>
        </div>
      </section>
    );
  }

  if (!job && !error) {
    return (
      <Navigate
        to="/jobs"
        replace
      />
    );
  }

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <span className="eyebrow eyebrow--light">
            Online application
          </span>

          <h1>
            Apply for{" "}
            {job?.title ??
              "the TrueCare professional network"}
          </h1>

          {job && (
            <p>
              {formatEmploymentType(job.type)}
            </p>
          )}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container application-wrap">
          {submitted ? (
            <div className="application-success">
              <h2>Application submitted</h2>

              <p>
                Thank you. TrueCare recruiting will review your
                qualifications, professional role, employment
                preference, and availability.
              </p>
            </div>
          ) : (
            <form
              className="application-form"
              onSubmit={submit}
            >
              <div className="form-section">
                <h2>Contact information</h2>

                <div className="form-grid">
                  <label>
                    First name
                    <input
                      required
                      name="firstName"
                      autoComplete="given-name"
                    />
                  </label>

                  <label>
                    Last name
                    <input
                      required
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </label>

                  <label>
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                    />
                  </label>

                  <label>
                    City
                    <input
                      required
                      name="city"
                      autoComplete="address-level2"
                    />
                  </label>

                  <label>
                    State
                    <input
                      required
                      name="state"
                      defaultValue="KS"
                      maxLength={2}
                      autoComplete="address-level1"
                    />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h2>Professional details</h2>

                <div className="form-grid">
                  <label>
                    Professional role
                    <select
                      name="professionalRole"
                      required
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select role
                      </option>

                      {PROFESSIONAL_ROLES.map((role) => (
                        <option
                          key={role}
                          value={role}
                        >
                          {role}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Employment preference
                    <select
                      name="employmentPreference"
                      required
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select preference
                      </option>

                      {EMPLOYMENT_PREFERENCES.map(
                        (preference) => (
                          <option
                            key={preference}
                            value={preference}
                          >
                            {preference}
                          </option>
                        ),
                      )}
                    </select>
                  </label>

                  <label>
                    License or certification number
                    <input
                      required
                      name="licenseNumber"
                      autoComplete="off"
                    />
                  </label>

                  <label>
                    Years of experience
                    <select
                      name="experienceRange"
                      required
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select experience
                      </option>

                      {EXPERIENCE_RANGES.map((range) => (
                        <option
                          key={range}
                          value={range}
                        >
                          {range}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Preferred shift
                    <select
                      name="preferredShift"
                      required
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select shift
                      </option>

                      {SHIFT_PREFERENCES.map((shift) => (
                        <option
                          key={shift}
                          value={shift}
                        >
                          {shift}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label>
                  Availability and additional information
                  <textarea
                    required
                    rows="5"
                    name="availability"
                    placeholder="Tell us when you are available to begin, the days or shifts you prefer, and any other relevant information."
                  />
                </label>
              </div>

              <div className="form-section">
                <h2>Résumé</h2>

                <label>
                  Upload résumé
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </label>

                <p className="form-note">
                  PDF, DOC, or DOCX. Maximum 10 MB.
                </p>
              </div>

              <label className="consent-row">
                <input
                  type="checkbox"
                  required
                />

                <span>
                  I certify that the information provided is
                  accurate and authorize TrueCare to contact me
                  about employment opportunities.
                </span>
              </label>

              {error && (
                <p
                  className="form-error"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                className="button button--primary"
                type="submit"
                disabled={submitting}
              >
                {submitting
                  ? "Submitting…"
                  : "Submit application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

