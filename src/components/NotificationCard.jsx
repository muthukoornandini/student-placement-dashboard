function NotificationCard({ title, message, date }) {
  return (
    <div className="notification-card">
      <h3>{title}</h3>
      <p>{message}</p>
      <small>{date}</small>
    </div>
  );
}

export default NotificationCard;