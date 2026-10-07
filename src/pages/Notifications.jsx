import useApplications from "../hooks/useApplications";
import useAuth from "../hooks/useAuth";
import NotificationCard from "../components/NotificationCard";
import notificationsData from "../data/notifications";

function Notifications() {
  const { applications } = useApplications();
  const { student } = useAuth();

  const applicationNotifications = applications.map(
    (application, index) => ({
      id: `application-${application.id}`,
      title: "Application Submitted",
      message: `Your application for ${application.role} at ${application.company} has been submitted successfully.`,
      date: application.appliedDate || "Recently",
      type: "application",
      order: index + 10,
    })
  );

  const allNotifications = [
    ...notificationsData,
    ...applicationNotifications,
  ];

  return (
    <div className="notifications-page">

      {/* Page Header */}
      <div className="page-header">

        <div>
          <p className="dashboard-label">
            NOTIFICATION CENTER
          </p>

          <h1>Notifications</h1>

          <p>
            Stay updated with interviews, applications,
            company announcements and placement activities.
          </p>
        </div>

        <div className="jobs-count">

          <strong>
            {allNotifications.length}
          </strong>

          <span>
            Total Notifications
          </span>

        </div>

      </div>

      {/* Welcome Message */}
      <div className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h2>
              Hello, {student?.name || "Nandini"} 👋
            </h2>

            <p>
              Here are your latest placement updates.
            </p>
          </div>

        </div>

        {/* Notifications */}
        <div className="notifications-list">

          {allNotifications.map((notification) => (

            <NotificationCard
              key={notification.id}
              title={notification.title}
              message={notification.message}
              date={notification.date}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Notifications;