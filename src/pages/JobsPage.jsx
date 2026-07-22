import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Link,
} from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import {
  listPublishedJobs,
} from "../services/publicWebsiteService";

function formatEmploymentType(value) {
  return String(value ?? "")
    .replace(/\s*\/\s*/g, " • ")
    .replace(/\bFlexible\s*•\s*/i, "")
    .trim();
}

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    listPublishedJobs()
      .then((records) => {
        if (active) {
          setJobs(records);
        }
      })
      .catch((loadError) => {
        if (active) {
          setError(loadError.message);
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
  }, []);

  const filteredJobs = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return jobs;
    }

    return jobs.filter((job) =>
      [
        job.title,
        job.region,
        job.type,
        job.shift,
        job.summary,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [jobs, query]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">
            TrueCare careers
          </span>

          <h1>Find work that fits your life.</h1>

          <p>
            Explore flexible, per-diem, and contract healthcare
            opportunities with facilities throughout Kansas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Current opportunities"
            title="Join the TrueCare professional network"
            text="Review available roles and submit your application to join our healthcare staffing network."
          />

          <input
            className="job-search"
            placeholder="Search by role, shift, or employment type"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search current opportunities"
          />

          {error && (
            <p
              className="form-error"
              role="alert"
            >
              {error}
            </p>
          )}

          {loading ? (
            <div className="empty-state">
              <h2>Loading positions…</h2>
            </div>
          ) : (
            <div className="jobs-list">
              {filteredJobs.map((job) => (
                <article
                  className="job-card"
                  key={job.id}
                >
                  <div className="job-card__icon">
                    <BriefcaseBusiness />
                  </div>

                  <div className="job-card__content">
                    <h2>{job.title}</h2>

                    <div className="job-meta">
                      <span>
                        <Clock3 size={16} />
                        {formatEmploymentType(job.type)}
                      </span>
                    </div>

                    <p>{job.summary}</p>
                  </div>

                  <Link
                    className="button button--primary"
                    to={`/jobs/${job.id}`}
                  >
                    View job
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ))}

              {!filteredJobs.length && (
                <div className="empty-state">
                  <h2>No matching positions</h2>
                  <p>
                    Try a different professional role, shift, or
                    employment type.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

