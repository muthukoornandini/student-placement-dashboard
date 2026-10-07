import { Link } from "react-router-dom";
import useApplications from "../hooks/useApplications";

function Interviews() {
  const { applications } = useApplications();

  const scheduledApplications = applications.filter(
    (application) =>
      application.interviewDate &&
      application.interviewDate !== "Not Scheduled"
  );

  return (
    <div className="interviews-page">

      {/* Page Header */}
      <div className="page-header">

        <div>
          <p className="dashboard-label">
            INTERVIEW MANAGEMENT
          </p>

          <h1>Interview Schedule</h1>

          <p>
            View and manage your upcoming placement
            interviews in one place.
          </p>
        </div>

        <div className="jobs-count">
          <strong>
            {scheduledApplications.length}
          </strong>

          <span>
            Scheduled Interviews
          </span>
        </div>

      </div>

      {/* Interview Content */}
      {scheduledApplications.length === 0 ? (

        <div className="applications-section">

          <div className="empty-applications">

            <div className="empty-icon">
              📅
            </div>

            <h2>No Interviews Scheduled</h2>

            <p>
              Your scheduled interviews will appear here
              once a company confirms your interview.
            </p>

            <Link
              to="/applications"
              className="browse-jobs-button"
            >
              View My Applications
            </Link>

          </div>

        </div>

      ) : (

        <div className="interview-page-list">

          {scheduledApplications.map((application) => (

            <div
              className="professional-interview-card"
              key={application.id}
            >

              {/* Company */}
              <div className="interview-company-section">

                <div className="company-logo-large">
                  {application.company.charAt(0)}
                </div>

                <div>

                  <h2>
                    {application.company}
                  </h2>

                  <p>
                    {application.role}
                  </p>

                  <span className="verified-label">
                    ✓ Verified Placement Partner
                  </span>

                </div>

              </div>

              {/* Interview Details */}
              <div className="interview-info">

                <div className="interview-info-item">

                  <span>
                    Interview Date
                  </span>

                  <strong>
                    {application.interviewDate}
                  </strong>

                </div>

                <div className="interview-info-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    {application.location}
                  </strong>

                </div>

                <div className="interview-info-item">

                  <span>
                    Interview Mode
                  </span>

                  <strong>
                    Online
                  </strong>

                </div>

                <div className="interview-info-item">

                  <span>
                    Position
                  </span>

                  <strong>
                    {application.role}
                  </strong>

                </div>

              </div>

              {/* Footer */}
              <div className="interview-card-footer">

                <span className="interview-status">
                  Interview Scheduled
                </span>

                <button
                  type="button"
                  className="interview-details-button"
                  onClick={() => {
                    alert(
                      `Interview details for ${application.company}`
                    );
                  }}
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Interviews;