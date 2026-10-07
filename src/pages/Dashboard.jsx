import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import useApplications from "../hooks/useApplications";
import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { applications } = useApplications();
  const { student } = useAuth();

  const studentName = student?.name || "Nandini";

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) => application.status === "Under Review"
  ).length;

  const interviews = applications.filter(
    (application) =>
      application.interviewDate &&
      application.interviewDate !== "Not Scheduled"
  ).length;

  const selected = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  const companyStats = [
    { company: "TCS", applications: 24, selected: 18 },
    { company: "Infosys", applications: 20, selected: 15 },
    { company: "Accenture", applications: 18, selected: 13 },
    { company: "Wipro", applications: 16, selected: 11 },
    { company: "Zoho", applications: 12, selected: 9 },
  ];

  const placementTrends = [
    { month: "May", value: 42 },
    { month: "Jun", value: 58 },
    { month: "Jul", value: 51 },
    { month: "Aug", value: 72 },
    { month: "Sep", value: 84 },
    { month: "Oct", value: 91 },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">
            STUDENT DASHBOARD
          </p>

          <h1>
            Welcome back, {studentName} 👋
          </h1>

          <p className="dashboard-subtitle">
            Track your placement journey, applications,
            interviews and career opportunities.
          </p>
        </div>

        <div className="profile-completion">
          <div className="completion-text">
            <span>Profile Completion</span>
            <strong>85%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <small>
            Complete your profile to improve your placement
            visibility.
          </small>
        </div>
      </div>

      <div className="stats-container">
        <StatCard
          title="Jobs Applied"
          value={totalApplications}
          icon="💼"
        />

        <StatCard
          title="Under Review"
          value={underReview}
          icon="⏳"
        />

        <StatCard
          title="Interviews"
          value={interviews}
          icon="📅"
        />

        <StatCard
          title="Selected"
          value={selected}
          icon="🎓"
        />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Application Overview</h2>
              <p>
                Your current placement application status.
              </p>
            </div>
          </div>

          {totalApplications === 0 ? (
            <div className="empty-applications">
              <div className="empty-icon">📄</div>

              <h2>No applications yet</h2>

              <p>
                Start exploring job opportunities and apply
                for positions that match your skills.
              </p>

              <Link
                to="/jobs"
                className="browse-jobs-button"
              >
                Browse Job Openings
              </Link>
            </div>
          ) : (
            <div className="application-progress">
              <div className="progress-item">
                <div className="progress-info">
                  <span>Applied</span>
                  <strong>{totalApplications}</strong>
                </div>

                <div className="wide-progress">
                  <div
                    className="wide-progress-fill"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-info">
                  <span>Under Review</span>
                  <strong>{underReview}</strong>
                </div>

                <div className="wide-progress">
                  <div
                    className="wide-progress-fill review"
                    style={{
                      width:
                        totalApplications > 0
                          ? `${(underReview / totalApplications) * 100}%`
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-info">
                  <span>Interview Stage</span>
                  <strong>{interviews}</strong>
                </div>

                <div className="wide-progress">
                  <div
                    className="wide-progress-fill interview"
                    style={{
                      width:
                        totalApplications > 0
                          ? `${(interviews / totalApplications) * 100}%`
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-info">
                  <span>Selected</span>
                  <strong>{selected}</strong>
                </div>

                <div className="wide-progress">
                  <div
                    className="wide-progress-fill selected"
                    style={{
                      width:
                        totalApplications > 0
                          ? `${(selected / totalApplications) * 100}%`
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Upcoming Interviews</h2>
              <p>
                Your scheduled placement interviews.
              </p>
            </div>
          </div>

          <div className="interview-list">
            <div className="mini-interview">
              <div className="company-logo">T</div>

              <div className="interview-details">
                <strong>TCS</strong>
                <span>Graduate Trainee</span>
                <small>October 10 • 10:00 AM</small>
              </div>

              <span className="status scheduled">
                Scheduled
              </span>
            </div>

            <div className="mini-interview">
              <div className="company-logo">I</div>

              <div className="interview-details">
                <strong>Infosys</strong>
                <span>Systems Engineer</span>
                <small>October 14 • 2:00 PM</small>
              </div>

              <span className="status scheduled">
                Scheduled
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Placement Trends */}
      <div className="dashboard-panel analytics-panel">
        <div className="panel-header">
          <div>
            <h2>Placement Trends</h2>
            <p>
              Students placed during the current placement
              season.
            </p>
          </div>

          <span className="analytics-badge">
            2026 Placement Drive
          </span>
        </div>

        <div className="trend-chart">
          {placementTrends.map((item) => (
            <div className="trend-column" key={item.month}>
              <div className="trend-value">
                {item.value}
              </div>

              <div className="trend-bar-container">
                <div
                  className="trend-bar"
                  style={{
                    height: `${item.value}%`,
                  }}
                ></div>
              </div>

              <span>{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Company Statistics */}
      <div className="dashboard-panel analytics-panel">
        <div className="panel-header">
          <div>
            <h2>Company-wise Placement Statistics</h2>
            <p>
              Application and selection statistics by company.
            </p>
          </div>
        </div>

        <div className="company-stats-table">
          <div className="company-stats-row company-stats-header">
            <span>Company</span>
            <span>Applications</span>
            <span>Selected</span>
            <span>Selection Rate</span>
          </div>

          {companyStats.map((company) => {
            const rate = Math.round(
              (company.selected / company.applications) * 100
            );

            return (
              <div
                className="company-stats-row"
                key={company.company}
              >
                <strong>{company.company}</strong>

                <span>{company.applications}</span>

                <span>{company.selected}</span>

                <div className="selection-rate">
                  <div className="rate-bar">
                    <div
                      className="rate-fill"
                      style={{ width: `${rate}%` }}
                    ></div>
                  </div>

                  <strong>{rate}%</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deadlines + Overall Statistics */}
      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Upcoming Deadlines</h2>
              <p>
                Don't miss important application deadlines.
              </p>
            </div>
          </div>

          <div className="deadline-list">
            <div className="deadline-item">
              <div className="deadline-date">
                <strong>10</strong>
                <span>OCT</span>
              </div>

              <div>
                <strong>TCS</strong>
                <p>Graduate Trainee</p>
              </div>

              <span className="deadline-status">
                3 days left
              </span>
            </div>

            <div className="deadline-item">
              <div className="deadline-date">
                <strong>12</strong>
                <span>OCT</span>
              </div>

              <div>
                <strong>Infosys</strong>
                <p>Systems Engineer</p>
              </div>

              <span className="deadline-status">
                5 days left
              </span>
            </div>

            <div className="deadline-item">
              <div className="deadline-date">
                <strong>15</strong>
                <span>OCT</span>
              </div>

              <div>
                <strong>Accenture</strong>
                <p>Associate Software Engineer</p>
              </div>

              <span className="deadline-status">
                8 days left
              </span>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Placement Statistics</h2>
              <p>
                Current placement drive performance.
              </p>
            </div>
          </div>

          <div className="placement-stats">
            <div className="placement-stat">
              <span>Total Companies</span>
              <strong>48</strong>
            </div>

            <div className="placement-stat">
              <span>Open Positions</span>
              <strong>126</strong>
            </div>

            <div className="placement-stat">
              <span>Students Placed</span>
              <strong>84</strong>
            </div>

            <div className="placement-stat">
              <span>Placement Rate</span>
              <strong>82%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;