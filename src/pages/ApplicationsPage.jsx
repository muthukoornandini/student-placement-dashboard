import { Link } from "react-router-dom";
import useApplications from "../hooks/useApplications";

function ApplicationsPage() {
  const {
    applications,
    updateApplicationStatus,
  } = useApplications();

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) => application.status === "Under Review"
  ).length;

  const interviewScheduled = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  ).length;

  const selected = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  const handleStatusChange = (id, status) => {
    updateApplicationStatus(id, status);
  };

  return (
    <div className="applications-page">
      <div className="page-header">
        <div>
          <p className="dashboard-label">
            APPLICATION TRACKING
          </p>

          <h1>My Applications</h1>

          <p>
            Track all your placement applications and
            monitor their current status.
          </p>
        </div>

        <Link
          to="/jobs"
          className="browse-jobs-button"
        >
          + Browse Jobs
        </Link>
      </div>

      <div className="application-summary">
        <div className="application-summary-card">
          <span>Total Applications</span>
          <strong>{totalApplications}</strong>
        </div>

        <div className="application-summary-card">
          <span>Under Review</span>
          <strong>{underReview}</strong>
        </div>

        <div className="application-summary-card">
          <span>Interviews</span>
          <strong>{interviewScheduled}</strong>
        </div>

        <div className="application-summary-card">
          <span>Selected</span>
          <strong>{selected}</strong>
        </div>
      </div>

      <div className="applications-section">
        <div className="section-heading">
          <div>
            <h2>Application History</h2>

            <p>
              Review and manage your submitted placement
              applications.
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="empty-applications">
            <div className="empty-icon">
              📄
            </div>

            <h2>No Applications Yet</h2>

            <p>
              You haven't applied for any placement
              opportunities yet. Explore available jobs
              and submit your first application.
            </p>

            <Link
              to="/jobs"
              className="browse-jobs-button"
            >
              Explore Job Openings
            </Link>
          </div>
        ) : (
          <div className="applications-list">
            {applications.map((application) => (
              <div
                className="application-card"
                key={application.id}
              >
                <div className="application-company">
                  <div className="company-logo-large">
                    {application.company.charAt(0)}
                  </div>

                  <div>
                    <h3>
                      {application.company}
                    </h3>

                    <p>
                      {application.role}
                    </p>
                  </div>
                </div>

                <div className="application-details">
                  <div>
                    <span>Location</span>

                    <strong>
                      {application.location}
                    </strong>
                  </div>

                  <div>
                    <span>Package</span>

                    <strong>
                      {application.packageAmount}
                    </strong>
                  </div>

                  <div>
                    <span>Applied On</span>

                    <strong>
                      {application.appliedDate}
                    </strong>
                  </div>
                </div>

                <div className="application-interview">
                  <span>Interview</span>

                  <strong>
                    {application.interviewDate ||
                      "Not Scheduled"}
                  </strong>
                </div>

                <div className="application-status-section">
                  <span className="application-status-label">
                    Current Status
                  </span>

                  <select
                    className="application-status-select"
                    value={application.status}
                    onChange={(event) =>
                      handleStatusChange(
                        application.id,
                        event.target.value
                      )
                    }
                  >
                    <option value="Under Review">
                      Under Review
                    </option>

                    <option value="Interview Scheduled">
                      Interview Scheduled
                    </option>

                    <option value="Selected">
                      Selected
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplicationsPage;