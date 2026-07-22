import { ArrowLeft, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPublishedJob } from "../services/publicWebsiteService";

export default function JobDetailPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    getPublishedJob(jobId)
      .then((record) => active && setJob(record))
      .catch((loadError) => active && setError(loadError.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [jobId]);

  if (loading) return <section className="section"><div className="container empty-state"><h2>Loading position…</h2></div></section>;
  if (error) return <section className="section"><div className="container"><p className="form-error">{error}</p></div></section>;
  if (!job) return <Navigate to="/jobs" replace />;

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <Link className="back-link" to="/jobs"><ArrowLeft size={17}/> Back to jobs</Link>
          <span className="eyebrow eyebrow--light">Current opportunity</span>
          <h1>{job.title}</h1>
          <div className="job-detail-meta">
            <span><MapPin size={17}/>{job.location}</span>
            <span><Clock3 size={17}/>{job.type}</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container job-detail-layout">
          <article className="job-detail-copy">
            <h2>Position overview</h2><p>{job.description}</p>
            <h2>Responsibilities</h2><ul>{job.responsibilities.map((item)=><li key={item}><CheckCircle2 size={19}/>{item}</li>)}</ul>
            <h2>Requirements</h2><ul>{job.requirements.map((item)=><li key={item}><CheckCircle2 size={19}/>{item}</li>)}</ul>
          </article>
          <aside className="apply-panel">
            <span className="eyebrow">Apply with TrueCare</span><h2>Interested in this opportunity?</h2>
            <p>Submit your information and recruiting will review your qualifications and availability.</p>
            <Link className="button button--primary" to={`/apply/${job.id}`}>Start application</Link>
            <Link className="button button--secondary" to="/contact">Ask a question</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
