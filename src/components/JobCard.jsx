import { useState } from "react";
import useApplications from "../hooks/useApplications";

function JobCard({
  company,
  role,
  location,
  packageAmount,
  type,
}) {
  const { applications, addApplication } = useApplications();

  const existingApplication = applications.find(
    (application) =>
      application.company === company &&
      application.role === role
  );

  const [applied, setApplied] = useState(
    Boolean(existingApplication)
  );

  const handleApply = () => {
    if (applied) {
      return;
    }

    const newApplication = {
      id: Date.now(),
      company,
      role,
      location,
      packageAmount,
      type,
      status: "Under Review",
      appliedDate: new Date().toLocaleDateString("en-IN"),
      interviewDate: "Not Scheduled",
    };

    addApplication(newApplication);
    setApplied(true);
  };

  return (
    <article className="professional-job-card">

      <div className="job-company-header">

        <div className="company-logo-large">
          {company.charAt(0)}
        </div>

        <div className="company-info">
          <h3>{company}</h3>

          <span>✓ Verified Placement Partner</span>
        </div>

        <button
          className="job-bookmark"
          type="button"
          aria-label={`Bookmark ${company} job`}
        >
          ☆
        </button>

      </div>

      <div className="job-main-info">

        <h2>{role}</h2>

        <div className="job-meta">

          <span>📍 {location}</span>

          <span>💼 {type}</span>

          <span>💰 {packageAmount}</span>

        </div>

      </div>

      <div className="job-skills">

        <span>Problem Solving</span>

        <span>Communication</span>

        <span>Technical Skills</span>

      </div>

      <div className="job-card-footer">

        <div className="job-deadline">

          <small>Application Deadline</small>

          <strong>October 15, 2026</strong>

        </div>

        <button
          type="button"
          className={applied ? "applied-button" : ""}
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "✓ Applied" : "Apply Now"}
        </button>

      </div>

    </article>
  );
}

export default JobCard;