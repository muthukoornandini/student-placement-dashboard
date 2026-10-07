
import { createContext, useState } from "react";

export const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Interview Scheduled",
      message: "Your interview with TCS is scheduled for tomorrow.",
      date: "Today",
    },
    {
      id: 2,
      title: "New Job Opening",
      message: "Infosys has posted a new placement opportunity.",
      date: "Yesterday",
    },
  ]);

  const addNotification = (notification) => {
    setNotifications((previousNotifications) => [
      ...previousNotifications,
      notification,
    ]);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;