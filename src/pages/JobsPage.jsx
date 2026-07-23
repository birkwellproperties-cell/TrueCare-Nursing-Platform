import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  Search,
  Sparkles,
  Stethoscope,
  Users,
  X,
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

function getUniqueValues(jobs, key) {
  return Array.from(
    new Set(
      jobs
        .map((job) => job[key])
        .filter(Boolean)
        .map((value) => String(value).trim()),
    ),
  ).sort((a, b) => a.localeCompare(b));
}

const careerBenefits = [
  {
    icon: Clock3,
    title: "Flexible opportunities",
    text: "Explore assignments that can support different schedules, availability, and career goals.",
  },
  {
    icon: HeartHandshake,
    title: "Recruiter support",
    text: "Receive communication and guidance throughout the application and placement process.",
  },
  {
    icon: BadgeCheck,
    title: "Professional network",
    text: "Join a growing network of healthcare professionals serving organizations throughout Kansas.",
  },
  {
    icon: Stethoscope,
    title: "Meaningful care settings",
    text: "Find opportunities where your experience can support patients, residents, and clinical teams.",
  },
];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [region, setRegion] = useState("");
  const [shift, setShift] = useState("");
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

  const employmentTypes = useMemo(
    () => getUniqueValues(jobs, "type"),
    [jobs],
  );

  const regions = useMemo(
    () => getUniqueValues(jobs, "region"),
    [jobs],
  );

  const shifts = useMemo(
    () => getUniqueValues(jobs, "shift"),
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const searchableContent = [
        job.title,
        job.location,
        job.region,
        job.type,
        job.shift,
        job.summary,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery ||
        searchableContent.includes(normalizedQuery);

      const matchesType =
        !employmentType ||
        job.type === employmentType;

      const matchesRegion =
        !region ||
        job.region === region;

      const matchesShift =
        !shift ||
        job.shift === shift;

      return (
        matchesQuery &&
        matchesType &&
        matchesRegion &&
        matchesShift
      );
    });
  }, [
    jobs,
    query,
    employmentType,
    region,
    shift,
  ]);

  const featuredJobs = useMemo(
    () => jobs.filter((job) => job.featured),
    [jobs],
  );

  const hasActiveFilters =
    Boolean(query.trim()) ||
    Boolean(employmentType) ||
    Boolean(region) ||
    Boolean(shift);

  function clearFilters() {
    setQuery("");
    setEmploymentType("");
    setRegion("");
    setShift("");
  }

  return (
    <>
      <section className="jobs-hero">
        <div
          className="jobs-hero__shape jobs-hero__shape--pink"
          aria-hidden="true"
        />

        <div
          className="jobs-hero__shape jobs-hero__shape--teal"
          aria-hidden="true"
        />

        <div className="container jobs-hero__grid">
          <div className="jobs-hero__content">
            <span className="eyebrow">
              TrueCare careers
            </span>

            <h1>
              Find healthcare work that
              <span>fits your life.</span>
            </h1>

            <p>
              Explore flexible, per-diem, contract, and professional
              healthcare opportunities with organizations throughout
              Kansas.
            </p>

            <div className="jobs-hero__actions">
              <a
                className="button button--primary"
                href="#current-opportunities"
              >
                Search opportunities
                <ArrowRight size={18} />
              </a>

              <Link
                className="button button--secondary"
                to="/professionals"
              >
                Why join TrueCare
              </Link>
            </div>

            <div className="jobs-hero__trust">
              <span>
                <CheckCircle2 size={18} />
                Flexible career options
              </span>

              <span>
                <CheckCircle2 size={18} />
                Recruiter support
              </span>

              <span>
                <CheckCircle2 size={18} />
                Streamlined application
              </span>
            </div>
          </div>

          <div className="jobs-hero__visual">
            <div className="jobs-career-card">
              <div className="jobs-career-card__top">
                <span className="jobs-career-card__icon">
                  <BriefcaseBusiness size={35} />
                </span>

                <div>
                  <span className="jobs-career-card__eyebrow">
                    TrueCare opportunity network
                  </span>

                  <h2>
                    Build a healthcare career around your goals.
                  </h2>
                </div>
              </div>

              <div className="jobs-career-card__items">
                <article>
                  <span>
                    <Clock3 size={21} />
                  </span>

                  <div>
                    <strong>Flexible scheduling</strong>
                    <small>
                      Explore assignments aligned with your availability
                    </small>
                  </div>
                </article>

                <article>
                  <span>
                    <Users size={21} />
                  </span>

                  <div>
                    <strong>Professional support</strong>
                    <small>
                      Guidance from application through placement
                    </small>
                  </div>
                </article>

                <article>
                  <span>
                    <MapPin size={21} />
                  </span>

                  <div>
                    <strong>Kansas opportunities</strong>
                    <small>
                      Roles across healthcare and care communities
                    </small>
                  </div>
                </article>
              </div>
            </div>

            <div className="jobs-floating-badge jobs-floating-badge--top">
              <Sparkles size={20} />
              <span>
                <strong>Featured roles</strong>
                <small>
                  {featuredJobs.length || jobs.length}
                  {" "}
                  opportunity
                  {(featuredJobs.length || jobs.length) === 1
                    ? ""
                    : "ies"}
                </small>
              </span>
            </div>

            <div className="jobs-floating-badge jobs-floating-badge--bottom">
              <BadgeCheck size={20} />
              <span>
                <strong>Simple application</strong>
                <small>Apply online with TrueCare</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section jobs-opportunities"
        id="current-opportunities"
      >
        <div className="container">
          <div className="jobs-opportunities__heading">
            <SectionHeading
              eyebrow="Current opportunities"
              title="Explore open healthcare positions"
              text="Search available roles by position, location, employment type, or shift and begin your application online."
            />

            {!loading && (
              <div className="jobs-opportunities__count">
                <strong>{filteredJobs.length}</strong>
                <span>
                  {filteredJobs.length === 1
                    ? "position available"
                    : "positions available"}
                </span>
              </div>
            )}
          </div>

          <div className="jobs-filter-panel">
            <div className="jobs-search-field">
              <Search
                size={20}
                aria-hidden="true"
              />

              <input
                className="job-search"
                placeholder="Search by role, location, shift, or employment type"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search current opportunities"
              />

              {query && (
                <button
                  type="button"
                  className="jobs-search-field__clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear job search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="jobs-filter-panel__selects">
              <label>
                <span>Employment type</span>

                <select
                  value={employmentType}
                  onChange={(event) =>
                    setEmploymentType(event.target.value)
                  }
                >
                  <option value="">All types</option>

                  {employmentTypes.map((value) => (
                    <option
                      value={value}
                      key={value}
                    >
                      {formatEmploymentType(value)}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Region</span>

                <select
                  value={region}
                  onChange={(event) =>
                    setRegion(event.target.value)
                  }
                >
                  <option value="">All regions</option>

                  {regions.map((value) => (
                    <option
                      value={value}
                      key={value}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Shift</span>

                <select
                  value={shift}
                  onChange={(event) =>
                    setShift(event.target.value)
                  }
                >
                  <option value="">All shifts</option>

                  {shifts.map((value) => (
                    <option
                      value={value}
                      key={value}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                className="jobs-clear-filters"
                onClick={clearFilters}
              >
                <X size={17} />
                Clear filters
              </button>
            )}
          </div>

          {error && (
            <p
              className="form-error"
              role="alert"
            >
              {error}
            </p>
          )}

          {loading ? (
            <div className="jobs-loading-state">
              <span className="jobs-loading-state__icon">
                <BriefcaseBusiness size={31} />
              </span>

              <h2>Loading current positions</h2>

              <p>
                Please wait while we retrieve available TrueCare
                opportunities.
              </p>
            </div>
          ) : (
            <div className="jobs-list jobs-list--modern">
              {filteredJobs.map((job) => (
                <article
                  className={`job-card job-card--modern${
                    job.featured
                      ? " job-card--featured"
                      : ""
                  }`}
                  key={job.id}
                >
                  <div className="job-card__icon">
                    <BriefcaseBusiness size={25} />
                  </div>

                  <div className="job-card__content">
                    <div className="job-card__heading">
                      <div>
                        {job.featured && (
                          <span className="job-card__featured-label">
                            <Sparkles size={14} />
                            Featured opportunity
                          </span>
                        )}

                        <h2>{job.title}</h2>
                      </div>

                      <span className="job-card__status">
                        Open
                      </span>
                    </div>

                    <div className="job-meta">
                      {job.location && (
                        <span>
                          <MapPin size={16} />
                          {job.location}
                        </span>
                      )}

                      {job.type && (
                        <span>
                          <Clock3 size={16} />
                          {formatEmploymentType(job.type)}
                        </span>
                      )}

                      {job.shift && (
                        <span>
                          <Stethoscope size={16} />
                          {job.shift}
                        </span>
                      )}
                    </div>

                    <p>{job.summary}</p>
                  </div>

                  <div className="job-card__actions">
                    <Link
                      className="button button--primary"
                      to={`/jobs/${job.id}`}
                    >
                      View job
                      <ArrowRight size={17} />
                    </Link>

                    <Link
                      className="job-card__quick-apply"
                      to={`/apply/${job.id}`}
                    >
                      Apply now
                    </Link>
                  </div>
                </article>
              ))}

              {!filteredJobs.length && (
                <div className="jobs-empty-state">
                  <span className="jobs-empty-state__icon">
                    <Search size={30} />
                  </span>

                  <h2>No matching positions</h2>

                  <p>
                    Try changing your keyword, region, shift, or
                    employment type to view more opportunities.
                  </p>

                  {hasActiveFilters && (
                    <button
                      className="button button--secondary"
                      type="button"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section jobs-benefits">
        <div className="container">
          <SectionHeading
            eyebrow="Why professionals choose TrueCare"
            title="Support for your next healthcare opportunity"
            text="TrueCare helps healthcare professionals explore assignments, complete applications, and stay informed throughout the placement process."
            centered
          />

          <div className="jobs-benefits__grid">
            {careerBenefits.map(({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                className="jobs-benefit-card"
                key={title}
              >
                <span>
                  <Icon size={25} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jobs-network-cta">
        <div
          className="jobs-network-cta__shape"
          aria-hidden="true"
        />

        <div className="container jobs-network-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">
              TrueCare professional network
            </span>

            <h2>
              Your next healthcare opportunity may start here.
            </h2>

            <p>
              Review current openings or learn more about joining the
              TrueCare professional network.
            </p>
          </div>

          <div className="jobs-network-cta__actions">
            <a
              className="button button--white"
              href="#current-opportunities"
            >
              View open positions
            </a>

            <Link
              className="button button--outline-light"
              to="/professionals"
            >
              Explore professional benefits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
